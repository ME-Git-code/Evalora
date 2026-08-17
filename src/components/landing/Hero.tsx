import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[100vh]">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-transparent opacity-80" />
      </div>

      {/* Pill Badge */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
        Tinglash, O'qish, Yozish va Gapirish uchun AI mock testlar
      </div>

      {/* Main Content */}
      <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
        CEFR imtihonlariga <span className="text-violet-600 relative inline-block">
          AI yordamida
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-violet-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="4" fill="transparent" />
          </svg>
        </span> tez va aniq tayyorlaning.
      </h1>

      <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
        Har qanday qurilmada haqiqiy imtihon — to'rtta ko'nikma, haqiqiy vaqt chegaralari, AI baholash. Bir daqiqada CEFR darajangizni yozma tahlil bilan oling.
      </p>

      {/* Dual CTA */}
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 ease-out mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Link href="/sign-up" className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-full h-14 px-8 text-lg font-medium shadow-lg shadow-blue-600/20 transition-all hover:scale-105" })}>
          Ilovani ochish -&gt;
        </Link>
        <Link href="#demo" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto rounded-full h-14 px-8 text-lg font-medium border-slate-200 text-slate-700 hover:bg-slate-100/50 bg-white/50 backdrop-blur-sm transition-all hover:scale-105" })}>
          Namuna natijani ko'rish
        </Link>
      </div>

      {/* Dashboard Preview Image (Optional) */}
      <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 mt-20 w-full max-w-5xl mx-auto px-4 relative">
        <div className="rounded-2xl border border-slate-200/60 bg-white/40 p-2 shadow-2xl backdrop-blur-xl">
          <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center border border-slate-200">
            <span className="text-slate-400 font-medium">Platforma interfeysi skrinshoti shu yerda bo'ladi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
