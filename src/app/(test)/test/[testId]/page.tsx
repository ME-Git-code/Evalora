"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TestRunnerPage({ params }: { params: { testId: string } }) {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 daqiqa
  const [isOffline, setIsOffline] = useState(false);
  const [offlineTimer, setOfflineTimer] = useState(180); // 3 daqiqa
  const [activeQuestion, setActiveQuestion] = useState(1);

  // Offline holatini kuzatish
  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Offline taymer mantiqi (3 daqiqalik ruxsat)
  useEffect(() => {
    if (isOffline && offlineTimer > 0) {
      const timer = setInterval(() => setOfflineTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (!isOffline) {
      setOfflineTimer(180); // Internet kelsa reset bo'ladi
    } else if (isOffline && offlineTimer === 0) {
      // Testni avtomatik yakunlash logikasi
      alert("Internet ulanishi uzoq vaqt yo'qolgani sababli test yakunlandi!");
    }
  }, [isOffline, offlineTimer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex flex-col h-screen relative">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
        <div className="font-medium text-slate-700">Reading · B2 Mock Test 1</div>
        <div className={`text-xl font-bold ${timeLeft < 60 ? "text-red-600 animate-pulse" : "text-slate-900"}`}>
          {formatTime(timeLeft)}
        </div>
        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-xl">
          Testni Yakunlash
        </Button>
      </header>

      {/* 50/50 Split View (Desktop) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chap qism: Matn yoki Audio */}
        <div className="w-1/2 p-8 border-r border-slate-200 overflow-y-auto bg-white">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Part 1: The Future of AI</h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p>
              Artificial Intelligence is rapidly transforming our world. The advancements in machine learning
              and natural language processing have paved the way for more sophisticated systems...
            </p>
            <p className="mt-4">
              However, this rapid development also brings forth significant ethical considerations that society
              must address collectively to ensure a balanced future.
            </p>
            {/* ... uzun matn ... */}
          </div>
        </div>

        {/* O'ng qism: Savollar */}
        <div className="w-1/2 bg-slate-50 flex flex-col">
          <div className="flex-1 p-8 overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Savol {activeQuestion} / 20</h3>
            <p className="text-slate-800 font-medium mb-6 text-lg">
              What is the primary concern mentioned regarding the rapid development of AI?
            </p>
            
            <div className="space-y-4">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label key={option} className="flex items-center p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-400 cursor-pointer transition">
                  <input type="radio" name="answer" className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-500" />
                  <span className="ml-4 text-slate-700 font-medium">Variant {option} description text here...</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bottom Navigator */}
          <div className="h-20 bg-white border-t border-slate-200 px-6 flex items-center shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 scrollbar-thin">
              {Array.from({ length: 20 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuestion(i + 1)}
                  className={`w-10 h-10 shrink-0 rounded-lg font-medium border flex items-center justify-center transition
                    ${activeQuestion === i + 1 
                      ? "border-blue-600 bg-blue-50 text-blue-600" 
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offline Alert Overlay */}
      {isOffline && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center border-2 border-red-500">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Internet uzildi!</h2>
            <p className="text-slate-600 mb-6">
              Iltimos, aloqani tekshiring. {formatTime(offlineTimer)} daqiqa ichida qayta ulanmasangiz, test avtomatik ravishda yakunlanadi.
            </p>
            <div className="text-sm font-medium text-slate-400">
              Qayta ulanish kutilmoqda...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
