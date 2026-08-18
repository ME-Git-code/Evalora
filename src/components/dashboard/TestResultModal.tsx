"use client";

import { useState } from "react";
import { X, Check, XCircle, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnswerData {
  id: string;
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  questionText: string;
  options: string[] | null;
  correctOption: string;
  explanation: string | null;
}

interface DiagnosticData {
  id: string;
  summary: string;
  corrections: Record<string, unknown>[];
  recommendations: Record<string, unknown>[];
  vocabularyTips: Record<string, unknown>[];
  grammarAnalysis: Record<string, unknown> | null;
}

interface SubmissionData {
  id: string;
  testTitle: string;
  testSkill: string;
  testLevel: string;
  rawScore: number;
  scaledScore: number;
  achievedLevel: string;
  completedAt: string;
  essayText: string | null;
  audioRecordUrl: string | null;
  answers: AnswerData[];
  diagnosticReport: DiagnosticData | null;
}

interface TestResultModalProps {
  submission: SubmissionData;
  userPlan: string;
  onClose: () => void;
  onRequestAi: () => void;
}

export default function TestResultModal({
  submission,
  userPlan,
  onClose,
  onRequestAi,
}: TestResultModalProps) {
  const isReadingOrListening =
    submission.testSkill === "READING" || submission.testSkill === "LISTENING";
  const isWriting = submission.testSkill === "WRITING";
  const isSpeaking = submission.testSkill === "SPEAKING";

  const totalQuestions = submission.answers.length;
  const correctCount = submission.answers.filter((a) => a.isCorrect).length;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const [answerFilter, setAnswerFilter] = useState<"all" | "correct" | "wrong">("all");

  const filteredAnswers = submission.answers.filter((a) => {
    if (answerFilter === "correct") return a.isCorrect;
    if (answerFilter === "wrong") return !a.isCorrect;
    return true;
  });

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-start shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold border border-blue-200">
                {submission.testLevel}
              </span>
              <span className="text-slate-500 text-xs font-semibold capitalize bg-slate-200/50 px-2 py-0.5 rounded">
                {submission.testSkill.toLowerCase()}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">{submission.testTitle}</h2>
            <p className="text-xs text-slate-500 mt-1">
              {new Date(submission.completedAt).toLocaleDateString("uz-UZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Bar */}
        {totalQuestions > 0 && (
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-4 shrink-0">
            <div className={`text-3xl font-black ${percentage >= 70 ? "text-green-600" : percentage >= 50 ? "text-amber-600" : "text-rose-600"}`}>
              {percentage}%
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-700 font-medium mb-1">
                {correctCount} / {totalQuestions} to&apos;g&apos;ri
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${percentage >= 70 ? "bg-green-500" : percentage >= 50 ? "bg-amber-500" : "bg-rose-500"}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Reading / Listening: Answers */}
          {isReadingOrListening && (
            <>
              <div className="flex gap-2">
                {(["all", "correct", "wrong"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setAnswerFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      answerFilter === f
                        ? "bg-slate-800 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {f === "all" ? "Barchasi" : f === "correct" ? `✅ To'g'ri (${correctCount})` : `❌ Xatolar (${totalQuestions - correctCount})`}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filteredAnswers.map((answer, i) => (
                  <div
                    key={answer.id}
                    className={`p-4 rounded-xl border ${
                      answer.isCorrect
                        ? "border-green-200 bg-green-50/50"
                        : "border-rose-200 bg-rose-50/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        answer.isCorrect ? "bg-green-500 text-white" : "bg-rose-500 text-white"
                      }`}>
                        {answer.isCorrect ? <Check className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 mb-2">
                          {i + 1}. {answer.questionText}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className={`px-2 py-1 rounded ${
                            answer.isCorrect ? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-700 line-through"
                          }`}>
                            Sizning javob: {answer.selectedOption}
                          </span>
                          {!answer.isCorrect && (
                            <span className="px-2 py-1 rounded bg-green-100 text-green-700">
                              To&apos;g&apos;ri javob: {answer.correctOption}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Writing: Essay */}
          {isWriting && (
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Sizning insho matniningiz</h3>
              {submission.essayText ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {submission.essayText}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 border-t border-slate-100 pt-2">
                    So&apos;zlar soni: {submission.essayText.split(/\s+/).filter(Boolean).length}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic">Insho matni topilmadi.</p>
              )}
            </div>
          )}

          {/* Speaking: Audio */}
          {isSpeaking && (
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Audio yozuv</h3>
              {submission.audioRecordUrl ? (
                <audio controls className="w-full" src={submission.audioRecordUrl}>
                  Brauzeringiz audio pleyerni qo&apos;llab-quvvatlamaydi.
                </audio>
              ) : (
                <p className="text-sm text-slate-500 italic">Audio yozuv topilmadi.</p>
              )}
            </div>
          )}

          {/* AI Diagnostic Section */}
          <div className="border-t border-slate-200 pt-5">
            {submission.diagnosticReport ? (
              /* AI tahlili mavjud */
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-violet-500" />
                  <h3 className="font-bold text-slate-900">AI Tahlili</h3>
                </div>
                <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {submission.diagnosticReport.summary}
                  </p>
                </div>
                {submission.diagnosticReport.recommendations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Tavsiyalar:</h4>
                    <ul className="space-y-1.5">
                      {submission.diagnosticReport.recommendations.map((rec, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-violet-500 mt-0.5">•</span>
                          {typeof rec === "string" ? rec : JSON.stringify(rec)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* AI tahlili hali olinmagan */
              <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 border border-violet-200 rounded-xl p-6 text-center">
                <Sparkles className="w-8 h-8 text-violet-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">AI Xulosasini Oling</h3>
                <p className="text-sm text-slate-600 mb-4 max-w-sm mx-auto">
                  Ushbu testni Evalora AI yordamida tahlil qiling va xatolaringiz sababini bilib oling.
                </p>
                <Button
                  className="bg-violet-600 hover:bg-violet-700 text-white gap-2"
                  onClick={onRequestAi}
                >
                  <Sparkles className="w-4 h-4" />
                  AI Xulosasini Olish
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
