import { Button, buttonVariants } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { OnboardingModal } from "@/components/dashboard/OnboardingModal";
import AiReportsList from "@/components/dashboard/AiReportsList";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      profile: true,
      subscription: true
    }
  });

  if (!user) return null;

  const xp = user.profile?.overallScore || 0;
  const plan = user.subscription?.plan || "FREE";
  const firstName = user.fullName?.split(" ")[0] || "Foydalanuvchi";

  return (
    <>
      {!user.hasCompletedOnboarding && (
        <OnboardingModal initialName={user.fullName || ""} />
      )}
      <div className="space-y-8 max-w-5xl mx-auto">
      {/* Welcome Banner */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Xush kelibsiz, {firstName}!</h1>
          <p className="text-slate-500 mt-2">Bugun qaysi ko'nikmani oshiramiz?</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center min-w-[120px]">
            <div className="text-sm text-slate-500 font-medium">Tarif</div>
            <div className="text-lg font-bold text-slate-900 mt-1">{plan}</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center min-w-[120px]">
            <div className="text-sm text-slate-500 font-medium">Reyting</div>
            <div className="text-lg font-bold text-amber-500 mt-1">{xp} XP</div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between items-start h-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl">📝</div>
          <div>
            <h2 className="text-2xl font-bold">To'liq Mock Imtihon</h2>
            <p className="text-blue-100 mt-2 max-w-xs">4 ta modulni o'z ichiga olgan CEFR sinov imtihonini boshlang.</p>
          </div>
          <Link href="/test/1" className={buttonVariants({ variant: "default", className: "w-max bg-white text-blue-600 hover:bg-blue-50 mt-4 font-bold rounded-xl px-6" })}>
            Mock Testni Boshlash
          </Link>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-48">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Alohida Modul Mashqlari</h2>
            <p className="text-slate-500 mt-1 text-sm">Bo'limlar bo'yicha tezkor mashq qilish</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button className="bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 flex justify-center items-center gap-2">
              🎙 Speaking
            </button>
            <button className="bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 flex justify-center items-center gap-2">
              🎧 Listening
            </button>
            <button className="bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 flex justify-center items-center gap-2">
              📖 Reading
            </button>
            <button className="bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 flex justify-center items-center gap-2">
              ✍️ Writing
            </button>
          </div>
        </div>
      </section>

      <AiReportsList />
      </div>
    </>
  );
}
