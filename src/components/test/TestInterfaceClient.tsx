"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Clock, ShieldAlert, BookOpen, AlertTriangle, FileText, HelpCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestData {
  id: string;
  title: string;
  skill: string;
  level: string;
  timeLimitMinutes: number;
  readingPassage: string | null;
  writingPrompt: string | null;
  speakingPrompt: string | null;
  audioUrl: string | null;
  questions: any[];
}

interface TestInterfaceClientProps {
  test: TestData;
  isTimerEnabled: boolean;
  isExamMode: boolean;
}

export default function TestInterfaceClient({ test, isTimerEnabled, isExamMode }: TestInterfaceClientProps) {
  const router = useRouter();
  
  const [timeLeft, setTimeLeft] = useState(test.timeLimitMinutes * 60);
  const [activeTab, setActiveTab] = useState<"CONTENT" | "QUESTIONS">("CONTENT"); // Mobile only
  const [warningCount, setWarningCount] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeQuestion, setActiveQuestion] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  // Focus & Anti-Cheat Logic
  useEffect(() => {
    if (!isExamMode) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const handleBlur = () => {
      handleViolation();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      // Optional: count as violation
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("copy", handleCopy);
    };
  }, [isExamMode, warningCount, isFailed]);

  const handleViolation = () => {
    if (isFailed) return;
    
    if (warningCount === 0) {
      setWarningCount(1);
      setShowWarningModal(true);
    } else {
      // 2nd violation -> Fail test
      failTest();
    }
  };

  const failTest = () => {
    setIsFailed(true);
    setShowWarningModal(false);
    // submit test with 0 score -> handled in action later
    alert("Test yakunlandi: Qoidabuzarlik aniqlandi. 0 ball.");
    router.push("/results");
  };

  // Timer logic
  useEffect(() => {
    if (!isTimerEnabled || isFailed) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerEnabled, isFailed]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const isTimeCritical = timeLeft < 60; // red text last minute

  const submitTest = async () => {
    // API request here...
    router.push("/results");
  };

  const handleAudioPlay = () => {
    if (isExamMode && audioPlayed) {
      // already played, do nothing
      return;
    }
    if (audioRef.current) {
      audioRef.current.play();
      if (isExamMode) {
        setAudioPlayed(true);
      }
    }
  };

  if (isFailed) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Test to'xtatildi.</div>;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 absolute inset-0 z-50">
      
      {/* 1. YUQORI PANEL (Top Bar) */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {isExamMode ? (
              <div className="bg-rose-100 text-rose-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold border border-rose-200 shadow-sm">
                <ShieldAlert className="w-4 h-4" /> Real Imtihon
              </div>
            ) : (
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold border border-emerald-200 shadow-sm">
                <BookOpen className="w-4 h-4" /> Standart Mashq
              </div>
            )}
          </div>
          <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
          <h1 className="hidden sm:block font-bold text-slate-800 text-lg">
            {test.skill} · {test.title}
          </h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {isTimerEnabled && (
            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${isTimeCritical ? "text-rose-600 animate-pulse" : "text-slate-700"}`}>
              <Clock className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
          )}
          <Button onClick={submitTest} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-xl">
            Testni Yakunlash
          </Button>
        </div>
      </div>

      {/* MOBILE TABS */}
      <div className="lg:hidden flex bg-white border-b border-slate-200 shrink-0">
        <button 
          className={`flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-colors ${activeTab === "CONTENT" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50" : "text-slate-500"}`}
          onClick={() => setActiveTab("CONTENT")}
        >
          <FileText className="w-4 h-4" /> Matn / Audio
        </button>
        <button 
          className={`flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-colors ${activeTab === "QUESTIONS" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50" : "text-slate-500"}`}
          onClick={() => setActiveTab("QUESTIONS")}
        >
          <HelpCircle className="w-4 h-4" /> Savollar
        </button>
      </div>

      {/* 2. ISHCHI MAYDON (Desktop 50/50, Mobile Tabbed) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Content / Audio */}
        <div className={`flex-1 overflow-y-auto bg-white border-r border-slate-200 p-6 sm:p-8 lg:block ${activeTab === "CONTENT" ? "block" : "hidden"}`}>
          {test.audioUrl && (
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                Audio 
                {isExamMode && <span className="text-xs font-medium text-rose-500 bg-rose-100 px-2 py-1 rounded">(Faqat 1 marta eshitish mumkin)</span>}
              </h3>
              
              <audio 
                ref={audioRef}
                src={test.audioUrl}
                controls={!isExamMode}
                className={`w-full ${isExamMode ? "hidden" : ""}`}
                onEnded={() => { if(isExamMode) setAudioPlayed(true); }}
              />
              
              {isExamMode && (
                <div className="flex flex-col items-center gap-3">
                  <Button 
                    size="lg" 
                    onClick={handleAudioPlay} 
                    disabled={audioPlayed}
                    className={audioPlayed ? "bg-slate-300 text-slate-500" : "bg-blue-600 hover:bg-blue-700 text-white"}
                  >
                    {audioPlayed ? "Audio eshitildi" : "Audioni boshlash"}
                  </Button>
                </div>
              )}
            </div>
          )}

          {test.readingPassage && (
            <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed custom-scrollbar">
              {/* Fake content render */}
              <div dangerouslySetInnerHTML={{ __html: test.readingPassage }} />
            </div>
          )}
        </div>

        {/* Right Side: Questions */}
        <div className={`flex-1 flex flex-col bg-slate-50/50 lg:flex ${activeTab === "QUESTIONS" ? "flex" : "hidden"}`}>
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
            {test.questions.map((q, idx) => (
              <div 
                key={q.id} 
                className={`mb-8 p-6 rounded-2xl bg-white border shadow-sm transition-colors ${activeQuestion === idx ? "border-blue-300 ring-4 ring-blue-50" : "border-slate-200"}`}
                onClick={() => setActiveQuestion(idx)}
              >
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 text-lg mb-4">{q.questionText}</p>
                    
                    <div className="space-y-3">
                      {q.options?.map((opt: string) => (
                        <label 
                          key={opt}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            answers[q.id] === opt 
                              ? "bg-blue-50 border-blue-400 text-blue-900" 
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <input 
                            type="radio" 
                            name={`question-${q.id}`} 
                            value={opt} 
                            checked={answers[q.id] === opt}
                            onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600" 
                          />
                          <span className="font-medium text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigator */}
          <div className="h-20 bg-white border-t border-slate-200 p-4 flex items-center gap-2 overflow-x-auto shrink-0 custom-scrollbar-hide">
            {test.questions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setActiveQuestion(idx)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                  answers[q.id] 
                    ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-500" 
                    : activeQuestion === idx 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 border-2 border-transparent"
                }`}
              >
                {answers[q.id] ? <Check className="w-5 h-5" /> : idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarningModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <AlertTriangle className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Qoidabuzarlik aniqlandi!</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Siz test oynasidan chiqdingiz yoki boshqa dasturga o'tdingiz. <br/><br/>
              <strong>Bu so'nggi ogohlantirish.</strong> Agar yana bir marta takrorlansa, test bekor qilinadi va 0 ball qo'yiladi.
            </p>
            <Button 
              className="w-full bg-rose-600 hover:bg-rose-700 text-white" 
              onClick={() => setShowWarningModal(false)}
            >
              Tushundim, davom etaman
            </Button>
          </div>
        </div>
      )}

    </div>
  );
}
