import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PracticeClient from "@/components/dashboard/PracticeClient";
import { PlanType } from "../../../../generated/prisma/enums";

export const metadata = {
  title: "Mashq | Evalora",
};

export default async function PracticePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Get user from DB
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      subscription: true,
      submissions: {
        select: {
          testId: true,
          status: true,
          rawScore: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/sign-up");
  }

  // Get all published tests
  const tests = await prisma.test.findMany({
    where: {
      isPublished: true,
    },
    include: {
      _count: {
        select: { questions: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Calculate some derived state for each test
  const formattedTests = tests.map((test) => {
    const userSubmissions = user.submissions.filter((s) => s.testId === test.id);
    const attempts = userSubmissions.length;
    
    // Simplistic check for completion
    const isCompleted = userSubmissions.some((s) => s.status === "COMPLETED");
    
    // Find the highest score if any
    const highestScore = userSubmissions.length > 0 
      ? Math.max(...userSubmissions.map(s => s.rawScore))
      : 0;

    return {
      id: test.id,
      title: test.title,
      description: test.description,
      skill: test.skill,
      level: test.level,
      timeLimitMinutes: test.timeLimitMinutes,
      isPremium: test.isPremium,
      questionsCount: test._count.questions,
      createdAt: test.createdAt.toISOString(),
      
      // User specific state
      attempts,
      isCompleted,
      highestScore,
    };
  });

  // Determine user's active plan
  const activePlan = user.subscription?.isActive ? user.subscription.plan : PlanType.FREE;

  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mashq (Practice)</h1>
        <p className="text-slate-500 mt-1">CEFR darajangiz bo'yicha turli ko'nikmalarni mashq qiling.</p>
      </div>

      <PracticeClient tests={formattedTests} userPlan={activePlan} />
    </div>
  );
}
