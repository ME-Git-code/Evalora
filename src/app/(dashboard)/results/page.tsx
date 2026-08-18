import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResultsClient from "@/components/dashboard/ResultsClient";
import { PlanType } from "../../../../generated/prisma/enums";

export const metadata = {
  title: "Natijalarim | Evalora",
};

export default async function ResultsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      profile: true,
      subscription: true,
      submissions: {
        include: {
          test: {
            select: {
              id: true,
              title: true,
              skill: true,
              level: true,
            },
          },
          answers: {
            include: {
              question: {
                select: {
                  id: true,
                  questionText: true,
                  options: true,
                  correctOption: true,
                  explanation: true,
                },
              },
            },
          },
          diagnosticReport: true,
        },
        orderBy: {
          completedAt: "desc",
        },
      },
    },
  });

  if (!user) {
    redirect("/sign-up");
  }

  const activePlan = user.subscription?.isActive
    ? user.subscription.plan
    : PlanType.FREE;

  // Serialize submissions for the client
  const serializedSubmissions = user.submissions.map((sub) => ({
    id: sub.id,
    testId: sub.testId,
    testTitle: sub.test.title,
    testSkill: sub.test.skill,
    testLevel: sub.test.level,
    status: sub.status,
    rawScore: sub.rawScore,
    scaledScore: sub.scaledScore,
    achievedLevel: sub.achievedLevel,
    timeSpentSeconds: sub.timeSpentSeconds,
    completedAt: sub.completedAt.toISOString(),
    essayText: sub.essayText,
    audioRecordUrl: sub.audioRecordUrl,
    hasEarnedXp: sub.hasEarnedXp,
    answers: sub.answers.map((a) => ({
      id: a.id,
      questionId: a.questionId,
      selectedOption: a.selectedOption,
      isCorrect: a.isCorrect,
      questionText: a.question.questionText,
      options: a.question.options as string[] | null,
      correctOption: a.question.correctOption,
      explanation: a.question.explanation,
    })),
    diagnosticReport: sub.diagnosticReport
      ? {
          id: sub.diagnosticReport.id,
          summary: sub.diagnosticReport.summary,
          corrections: sub.diagnosticReport.corrections as Record<string, unknown>[],
          recommendations: sub.diagnosticReport.recommendations as Record<string, unknown>[],
          vocabularyTips: sub.diagnosticReport.vocabularyTips as Record<string, unknown>[],
          grammarAnalysis: sub.diagnosticReport.grammarAnalysis as Record<string, unknown> | null,
        }
      : null,
  }));

  const profileData = user.profile
    ? {
        currentLevel: user.profile.currentLevel,
        readingScore: user.profile.readingScore,
        listeningScore: user.profile.listeningScore,
        writingScore: user.profile.writingScore,
        speakingScore: user.profile.speakingScore,
        overallScore: user.profile.overallScore,
      }
    : null;

  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Natijalarim</h1>
        <p className="text-slate-500 mt-1">
          Testlar tarixi, statistika va AI tahlillari
        </p>
      </div>

      <ResultsClient
        submissions={serializedSubmissions}
        profile={profileData}
        userPlan={activePlan}
        freeAiCredits={user.subscription?.freeAiCredits ?? 2}
      />
    </div>
  );
}
