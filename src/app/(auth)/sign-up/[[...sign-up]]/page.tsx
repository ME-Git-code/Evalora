import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp 
      fallbackRedirectUrl="/dashboard"
      appearance={{
        elements: {
          rootBox: "w-full flex justify-center",
          cardBox: "w-full max-w-[400px] shadow-none border-0",
          card: "w-full shadow-none border-0 bg-transparent p-0 gap-6",
          headerTitle: "hidden",
          headerSubtitle: "hidden",
          socialButtonsBlockButton: "h-12 border-slate-200 hover:bg-slate-50 rounded-xl text-slate-700 font-medium text-base",
          socialButtonsBlockButtonText: "font-semibold",
          dividerRow: "my-4",
          dividerText: "text-slate-400 text-sm",
          formFieldLabel: "text-slate-700 font-medium mb-1.5",
          formFieldInput: "h-12 rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white text-base",
          formButtonPrimary: "h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-base mt-2 transition-all shadow-sm shadow-blue-600/20",
          footerActionLink: "text-blue-600 hover:text-blue-700 font-semibold",
          footerActionText: "text-slate-500",
          identityPreviewEditButtonIcon: "text-blue-600",
        }
      }}
    />
  );
}
