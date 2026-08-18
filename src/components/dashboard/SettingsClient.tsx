"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Copy,
  Check,
  User,
  Globe,
  Monitor,
  Moon,
  Sun,
  Mic,
  CreditCard,
  FileText,
  ShieldAlert,
  Info,
  LogOut,
  ChevronDown,
  ChevronUp,
  Camera,
  Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SettingsClientProps {
  user: {
    customId: string;
    fullName: string;
    email: string;
    avatarUrl: string | null;
    phone: string;
    coins: number;
    plan: string;
    planEndDate: string | null;
    freeAiCredits: number;
    metrics: {
      tests: number;
      timeHours: number;
      xp: number;
    };
  };
}

export default function SettingsClient({ user }: SettingsClientProps) {
  const { signOut } = useAuth();
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("profile");
  const [logoutModal, setLogoutModal] = useState(false);

  // Form states for profile edit
  const [name, setName] = useState(user.fullName);
  const [phone, setPhone] = useState(user.phone);
  
  // Settings states
  const [language, setLanguage] = useState("uz");
  const [theme, setTheme] = useState("system");
  const [micStatus, setMicStatus] = useState<"idle" | "testing" | "success" | "error">("idle");

  const handleCopyId = () => {
    navigator.clipboard.writeText(user.customId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const testMic = async () => {
    setMicStatus("testing");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setMicStatus("success");
      setTimeout(() => setMicStatus("idle"), 3000);
    } catch (e) {
      setMicStatus("error");
      setTimeout(() => setMicStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Sozlamalar</h1>

      {/* 1. ASOSIY PROFIL KARTASI */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center shrink-0 overflow-hidden relative group">
            {user.avatarUrl ? (
              <Image src={user.avatarUrl} alt="Avatar" width={96} height={96} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-slate-400">{user.fullName.charAt(0)}</span>
            )}
            {/* Quick edit overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-black text-slate-900 truncate">{user.fullName}</h2>
            <p className="text-slate-500 font-medium">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-mono text-slate-600 border border-slate-200 cursor-copy hover:bg-slate-200 transition-colors" onClick={handleCopyId}>
                ID: {user.customId}
                {copied ? <Check className="w-3.5 h-3.5 text-green-600 ml-1" /> : <Copy className="w-3.5 h-3.5 text-slate-400 ml-1" />}
              </div>
            </div>
          </div>

          {/* Plan Badge */}
          <div className="shrink-0 flex flex-col items-end gap-2">
            <div className={`px-4 py-2 rounded-xl text-sm font-bold border flex items-center gap-2 ${
              user.plan === "FREE" ? "bg-slate-100 text-slate-600 border-slate-200" :
              user.plan === "PRO" || user.plan === "ULTRA" || user.plan === "PRO_PLUS" || user.plan === "START"
              ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"
            }`}>
              {user.plan === "FREE" ? "Bepul Tarif" : `${user.plan} Obuna`}
              {user.plan !== "FREE" && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mt-8 border-t border-slate-100 pt-6">
          <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Amaliyot vaqti</span>
            <span className="font-bold text-slate-900 text-lg">{user.metrics.timeHours} <span className="text-sm font-medium text-slate-500">soat</span></span>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Ishlangan testlar</span>
            <span className="font-bold text-slate-900 text-lg">{user.metrics.tests} <span className="text-sm font-medium text-slate-500">ta</span></span>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 flex flex-col items-center text-center border border-amber-100/50">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">Tajriba (XP)</span>
            <span className="font-black text-amber-500 text-lg">{user.metrics.xp}</span>
          </div>
        </div>
      </div>

      {/* 2. GURUHLANGAN SOZLAMALAR */}
      
      {/* Guruh 1: Shaxsiy Ma'lumotlar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AccordionHeader 
          icon={<User className="w-5 h-5 text-blue-500" />} 
          title="Shaxsiy Ma'lumotlar" 
          isOpen={activeAccordion === "profile"} 
          onClick={() => toggleAccordion("profile")} 
        />
        {activeAccordion === "profile" && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center relative cursor-pointer group">
                 {user.avatarUrl ? (
                    <Image src={user.avatarUrl} alt="Avatar" width={64} height={64} className="w-full h-full object-cover group-hover:opacity-50 transition-opacity" />
                  ) : (
                    <span className="font-bold text-slate-400">{user.fullName.charAt(0)}</span>
                  )}
                  <Camera className="w-5 h-5 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <Button variant="outline" size="sm" className="mb-1">Rasm yuklash</Button>
                <p className="text-[11px] text-slate-500">JPG, PNG, WebP (Maks: 5MB)</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">To&apos;liq ism</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full rounded-xl border-slate-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none border"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Telefon raqam</label>
                <input 
                  type="text" 
                  value={phone} 
                  placeholder="+998 90 123 45 67"
                  onChange={(e) => setPhone(e.target.value)} 
                  className="w-full rounded-xl border-slate-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none border"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">O&apos;zgarishlarni saqlash</Button>
              <Button variant="outline" onClick={() => {setName(user.fullName); setPhone(user.phone)}}>Bekor qilish</Button>
            </div>
          </div>
        )}
      </div>

      {/* Guruh 2: Ilova Sozlamalari */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AccordionHeader 
          icon={<Monitor className="w-5 h-5 text-indigo-500" />} 
          title="Ilova Sozlamalari" 
          isOpen={activeAccordion === "app"} 
          onClick={() => toggleAccordion("app")} 
        />
        {activeAccordion === "app" && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-6 animate-in slide-in-from-top-2 duration-200">
            
            {/* Til */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Til (Language)</p>
                  <p className="text-xs text-slate-500">Ilova interfeysi tilini tanlang</p>
                </div>
              </div>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-lg border-slate-200 px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-600 border min-w-[140px]"
              >
                <option value="uz">O&apos;zbekcha</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="tr">Türkçe</option>
              </select>
            </div>

            <div className="w-full border-t border-slate-200" />

            {/* Mavzu */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mavzu (Theme)</p>
                  <p className="text-xs text-slate-500">Yorug&apos; yoki qorong&apos;u rejim</p>
                </div>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                {[
                  { id: "system", icon: <Monitor className="w-4 h-4" />, label: "Tizim" },
                  { id: "light", icon: <Sun className="w-4 h-4" />, label: "Yorug'" },
                  { id: "dark", icon: <Moon className="w-4 h-4" />, label: "Qorong'u" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      theme === t.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {t.icon}
                    <span className="hidden sm:inline">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full border-t border-slate-200" />

            {/* Mikrofon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Mic className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mikrofon Sozlamalari</p>
                  <p className="text-xs text-slate-500">Speaking testi uchun mikrofonni tekshirish</p>
                </div>
              </div>
              <Button variant="outline" onClick={testMic} disabled={micStatus === "testing"} className="min-w-[140px]">
                {micStatus === "idle" && "Tekshirish"}
                {micStatus === "testing" && "Tekshirilmoqda..."}
                {micStatus === "success" && <span className="text-green-600 flex items-center gap-1"><Check className="w-4 h-4" /> Ruxsat berilgan</span>}
                {micStatus === "error" && <span className="text-rose-600">Xatolik!</span>}
              </Button>
            </div>

          </div>
        )}
      </div>

      {/* Guruh 3: Obuna va To'lovlar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AccordionHeader 
          icon={<CreditCard className="w-5 h-5 text-emerald-500" />} 
          title="Obuna va To'lovlar" 
          isOpen={activeAccordion === "billing"} 
          onClick={() => toggleAccordion("billing")} 
        />
        {activeAccordion === "billing" && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 animate-in slide-in-from-top-2 duration-200">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Plan Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full blur-2xl -mr-10 -mt-10" />
                <h3 className="text-sm font-bold text-slate-900 mb-1 relative z-10">Joriy Tarif</h3>
                <p className="text-2xl font-black text-green-600 relative z-10 mb-4">{user.plan}</p>
                
                <div className="space-y-2 text-sm text-slate-600 relative z-10">
                  <div className="flex justify-between">
                    <span>AI Limit:</span>
                    <span className="font-bold">{user.freeAiCredits} ta</span>
                  </div>
                  {user.planEndDate && (
                    <div className="flex justify-between">
                      <span>Tugaydi:</span>
                      <span className="font-bold">{new Date(user.planEndDate).toLocaleDateString("uz-UZ")}</span>
                    </div>
                  )}
                </div>
                <Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white relative z-10" onClick={() => router.push("/pricing")}>
                  Tarifni yangilash
                </Button>
              </div>

              {/* Coin Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full blur-2xl -mr-10 -mt-10" />
                <h3 className="text-sm font-bold text-slate-900 mb-1 relative z-10">Coin Hamyoni</h3>
                <p className="text-2xl font-black text-amber-500 relative z-10 mb-4 flex items-center gap-2">
                  <Coins className="w-6 h-6" /> {user.coins}
                </p>
                
                <div className="space-y-2 text-sm text-slate-600 relative z-10">
                  <p className="text-xs leading-relaxed text-slate-500">
                    Coinlarni to&apos;lov qilish yoki har kuni test ishlab tekinga yig&apos;ish mumkin.
                  </p>
                </div>
                <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white relative z-10" onClick={() => router.push("/pricing")}>
                  Coin xarid qilish
                </Button>
              </div>
            </div>
            
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-blue-800">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                Platforma to&apos;lovlari hozircha <strong>Telegram Admin</strong> orqali tasdiqlanmoqda. "Obuna" bo&apos;limiga o&apos;tib o&apos;z ID raqamingiz orqali chek yuborishingiz mumkin.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Guruh 4: Huquqiy va Ma'lumot */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AccordionHeader 
          icon={<FileText className="w-5 h-5 text-slate-500" />} 
          title="Huquqiy va Ma'lumot" 
          isOpen={activeAccordion === "legal"} 
          onClick={() => toggleAccordion("legal")} 
        />
        {activeAccordion === "legal" && (
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-sm text-slate-700 font-medium">
              Foydalanish Shartlari (Terms of Service)
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-sm text-slate-700 font-medium">
              Maxfiylik Siyosati (Privacy Policy)
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
            </button>
            <div className="w-full flex items-center justify-between p-4 bg-slate-50/50 text-sm text-slate-500">
              Ilova Haqida (About Evalora)
              <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded">v1.0.0</span>
            </div>
          </div>
        )}
      </div>

      {/* Guruh 5: Akkaunt Xavfsizligi */}
      <div className="bg-white rounded-2xl border border-rose-200 shadow-sm overflow-hidden mb-8">
        <button 
          className="w-full p-5 flex items-center justify-between hover:bg-rose-50 transition-colors group"
          onClick={() => setLogoutModal(true)}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <LogOut className="w-5 h-5 text-rose-600" />
            </div>
            <span className="font-bold text-rose-600 text-lg">Akkauntdan chiqish</span>
          </div>
        </button>
      </div>

      {/* Logout Modal */}
      {logoutModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldAlert className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Tizimdan chiqish</h2>
            <p className="text-slate-500 text-sm mb-6">
              Haqiqatan ham akkauntingizdan chiqmoqchimisiz? Ma&apos;lumotlaringiz saqlanib qoladi, lekin qayta kirishingiz kerak bo&apos;ladi.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setLogoutModal(false)}>
                Bekor qilish
              </Button>
              <Button 
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white" 
                onClick={() => {
                  setLogoutModal(false);
                  signOut(() => router.push("/sign-in"));
                }}
              >
                Chiqish
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Subcomponent ----
function AccordionHeader({ 
  icon, 
  title, 
  isOpen, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  isOpen: boolean; 
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <span className="font-bold text-slate-900 text-lg">{title}</span>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-slate-200 text-slate-900" : "bg-slate-100 text-slate-500"}`}>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>
    </button>
  );
}
