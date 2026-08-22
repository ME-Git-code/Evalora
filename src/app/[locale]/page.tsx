import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/landing/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-transparent scroll-smooth">
      <Header />

      <main className="flex flex-col gap-0">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}