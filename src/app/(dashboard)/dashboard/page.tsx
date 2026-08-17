import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

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
          <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 mt-4 font-bold rounded-xl px-6">
            <Link href="/test/1">Mock Testni Boshlash -&gt;</Link>
          </Button>
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

      {/* AI Insights (Paywall preview) */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 relative z-10">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="text-violet-600">✨</span> AI Maslahatchi
          </h2>
        </div>
        
        {plan === "FREE" ? (
          <>
            <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 relative z-10 blur-[2px] opacity-70 select-none">
              <p className="text-slate-700">Sizda Listening ko'rsatkichi yaxshi, ammo Writing bo'limida argumentlashni kuchaytirish lozim...</p>
            </div>
            {/* Paywall Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center max-w-sm">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-slate-900 mb-2">AI tahliliga kirish yopiq</h3>
                <p className="text-sm text-slate-500 mb-4">Shaxsiy AI tahlili va tavsiyalarni olish uchun obuna bo'ling.</p>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl">Tarifni tanlash -&gt;</Button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 relative z-10">
            <p className="text-slate-700">Sizda oxirgi 3 ta imtihon bo'yicha Listening yaxshilangan. Writing qismida "Linking words" dan ko'proq foydalaning.</p>
          </div>
        )}
      </section>
    </div>
  );
}
