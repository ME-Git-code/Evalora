import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
        <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Orqaga qaytish
        </Link>
        <h1 className="text-3xl font-black text-slate-900 mb-6">Biz haqimizda (About Us)</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-lg leading-relaxed font-medium text-slate-800">
            Evalora — turk tili xalqaro va milliy CEFR (TÖMER) sertifikatlariga tayyorlanuvchilar uchun yaratilgan innovatsion AI platforma.
          </p>
          <p className="leading-relaxed">
            Biz Rasch o'lchov modeli va zamonaviy sun'iy intellekt orqali o'quvchilar bilimini xolis baholaymiz va shaxsiy o'sish yo'lini ko'rsatamiz. Platforma o'quvchilarga o'z darajalarini aniq belgilash, kuchli va zaif tomonlarini ko'rish imkonini beradi.
          </p>
          <p className="leading-relaxed">
            Bizning vazifamiz — har bir o'quvchiga o'z maqsadiga erishishi uchun kerak bo'lgan sifatli, qulay va arzon vositalarni taqdim etish. Sun'iy intellekt (AI) texnologiyalari orqali biz o'qituvchilarning yukini yengillashtiramiz va jarayonni to'liq avtomatlashtiramiz.
          </p>
        </div>
      </div>
    </div>
  );
}
