import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">O'zingizga mos tarifni tanlang</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Barcha ehtiyojlar uchun hamyonbop va moslashuvchan narxlar. Xohlagan vaqtda bekor qilishingiz mumkin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-2xl bg-white p-6 shadow-sm border flex flex-col h-full
                ${plan.popular ? 'border-blue-600 shadow-blue-600/10 scale-105 z-10 lg:-mt-4' : 'border-slate-200'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Eng mashhur
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-1 h-10">{plan.description}</p>
                <div className="mt-4 flex items-baseline text-3xl font-extrabold text-slate-900">
                  {plan.price} <span className="text-sm font-medium text-slate-500 ml-1">so'm</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <Check className="w-5 h-5 text-blue-600 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-xl h-11 font-bold ${
                  plan.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Faqat Coin kerakmi?</h3>
          <p className="text-slate-600 mb-6">
            Obuna bo'lmasdan turib ham, alohida Coin paketlarini xarid qilishingiz va o'zingiz xohlagan modullarni ochishingiz mumkin.
          </p>
          <Button variant="outline" className="rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50">
            Coin paketlarini ko'rish
          </Button>
        </div>
      </div>
    </section>
  );
}
