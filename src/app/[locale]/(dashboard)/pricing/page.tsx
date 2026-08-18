import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PricingClient from "@/components/dashboard/PricingClient";
import { PlanType } from "../../../../../generated/prisma/enums";

export const metadata = {
  title: "Obuna va Coinlar | Evalora",
};

export default async function PricingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      subscription: true,
    },
  });

  if (!user) {
    redirect("/sign-up");
  }

  const activePlan = user.subscription?.isActive
    ? user.subscription.plan
    : PlanType.FREE;

  return (
    <PricingClient
      userPlan={activePlan}
      coins={user.coins}
      freeAiCredits={user.subscription?.freeAiCredits ?? 2}
      endDate={user.subscription?.endDate?.toISOString() ?? null}
      customId={user.customId}
    />
  );
}
