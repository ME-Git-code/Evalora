"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, Paperclip, Send, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendSupportMessage, getUnreadSupportMessages, markSupportMessageAsRead } from "@/app/actions/support";
import { toast } from "sonner";
import Link from "next/link";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [replies, setReplies] = useState<any[]>([]);

  useEffect(() => {
    // Check for unread messages periodically or on mount
    const fetchUnread = async () => {
      try {
        const unread = await getUnreadSupportMessages();
        if (unread.length > 0) {
          setUnreadCount(unread.length);
          setReplies(unread);
          // Show toast for the first unread
          const first = unread[0];
          toast("🔔 Admin javobi keldi!", {
            description: "So'rovingiz bo'yicha yordam xizmati javob berdi.",
            action: {
              label: "Ko'rish",
              onClick: () => {
                setIsOpen(true);
                markSupportMessageAsRead(first.id);
                setUnreadCount(prev => Math.max(0, prev - 1));
              }
            }
          });
        }
      } catch (e) {}
    };

    fetchUnread();
    const interval = setInterval(fetchUnread, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setIsSubmitting(true);
    try {
      await sendSupportMessage(message);
      setMessage("");
      setIsOpen(false);
      toast.success("Xabaringiz yuborildi!", {
        description: "Adminstratorlarimiz tez orada sizga yordam berishadi."
      });
    } catch (e) {
      toast.error("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center z-40 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold flex items-center justify-center rounded-full animate-pulse border-2 border-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Support Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none pointer-events-auto">
          <div 
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 sm:fixed sm:bottom-24 sm:right-6 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <h3 className="font-bold text-lg">Fikr bildirish / Yordam</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 bg-slate-50 flex flex-col gap-4">
              
              {/* If there are unread replies */}
              {replies.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm mb-2 relative">
                  <div className="absolute top-0 right-0 w-full h-full pointer-events-none rounded-xl overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400 opacity-10 blur-xl"></div>
                  </div>
                  <h4 className="font-bold text-amber-800 text-sm mb-1 flex items-center gap-1">
                    <Bell className="w-4 h-4" /> Admin javobi:
                  </h4>
                  <p className="text-sm text-slate-700 whitespace-pre-wrap">{replies[0].adminReply}</p>
                </div>
              )}

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nima yaxshi, nima yomon — istaganingizni yozing..."
                className="w-full h-32 p-3 bg-white border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-700"
              />

              <div className="flex items-center justify-between mt-2">
                <button className="text-slate-400 hover:text-blue-600 transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-50">
                  <Paperclip className="w-5 h-5" />
                </button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={!message.trim() || isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-10 px-5 gap-2"
                >
                  Yuborish <Send className="w-4 h-4" />
                </Button>
              </div>

              <div className="border-t border-slate-200 mt-2 pt-4 text-center">
                <p className="text-xs text-slate-500">
                  Yoki administratorga Telegram orqali to'g'ridan-to'g'ri yozing:{" "}
                  <Link href="https://t.me/Evalora_admin" target="_blank" className="text-blue-600 font-bold hover:underline">
                    @Evalora_admin
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
