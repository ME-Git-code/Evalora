'use client';

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Sparkles,
  Workflow,
  CreditCard,
  HelpCircle,
  Mail,
  LogIn,
  ArrowRight
} from "lucide-react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menyu ochilganda orqa fon skrollini qulflash
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const navLinks = [
    { name: "Imkoniyatlar", href: "#features", icon: Sparkles },
    { name: "Qanday ishlaydi?", href: "#how-it-works", icon: Workflow },
    { name: "Narxlar", href: "#pricing", icon: CreditCard },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
    { name: "Aloqa", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-3 left-0 right-0 z-40 transition-all duration-300 mx-auto max-w-6xl px-3 sm:px-4 ${isScrolled ? "top-2" : "top-3"
          }`}
      >
        {/* Navbar Asosiy Qobiq */}
        <div className="flex h-14 sm:h-16 items-center justify-between rounded-full bg-white/40 px-4 sm:px-6 backdrop-blur-2xl border border-white/50 shadow-lg shadow-black/5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/icon.svg"
                alt="Evalora Logo"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent tracking-tight">
              Evalora
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center h-9 px-3 rounded-full text-slate-700 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 shadow-transparent hover:shadow-sm"
                >
                  <Icon className="w-4 h-4 shrink-0 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 text-xs font-semibold tracking-wide transition-all duration-300 ease-in-out">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/sign-in"
              onClick={createRipple}
              className="relative overflow-hidden flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 rounded-full hover:bg-white/60 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span>Kirish</span>
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-blue-500/20 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 20,
                    height: 20,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </Link>

            <Link
              href="/sign-up"
              onClick={createRipple}
              className="relative overflow-hidden flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-600/30 px-5 h-9 text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Bepul sinash</span>
              <ArrowRight className="w-3.5 h-3.5" />
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/40 rounded-full pointer-events-none animate-ping"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 25,
                    height: 25,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </Link>
          </div>

          {/* Mobil Tugma (Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/sign-up"
              className="rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 shadow-sm shadow-blue-600/30"
            >
              Sinash
            </Link>
            <button
              className="p-2 rounded-full text-slate-700 bg-white/50 backdrop-blur-md hover:bg-white/80 transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menyu Overlay (Header tashqarisida to'liq ekranga chiqadi) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">

          {/* Tashqi fonga bosganda yopish */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />

          <div className="w-[80%] max-w-xs bg-white/95 backdrop-blur-2xl h-full p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-white/60">
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200/60">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/icon.svg"
                    alt="Evalora Logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Evalora
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobil Navigatsiya Linklari */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-3.5 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-2xl transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-blue-500" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobil Tugmalar */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col gap-3">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
              >
                <LogIn className="w-4 h-4" />
                <span>Tizimga kirish</span>
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all active:scale-95"
              >
                <span>Bepul sinash</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}