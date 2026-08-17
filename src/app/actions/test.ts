"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { CefrLevel, TransactionType } from "../../../generated/prisma/enums";

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

  // Submission yaratish
  const submission = await prisma.submission.create({
    data: {
      userId: user.id,
      testId: testId,
      rawScore: 50,
      scaledScore: 85,
      timeSpentSeconds: 1500, // mock
      achievedLevel: CefrLevel.B2,
    }
  });

  // Agar javoblar yuborilgan bo'lsa, ularni bazaga yozish
  if (answers && answers.length > 0) {
    await prisma.answer.createMany({
      data: answers.map((ans) => ({
        submissionId: submission.id,
        questionId: ans.questionId,
        selectedOption: ans.selectedOption,
      }))
    });
  }

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
      type: TransactionType.COIN_EARN_TEST,
      description: "Test muvaffaqiyatli yakunlandi"
    }
  });

  return { success: true, submissionId: submission.id };
}
