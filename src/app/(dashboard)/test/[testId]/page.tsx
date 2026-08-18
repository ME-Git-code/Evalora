import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import TestInterfaceClient from "@/components/test/TestInterfaceClient";

export const metadata = {
  title: "Test | Evalora",
};

export default async function TestPage({
  params,
  searchParams,
}: {
  params: { testId: string };
  searchParams: { timer?: string; mode?: string };
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const test = await prisma.test.findUnique({
    where: { id: params.testId },
    include: {
      questions: true,
    },
  });

  if (!test) redirect("/practice");

  const isTimerEnabled = searchParams.timer !== "false";
  const isExamMode = searchParams.mode === "EXAM";

  return (
    <TestInterfaceClient 
      test={test} 
      isTimerEnabled={isTimerEnabled} 
      isExamMode={isExamMode} 
    />
  );
}
