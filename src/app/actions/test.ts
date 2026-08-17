"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function finishTest(testId: string, answers: { questionId: string; selectedOption: string }[]) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Foydalanuvchini bazadan topish
  const user = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  if (!user) {
    throw new Error("User not found in DB");
  }

  // To'g'ri javoblarni hisoblash
  // Real loyihada bu yerda savollarni bazadan olib, tekshiramiz.
  // Hozir mock qilib yozamiz.
  let correctAnswersCount = 0;
  
  // Submission yaratish
  const submission = await prisma.submission.create({
    data: {
      userId: user.id,
      testId: testId, // Seed qilingan testID bo'lishi kerak
      rawScore: 50,
      scaledScore: 85,
      timeSpentSeconds: 1500, // mock
      achievedLevel: "B2",
    }
  });

  // Coin qo'shish
  await prisma.user.update({
    where: { id: user.id },
    data: {
      coins: { increment: 10 }
    }
  });

  await prisma.coinTransaction.create({
    data: {
      userId: user.id,
      amount: 10,
      description: "Test muvaffaqiyatli yakunlandi"
    }
  });

  return { success: true, submissionId: submission.id };
}
