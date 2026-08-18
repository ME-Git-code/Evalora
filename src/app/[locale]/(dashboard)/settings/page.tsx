import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SettingsClient from "@/components/dashboard/SettingsClient";
import { PlanType } from "../../../../../generated/prisma/enums";

export const metadata = {
  title: "Sozlamalar | Evalora",
};

export default async function SettingsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      profile: true,
      subscription: true,
      submissions: {
        select: {
          id: true,
          timeSpentSeconds: true,
          status: true,
        },
      },
    },
  });

  if (!user) redirect("/sign-up");

  // Calculate metrics
  const completedTestsCount = user.submissions.filter((s) => s.status === "COMPLETED").length;
  const totalTimeSeconds = user.submissions.reduce((acc, sub) => acc + sub.timeSpentSeconds, 0);
  const totalTimeHours = Math.floor(totalTimeSeconds / 3600);
  const xp = user.profile ? Math.round(user.profile.overallScore) : 0;
  
  const activePlan = user.subscription?.isActive ? user.subscription.plan : PlanType.FREE;
  const endDate = user.subscription?.endDate ? user.subscription.endDate.toISOString() : null;

  const userData = {
    customId: user.customId,
    fullName: user.fullName || "Foydalanuvchi",
    email: user.email,
    avatarUrl: user.avatarUrl,
    phone: user.phone || "",
    coins: user.coins,
    plan: activePlan,
    planEndDate: endDate,
    freeAiCredits: user.subscription?.freeAiCredits ?? 2,
    metrics: {
      tests: completedTestsCount,
      timeHours: totalTimeHours,
      xp: xp,
    },
  };

  return <SettingsClient user={userData} />;
}
