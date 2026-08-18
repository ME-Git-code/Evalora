import Link from "next/link";
import { BookOpen, Shield, HelpCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Column 1: Platform */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black">E</span>
              Evalora
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Turk tili xalqaro va milliy CEFR (TÖMER) sertifikatlariga tayyorlanuvchilar uchun yaratilgan innovatsion AI platforma.
            </p>
            <ul className="space-y-3">
              <li><Link href="/dashboard" className="text-sm hover:text-blue-400 transition-colors">Bosh sahifa / Dashboard</Link></li>
              <li><Link href="/practice" className="text-sm hover:text-blue-400 transition-colors">Mashqlar / Practice</Link></li>
              <li><Link href="/results" className="text-sm hover:text-blue-400 transition-colors">Natijalarim / Results</Link></li>
              <li><Link href="/leaderboard" className="text-sm hover:text-blue-400 transition-colors">Reyting / Leaderboard</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resurslar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <BookOpen className="w-4 h-4 text-slate-500" /> CEFR / TÖMER Qo'llanmasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Shield className="w-4 h-4 text-slate-500" /> Baholash mezonlari (Scoring Guide)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <HelpCircle className="w-4 h-4 text-slate-500" /> Ko'p beriladigan savollar (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Loyiha va Huquqiy</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="/about" className="text-sm hover:text-blue-400 transition-colors">Biz haqimizda (About Us)</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">Maxfiylik siyosati (Privacy Policy)</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">Foydalanish shartlari (Terms of Service)</Link></li>
            </ul>
            <div className="space-y-2">
              <a href="https://t.me/Evalora_admin" target="_blank" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-slate-500" /> Bog'lanish (Telegram)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Block */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Evalora. Barcha huquqlar himoyalangan.</p>
          <p>Loyiha asoschisi va dasturchi: Abdujabbor Turg'unov</p>
        </div>
      </div>
    </footer>
  );
}
