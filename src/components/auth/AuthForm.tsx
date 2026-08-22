'use client';

import { useState, useEffect, FormEvent } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs/legacy";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, AlertCircle, KeyRound, CheckCircle2, RefreshCw } from "lucide-react";

export function AuthForm() {
    const { signIn, isLoaded: signInLoaded } = useSignIn();
    const { signUp, isLoaded: signUpLoaded } = useSignUp();
    const { setActive, signOut } = useClerk();
    const { isSignedIn } = useUser();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState<"email" | "code">("email");
    const [authMode, setAuthMode] = useState<"sign-in" | "sign-up">("sign-in");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Agar foydalanuvchi allaqachon kirgan bo'lsa, to'g'ridan-to'g'ri dashboard'ga o'tkazish
    useEffect(() => {
        if (isSignedIn) {
            router.replace("/dashboard");
        }
    }, [isSignedIn, router]);

    // 1. Google OAuth
    const handleGoogleAuth = async () => {
        if (!signInLoaded || !signIn) return;
        try {
            if (isSignedIn) await signOut();
            await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/dashboard",
            });
        } catch (err: any) {
            setError(err?.errors?.[0]?.message || "Google orqali ulanishda xatolik yuz berdi");
        }
    };

    // 2. Email tekshirish va kod yuborish
    const handleSendEmailCode = async (e: FormEvent) => {
        e.preventDefault();
        if (!signInLoaded || !signIn || !signUpLoaded || !signUp) return;
        setLoading(true);
        setError("");

        try {
            // Eski aktiv sessiya bo'lsa, tozalab yangitdan boshlaymiz
            if (isSignedIn) {
                await signOut();
            }

            // 1-QADAM: Avval mavjud akkaunt sifatida (Sign-In) tekshirib ko'ramiz
            try {
                const signInAttempt = await signIn.create({
                    identifier: email,
                });

                const firstFactor = signInAttempt.supportedFirstFactors?.find(
                    (factor: any) => factor.strategy === "email_code"
                ) as any;

                if (firstFactor) {
                    await signIn.prepareFirstFactor({
                        strategy: "email_code",
                        emailAddressId: firstFactor.emailAddressId,
                    });
                    setAuthMode("sign-in");
                    setStep("code");
                    setLoading(false);
                    return;
                }
            } catch (signInErr: any) {
                // Agar akkaunt topilmasa (form_identifier_not_found), Sign-Up ga o'tadi
                console.log("Mavjud akkaunt topilmadi, yangi akkaunt ochiladi:", signInErr);
            }

            // 2-QADAM: Akkaunt mavjud bo'lmasa -> Yangi akkaunt ochish (Sign-Up)
            await signUp.create({
                emailAddress: email,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            setAuthMode("sign-up");
            setStep("code");
        } catch (err: any) {
            const errMsg = err?.errors?.[0]?.message || "Email yuborishda xatolik yuz berdi";
            // Agar "Session already exists" xatosi chiqsa, avtomatik tozalab dashboardga yo'naltiramiz
            if (errMsg.toLowerCase().includes("session already exists")) {
                router.replace("/dashboard");
                return;
            }
            setError(errMsg);
        } finally {
            setLoading(false);
        }
    };

    // 3. Kodni tasdiqlash
    const handleVerifyCode = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (authMode === "sign-in") {
                const result = await signIn!.attemptFirstFactor({
                    strategy: "email_code",
                    code,
                });
                if (result.status === "complete") {
                    await setActive({ session: result.createdSessionId });
                    router.push("/dashboard");
                }
            } else {
                const result = await signUp!.attemptEmailAddressVerification({
                    code,
                });
                if (result.status === "complete") {
                    await setActive({ session: result.createdSessionId });
                    router.push("/dashboard");
                }
            }
        } catch (err: any) {
            setError(err?.errors?.[0]?.message || "Tasdiqlash kodi noto'g'ri yoki muddati o'tgan");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-5">
            <div id="clerk-captcha" />

            {step === "code" ? (
                <form onSubmit={handleVerifyCode} className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="text-center mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                            <KeyRound className="w-6 h-6" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">
                            {authMode === "sign-in" ? "Tizimga kirish" : "Akkauntni faollashtirish"}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">
                            <strong>{email}</strong> manziliga 6 xonali tasdiqlash kodi yuborildi.
                        </p>
                    </div>

                    {error && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Tasdiqlash kodi
                        </label>
                        <input
                            type="text"
                            required
                            value={code}
                            onChange={(e) => setCode(e.target.value.trim())}
                            placeholder="123456"
                            maxLength={6}
                            className="w-full text-center tracking-widest font-mono text-lg py-2.5 rounded-xl border border-slate-200/80 bg-white/80 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all active:scale-98"
                    >
                        {loading ? (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>Tasdiqlash va kirish</span>
                                <CheckCircle2 className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep("email")}
                        className="w-full text-center text-xs text-slate-500 hover:text-slate-800 transition-colors mt-2"
                    >
                        Boshqa email kiritish
                    </button>
                </form>
            ) : (
                <>
                    {/* Google OAuth */}
                    <button
                        type="button"
                        onClick={handleGoogleAuth}
                        className="w-full h-11 px-4 rounded-xl bg-white/80 hover:bg-white text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200/80 flex items-center justify-center gap-2.5 transition-all shadow-sm hover:scale-[1.01] active:scale-98"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                        </svg>
                        <span>Google orqali davom etish</span>
                    </button>

                    <div className="relative flex items-center justify-center my-1">
                        <div className="border-t border-slate-200/80 w-full" />
                        <span className="bg-transparent px-3 text-[11px] font-medium uppercase text-slate-600 shrink-0">
                            yoki email bilan
                        </span>
                        <div className="border-t border-slate-200/80 w-full" />
                    </div>

                    {error && (
                        <div className="p-3 rounded-xl bg-red-50/90 border border-red-200 text-red-700 text-xs flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                <span>{error}</span>
                            </div>
                            <button
                                type="button"
                                onClick={async () => {
                                    await signOut();
                                    setError("");
                                }}
                                className="text-[11px] font-bold underline shrink-0 hover:text-red-900"
                            >
                                Tozalash
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSendEmailCode} className="space-y-3.5">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Email manzil
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nomingiz@email.com"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/80 bg-white/80 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all active:scale-98 mt-2"
                        >
                            {loading ? (
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Davom etish (Kod olish)</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-[11px] text-slate-600">
                        Emailingizga bir martalik 6 xonali xavfsiz kod yuboriladi. Parol eslab qolish shart emas.
                    </p>
                </>
            )}
        </div>
    );
}