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
      summary: "Ushbu test natijalariga ko'ra sizning darajangiz B2 atrofida baholandi. Reading qismida murakkab so'zlar bilan ishlashda kamchiliklar bor.",
      scoresBreakdown: { reading: 85, listening: 0, writing: 0, speaking: 0 },
      corrections: [
        {
          original: "I choosed this option",
          corrected: "I chose this option",
          reason: "Tog'ri javob kontekstda o'tgan zamonda bo'lishi kerak."
        }
      ],
      vocabularyTips: ["Enhance", "Deteriorate", "Accomplish"],
      recommendations: [
        "Ko'proq akademik matnlar o'qing",
        "Noto'g'ri tanlagan savollaringizdagi chalg'ituvchi so'zlarga e'tibor bering"
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
