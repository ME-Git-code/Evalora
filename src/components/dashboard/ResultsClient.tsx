"use client";

import { useState, useMemo } from "react";
import {
  Target,
  Activity,
  TrendingUp,
  TrendingDown,
  Search,
  Sparkles,
  Clock,
  Lock,
  ChevronRight,
  BookOpen,
  Mic,
  Headphones,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlanType } from "../../../generated/prisma/enums";
import TestResultModal from "./TestResultModal";
import Link from "next/link";

// ---- Types ----

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
  testId: string;
  testTitle: string;
  testSkill: string;
  testLevel: string;
  status: string;
  rawScore: number;
  scaledScore: number;
  achievedLevel: string;
  timeSpentSeconds: number;
  completedAt: string;
  essayText: string | null;
  audioRecordUrl: string | null;
  hasEarnedXp: boolean;
  answers: AnswerData[];
  diagnosticReport: DiagnosticData | null;
}

interface ProfileData {
  currentLevel: string;
  readingScore: number;
  listeningScore: number;
  writingScore: number;
  speakingScore: number;
  overallScore: number;
}

interface ResultsClientProps {
  submissions: SubmissionData[];
  profile: ProfileData | null;
  userPlan: string;
  freeAiCredits: number;
}

// ---- Helpers ----

const skillLabels: Record<string, string> = {
  READING: "Reading",
  LISTENING: "Listening",
  WRITING: "Writing",
  SPEAKING: "Speaking",
};

const skillIcons: Record<string, React.ReactNode> = {
  READING: <BookOpen className="w-4 h-4" />,
  LISTENING: <Headphones className="w-4 h-4" />,
  WRITING: <PenTool className="w-4 h-4" />,
  SPEAKING: <Mic className="w-4 h-4" />,
};

// ---- Component ----

export default function ResultsClient({
  submissions,
  profile,
  userPlan,
  freeAiCredits,
}: ResultsClientProps) {
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionData | null>(null);
  const [moduleFilter, setModuleFilter] = useState("All");
  const [aiFilter, setAiFilter] = useState("All");

  // Derive stats
  const completedSubs = submissions.filter((s) => s.status === "COMPLETED");
  const totalTests = completedSubs.length;
  const mockTests = completedSubs.filter((s) => s.testTitle.toLowerCase().includes("mock")).length;

  const skillScores = useMemo(() => {
    const skills = ["READING", "LISTENING", "WRITING", "SPEAKING"] as const;
    return skills.map((skill) => {
      const profileScore = profile
        ? profile[`${skill.toLowerCase()}Score` as keyof ProfileData] as number
        : 0;
      // Also calculate from submissions as fallback
      const subs = completedSubs.filter((s) => s.testSkill === skill);
      const avgFromSubs =
        subs.length > 0
          ? Math.round(subs.reduce((acc, s) => acc + s.scaledScore, 0) / subs.length)
          : 0;
      const score = profileScore > 0 ? Math.round(profileScore) : avgFromSubs;
      return { skill, label: skillLabels[skill], score, icon: skillIcons[skill] };
    });
  }, [completedSubs, profile]);

  const bestSkill = [...skillScores].sort((a, b) => b.score - a.score)[0];
  const weakSkill = [...skillScores].sort((a, b) => a.score - b.score)[0];
  const overallScore = profile ? Math.round(profile.overallScore) : 0;
  const currentLevel = profile?.currentLevel || "A1";

  // Filter submissions for history
  const filteredSubmissions = useMemo(() => {
    let result = completedSubs;
    if (moduleFilter !== "All") {
      result = result.filter((s) => s.testSkill === moduleFilter.toUpperCase());
    }
    if (aiFilter === "WithAI") {
      result = result.filter((s) => s.diagnosticReport !== null);
    } else if (aiFilter === "NoAI") {
      result = result.filter((s) => s.diagnosticReport === null);
    }
    return result;
  }, [completedSubs, moduleFilter, aiFilter]);

  const isPaidUser = userPlan !== PlanType.FREE;

  return (
    <div className="flex flex-col gap-6">
      {/* ===== Quick Stats ===== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Target className="w-5 h-5 text-blue-500" />}
          label="Umumiy Natija"
          value={`${currentLevel} — ${overallScore}%`}
          bg="bg-blue-50"
        />
        <StatCard
          icon={<Activity className="w-5 h-5 text-violet-500" />}
          label="Testlar Faolligi"
          value={`${totalTests} test${mockTests > 0 ? ` / ${mockTests} Mock` : ""}`}
          bg="bg-violet-50"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5 text-green-500" />}
          label="Kuchli Tomon"
          value={bestSkill ? `${bestSkill.label} ${bestSkill.score}%` : "—"}
          bg="bg-green-50"
        />
        <StatCard
          icon={<TrendingDown className="w-5 h-5 text-rose-500" />}
          label="Zaif Tomon"
          value={weakSkill ? `${weakSkill.label} ${weakSkill.score}%` : "—"}
          bg="bg-rose-50"
        />
      </div>

      {/* ===== Skills Balance ===== */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h2 className="font-bold text-slate-900 mb-5">Ko&apos;nikmalar Balansi</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skillScores.map((s) => (
            <div key={s.skill} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{s.label}</span>
                  <span className="text-sm font-bold text-slate-900">{s.score}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all ${
                      s.score >= 70
                        ? "bg-green-500"
                        : s.score >= 50
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                    style={{ width: `${Math.min(s.score, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Test History ===== */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", "Reading", "Listening", "Writing", "Speaking"].map((m) => (
              <button
                key={m}
                onClick={() => setModuleFilter(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  moduleFilter === m
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {m === "All" ? "Hammasi" : m}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {[
              { val: "All", label: "Barchasi" },
              { val: "WithAI", label: "✨ AI borlar" },
              { val: "NoAI", label: "⏳ Faqat ball" },
            ].map((f) => (
              <button
                key={f.val}
                onClick={() => setAiFilter(f.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  aiFilter === f.val
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* History List */}
        {filteredSubmissions.length === 0 ? (
          <div className="p-12 text-center">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-medium text-slate-700 mb-1">Hali natijalar yo&apos;q</h3>
            <p className="text-sm text-slate-500">
              Mashq bo&apos;limiga o&apos;ting va birinchi testingizni ishlang!
            </p>
            <Link href="/practice">
              <Button className="mt-4" size="sm">
                Mashqqa o&apos;tish
              </Button>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredSubmissions.map((sub) => {
              const correctCount = sub.answers.filter((a) => a.isCorrect).length;
              const totalQ = sub.answers.length;
              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubmission(sub)}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 cursor-pointer transition-colors group"
                >
                  {/* Skill icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 group-hover:bg-slate-200 transition-colors">
                    {skillIcons[sub.testSkill] || <Activity className="w-4 h-4" />}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-medium text-slate-900 text-sm truncate">
                        {sub.testTitle}
                      </h4>
                      <Badge variant="outline" className="text-[10px] shrink-0">
                        {sub.testLevel}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(sub.completedAt).toLocaleDateString("uz-UZ", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                      {totalQ > 0 && (
                        <span className="font-medium">
                          {correctCount}/{totalQ}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* AI Status */}
                  <div className="shrink-0 flex items-center gap-2">
                    {sub.diagnosticReport ? (
                      <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI tahlili
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
                        ⏳ Faqat ball
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ===== AI Umumiy Xulosa ===== */}
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-violet-500" />
            <h2 className="font-bold text-slate-900">AI Umumiy Xulosasi va Tavsiyalar</h2>
          </div>

          <div className={`space-y-4 ${!isPaidUser ? "filter blur-[6px] select-none pointer-events-none" : ""}`}>
            <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {completedSubs.length > 0
                  ? `Siz ${totalTests} ta test ishladingiz. ${bestSkill?.label || "Reading"} bo'limida eng yaxshi natija ko'rsatyapsiz (${bestSkill?.score || 0}%). ${weakSkill?.label || "Speaking"} bo'limiga ko'proq e'tibor bering (${weakSkill?.score || 0}%).`
                  : "Hali yetarli test ma'lumotlari yo'q. Natija paydo bo'lishi uchun kamida 3 ta test ishlang."}
              </p>
            </div>

            {completedSubs.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Tavsiya etilgan mashqlar:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {weakSkill && (
                    <Link
                      href={`/practice?module=${weakSkill.skill}`}
                      className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        {weakSkill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900">
                          {weakSkill.label} mashqlarini ishlash
                        </p>
                        <p className="text-xs text-slate-500">Zaif tomonni kuchaytirish</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </Link>
                  )}
                  <Link
                    href="/practice"
                    className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Umumiy mashq</p>
                      <p className="text-xs text-slate-500">Barcha bo&apos;limlarni mustahkamlash</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Paywall Overlay */}
        {!isPaidUser && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center max-w-xs">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">AI tahlili qulflangan</h3>
              <p className="text-sm text-slate-500 mb-4">
                Shaxsiy AI tavsiyalarni olish uchun obuna bo&apos;ling.
              </p>
              <Link href="/pricing">
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                  Tarifni tanlash
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ===== Modal ===== */}
      {selectedSubmission && (
        <TestResultModal
          submission={selectedSubmission}
          userPlan={userPlan}
          onClose={() => setSelectedSubmission(null)}
          onRequestAi={() => {
            // TODO: integrate AI diagnostic request
            alert("AI tahlil so'rovi yuborildi! (Hali backend ulanmagan)");
          }}
        />
      )}
    </div>
  );
}

// ---- Stat Card ----

function StatCard({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
      <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className="font-bold text-slate-900 text-lg">{value}</p>
    </div>
  );
}
