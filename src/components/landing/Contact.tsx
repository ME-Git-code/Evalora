'use client';

import { useState, FormEvent } from "react";
import { Mail, Send, MessageCircle, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", contact_info: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setIsSubmitted(true);
      setFormData({ name: "", contact_info: "", message: "" });
    } catch {
      setError("Xabar yuborishda xatolik yuz berdi. Qaytadan urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60 shadow-sm mb-3">
            <Mail className="w-3.5 h-3.5" />
            Aloqa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Biz bilan bog'laning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto font-normal">
            Savollar, takliflar yoki hamkorlik bo'yicha tezkor javob oling.
          </p>
        </div>

        <div className="rounded-3xl bg-white/45 backdrop-blur-xl border border-white/60 shadow-xl shadow-black/5 overflow-hidden flex flex-col md:flex-row">

          <div className="p-8 sm:p-12 md:w-5/12 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md mb-6">
                <Sparkles className="w-3 h-3 text-blue-200" />
                24/7 Qo'llab-quvvatlash
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Muloqotga doim tayyormiz
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-8">
                Istalgan vaqtda yozing. Texnik yordam va savollaringizga imkon qadar tezkor javob beramiz.
              </p>

              <div className="space-y-4">
                <a
                  href="https://t.me/Evalora_admin"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-blue-200 font-medium">Telegram Admin</div>
                    <div className="font-bold text-sm sm:text-base">@Evalora_admin</div>
                  </div>
                </a>

                <a
                  href="mailto:evalora1admin@gmail.com"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-blue-200 font-medium">Elektron pochta</div>
                    <div className="font-bold text-sm sm:text-base break-all">evalora1admin@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/15 text-[11px] text-blue-100/70">
              Odatda javob qaytarish vaqti: 15-30 daqiqa
            </div>
          </div>

          <div className="p-8 sm:p-12 md:w-7/12 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Xabar qoldiring
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Quyidagi formani to'ldiring, xabaringiz to'g'ridan-to'g'ri tizim administratoriga yetib boradi.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">Xabaringiz yuborildi!</h4>
                <p className="text-xs text-emerald-700 mt-1">Tez orada siz bilan bog'lanamiz.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-emerald-700 underline"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm transition-all bg-white/80"
                    placeholder="Ali Valiyev"
                  />
                </div>

                <div>
                  <label htmlFor="contact_info" className="block text-xs font-semibold text-slate-700 mb-1">
                    Telegram yoki Email
                  </label>
                  <input
                    type="text"
                    id="contact_info"
                    required
                    value={formData.contact_info}
                    onChange={(e) => setFormData({ ...formData, contact_info: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm transition-all bg-white/80"
                    placeholder="@ali_valiyev yoki ali@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Xabaringiz
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm transition-all bg-white/80 resize-none"
                    placeholder="Savolingiz yoki fikringizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all active:scale-95 group mt-2"
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Xabarni yuborish</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}