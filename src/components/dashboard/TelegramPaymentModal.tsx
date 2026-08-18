"use client";

import { X, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TELEGRAM_ADMIN_USERNAME } from "@/lib/plans";

interface TelegramPaymentModalProps {
  customId: string;
  itemName: string; // Tarif yoki Coin paket nomi
  itemType: "plan" | "coin";
  onClose: () => void;
}

export default function TelegramPaymentModal({
  customId,
  itemName,
  itemType,
  onClose,
}: TelegramPaymentModalProps) {
  const messageText = encodeURIComponent(
    `Assalomu alaykum! Men Evalora platformasida ${
      itemType === "plan" ? `${itemName} tarifini` : `${itemName} coin paketini`
    } faollashtirmoqchiman.\nMening ID raqamim: ${customId}`
  );

  const telegramUrl = `https://t.me/${TELEGRAM_ADMIN_USERNAME}?text=${messageText}`;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Telegram orqali to&apos;lov</h2>
              <p className="text-blue-100 text-sm">Xavfsiz va tezkor</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Selected Item */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">
              Tanlangan {itemType === "plan" ? "tarif" : "paket"}
            </p>
            <p className="font-bold text-slate-900 text-lg">{itemName}</p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">Telegram adminga yozing</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Pastdagi tugma orqali avtomatik xabar jo&apos;natiladi
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">To&apos;lovni amalga oshiring</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Admin sizga rekvizitlarni yuboradi. To&apos;lov chekini Telegram orqali yuboring.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">Faollashtiriladi</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Admin tekshirgach, tarifingiz yoki coinlaringiz avtomatik faollashadi.
                </p>
              </div>
            </div>
          </div>

          {/* User ID */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Sizning ID</p>
              <p className="font-mono font-bold text-slate-900">{customId}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0 flex flex-col gap-3">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-[#0088cc] hover:bg-[#006da3] text-white gap-2 h-12 text-base">
              <Send className="w-4 h-4" />
              Telegram orqali adminga yozish
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </Button>
          </a>
          <Button variant="outline" className="w-full" onClick={onClose}>
            Yopish
          </Button>
        </div>
      </div>
    </div>
  );
}
