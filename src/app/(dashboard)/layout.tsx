import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import AppLayoutClient from "@/components/layout/AppLayoutClient";
import { PlanType } from "../../../generated/prisma/enums";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  
  let userData = null;
  if (userId) {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        profile: true,
        subscription: true,
      }
    });

    if (user) {
      userData = {
        fullName: user.fullName || "Foydalanuvchi",
        avatarUrl: user.avatarUrl,
        streakCount: user.streakCount,
        coins: user.coins,
        plan: user.subscription?.isActive ? user.subscription.plan : PlanType.FREE,
        level: user.profile?.currentLevel || "A1",
        email: user.email,
      };
    }
  }

  return (
    <AppLayoutClient user={userData}>
      {children}
    </AppLayoutClient>
  );
}
