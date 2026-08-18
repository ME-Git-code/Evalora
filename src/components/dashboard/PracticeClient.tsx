"use client";

import { useState, useMemo } from "react";
import { Search, Lock, CheckCircle2, CircleDashed, Clock, BookOpen, Mic, PenTool, Headphones } from "lucide-react";
import { PlanType } from "../../../generated/prisma/enums";
import PreTestModal from "./PreTestModal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TestData {
  id: string;
  title: string;
  description: string | null;
  skill: string;
  level: string;
  timeLimitMinutes: number;
  isPremium: boolean;
  questionsCount: number;
  createdAt: string;
  attempts: number;
  isCompleted: boolean;
  highestScore: number;
}

export default function PracticeClient({ tests, userPlan }: { tests: TestData[], userPlan: string }) {
  const [selectedModule, setSelectedModule] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  
  const [selectedTestForModal, setSelectedTestForModal] = useState<TestData | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  // Filtering & Sorting Logic
  const filteredTests = useMemo(() => {
    let result = tests;

    if (selectedModule !== "All") {
      result = result.filter((t) => t.skill === selectedModule.toUpperCase());
    }

    if (selectedLevel !== "All") {
      result = result.filter((t) => t.level === selectedLevel.toUpperCase());
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((t) => t.title.toLowerCase().includes(q) || (t.description || "").toLowerCase().includes(q));
    }

    if (statusFilter !== "All") {
      if (statusFilter === "Completed") {
        result = result.filter((t) => t.isCompleted);
      } else if (statusFilter === "Not completed") {
        result = result.filter((t) => !t.isCompleted);
      }
    }

    // Sorting
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        case "difficulty":
          // Simple sorting: A1 < A2 < B1 < B2 < C1 < C2
          const levels = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
          const levelA = levels[a.level as keyof typeof levels] || 0;
          const levelB = levels[b.level as keyof typeof levels] || 0;
          return levelA - levelB;
        case "newest":
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    return result;
  }, [tests, selectedModule, selectedLevel, searchQuery, statusFilter, sortBy]);

  const handleTestClick = (test: TestData) => {
    // Access control
    if (userPlan === PlanType.FREE && test.isPremium) {
      setShowSubscriptionModal(true);
    } else {
      setSelectedTestForModal(test);
    }
  };

  const getLevelColor = (level: string) => {
    if (level.includes('A')) return "bg-blue-100 text-blue-700 border-blue-200";
    if (level.includes('B')) return "bg-green-100 text-green-700 border-green-200";
    if (level.includes('C')) return "bg-rose-100 text-rose-700 border-rose-200";
    return "bg-slate-100 text-slate-700";
  };

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "READING": return <BookOpen className="w-4 h-4" />;
      case "LISTENING": return <Headphones className="w-4 h-4" />;
      case "WRITING": return <PenTool className="w-4 h-4" />;
      case "SPEAKING": return <Mic className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
        {/* Top Row: Modules & Search */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {["All", "Speaking", "Listening", "Reading", "Writing"].map((module) => (
              <button
                key={module}
                onClick={() => setSelectedModule(module)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedModule === module
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {module === "All" ? "Barchasi" : module}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Testlarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
        </div>

        {/* Bottom Row: CEFR, Status, Sort */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <div className="flex flex-wrap gap-2">
            {["All", "A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                  selectedLevel === lvl
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-500 hover:bg-slate-50 border-slate-200"
                }`}
              >
                {lvl === "All" ? "Barchasi" : lvl}
              </button>
            ))}
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none"
            >
              <option value="All">Hammasi (Holat)</option>
              <option value="Completed">Bajarilgan</option>
              <option value="Not completed">Bajarilmagan</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none"
            >
              <option value="newest">Yangilari oldin</option>
              <option value="a-z">Nom bo'yicha: A-Z</option>
              <option value="z-a">Nom bo'yicha: Z-A</option>
              <option value="difficulty">Qiyinlik bo'yicha</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredTests.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-dashed border-slate-300 flex-1">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-1">Hech narsa topilmadi</h3>
          <p className="text-slate-500 text-sm text-center">Filtringizga mos testlar mavjud emas. Boshqa parametrlarni tanlab ko'ring.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSelectedModule("All");
              setSelectedLevel("All");
              setSearchQuery("");
              setStatusFilter("All");
            }}
          >
            Filtrni tozalash
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTests.map((test) => {
            const isLocked = userPlan === PlanType.FREE && test.isPremium;

            return (
              <div 
                key={test.id}
                onClick={() => handleTestClick(test)}
                className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
              >
                {/* Status Indicator Bar */}
                <div className={`h-1.5 w-full ${test.isCompleted ? 'bg-green-500' : 'bg-blue-500 opacity-20'}`} />
                
                <div className={`p-5 flex flex-col h-full ${isLocked ? 'filter blur-[3px] select-none' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className={`${getLevelColor(test.level)} px-2 py-0.5`}>
                      {test.level}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {getSkillIcon(test.skill)}
                      <span className="capitalize">{test.skill.toLowerCase()}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-2 line-clamp-2">
                    {test.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {test.isCompleted ? (
                          <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Bajarildi</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                            <CircleDashed className="w-4 h-4" />
                            <span>Yangi</span>
                          </div>
                        )}
                      </div>
                      
                      {test.attempts > 0 && (
                        <span className="text-xs text-slate-400 font-medium">
                          Urinishlar: {test.attempts}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Locked Overlay */}
                {isLocked && (
                  <div className="absolute inset-0 bg-slate-900/10 flex flex-col items-center justify-center z-10 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mb-3">
                      <Lock className="w-5 h-5 text-slate-700" />
                    </div>
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                      QULFLANGAN
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modals */}
      {selectedTestForModal && (
        <PreTestModal 
          test={selectedTestForModal} 
          onClose={() => setSelectedTestForModal(null)} 
        />
      )}

      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Premium test!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ushbu mashqni ishlash uchun <strong>PRO</strong> yoki undan yuqori tarifga obuna bo'lishingiz kerak. Free tarifida har bir moduldan faqat 1 ta bepul test ishlashingiz mumkin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowSubscriptionModal(false)}>
                Yopish
              </Button>
              <Link href="/pricing" className="flex-1">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Obunani ko'rish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
