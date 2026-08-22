'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

const Ballpit = dynamic(() => import("@/components/ui/Ballpit"), {
  ssr: false,
});

export function Hero({ lang = 'uz' }: { lang?: 'uz' | 'tr' | 'en' }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[#fdfbf7] via-[#faf8f2] to-[#f4f1ea]">

      {/* 3D Ballpit */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
          <Ballpit
            count={75}
            gravity={0}
            friction={0.998}
            wallBounce={0.95}
            followCursor={false}
            minSize={0.35}
            maxSize={0.75}
            colors={[
              0xe0e7ff,
              0x6366f1,
              0x4f46e5,
              0x8b5cf6,
              0x10b981
            ]}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto pointer-events-none">

        {/* Pill Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-700 mb-6 sm:mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 animate-pulse shrink-0" />
          <span>Tinglash, O'qish, Yozish va Gapirish uchun AI mock</span>
        </div>

        {/* Title */}
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.15]">
          CEFR imtihonlariga{" "}
          <span className="text-indigo-600 relative inline-block">
            AI yordamida
            <svg
              className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-indigo-300 -z-10"
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

        {/* Description */}
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out mx-auto mt-5 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-600 font-normal px-2">
          Har qanday qurilmada haqiqiy imtihon — to'rtta ko'nikma, haqiqiy vaqt chegaralari, AI baholash. Bir daqiqada darajangizni aniqlang.
        </p>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 ease-out mt-8 sm:mt-10 flex items-center justify-center pointer-events-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

            <Link
              href="/sign-up"
              className="relative flex items-center justify-center px-8 sm:px-10 h-12 sm:h-14 rounded-full bg-slate-900 text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
              </span>
              <span className="relative z-10 text-white font-medium">
                Ilovani ochish
              </span>
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Box */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 mt-12 sm:mt-16 w-full max-w-4xl mx-auto px-2 sm:px-4 relative pointer-events-auto">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="238 242 255"
            backgroundColor="rgba(255, 255, 255, 0.6)"
            borderRadius={20}
            glowRadius={30}
            glowIntensity={0.8}
            coneSpread={30}
            animated={true}
            colors={['#6366f1', '#8b5cf6', '#3b82f6', '#10b981']}
          >
            <div className="p-1.5 sm:p-2">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm aspect-[16/10] sm:aspect-[21/9] flex items-center justify-center border border-slate-200/60 shadow-sm p-4 text-center">
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
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