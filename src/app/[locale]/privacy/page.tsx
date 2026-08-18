import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
          <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Orqaga qaytish
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-6">Maxfiylik siyosati (Privacy Policy)</h1>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Ma'lumotlarni yig'ish va foydalanish</h2>
            <p className="leading-relaxed">
              Foydalanuvchilarning ovoz yozuvlari (Speaking) va insholari (Writing) faqat AI diagnostikasi va tahlil uchun ishlatiladi, uchinchi shaxslarga berilmaydi. Shaxsiy ma'lumotlaringiz (ismingiz, email manzilingiz) xizmat sifatini oshirish va hisobingizni boshqarish uchun saqlanadi.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Xavfsizlik</h2>
            <p className="leading-relaxed">
              Barcha shaxsiy ma'lumotlar xavfsiz shifrlangan holda saqlanadi. Biz foydalanuvchi ma'lumotlari sizib chiqishini oldini olish uchun ilg'or xavfsizlik choralarini ko'ramiz.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Huquqlaringiz</h2>
            <p className="leading-relaxed">
              Siz istalgan vaqtda o'zingizning hisobingizni va undagi barcha ma'lumotlarni o'chirib tashlashni so'rash huquqiga egasiz. Buning uchun qo'llab-quvvatlash xizmatiga murojaat qiling.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
