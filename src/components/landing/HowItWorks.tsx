import { UserPlus, PencilLine, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-600" />,
      title: "1. Bepul ro'yxatdan o'ting",
      description: "Platformaga ulaning va profilingizni atigi bir necha soniyada yarating. Boshlang'ich bepul sinov imkoniyatiga ega bo'lasiz.",
    },
    {
      icon: <PencilLine className="w-8 h-8 text-blue-600" />,
      title: "2. Mock testni ishlang",
      description: "Haqiqiy imtihon formatiga mos keluvchi to'rtta ko'nikma bo'yicha to'liq yoki bitta modul bo'yicha testlarni topshiring.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-violet-600" />,
      title: "3. AI tahlilini oling",
      description: "Test yakunlangach, yozma va og'zaki javoblaringiz darhol AI tomonidan baholanadi va xatolaringiz ko'rsatiladi.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Platforma qanday ishlaydi?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Uchta oddiy qadam orqali o'z darajangizni bilib oling va xatolaringiz ustida ishlashni boshlang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-slate-50 border-8 border-white shadow-sm flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
