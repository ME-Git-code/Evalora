"use client";

import { useState } from "react";
import { Trophy, Medal, Star, Flame, Award } from "lucide-react";
import Image from "next/image";

interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string | null;
  xp: number;
  level: string;
  isCurrentUser: boolean;
}

interface LeaderboardClientProps {
  data: LeaderboardUser[];
  currentUser: LeaderboardUser;
}

export default function LeaderboardClient({ data, currentUser }: LeaderboardClientProps) {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "all-time">("weekly");

  // Hozircha DB dan barchasi keladi. Tablar nomigagina UI da bor
  const top3 = data.slice(0, 3);
  const others = data.slice(3);

  return (
    <div className="flex flex-col gap-6 relative min-h-[80vh] pb-24">
      {/* Header & Tabs */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-amber-500" />
          Reyting
        </h1>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          {[
            { id: "weekly", label: "Haftalik" },
            { id: "monthly", label: "Oylik" },
            { id: "all-time", label: "Barcha vaqt" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Podium (Top 3) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 pt-12 flex justify-center items-end gap-2 sm:gap-6 mt-8">
        {/* 2nd Place */}
        {top3[1] && <PodiumCard user={top3[1]} place={2} height="h-32" color="bg-slate-200" icon={<Medal className="w-6 h-6 text-slate-500" />} />}
        
        {/* 1st Place */}
        {top3[0] && <PodiumCard user={top3[0]} place={1} height="h-40" color="bg-amber-100" icon={<Trophy className="w-8 h-8 text-amber-500" />} isWinner />}
        
        {/* 3rd Place */}
        {top3[2] && <PodiumCard user={top3[2]} place={3} height="h-28" color="bg-orange-100" icon={<Award className="w-6 h-6 text-orange-600" />} />}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 w-16 text-center">#</th>
                <th className="px-6 py-4">Foydalanuvchi</th>
                <th className="px-6 py-4 text-center">Daraja</th>
                <th className="px-6 py-4 text-right">Jami XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {others.map((user) => (
                <tr
                  key={user.id}
                  className={`transition-colors hover:bg-slate-50 ${
                    user.isCurrentUser ? "bg-blue-50/50" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-center font-bold text-slate-400">
                    {user.rank}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        {user.avatar ? (
                          <Image src={user.avatar} alt={user.name} width={32} height={32} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className={`font-semibold ${user.isCurrentUser ? "text-blue-700" : "text-slate-900"}`}>
                        {user.name}
                        {user.isCurrentUser && " (Siz)"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600">
                      {user.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-amber-500">
                    {user.xp} XP
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sticky User Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm">
              #{currentUser.rank}
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Sizning o&apos;rningiz</p>
              <p className="font-bold text-slate-900">{currentUser.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 font-medium">To&apos;plangan</p>
            <p className="font-black text-amber-500 text-xl flex items-center justify-end gap-1">
              {currentUser.xp} <span className="text-sm">XP</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Subcomponents ----

function PodiumCard({ user, place, height, color, icon, isWinner = false }: { user: LeaderboardUser, place: number, height: string, color: string, icon: React.ReactNode, isWinner?: boolean }) {
  return (
    <div className="flex flex-col items-center relative w-24 sm:w-32">
      {isWinner && (
        <div className="absolute -top-10">
          <CrownIcon className="w-8 h-8 text-amber-500 drop-shadow-md animate-bounce" />
        </div>
      )}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-md z-10 bg-slate-200 overflow-hidden -mb-4">
        {user.avatar ? (
          <Image src={user.avatar} alt={user.name} width={64} height={64} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-xl">
            {user.name.charAt(0)}
          </div>
        )}
      </div>
      <div className={`w-full ${height} ${color} rounded-t-xl flex flex-col items-center justify-start pt-6 border-b-0 shadow-inner px-2 text-center`}>
        {icon}
        <p className="font-bold text-slate-900 text-xs sm:text-sm mt-1 truncate w-full">{user.name.split(" ")[0]}</p>
        <p className="text-[10px] sm:text-xs font-black text-amber-600 mt-0.5">{user.xp} XP</p>
      </div>
      <div className="w-full h-4 bg-slate-900/5 rounded-b-xl"></div>
    </div>
  );
}

function CrownIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 18h20v2H2v-2zm1.6-9l2.8 5.7h11.2L20.4 9l-4.4 3.3L12 5l-4 7.3L3.6 9z" />
    </svg>
  );
}
