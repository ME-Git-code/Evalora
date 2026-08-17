import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  let user = null;
  
  if (userId) {
    user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <Link href="/" className="font-bold text-xl text-blue-600">Evalora</Link>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium text-slate-700">
          <Link href="/dashboard" className="flex items-center px-3 py-2 rounded-lg bg-blue-50 text-blue-600">
            🏠 Bosh sahifa
          </Link>
          <Link href="/practice" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-100">
            ⚡ Mashq
          </Link>
          <Link href="/results" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-100">
            📊 Natijalarim
          </Link>
          <Link href="/leaderboard" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-100">
            🏆 Reyting
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <Link href="/settings" className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
            ⚙️ Sozlamalar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="text-sm text-slate-500">
            Dashboard
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm bg-amber-50 px-3 py-1.5 rounded-full">
              🔥 {user?.streakCount || 0} kun
            </div>
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm bg-amber-50 px-3 py-1.5 rounded-full">
              🪙 {user?.coins || 0} Coin
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
