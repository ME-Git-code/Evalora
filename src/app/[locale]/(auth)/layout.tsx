import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { BrainCircuit, LineChart, Sparkles } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-transparent overflow-hidden">

      {/* 60% Chap taraf: Brending va Vizual (Desktop) */}
      <div className="hidden lg:flex flex-col w-[55%] xl:w-[60%] bg-slate-900 text-white relative p-12 justify-between overflow-hidden">

        {/* Glow Nurlar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-blue-600/35 rounded-full blur-[130px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-violet-600/35 rounded-full blur-[130px] mix-blend-screen" />
        </div>

        {/* Header / Logo */}
        <div className="relative z-10 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/icon.svg"
              alt="Evalora Logo"
              width={34}
              height={34}
              className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Evalora
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>CEFR tayyorgarlik uchun №1 AI platforma</span>
          </div>
        </div>

        {/* Asosiy Banner Kontenti */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
            Til ko'nikmalarini{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              sun'iy intellekt
            </span>{" "}
            bilan mukammallashtiring.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
            Speaking, Writing, Reading va Listening — haqiqiy vaqt va CEFR standartlari asosida tezkor tahlil.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">AI Diagnostika</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Talaffuz, intonatsiya va grammatika xatolarini bir daqiqada aniqlash.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-3">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Rasch Skoring</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Savol qiyinligiga asoslangan xolis logit ball tizimi va reyting.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-slate-400 text-xs">
          © {new Date().getFullYear()} Evalora. Barcha huquqlar himoyalangan.
        </div>
      </div>

      {/* 40% O'ng taraf (Mobilda 100%): Auth Forma */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center justify-center p-6 sm:p-10 relative">

        {/* Mobilda Logo */}
        <Link href="/" className="lg:hidden flex items-center gap-2 mb-6">
          <Image
            src="/icon.svg"
            alt="Evalora Logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
            Evalora
          </span>
        </Link>

        {/* Glass Card Container */}
        <div className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-white/55 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-black/5 flex flex-col items-center">
          <div className="text-center mb-6 w-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Xush kelibsiz!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Imkoniyatlardan foydalanish uchun tizimga kiring.
            </p>
          </div>

          <div className="w-full flex justify-center">
            {children}
          </div>
        </div>

      </div>

    </div>
  );
}