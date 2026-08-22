import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallbackPage() {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-xs font-semibold text-slate-700">Tizimga yo'naltirilmoqda...</p>
            <AuthenticateWithRedirectCallback />
        </div>
    );
}