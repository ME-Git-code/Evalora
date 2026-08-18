"use client";

import { useState } from "react";
import { Shield, Coins, Check, Star, Sparkles, Zap, Crown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLAN_CONFIG, COIN_PACKAGES, type CoinPackage } from "@/lib/plans";
import { PlanType } from "../../../generated/prisma/enums";
import TelegramPaymentModal from "./TelegramPaymentModal";

interface PricingClientProps {
  userPlan: string;
  coins: number;
  freeAiCredits: number;
  endDate: string | null;
  customId: string;
}

const PLAN_ORDER = [PlanType.FREE, PlanType.START, PlanType.PRO, PlanType.PRO_PLUS, PlanType.ULTRA];

const planIcons: Record<string, React.ReactNode> = {
  FREE: <Shield className="w-5 h-5" />,
  START: <Zap className="w-5 h-5" />,
  PRO: <Star className="w-5 h-5" />,
  PRO_PLUS: <Sparkles className="w-5 h-5" />,
  ULTRA: <Crown className="w-5 h-5" />,
};

const planGradients: Record<string, string> = {
  FREE: "from-slate-500 to-slate-600",
  START: "from-blue-500 to-blue-600",
  PRO: "from-violet-500 to-violet-600",
  PRO_PLUS: "from-amber-500 to-amber-600",
  ULTRA: "from-rose-500 to-rose-600",
};

export default function PricingClient({
  userPlan,
  coins,
  freeAiCredits,
  endDate,
  customId,
}: PricingClientProps) {
  const [activeTab, setActiveTab] = useState<"plans" | "coins">("plans");
  const [telegramModal, setTelegramModal] = useState<{
    itemName: string;
    itemType: "plan" | "coin";
  } | null>(null);

  const currentPlanConfig = PLAN_CONFIG[userPlan] || PLAN_CONFIG[PlanType.FREE];
  const maxAi = currentPlanConfig.monthlyAiCredits === -1 ? "∞" : currentPlanConfig.monthlyAiCredits;

  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString("uz-UZ", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Status Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left - Plan Status */}
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Joriy Tarifingiz
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${planGradients[userPlan] || planGradients.FREE} text-white flex items-center justify-center`}>
                {planIcons[userPlan] || planIcons.FREE}
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900">{currentPlanConfig.name}</span>
                <Badge variant="outline" className="ml-2 text-xs">Faol</Badge>
              </div>
            </div>
            {formattedEndDate && (
              <p className="text-sm text-slate-500">
                Amal qilish muddati: <strong className="text-slate-700">{formattedEndDate}</strong> gacha
              </p>
            )}
            <div className="mt-3">
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-slate-500">Qolgan AI tahlili</span>
                <span className="font-bold text-slate-900">
                  {freeAiCredits} / {maxAi}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-violet-500 to-violet-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${
                      currentPlanConfig.monthlyAiCredits === -1
                        ? 100
                        : currentPlanConfig.monthlyAiCredits > 0
                        ? Math.min((freeAiCredits / currentPlanConfig.monthlyAiCredits) * 100, 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right - Coin Balance */}
          <div className="md:w-72 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-amber-50 to-amber-100/50">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
              Coin Balans
            </p>
            <div className="text-4xl font-black text-amber-600 mb-1">
              🪙 {coins}
            </div>
            <p className="text-xs text-amber-700/70 mb-3">
              {coins >= 15
                ? `${Math.floor(coins / 5)} ta test yoki qo'shimcha AI tahliliga yetarli`
                : "Coinlar yig'ib boring!"}
            </p>
            <Button
              size="sm"
              className="bg-amber-500 hover:bg-amber-600 text-white gap-1.5"
              onClick={() => setActiveTab("coins")}
            >
              Coin Sotib Olish
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("plans")}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
            activeTab === "plans"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Shield className="w-4 h-4" />
          Obuna Tariflari
        </button>
        <button
          onClick={() => setActiveTab("coins")}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
            activeTab === "coins"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Coins className="w-4 h-4" />
          Coin Hamyoni
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "plans" ? (
        <PlansTab userPlan={userPlan} onSelectPlan={(name) => setTelegramModal({ itemName: name, itemType: "plan" })} />
      ) : (
        <CoinsTab coins={coins} onSelectPackage={(name) => setTelegramModal({ itemName: name, itemType: "coin" })} />
      )}

      {/* Telegram Modal */}
      {telegramModal && (
        <TelegramPaymentModal
          customId={customId}
          itemName={telegramModal.itemName}
          itemType={telegramModal.itemType}
          onClose={() => setTelegramModal(null)}
        />
      )}
    </div>
  );
}

// =============================================
// Plans Tab
// =============================================

function PlansTab({
  userPlan,
  onSelectPlan,
}: {
  userPlan: string;
  onSelectPlan: (name: string) => void;
}) {
  return (
    <div className="overflow-x-auto pb-4 -mx-2 px-2">
      <div className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
        {PLAN_ORDER.map((planKey) => {
          const plan = PLAN_CONFIG[planKey];
          const isCurrent = userPlan === planKey;

          return (
            <div
              key={planKey}
              className={`relative flex flex-col bg-white rounded-2xl border-2 shadow-sm w-[260px] lg:w-auto shrink-0 transition-all hover:shadow-md ${
                plan.isPopular
                  ? "border-violet-400 ring-2 ring-violet-100"
                  : isCurrent
                  ? "border-blue-300"
                  : "border-slate-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-violet-500 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1">
                    <Star className="w-3 h-3" /> Eng ommabop
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-5 rounded-t-2xl bg-gradient-to-br ${plan.gradient || "from-slate-50 to-slate-100"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${planGradients[planKey]} text-white flex items-center justify-center`}>
                    {planIcons[planKey]}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{plan.name}</h3>
                </div>
                <p className="text-slate-500 text-xs">{plan.slogan}</p>
                <div className="mt-3">
                  <span className="text-2xl font-black text-slate-900">
                    {plan.price === 0 ? "Bepul" : `${plan.price.toLocaleString("uz-UZ")}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-slate-500 text-sm ml-1">so&apos;m/oy</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="p-5 flex-1 flex flex-col">
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-5">
                  {isCurrent ? (
                    <Button
                      variant="outline"
                      className="w-full border-blue-200 text-blue-600 pointer-events-none"
                      disabled
                    >
                      Joriy tarifingiz
                    </Button>
                  ) : planKey === PlanType.FREE ? (
                    <Button variant="outline" className="w-full" disabled>
                      Bepul
                    </Button>
                  ) : (
                    <Button
                      className={`w-full gap-1.5 text-white ${
                        plan.isPopular
                          ? "bg-violet-600 hover:bg-violet-700"
                          : "bg-slate-800 hover:bg-slate-900"
                      }`}
                      onClick={() => onSelectPlan(`${plan.name} (${plan.priceLabel})`)}
                    >
                      Faollashtirish
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =============================================
// Coins Tab
// =============================================

function CoinsTab({
  coins,
  onSelectPackage,
}: {
  coins: number;
  onSelectPackage: (name: string) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Balance */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl border border-amber-200 p-8 text-center">
        <p className="text-sm font-semibold text-amber-700 mb-2">Joriy Balans</p>
        <div className="text-5xl font-black text-amber-600 mb-2">🪙 {coins}</div>
        <p className="text-amber-700/60 text-sm">Coinlarni testlar, Mock to&apos;plamlar va AI tahlillari uchun sarflang</p>
      </div>

      {/* Packages */}
      <div className="grid sm:grid-cols-3 gap-5">
        {COIN_PACKAGES.map((pkg: CoinPackage) => (
          <div
            key={pkg.id}
            className="relative bg-white rounded-2xl border-2 border-slate-200 p-6 flex flex-col items-center text-center hover:border-amber-300 hover:shadow-md transition-all group"
          >
            {pkg.bonus > 0 && (
              <div className="absolute -top-3 right-4">
                <span className="bg-green-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  +{pkg.bonus} bonus
                </span>
              </div>
            )}

            <div className="text-4xl mb-3">{pkg.icon}</div>
            <h3 className="font-bold text-slate-900 text-lg">{pkg.name}</h3>
            <div className="text-3xl font-black text-amber-600 my-2">{pkg.totalCoins}</div>
            <p className="text-xs text-slate-500 mb-1">coin</p>
            <div className="w-full border-t border-slate-100 my-4" />
            <p className="font-bold text-slate-900 text-lg mb-4">{pkg.priceLabel}</p>

            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-white gap-1.5"
              onClick={() => onSelectPackage(`${pkg.name} (${pkg.totalCoins} coin)`)}
            >
              Xarid qilish
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Earning Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Coin qanday yig&apos;iladi?
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: "Har qanday testni yakunlash", reward: "+1 coin", icon: "✅" },
            { label: "Oddiy testdan 100% natija", reward: "+5 coin", icon: "🎯" },
            { label: "Mock testdan 100% natija", reward: "+20 coin", icon: "🏆" },
            { label: "5 kun ketma-ket faollik", reward: "+10 coin", icon: "🔥" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-slate-700">{item.label}</p>
              </div>
              <span className="font-bold text-green-600 text-sm whitespace-nowrap">
                {item.reward}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4 italic">
          * Bitta test uchun faqat 1 marta beriladi — qayta ishlashda coin berilmaydi.
        </p>
      </div>
    </div>
  );
}
