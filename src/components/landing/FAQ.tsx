'use client';

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "To'lov qanday amalga oshiriladi?",
      answer:
        "To'lovlarni barcha mahalliy bank kartalari (Uzcard, Humo) orqali amalga oshirishingiz mumkin. Shuningdek, to'lov kvitansiyasini (chekni) tizimga yuklash orqali ham obunani faollashtirish imkoni mavjud.",
    },
    {
      question: "AI baholash qanchalik aniq va xolis?",
      answer:
        "Tizimimiz eng so'nggi va kuchli AI modellariga asoslangan bo'lib, javoblaringizni bevosita rasmiy CEFR baholash mezonlari (Lexical Resource, Grammatical Range, Fluency, Coherence) bo'yicha tahlil qiladi. Baholash xolisligi 95% dan yuqori.",
    },
    {
      question: "Free tarifda qanday sinov imkoniyatlari mavjud?",
      answer:
        "Bepul (Free) tarifda ro'yxatdan o'tganingizdan so'ng, tizim interfeysi bilan to'liq tanishishingiz va bitta to'liq Mock testni ishlab ko'rishingiz uchun bepul tekshiruv krediti taqdim etiladi.",
    },
    {
      question: "Mock testlar va savollar qanchalik tez-tez yangilanadi?",
      answer:
        "Test bazamiz har haftada yangi, dolzarb mavzulardagi (ayniqsa Speaking va Writing uchun) savollar bilan boyitib boriladi. Barcha savollar haqiqiy imtihon standartlariga mos tarzda ekspertlar nazoratidan o'tgan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* Sarlavha */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60 shadow-sm mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Ko'p beriladigan savollar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-normal">
            Platforma haqida o'zingizni qiziqtirgan savollarga javob toping.
          </p>
        </div>

        {/* Glassmorphism Accordion */}
        <div className="rounded-3xl p-5 sm:p-8 bg-white/45 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-white/85 border-blue-200 shadow-md shadow-blue-500/5"
                    : "bg-white/60 border-white/80 hover:bg-white/75"
                  }`}
              >
                {/* Savol Tugmasi */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 ml-3 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                  />
                </button>

                {/* Javob Matni */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100/60 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}