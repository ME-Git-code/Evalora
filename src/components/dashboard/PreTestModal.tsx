"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Clock, AlertTriangle, Target, HelpCircle, Activity, ShieldAlert, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestData {
  id: string;
  title: string;
  description: string | null;
  skill: string;
  level: string;
  timeLimitMinutes: number;
  questionsCount: number;
  attempts: number;
}

export default function PreTestModal({ test, onClose }: { test: TestData, onClose: () => void }) {
  const router = useRouter();
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [isExamMode, setIsExamMode] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    // mode=EXAM or PRACTICE, timer=true/false
    const mode = isExamMode ? "EXAM" : "PRACTICE";
    router.push(`/test/${test.id}?timer=${timerEnabled}&mode=${mode}`);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-start relative">
          <div className="pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold border border-blue-200">
                {test.level}
              </span>
              <span className="text-slate-500 text-xs font-semibold capitalize bg-slate-200/50 px-2 py-0.5 rounded">
                {test.skill.toLowerCase()}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 leading-tight">
              {test.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-5">
          {/* Meta Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Savollar</p>
                <p className="font-semibold text-slate-900 text-sm">{test.questionsCount} ta</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Vaqt</p>
                <p className="font-semibold text-slate-900 text-sm">{test.timeLimitMinutes} daqiqa</p>
              </div>
            </div>
          </div>

          {/* Mode Selection */}
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setIsExamMode(false)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                !isExamMode
                  ? "bg-white text-blue-600 shadow-sm border border-blue-100"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Standart Mashq
            </button>
            <button
              onClick={() => { setIsExamMode(true); setTimerEnabled(true); }} // Exam mode must have timer
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                isExamMode
                  ? "bg-white text-rose-600 shadow-sm border border-rose-100"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              Real Imtihon
            </button>
          </div>

          {/* Settings / Warnings based on Mode */}
          {!isExamMode ? (
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50">
              <div>
                <p className="font-medium text-slate-900 text-sm mb-0.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Vaqt chegarasi (Timer)
                </p>
                <p className="text-xs text-slate-500">
                  Vaqt o'chirilsa tajriba balli (XP) berilmaydi
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={timerEnabled}
                  onChange={(e) => setTimerEnabled(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ) : (
            <div className="bg-rose-50 border border-rose-500/30 rounded-xl p-4 flex gap-3 text-rose-800 shadow-sm">
              <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <strong>DIQQAT! Real Imtihon Rejimi</strong>
                <ul className="mt-2 space-y-1.5 text-xs text-rose-700">
                  <li className="flex items-start gap-1.5"><span className="text-rose-500">•</span> Audioni qayta eshitish yoki pauza qilish bloklanadi.</li>
                  <li className="flex items-start gap-1.5"><span className="text-rose-500">•</span> Ekranni suratga olish yoki nusxalash taqiqlanadi.</li>
                  <li className="flex items-start gap-1.5"><span className="text-rose-500">•</span> <strong>Boshqa dastur/tabga o'tish testni 0 ball bilan to'xtatadi.</strong></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex gap-3 mt-auto">
          <Button 
            variant="outline" 
            className="flex-1 border-slate-200" 
            onClick={onClose}
            disabled={isStarting}
          >
            Bekor qilish
          </Button>
          <Button 
            className={`flex-1 text-white ${isExamMode ? "bg-rose-600 hover:bg-rose-700" : "bg-blue-600 hover:bg-blue-700"}`}

            onClick={handleStart}
            disabled={isStarting}
          >
            {isStarting ? "Tayyorlanmoqda..." : "Testni boshlash"}
          </Button>
        </div>
      </div>
    </div>
  );
}
