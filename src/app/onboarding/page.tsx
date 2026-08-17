import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // TODO: Add 3-step onboarding form (Profil, Tarif, Tabriknoma)

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Xush kelibsiz! Shaxsiy profilingizni yarating
        </h1>
        <p className="text-slate-500 mb-8">
          Evalora platformasiga ulandingiz. Iltimos, o'z ma'lumotlalariningizni kiriting.
        </p>
        
        {/* Step 1: Profilni sozlash */}
        <form action="/api/onboarding" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">To'liq ism</label>
            <input 
              type="text" 
              name="fullName" 
              defaultValue={user.fullName || ""} 
              className="mt-1 block w-full rounded-lg border-slate-200 shadow-sm outline-ring/50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Telefon raqam</label>
            <input 
              type="tel" 
              name="phone" 
              className="mt-1 block w-full rounded-lg border-slate-200 shadow-sm outline-ring/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Maqsaddagi CEFR darajasi</label>
            <select name="targetLevel" className="mt-1 block w-full rounded-lg border-slate-200 shadow-sm outline-ring/50">
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
          </div>
          <button type="submit" className="w-full h-11 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Saqlash va davom etish
          </button>
        </form>
      </div>
    </div>
  );
}
