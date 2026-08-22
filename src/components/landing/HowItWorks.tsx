'use client';

import { UserPlus, PencilLine, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-7 h-7 text-blue-600" />,
      badge: "01",
      title: "1. Bepul ro'yxatdan o'ting",
      description: "Platformaga ulaning va profilingizni bir necha soniyada yarating. Boshlang'ich bepul sinov imkoniyatiga ega bo'lasiz.",
    },
    {
      icon: <PencilLine className="w-7 h-7 text-indigo-600" />,
      badge: "02",
      title: "2. Mock testni ishlang",
      description: "Haqiqiy imtihon formatiga mos keluvchi to'rtta ko'nikma bo'yicha to'liq yoki bitta modul bo'yicha testlarni topshiring.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-violet-600" />,
      badge: "03",
      title: "3. AI tahlilini oling",
      description: "Test yakunlangach, javoblaringiz darhol AI tomonidan baholanadi va xatolaringiz sababi ko'rsatiladi.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Sarlavha */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60 shadow-sm">
            Jarayon
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Platforma qanday ishlaydi?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-normal">
            Uchta oddiy qadam orqali o'z darajangizni bilib oling va xatolaringiz ustida ishlashni boshlang.
          </p>
        </div>

        {/* Mobilda gorizontal swipe, Desktopda 3-grid */}
        <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 px-2 sm:px-0 no-scrollbar relative">

          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[82vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex flex-col items-center text-center p-6 rounded-3xl bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 hover:bg-white/65 transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/80 border border-white shadow-md flex items-center justify-center mb-5">
                {step.icon}
              </div>

              <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-2">
                Qadam {step.badge}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}