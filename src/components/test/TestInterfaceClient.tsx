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
  
  const [testStatus, setTestStatus] = useState<"PLAYING" | "QUICK_RESULT" | "AI_LIMIT" | "AI_LOADING" | "AI_RESULT">("PLAYING");
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [aiReport, setAiReport] = useState<any>(null);

  const [warningCount, setWarningCount] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeQuestion, setActiveQuestion] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  // Focus & Anti-Cheat Logic
  useEffect(() => {
    if (!isExamMode || testStatus !== "PLAYING") return;

    const handleVisibilityChange = () => {
      if (document.hidden) handleViolation();
    };
    const handleBlur = () => handleViolation();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("copy", handleCopy);
    };
  }, [isExamMode, warningCount, isFailed, testStatus]);

  const handleViolation = () => {
    if (isFailed) return;
    if (warningCount === 0) {
      setWarningCount(1);
      setShowWarningModal(true);
    } else {
      failTest();
    }
  };

  const failTest = () => {
    setIsFailed(true);
    setShowWarningModal(false);
    alert("Test yakunlandi: Qoidabuzarlik aniqlandi. 0 ball.");
    router.push("/results");
  };

  useEffect(() => {
    if (!isTimerEnabled || isFailed || testStatus !== "PLAYING") return;
    
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
  }, [isTimerEnabled, isFailed, testStatus]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const submitTest = async () => {
    // Backendga yuborish (Mock)
    setSubmissionId("mock-submission-id");
    setTestStatus("QUICK_RESULT");
  };

  const handleAudioPlay = () => {
    if (isExamMode && audioPlayed) return;
    if (audioRef.current) {
      audioRef.current.play();
      if (isExamMode) setAudioPlayed(true);
    }
  };

  const requestAiAnalysis = async () => {
    setTestStatus("AI_LOADING");
    // Generate AI
    setTimeout(() => {
      setAiReport({
        summary: "Konuşmanız akıcı ve anlaşılır, genel B2 seviyesine uygun.",
        pronunciationErrors: [
          { word: "yapacağım", issue: "Yumuşak G uzatması yerine sert telaffuz edildi." }
        ],
        grammarErrors: [
          { spoken: "Ben gitmek istedim ama zaman yoktu.", improved: "Gitmek istememe rağmen yeterli vaktim bulunmuyordu.", explanation: "C1 seviyesi için zarf-fiil yapıları kullanmanız önerilir." }
        ],
        recommendations: ["Ko'proq akademik matnlar o'qing (Okuma parçalarını analiz edin)", "Telaffuz mashqlari qiling (Diksiyon çalışmaları yapın)"]
      });
      setTestStatus("AI_RESULT");
    }, 3000);
  };

  if (isFailed) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Test to'xtatildi.</div>;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 absolute inset-0 z-50">
      
      {/* 1. YUQORI PANEL */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {isExamMode ? (
              <div className="bg-rose-100 text-rose-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold border border-rose-200">
                <ShieldAlert className="w-4 h-4" /> Real Imtihon
              </div>
            ) : (
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold border border-emerald-200">
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
            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 60 ? "text-rose-600 animate-pulse" : "text-slate-700"}`}>
              <Clock className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
          )}
          <Button onClick={submitTest} disabled={testStatus !== "PLAYING"} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-xl">
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

      {/* 2. ISHCHI MAYDON */}
      <div className="flex-1 flex overflow-hidden relative">
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
        
        {/* MODALS LAYER */}
        {testStatus !== "PLAYING" && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
            
            {/* Quick Result Modal */}
            {testStatus === "QUICK_RESULT" && (
              <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
                <div className="p-6 text-center border-b border-slate-100">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">82% Ball</h2>
                  <p className="text-slate-500 font-medium">B2 Daraja</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">+41 XP</span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">+1 Coin</span>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 flex flex-col gap-3">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold h-12 text-lg shadow-md rounded-xl transition-all" onClick={() => setTestStatus("AI_LIMIT")}>
                    ✨ AI Xulosasini Olish
                  </Button>
                  <Button variant="outline" className="w-full text-slate-600 border-slate-300 rounded-xl h-11 hover:bg-slate-100 transition-colors" onClick={() => router.push("/results")}>
                    Yakunlash va Natijalarga o'tish
                  </Button>
                </div>
              </div>
            )}

            {/* AI Limit Modal */}
            {testStatus === "AI_LIMIT" && (
              <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-in zoom-in-95">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">AI Tahlili Tasdiqlash</h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Sizda joriy oylik tarifingizdan 3 ta AI tahlil limiti bor. Ushbu tahlil uchun 1 ta limit sarflanadi.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl h-11" onClick={() => setTestStatus("QUICK_RESULT")}>Orqaga</Button>
                  <Button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-xl h-11" onClick={requestAiAnalysis}>Davom etish</Button>
                </div>
              </div>
            )}

            {/* Loading Modal */}
            {testStatus === "AI_LOADING" && (
              <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-violet-100 border-t-violet-600 rounded-full animate-spin mb-6"></div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">AI Tahlil Qilmoqda...</h3>
                <p className="text-sm text-slate-500 animate-pulse">Shaxsiy xulosa va tushuntirishlar shakllantirilmoqda...</p>
              </div>
            )}

            {/* AI Result Modal */}
            {testStatus === "AI_RESULT" && aiReport && (
              <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-violet-50 shrink-0">
                  <h2 className="text-xl font-black text-violet-900 flex items-center gap-2">✨ AI Diagnostika Xulosasi</h2>
                </div>
                <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg font-medium text-slate-800 leading-relaxed mb-6">{aiReport.summary}</p>
                    
                    {/* Dynamic Turkish Speaking / General Errors Render */}
                    {aiReport.pronunciationErrors && aiReport.pronunciationErrors.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2"><span className="text-violet-500">🗣</span> Telaffuz Hataları</h3>
                        <div className="space-y-3">
                          {aiReport.pronunciationErrors.map((err: any, i: number) => (
                            <div key={i} className="bg-rose-50 p-3 rounded-xl border border-rose-100">
                              <p className="font-bold text-rose-700 mb-1">"{err.word}"</p>
                              <p className="text-sm text-slate-700">{err.issue}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {aiReport.grammarErrors && aiReport.grammarErrors.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2"><span className="text-violet-500">📝</span> Dilbilgisi Hataları</h3>
                        <div className="space-y-3">
                          {aiReport.grammarErrors.map((err: any, i: number) => (
                            <div key={i} className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                              <p className="font-medium text-slate-500 line-through text-sm">{err.spoken}</p>
                              <p className="font-bold text-emerald-700 mb-1">{err.improved}</p>
                              <p className="text-sm text-slate-700">{err.explanation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-slate-900 font-bold mb-4">Tavsiyalar (Öneriler):</h3>
                    <ul className="space-y-2 mb-6">
                      {aiReport.recommendations?.map((rec: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 shrink-0">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 px-6" onClick={() => router.push("/results")}>
                    Natijalarim bo'limiga o'tish
                  </Button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Warning Modal */}
      {showWarningModal && testStatus === "PLAYING" && (
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
