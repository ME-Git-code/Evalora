import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AppLayoutClient from "@/components/layout/AppLayoutClient";
import { PlanType } from "../../../../generated/prisma/enums";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { userId } = await auth();
  const { locale } = await params;

  // 1. Agar foydalanuvchi kirmagan bo'lsa -> Darhol Sign-in sahifasiga haydash
  if (!userId) {
    redirect(`/${locale}/sign-in`);
  }

  // 2. Foydalanuvchi ma'lumotlarini Prisma orqali olish
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      profile: true,
      subscription: true,
    },
  });

  const userData = {
    fullName: user?.fullName || "Foydalanuvchi",
    avatarUrl: user?.avatarUrl || null,
    streakCount: user?.streakCount || 0,
    coins: user?.coins || 0,
    plan: user?.subscription?.isActive ? user.subscription.plan : PlanType.FREE,
    level: user?.profile?.currentLevel || "A1",
    email: user?.email || "",
  };

  return (
    <AppLayoutClient user={userData}>
      {children}
    </AppLayoutClient>
  );
}