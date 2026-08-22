import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html
        lang={locale}
        data-scroll-behavior="smooth"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      >
        <body className="min-h-full flex flex-col bg-[#faf8f2] text-slate-900 relative">

          {/* Global Glacier Mist Aura */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div
              className="absolute -top-[10%] -left-[10%] -right-[10%] -bottom-[10%] blur-[120px] md:blur-[180px] opacity-75"
              style={{
                background:
                  'radial-gradient(circle at 50% 20%, rgba(77,210,255,0.28) 0%, rgba(255,255,255,0) 50%), radial-gradient(circle at 80% 60%, rgba(53,230,192,0.22) 0%, rgba(255,255,255,0) 50%), radial-gradient(circle at 20% 80%, rgba(91,110,245,0.2) 0%, rgba(255,255,255,0) 50%)',
              }}
              aria-hidden="true"
            />
          </div>

          <NextIntlClientProvider messages={messages} locale={locale}>
            <TooltipProvider>
              <div className="relative z-[1] flex-1 flex flex-col bg-transparent">
                {children}
              </div>
            </TooltipProvider>
            <Toaster position="top-center" richColors />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}