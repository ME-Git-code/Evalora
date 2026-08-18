"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { CefrLevel } from "../../../generated/prisma/enums";

// MOCK AI GENERATOR (TAYYOR PROMPTLAR VA JSON RESPONSE)
export async function generateAIDiagnostic(submissionId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: { subscription: true }
  });

  if (!user) throw new Error("User not found");

  // Check limits
  const hasFreeAi = user.subscription?.isActive && (user.subscription.freeAiCredits > 0);
  const hasCoins = user.coins >= 12;

  if (!hasFreeAi && !hasCoins) {
    return { error: "YETARLI_EMAS" };
  }

  // Deduct resources
  if (hasFreeAi) {
    await prisma.subscription.update({
      where: { id: user.subscription!.id },
      data: { freeAiCredits: { decrement: 1 } }
    });
  } else {
    await prisma.user.update({
      where: { id: user.id },
      data: { coins: { decrement: 12 } }
    });
    await prisma.coinTransaction.create({
      data: {
        userId: user.id,
        amount: -12,
        type: "COIN_SPEND_AI",
        description: "AI tahlili uchun to'lov"
      }
    });
  }

  // Generate Mock AI Report (Aslida bu yerda LLM API chaqiriladi)
  // Kutish effektini simulyatsiya qilamiz
  await new Promise(resolve => setTimeout(resolve, 3000));

  const report = await prisma.aiDiagnosticReport.create({
    data: {
      submissionId,
      summary: "Konuşmanız akıcı ve anlaşılır, genel B2 seviyesine uygun.",
      scoresBreakdown: { fluency: 22, pronunciation: 21, vocabulary: 20, grammar: 23, totalScore: 86 },
      corrections: [
        {
          spoken: "Ben gitmek istedim ama zaman yoktu.",
          improved: "Gitmek istememe rağmen yeterli vaktim bulunmuyordu.",
          explanation: "C1 seviyesi için zarf-fiil yapıları kullanmanız önerilir."
        }
      ],
      vocabularyTips: [
        {
          used: "çok önemli",
          alternatives: ["hayati önem taşıyan", "büyük ehemmiyete sahip"]
        }
      ],
      acousticMetrics: [
        {
          word: "yapacağım",
          issue: "Yumuşak G uzatması yerine sert telaffuz edildi."
        }
      ],
      recommendations: [
        "Ko'proq akademik matnlar o'qing (Okuma parçalarını analiz edin)",
        "Telaffuz mashqlari qiling (Diksiyon çalışmaları yapın)"
      ]
    }
  });

  return { success: true, reportId: report.id };
}

export async function getAiReport(submissionId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const report = await prisma.aiDiagnosticReport.findUnique({
    where: { submissionId }
  });

  return report;
}
