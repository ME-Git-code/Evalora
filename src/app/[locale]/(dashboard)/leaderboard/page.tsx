import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LeaderboardClient from "@/components/dashboard/LeaderboardClient";

export const metadata = {
  title: "Reyting | Evalora",
};

export default async function LeaderboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Hozirgi foydalanuvchini olish
  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { id: true, fullName: true, avatarUrl: true },
  });
  if (!currentUser) redirect("/sign-up");

  // Barcha foydalanuvchilarni XP (overallScore) bo'yicha saralab olish
  // Optimallashtirish uchun faqat kerakli maydonlarni tortamiz
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      fullName: true,
      avatarUrl: true,
      profile: {
        select: {
          overallScore: true,
          currentLevel: true,
        },
      },
    },
    orderBy: {
      profile: {
        overallScore: "desc",
      },
    },
    take: 100, // Top 100 ni ko'rsatamiz
  });

  // Reyting ma'lumotlarini mijozga (client) tayyorlash
  const leaderboardData = allUsers.map((u, index) => ({
    id: u.id,
    rank: index + 1,
    name: u.fullName || "Foydalanuvchi",
    avatar: u.avatarUrl,
    xp: u.profile ? Math.round(u.profile.overallScore) : 0,
    level: u.profile?.currentLevel || "A1",
    isCurrentUser: u.id === currentUser.id,
  }));

  // Agar joriy foydalanuvchi top 100 ga kirmagan bo'lsa, uning o'rnini alohida topamiz
  let currentUserRankData = leaderboardData.find((u) => u.isCurrentUser);
  if (!currentUserRankData) {
    const userProfile = await prisma.profile.findUnique({
      where: { userId: currentUser.id },
      select: { overallScore: true, currentLevel: true },
    });
    const xp = userProfile ? Math.round(userProfile.overallScore) : 0;
    
    // Uning o'rnini hisoblash (undan ko'p XP olganlar soni + 1)
    const higherXpCount = await prisma.profile.count({
      where: { overallScore: { gt: xp } },
    });
    
    currentUserRankData = {
      id: currentUser.id,
      rank: higherXpCount + 1,
      name: currentUser.fullName || "Siz",
      avatar: currentUser.avatarUrl,
      xp: xp,
      level: userProfile?.currentLevel || "A1",
      isCurrentUser: true,
    };
  }

  return <LeaderboardClient data={leaderboardData} currentUser={currentUserRankData} />;
}
