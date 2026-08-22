'use client';

import { Check, Sparkles, Coins, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Platformani sinab ko'rish uchun",
      features: ["1 ta Mock Test", "Asosiy natijalar", "Umumiy tahlil", "Bitta qurilmada"],
      cta: "Bepul boshlash",
      popular: false,
    },
    {
      name: "Start",
      price: "49,000",
      description: "Boshlang'ich tayyorgarlik",
      features: ["3 ta Mock Test", "3 ta AI Tahlil", "Xatolar ustida ishlash", "Cheklanmagan XP"],
      cta: "Tarifni tanlash",
      popular: false,
    },
    {
      name: "Pro",
      price: "99,000",
      description: "Jiddiy tayyorgarlik ko'ruvchilar uchun",
      features: ["10 ta Mock Test", "Cheksiz AI Tahlil", "Speaking ovozli tahlili", "Writing to'liq tahlili"],
      cta: "Tarifni tanlash",
      popular: true,
    },
    {
      name: "Pro+",
      price: "149,000",
      description: "Intensiv shug'ullanuvchilar uchun",
      features: ["25 ta Mock Test", "Barcha AI funksiyalar", "Shaxsiy o'quv rejasi", "Prioritet yordam"],
      cta: "Tarifni tanlash",
      popular: false,
    },
    {
      name: "Ultra",
      price: "249,000",
      description: "O'quv markazlari va repititorlar",
      features: ["Cheksiz Mock Test", "Cheksiz AI", "O'quvchilar nazorati", "Maxsus API"],
      cta: "Tarifni tanlash",
      popular: false,
    }
  ];

  const coinPacks = [
    { coins: 50, price: "19,000", bonus: "+5 Bonus" },
    { coins: 150, price: "49,000", bonus: "+20 Bonus", popular: true },
    { coins: 400, price: "99,000", bonus: "+60 Bonus" },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Sarlavha */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60 shadow-sm">
            Tariflar va Narxlar
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            O'zingizga mos tarifni tanlang
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-normal">
            Barcha ehtiyojlar uchun hamyonbop va moslashuvchan narxlar.
          </p>
        </div>

        {/* Mobilda swipe (gorizontal scroll), Katta ekranda 5-grid */}
        <div className="flex xl:grid xl:grid-cols-5 gap-5 overflow-x-auto xl:overflow-x-visible snap-x snap-mandatory pb-6 xl:pb-0 px-2 sm:px-0 no-scrollbar items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`min-w-[78vw] sm:min-w-[280px] xl:min-w-0 snap-center shrink-0 relative rounded-3xl p-5 sm:p-6 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${plan.popular
                  ? 'bg-white/80 border-blue-500 shadow-xl shadow-blue-500/10 xl:-translate-y-2 z-10'
                  : 'bg-white/45 border-white/60 shadow-lg shadow-black/5 hover:bg-white/60'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Eng mashhur
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-600 min-h-[30px] mt-0.5">{plan.description}</p>

                <div className="mt-3 mb-5 pb-3 border-b border-slate-200/60">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-[11px] font-semibold text-slate-500 ml-1">so'm/oy</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 mr-1.5 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/sign-up"
                className={`w-full h-10 rounded-xl font-semibold text-xs flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 ${plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25"
                    : "bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80"
                  }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Aylana Tangali Coin Bo'limi */}
        <div className="mt-14 sm:mt-20 rounded-3xl p-6 sm:p-10 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 border border-amber-300/60 px-3 py-1 rounded-full mb-2">
              <Coins className="w-3 h-3 text-amber-600" />
              Obunasiz xarid
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              Faqat Coin kerakmi?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Obuna bo'lmasdan xohlagan vaqtingizda alohida AI tahlil ochish uchun tangalar to'plami.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-4 sm:pb-0 px-1 sm:px-0 no-scrollbar">
            {coinPacks.map((pack) => (
              <div
                key={pack.coins}
                className="min-w-[70vw] sm:min-w-0 snap-center shrink-0 group flex flex-col items-center p-5 rounded-3xl bg-white/70 border border-white/90 shadow-inner hover:scale-105 transition-all duration-300"
              >
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-1 shadow-lg shadow-amber-500/25 flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-amber-600/40 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-amber-500 text-amber-950">
                    <Coins className="w-4 h-4 mb-0.5 text-amber-900 drop-shadow" />
                    <span className="text-xl font-black">{pack.coins}</span>
                    <span className="text-[9px] font-bold uppercase text-amber-900/80">COIN</span>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full mb-2">
                  {pack.bonus}
                </span>

                <div className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                  {pack.price} <span className="text-xs font-normal text-slate-500">so'm</span>
                </div>

                <Link
                  href="/sign-up"
                  className="w-full h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-md group-hover:bg-amber-600"
                >
                  <span>Xarid qilish</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}