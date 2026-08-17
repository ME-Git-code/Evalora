"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Imkoniyatlar", href: "#features" },
    { name: "Qanday ishlaydi?", href: "#how-it-works" },
    { name: "Narxlar", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Aloqa", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4 ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="flex h-16 items-center justify-between rounded-full bg-white/70 px-6 backdrop-blur-md border border-white/40 shadow-sm">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600 tracking-tight">Evalora</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-slate-600 hover:text-slate-900 cursor-pointer text-sm font-medium">
            <Globe className="w-4 h-4" />
            <select className="bg-transparent outline-none cursor-pointer">
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="tr">TR</option>
            </select>
          </div>
          <Link href="/sign-in" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            Kirish
          </Link>
          <Link href="/sign-up" className={buttonVariants({ variant: "default", className: "rounded-full shadow-sm" })}>
            Bepul sinash
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu (Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-slate-900/50 backdrop-blur-sm">
          <div className="w-64 bg-white h-full p-6 shadow-2xl animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-blue-600">Evalora</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-500 hover:text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="w-5 h-5" />
                <select className="bg-transparent outline-none font-medium text-lg w-full">
                  <option value="uz">O'zbekcha</option>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="tr">Türkçe</option>
                </select>
              </div>
              <Link
                href="/sign-in"
                className="text-lg font-medium text-slate-700 hover:text-blue-600 text-center py-2"
              >
                Tizimga kirish
              </Link>
              <Link href="/sign-up" className={buttonVariants({ variant: "default", className: "w-full rounded-xl h-12 text-lg" })}>
                Ilovani ochish -&gt;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
