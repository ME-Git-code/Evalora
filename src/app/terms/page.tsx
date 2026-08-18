import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
        <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Orqaga qaytish
        </Link>
        <h1 className="text-3xl font-black text-slate-900 mb-6">Foydalanish shartlari (Terms of Service)</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">1. Shartlarni qabul qilish</h2>
          <p className="leading-relaxed">
            Evalora platformasiga kirish va uning xizmatlaridan foydalanish orqali siz ushbu shartlarga to'liq roziligingizni bildirasiz. Agar shartlarga rozi bo'lmasangiz, xizmatdan foydalanmang.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Intellektual mulk</h2>
          <p className="leading-relaxed">
            Platformadagi test materiallari, savollar, audiolar va maqolalardan faqat shaxsiy tayyorgarlik uchun foydalanish mumkin. Har qanday materialni nusxa ko'chirish, boshqa joyga tarqatish va tijoriy maqsadlarda foydalanish qat'iyan taqiqlanadi.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Obuna va Tangalar (Coin)</h2>
          <p className="leading-relaxed">
            Tangalar (Coin) faqat platforma ichida foydalanish uchun mo'ljallangan virtual birliklardir. Ular haqiqiy pulga almashtirilmaydi va faqat AI xizmatlarini xarid qilish uchun ishlatiladi. Oylik limitlar har oy boshida yangilanadi, yig'ilgan coinlar saqlanib qoladi.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Xizmatni cheklash</h2>
          <p className="leading-relaxed">
            Qoidalarni muntazam ravishda buzgan, cheaterlik (aldash) tizimidan foydalangan yoki platformaga texnik zarar yetkazishga uringan foydalanuvchilarning hisoblari ogohlantirishsiz yopilishi mumkin.
          </p>
        </div>
      </div>
    </div>
  );
}
