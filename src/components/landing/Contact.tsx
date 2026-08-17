"use client";

import { Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Section */}
          <div className="p-10 md:p-12 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Biz bilan bog'laning</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Platforma bo'yicha savollar, takliflar yoki hamkorlik uchun biz doim ochiqmiz. O'zingizga qulay usulda murojaat qiling.
              </p>
              
              <div className="space-y-6">
                <a href="https://t.me/evalora_admin" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-blue-50 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Telegram Admin</div>
                    <div className="font-bold text-lg">@evalora_admin</div>
                  </div>
                </a>
                
                <a href="mailto:info@evalora.uz" className="flex items-center gap-4 text-blue-50 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Elektron pochta</div>
                    <div className="font-bold text-lg">info@evalora.uz</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-sm text-blue-200/60">
              Biz odatda 24 soat ichida javob beramiz.
            </div>
          </div>
          
          {/* Form Section */}
          <div className="bg-slate-50 p-10 md:p-12 md:w-3/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Xabar qoldirish</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Ismingiz</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white"
                  placeholder="Ali Valiyev"
                />
              </div>
              
              <div>
                <label htmlFor="contact_info" className="block text-sm font-medium text-slate-700 mb-1">Email yoki Telegram username</label>
                <input 
                  type="text" 
                  id="contact_info" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white"
                  placeholder="ali@example.com yoki @ali_v"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Xabaringiz</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white resize-none"
                  placeholder="Assalomu alaykum, men platformadan foydalanish bo'yicha..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg flex items-center justify-center gap-2 mt-2 transition-all">
                Yuborish <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
