'use client';

import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import { Send, Mail } from "lucide-react";

const languages = [
  { code: 'uz', name: "O'zbekcha", short: 'UZ' },
  { code: 'tr', name: 'Türkçe', short: 'TR' },
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'ru', name: 'Русский', short: 'RU' },
];

export function Footer() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <footer className="bg-white/35 backdrop-blur-2xl border-t border-white/60 pt-16 pb-8 text-slate-700">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* 1. Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/icon.svg"
                alt="Evalora Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                Evalora
              </span>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              CEFR imtihonlariga tayyorgarlik ko'rish uchun eng ilg'or AI platformasi.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/Evalora_admin"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/70 border border-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:evalora1admin@gmail.com"
                className="w-9 h-9 rounded-full bg-white/70 border border-white flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Platforma */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-4">Platforma</h4>
            <ul className="space-y-2.5">
              <li><Link href="#features" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Imkoniyatlar</Link></li>
              <li><Link href="#how-it-works" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Qanday ishlaydi?</Link></li>
              <li><Link href="#pricing" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Narxlar va obuna</Link></li>
              <li><Link href="#faq" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Savol-javob (FAQ)</Link></li>
            </ul>
          </div>

          {/* 3. Huquqiy */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-4">Huquqiy</h4>
            <ul className="space-y-2.5">
              <li><Link href="/terms" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Foydalanish shartlari</Link></li>
              <li><Link href="/privacy" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Maxfiylik siyosati</Link></li>
              <li><Link href="/oferta" className="text-slate-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">Ommaviy oferta</Link></li>
            </ul>
          </div>

          {/* 4. Til Tanlash */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-4">Tilni tanlash</h4>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`text-xs py-2 px-3 rounded-xl border transition-all text-left flex items-center justify-between shadow-sm ${currentLocale === lang.code
                      ? "bg-blue-50 border-blue-300 text-blue-700 font-bold"
                      : "bg-white/70 border-white/80 hover:bg-white text-slate-700 font-medium"
                    }`}
                >
                  <span>{lang.name}</span>
                  <span className="text-[10px] text-slate-400 font-bold">{lang.short}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200/60 text-center flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Evalora. Barcha huquqlar himoyalangan.
          </p>
          <div className="text-slate-600 text-xs flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Uzbekistan
          </div>
        </div>
      </div>
    </footer>
  );
}