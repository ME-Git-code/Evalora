import { Mic, PenTool, Calculator, TrendingUp } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Speaking: Ovozli tahlil",
      description: "Og'zaki javoblaringiz darhol yozib olinadi va AI orqali talaffuz, ravonlik va grammatik xatolar bo'yicha baholanadi.",
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      mockPreview: (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">🎙️</div>
            <div>
              <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
              <div className="h-2 w-16 bg-slate-200 rounded"></div>
            </div>
          </div>
          <div className="h-12 w-full bg-white rounded border border-slate-100 flex items-center px-3 gap-1">
            <div className="h-4 w-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="h-6 w-1 bg-blue-400 rounded-full animate-pulse delay-75"></div>
            <div className="h-3 w-1 bg-blue-400 rounded-full animate-pulse delay-150"></div>
            <div className="h-5 w-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      )
    },
    {
      title: "Writing: AI Insho tekshiruvi",
      description: "Insholaringiz daqiqalar ichida CEFRning to'rtta rasmiy mezoni bo'yicha tekshiriladi va xatolaringiz sababi tushuntiriladi.",
      icon: <PenTool className="w-6 h-6 text-violet-600" />,
      mockPreview: (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-violet-600 bg-violet-100 px-2 py-1 rounded">B2 Level</span>
            <span className="text-xs font-bold text-slate-500">Score: 85/100</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            Today, many people <span className="bg-red-100 text-red-700 line-through">believes</span> <span className="bg-green-100 text-green-700 font-medium">believe</span> that artificial intelligence will replace human jobs...
          </p>
        </div>
      )
    },
    {
      title: "Rasch Modeli bilan baholash",
      description: "Faqat to'g'ri javoblar soni emas, balki savolning qiyinlik darajasiga ko'ra xolis va aniq ball hisoblab chiqiladi.",
      icon: <Calculator className="w-6 h-6 text-amber-500" />,
      mockPreview: (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 h-32 flex items-center justify-center relative overflow-hidden">
           <svg className="w-full h-full text-slate-200 absolute -bottom-4" viewBox="0 0 100 50">
             <path d="M0 50 Q 25 10 50 25 T 100 0 L 100 50 Z" fill="currentColor" />
             <path d="M0 50 Q 25 20 50 30 T 100 10 L 100 50 Z" fill="#fef3c7" />
           </svg>
           <div className="z-10 bg-white p-2 rounded shadow-sm border border-slate-100 text-center">
             <div className="text-[10px] text-slate-500 uppercase font-bold">Logit Score</div>
             <div className="text-xl font-bold text-slate-900">+1.45</div>
           </div>
        </div>
      )
    },
    {
      title: "Natijalar va Reyting (XP)",
      description: "Real o'sish grafigingizni kuzatib boring va do'stlaringiz bilan XP to'plash orqali raqobatlashing.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      mockPreview: (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between bg-white p-2 rounded border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${i === 1 ? 'text-amber-500' : 'text-slate-500'}`}>#{i}</span>
                  <div className="h-6 w-6 rounded-full bg-slate-200"></div>
                  <div className="h-2 w-12 bg-slate-200 rounded"></div>
                </div>
                <div className="text-xs font-bold text-slate-700">{1000 - (i * 100)} XP</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Hamma narsa bitta joyda</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Test ishlash va natijalarni tahlil qilish uchun eng ilg'or AI texnologiyalaridan foydalanamiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
              </div>
              <div>
                {feature.mockPreview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
