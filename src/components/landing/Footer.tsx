import Link from "next/link";
import { Twitter, Send, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
              Evalora
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              CEFR imtihonlariga tayyorgarlik ko'rish uchun O'zbekistondagi eng ilg'or AI platformasi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-600 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platforma</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">Imkoniyatlar</Link></li>
              <li><Link href="#how-it-works" className="text-slate-400 hover:text-white text-sm transition-colors">Qanday ishlaydi?</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Narxlar va obuna</Link></li>
              <li><Link href="#faq" className="text-slate-400 hover:text-white text-sm transition-colors">Savol-javob (FAQ)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Huquqiy</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Foydalanish shartlari</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Maxfiylik siyosati</Link></li>
              <li><Link href="/oferta" className="text-slate-400 hover:text-white text-sm transition-colors">Ommaviy oferta</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Tilni tanlash</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm py-2 px-3 rounded-lg border border-slate-700 transition-colors text-left flex items-center justify-between">
                <span>O'zbekcha</span>
                <span className="text-xs text-blue-400 font-bold">UZ</span>
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-slate-400 text-sm py-2 px-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors text-left flex items-center justify-between">
                <span>English</span>
                <span className="text-xs text-slate-600 font-bold">EN</span>
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-slate-400 text-sm py-2 px-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors text-left flex items-center justify-between">
                <span>Русский</span>
                <span className="text-xs text-slate-600 font-bold">RU</span>
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-slate-400 text-sm py-2 px-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors text-left flex items-center justify-between">
                <span>Türkçe</span>
                <span className="text-xs text-slate-600 font-bold">TR</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Evalora. Barcha huquqlar himoyalangan.
          </p>
          <div className="text-slate-600 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Uzbekistan
          </div>
        </div>
      </div>
    </footer>
  );
}
