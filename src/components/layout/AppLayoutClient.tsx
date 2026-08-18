"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import {
  Home,
  Zap,
  BarChart2,
  Trophy,
  Settings,
  Menu,
  ChevronLeft,
  Bell,
  Globe,
  Plus,
  LogOut,
  User,
  CreditCard,
  ChevronDown
} from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
  user: {
    fullName: string;
    avatarUrl: string | null;
    streakCount: number;
    coins: number;
    plan: string;
    level: string;
    email: string;
  } | null;
}

import FloatingSupport from "./FloatingSupport";

export default function AppLayoutClient({ children, user }: AppLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useAuth();
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Focus mode check
  const isTestMode = pathname.startsWith("/test/");

  // Close dropdown on click outside logic could be added, but keeping it simple for now.

  const navItems = [
    { href: "/dashboard", label: "Bosh sahifa", icon: <Home className="w-5 h-5" /> },
    { href: "/practice", label: "Mashq", icon: <Zap className="w-5 h-5" /> },
    { href: "/results", label: "Natijalarim", icon: <BarChart2 className="w-5 h-5" /> },
    { href: "/leaderboard", label: "Reyting", icon: <Trophy className="w-5 h-5" /> },
  ];

  // If in test mode, hide sidebar and header completely
  if (isTestMode) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1));
  const pageTitle = breadcrumbs.length > 0 ? breadcrumbs.join(" / ") : "Bosh sahifa";

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden md:flex flex-col fixed top-0 bottom-0 left-0 z-40 transition-all duration-300 ease-in-out p-4 ${
          isCollapsed ? "w-[104px]" : "w-72"
        }`}
      >
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden relative">
          {/* Logo & Toggle */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
            {!isCollapsed && (
              <Link href="/" className="font-black text-2xl text-blue-600 tracking-tight">
                Evalora<span className="text-amber-500">.</span>
              </Link>
            )}
            {isCollapsed && (
              <Link href="/" className="font-black text-2xl text-blue-600 tracking-tight mx-auto">
                E<span className="text-amber-500">.</span>
              </Link>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors ${
                isCollapsed ? "absolute -right-3 top-6 bg-white border border-slate-200 shadow-sm rounded-full" : ""
              }`}
            >
              {isCollapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-xl transition-all ${
                      isCollapsed ? "justify-center p-3" : "px-4 py-3 gap-3"
                    } ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-bold"
                        : "text-slate-600 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <div className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}>
                      {item.icon}
                    </div>
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>

                  {/* Tooltip for collapsed mode */}
                  {isCollapsed && (
                    <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl">
                      {item.label}
                      <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-800"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bottom Settings */}
          <div className="p-4 border-t border-slate-100 shrink-0">
            <div className="relative group">
              <Link
                href="/settings"
                className={`flex items-center rounded-xl transition-all ${
                  isCollapsed ? "justify-center p-3" : "px-4 py-3 gap-3"
                } ${
                  pathname.startsWith("/settings")
                    ? "bg-slate-100 text-slate-900 font-bold"
                    : "text-slate-600 hover:bg-slate-50 font-medium"
                }`}
              >
                <Settings className={`w-5 h-5 ${pathname.startsWith("/settings") ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`} />
                {!isCollapsed && <span>Sozlamalar</span>}
              </Link>
              {isCollapsed && (
                <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-xl">
                  Sozlamalar
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-800"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-lg px-2 py-2 flex items-center justify-between">
          {[...navItems, { href: "/settings", label: "Sozlamalar", icon: <Settings className="w-5 h-5" /> }].map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                  isActive ? "text-blue-600" : "text-slate-400"
                }`}
              >
                <div className={`${isActive ? "bg-blue-50 p-1.5 rounded-lg mb-1" : "mb-1"}`}>
                  {item.icon}
                </div>
                {isActive && <span className="text-[10px] font-bold">{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out md:pl-0 ${
        isCollapsed ? "md:ml-[104px]" : "md:ml-[288px]"
      }`}>
        
        {/* TOP HEADER */}
        <header className="h-20 bg-transparent px-4 md:px-8 flex items-center justify-between shrink-0 sticky top-0 z-30">
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-slate-800 text-lg md:text-xl truncate capitalize">
              {pageTitle.replace(/-/g, " ")}
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Streak */}
            <div className="hidden sm:flex items-center gap-1.5 bg-orange-50 text-orange-600 border border-orange-200/50 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm">
              <span className="text-base">🔥</span> {user?.streakCount || 0} kun
            </div>

            {/* Coins */}
            <div className="flex items-center bg-amber-50 border border-amber-200/50 rounded-full p-1 shadow-sm">
              <div className="flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-amber-600">
                <span className="text-base">🪙</span> {user?.coins || 0}
              </div>
              <Link href="/pricing" className="w-7 h-7 bg-amber-400 hover:bg-amber-500 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                <Plus className="w-4 h-4" />
              </Link>
            </div>

            {/* Notifications */}
            <button className="hidden sm:flex w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors shadow-sm relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
            </button>

            {/* Language */}
            <button className="hidden md:flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <Globe className="w-4 h-4" /> UZ <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {/* Profile Capsule */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 bg-white border border-slate-200 p-1.5 pr-4 rounded-full shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-100">
                  {user?.avatarUrl ? (
                    <Image src={user.avatarUrl} alt="Avatar" width={36} height={36} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-bold text-slate-500 text-sm">{user?.fullName?.charAt(0) || "U"}</span>
                  )}
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-bold text-slate-900 leading-tight">{user?.fullName?.split(" ")[0] || "User"}</p>
                  <p className="text-[10px] font-semibold text-slate-500 leading-tight flex items-center gap-1">
                    {user?.level || "A1"} <span className="w-1 h-1 rounded-full bg-slate-300"></span> {user?.plan || "Free"}
                  </p>
                </div>
                <ChevronDown className="hidden lg:block w-4 h-4 text-slate-400 ml-1" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)}></div>
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                      <p className="font-bold text-slate-900">{user?.fullName}</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{user?.email}</p>
                    </div>
                    <div className="p-2">
                      <Link href="/settings" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">
                        <Settings className="w-4 h-4 text-slate-400" />
                        Sozlamalar
                      </Link>
                      <Link href="/pricing" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">
                        <CreditCard className="w-4 h-4 text-slate-400" />
                        Obuna & To&apos;lovlar
                      </Link>
                    </div>
                    <div className="p-2 border-t border-slate-100">
                      <button 
                        onClick={() => signOut(() => router.push("/sign-in"))}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50 text-rose-600 text-sm font-bold transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Chiqish
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 px-4 md:px-8 pb-24 md:pb-8 pt-4 overflow-x-hidden">
          {children}
        </main>
      </div>

      <FloatingSupport />
    </div>
  );
}
