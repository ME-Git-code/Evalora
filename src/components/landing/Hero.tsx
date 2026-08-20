'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/button";
import BorderGlow from "@/components/ui/BorderGlow";

const Ballpit = dynamic(() => import("@/components/ui/Ballpit"), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#faf8f2]">

      {/* Glacier Mist Aura qatlamlari */}
      <div
        className="absolute inset-0 pointer-events-none blur-[93px] md:blur-[133px]"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(77,210,255,0.12) 28%, rgb(255,255,255) 18%, rgb(53,230,192) 68%, rgb(91,110,245) 100%)',
          mixBlendMode: 'multiply'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none blur-[200px] md:blur-[260px]"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(77,210,255,0.22) 34%, rgb(255,255,255) 66%, rgb(53,230,192) 82%, rgb(91,110,245) 100%)',
          mixBlendMode: 'multiply'
        }}
        aria-hidden="true"
      />

      {/* 3D Ballpit (Gravitatsiya 0, Ko'paytirilgan sharlar, Aniq ranglar) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Ballpit
          count={110}
          gravity={0}
          friction={0.998}
          wallBounce={0.95}
          followCursor={false}
          minSize={0.35}
          maxSize={0.75}
          colors={[
            0xffffff, // Oq
            0x2563eb, // Ko'k
            0x111827, // Qora
            0x7c3aed, // Siyohrang (Violet)
            0x10b981  // Yashil (Emerald)
          ]}
        />
      </div>

      {/* Hero Kontenti */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto pointer-events-none">

        {/* Pill Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out inline-flex items-center rounded-full border border-blue-200/80 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
          Tinglash, O'qish, Yozish va Gapirish uchun AI mock testlar
        </div>

        {/* Sarlavha */}
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
          CEFR imtihonlariga{" "}
          <span className="text-violet-600 relative inline-block">
            AI yordamida
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-violet-300 -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 0"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </span>{" "}
          tez va aniq tayyorlaning.
        </h1>

        {/* Tavsif */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl font-normal">
          Har qanday qurilmada haqiqiy imtihon — to'rtta ko'nikma, haqiqiy vaqt chegaralari, AI baholash. Bir daqiqada CEFR darajangizni yozma tahlil bilan oling.
        </p>

        {/* Tugmalar */}
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 ease-out mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pointer-events-auto">
          <Link
            href="/sign-up"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-full h-14 px-8 text-lg font-medium shadow-xl transition-all hover:scale-105",
            })}
          >
            Ilovani ochish -&gt;
          </Link>
          <Link
            href="#demo"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "w-full sm:w-auto rounded-full h-14 px-8 text-lg font-medium border-slate-300/80 text-slate-800 hover:bg-white/90 bg-white/70 backdrop-blur-md transition-all hover:scale-105 shadow-sm",
            })}
          >
            Namuna natijani ko'rish
          </Link>
        </div>

        {/* Dashboard Preview Box + BorderGlow */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 mt-16 w-full max-w-4xl mx-auto px-4 relative pointer-events-auto">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="210 100 65"
            backgroundColor="rgba(255, 255, 255, 0.45)"
            borderRadius={24}
            glowRadius={35}
            glowIntensity={1}
            coneSpread={30}
            animated={true}
            colors={['#38bdf8', '#818cf8', '#34d399', '#c084fc']}
          >
            <div className="p-2">
              <div className="rounded-2xl overflow-hidden bg-white/60 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center border border-white/60 shadow-inner">
                <span className="text-slate-500 font-medium">
                  Platforma interfeysi skrinshoti shu yerda bo'ladi
                </span>
              </div>
            </div>
          </BorderGlow>
        </div>

      </div>
    </section>
  );
}