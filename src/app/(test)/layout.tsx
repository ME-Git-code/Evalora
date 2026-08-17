import { ReactNode } from "react";

export default function TestLayout({ children }: { children: ReactNode }) {
  // Test interfeysida foydalanuvchi diqqatini jamlashi uchun 
  // doimiy Sidebar va Header yashirilgan toza (Fullscreen Focus Mode) muhit beriladi.
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {children}
    </div>
  );
}
