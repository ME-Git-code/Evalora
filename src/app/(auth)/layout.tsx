import { ReactNode } from "react";
import Link from "next/link";
import { BrainCircuit, LineChart } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 w-full overflow-hidden">
      
      {/* 60% chap taraf: Brending va Vizual (Mobil qurilmalarda yashirinadi) */}
      <div className="hidden lg:flex flex-col w-[60%] bg-slate-900 relative p-12 justify-between">
        {/* Orqa fon effektlari */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/30 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-4">
          <Link href="/" className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            Evalora
          </Link>
          <div className="inline-flex items-center rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            CEFR tayyorgarlik uchun №1 AI platforma
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mt-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ingliz tilini <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">sun'iy intellekt</span> yordamida tezroq o'rganing.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl">
            Tinglash, o'qish, yozish va gapirish ko'nikmalaringizni haqiqiy imtihon formatida sinab ko'ring va natijalaringizni darhol oling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">AI Diagnostika</h3>
              <p className="text-slate-400 text-sm">Grammatika va so'z boyligi bo'yicha to'liq tahlil va maslahatlar.</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">O'sish dinamikasi</h3>
              <p className="text-slate-400 text-sm">Har bir mashq orqali CEFR darajangiz o'sishini kuzatib boring.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Evalora. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>

      {/* 40% o'ng taraf (Mobilda 100%): Forma */}
      <div className="w-full lg:w-[40%] flex flex-col items-center justify-center p-6 sm:p-12 bg-white relative">
        <Link href="/" className="lg:hidden text-2xl font-bold text-blue-600 tracking-tight absolute top-8 left-8">
          Evalora
        </Link>
        <div className="w-full max-w-md mt-12 lg:mt-0 flex flex-col items-center">
          <div className="text-center mb-8 w-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Xush kelibsiz!</h2>
            <p className="text-slate-500">Platformaga kirish orqali barcha imkoniyatlardan foydalaning.</p>
          </div>
          <div className="w-full flex justify-center">
            {children}
          </div>
        </div>
      </div>
      
    </div>
  );
}
