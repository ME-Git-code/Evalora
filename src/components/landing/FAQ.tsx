"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "To'lov qanday amalga oshiriladi?",
      answer: "To'lovlarni barcha mahalliy bank kartalari (Uzcard, Humo) orqali amalga oshirishingiz mumkin. Shuningdek, to'lov kvitansiyasini (chekni) tizimga yuklash orqali ham obunani faollashtirish imkoni mavjud.",
    },
    {
      question: "AI baholash qanchalik aniq va xolis?",
      answer: "Tizimimiz eng so'nggi va kuchli AI modellariga (GPT-4o, Gemini 1.5 Pro) asoslangan bo'lib, javoblaringizni bevosita rasmiy CEFR baholash mezonlari (Lexical Resource, Grammatical Range, Fluency, Coherence) bo'yicha tahlil qiladi. Baholash xolisligi 95% dan yuqori.",
    },
    {
      question: "Free tarifda qanday sinov imkoniyatlari mavjud?",
      answer: "Bepul (Free) tarifda ro'yxatdan o'tganingizdan so'ng, tizim interfeysi bilan to'liq tanishishingiz va bitta to'liq Mock testni (yoki tanlangan bitta modulni) ishlab ko'rishingiz uchun 1 ta bepul tekshiruv krediti taqdim etiladi.",
    },
    {
      question: "Mock testlar va savollar qanchalik tez-tez yangilanadi?",
      answer: "Test bazamiz har haftada yangi, dolzarb mavzulardagi (ayniqsa Speaking va Writing uchun) savollar bilan boyitib boriladi. Barcha savollar haqiqiy imtihon standartlariga mos tarzda ekspertlar nazoratidan o'tgan.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ko'p beriladigan savollar</h2>
          <p className="mt-4 text-lg text-slate-600">
            Platforma haqida o'zingizni qiziqtirgan savollarga javob toping.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
