'use client';

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur-md shadow-xl border border-white/20 flex items-center justify-center transition-all z-50 animate-in fade-in zoom-in-95 duration-200 hover:scale-110 active:scale-95"
      aria-label="Tepaga qaytish"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}