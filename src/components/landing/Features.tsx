'use client';

import { useState, useEffect, useRef } from "react";
import { Mic, PenTool, Headphones, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Sarlavha */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60 shadow-sm">
            4 ta Asosiy Ko'nikma
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            AI bilan to'liq CEFR ekotizimi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-normal">
            Imtihonning barcha modullari uchun sun'iy intellekt asosida aniq va tezkor tahlil tizimi.
          </p>
        </div>

        {/* Mobilda gorizontal swipe, Desktopda 2x2 Grid */}
        <div className="flex md:grid md:grid-cols-2 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 px-2 sm:px-0 no-scrollbar">

          {/* 1. SPEAKING */}
          <div
            className={`min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center shrink-0 rounded-3xl p-5 sm:p-7 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/65 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 md:-translate-x-12"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shadow-sm">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                </div>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                  Ovozli AI Tahlil
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Speaking: Talaffuz va Ravonlik</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Og'zaki nutqingiz yozib olinib, intonatsiya, talaffuz aniqligi hamda leksik boylik bo'yicha baholanadi.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-white/80 shadow-inner">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[11px] font-semibold text-slate-700">Yozib olinmoqda... (00:24)</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Fluency: 94%
                </span>
              </div>

              <div className="h-10 flex items-center justify-center gap-1 bg-slate-900/5 rounded-xl px-3 mb-2.5">
                {[40, 70, 30, 90, 50, 100, 60, 85, 45, 95, 35, 75, 55, 80].map((height, i) => (
                  <span
                    key={i}
                    className="w-1 sm:w-1.5 bg-blue-600 rounded-full animate-pulse"
                    style={{
                      height: `${height}%`,
                      animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                    }}
                  />
                ))}
              </div>

              <div className="text-[11px] text-slate-600 bg-white/60 p-2 rounded-lg border border-slate-100 font-mono line-clamp-1">
                <span className="text-slate-400">Transkripsiya: </span>
                "...in modern education, digital technologies..."
              </div>
            </div>
          </div>

          {/* 2. WRITING */}
          <div
            className={`min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center shrink-0 rounded-3xl p-5 sm:p-7 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/65 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 md:translate-x-12"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 shadow-sm">
                  <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[11px] font-bold text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200/60">
                  Grammar & Cohesion
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Writing: Insho va Xat Tekshiruvi</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Insholaringiz rasmiy CEFR mezonlari bo'yicha grammatika va stilistik xatolarigacha tahlil qilinadi.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-white/80 shadow-inner">
              <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-slate-100">
                <span className="text-[11px] font-bold text-violet-700 bg-violet-100/80 px-2 py-0.5 rounded-full">
                  CEFR B2+ (Score: 88/100)
                </span>
                <span className="text-[10px] text-slate-500 font-medium">320 so'z</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1.5">
                <p>
                  Today, many experts{" "}
                  <span className="px-1 py-0.5 rounded bg-red-100 text-red-700 line-through font-medium">believes</span>{" "}
                  <span className="px-1 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold animate-pulse">
                    believe <CheckCircle2 className="inline w-3 h-3 text-emerald-600" />
                  </span>{" "}
                  that learning new languages...
                </p>
                <div className="text-[10px] sm:text-[11px] text-violet-700 bg-violet-50/80 p-1.5 rounded border border-violet-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 shrink-0 text-violet-600" />
                  <span><strong>AI:</strong> Ko'plikdagi ot bilan "believe" ishlatiladi.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. LISTENING */}
          <div
            className={`min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center shrink-0 rounded-3xl p-5 sm:p-7 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/65 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 md:-translate-x-12"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  Audio & Rasch Skoring
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Listening: Audio Imtihon</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Turli aksentdagi dialoglar va Rasch modeli asosida qiyinchilik darajasiga ko'ra xolis ball.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-white/80 shadow-inner">
              <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white shrink-0">
                  ▶
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-[9px] text-slate-300 mb-0.5">
                    <span>Part 2: Architecture</span>
                    <span>01:42 / 03:10</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[55%]" />
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-700 flex items-center justify-between bg-emerald-50/80 p-2 rounded-lg border border-emerald-200">
                <span className="font-semibold text-emerald-900">✓ A) Structural safety</span>
                <span className="text-[10px] font-bold text-emerald-700">To'g'ri javob</span>
              </div>
            </div>
          </div>

          {/* 4. READING */}
          <div
            className={`min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center shrink-0 rounded-3xl p-5 sm:p-7 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 flex flex-col justify-between transition-all duration-700 ease-out hover:bg-white/65 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 md:translate-x-12"
              }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-sm">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Smart Context
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Reading: Matn va Kontekst</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Murakkab akademik matnlar va savollar o'rtasidagi mantiqiy bog'liqlikni tezkor topuvchi interfeys.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-white/80 shadow-inner">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700 leading-relaxed mb-2">
                Renewable energy sources:{" "}
                <span className="bg-yellow-200 px-1 py-0.5 rounded font-semibold text-slate-900">
                  Solar installations accounted for 80%
                </span>...
              </div>

              <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 text-[11px]">
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Kontekst mosligi
                </span>
                <span className="font-bold text-slate-800">+1.2 Logit</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}