"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Target, Sparkles, AlertCircle } from "lucide-react";
import { completeOnboarding } from "@/app/actions/onboarding";
import { CefrLevel } from "@prisma/client";

type Step = 1 | 2 | 3;

interface OnboardingProps {
  initialName: string;
}

export function OnboardingModal({ initialName }: OnboardingProps) {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState(initialName || "");
  const [phone, setPhone] = useState("");
  const [targetLevel, setTargetLevel] = useState<CefrLevel>("B2");
  const [error, setError] = useState("");
  
  const router = useRouter();

  const handleNext = () => {
    if (step === 1 && !fullName.trim()) {
      setError("Ism kiritilishi shart");
      return;
    }
    setError("");
    setStep((prev) => (prev + 1) as Step);
  };

  const handleFinish = async () => {
    setLoading(true);
    const result = await completeOnboarding({
      fullName,
      phoneNumber: phone,
      targetLevel
    });
    
    if (result.success) {
      router.refresh();
    } else {
      setError(result.error || "Xatolik yuz berdi");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-900/40">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100">
          <div 
            className="h-full bg-blue-600 transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-medium">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Xush kelibsiz! Shaxsiy profilingizni yarating
              </h2>
              <p className="text-slate-500 mb-8">Ma'lumotlaringizni to'ldirib o'zingizga mos reja oling.</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Ism va Familiya *</label>
                  <input 
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
                    placeholder="Masalan: Alisher Navoiy"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefon raqami (ixtiyoriy)</label>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Maqsaddagi CEFR darajasi</label>
                  <div className="grid grid-cols-5 gap-2">
                    {(["A2", "B1", "B2", "C1", "C2"] as CefrLevel[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => setTargetLevel(level)}
                        className={`h-12 rounded-lg font-bold border transition-all ${
                          targetLevel === level 
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                            : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={handleNext} className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl">
                  Saqlash va davom etish <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Sizning joriy tarifingiz: Free (Bepul)
              </h2>
              <p className="text-slate-500 mb-6">Platformamiz bilan tanishish uchun boshlang'ich imkoniyatlar.</p>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>1 ta to'liq Mock test</strong> (barcha 4 modul: Reading, Listening, Writing, Speaking)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>2 ta AI tahlili</strong> va natijaviy xulosa</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Testlarni ishlab <strong>Coin yig'ish</strong> imkoniyati</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-8">
                <p className="text-sm text-blue-800 leading-relaxed">
                  💡 <strong>Eslatma:</strong> Start va Pro tariflariga ulanib, cheksiz testlar va batafsil AI tavsiyalarini ochishingiz mumkin.
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleNext} variant="outline" className="flex-1 h-12 text-slate-600 rounded-xl">
                  O'tkazib yuborish
                </Button>
                <Button onClick={handleNext} className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg">
                  Davom etish
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-6">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Tabriklaymiz, profilingiz muvaffaqiyatli faollashtirildi!
              </h2>
              <p className="text-slate-600 mb-10 text-lg max-w-sm mx-auto leading-relaxed">
                Sizga 1 ta to'liq bepul Mock test va 2 ta AI tahlil imkoniyati biriktirildi. Sinov testini ishlab o'z darajangizni aniqlang!
              </p>

              <Button 
                onClick={handleFinish} 
                disabled={loading}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                {loading ? "Yuklanmoqda..." : "Boshlash (Finish)"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
