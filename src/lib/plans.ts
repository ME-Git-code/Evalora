import { PlanType } from "../../generated/prisma/enums";

// =============================================
// TARIF REJALARI KONFIGURATSIYASI
// =============================================

export interface PlanConfig {
  name: string;
  price: number; // UZS / oy
  priceLabel: string;
  slogan: string;
  monthlyAiCredits: number; // 0 = cheksiz emas, -1 = cheksiz
  aiCoinCost: number; // 1 ta qo'shimcha AI tahlili narxi (coin)
  canBuyExtraAi: boolean;
  monthlyBonusCoins: number;
  mockTestsIncluded: number; // -1 = barchasi
  features: string[];
  isPopular?: boolean;
  gradient?: string;
}

export const PLAN_CONFIG: Record<string, PlanConfig> = {
  [PlanType.FREE]: {
    name: "Free",
    price: 0,
    priceLabel: "Bepul",
    slogan: "Sinab ko'rish uchun",
    monthlyAiCredits: 2, // Jami 2 marta (1 Mock + 1 modul)
    aiCoinCost: 0,
    canBuyExtraAi: false,
    monthlyBonusCoins: 0,
    mockTestsIncluded: 0,
    features: [
      "Jami 2 ta bepul AI tahlili",
      "Cheklangan sinov testlari",
      "Asosiy natijalar ko'rinishi",
    ],
    gradient: "from-slate-50 to-slate-100",
  },
  [PlanType.START]: {
    name: "Start",
    price: 29900,
    priceLabel: "29 900 so'm/oy",
    slogan: "Arzon va qulay boshlang'ich",
    monthlyAiCredits: 3,
    aiCoinCost: 15,
    canBuyExtraAi: true,
    monthlyBonusCoins: 30,
    mockTestsIncluded: 4,
    features: [
      "3 ta AI tahlili / oy",
      "4 ta Mock test",
      "Standart testlar bazasi",
      "Oyiga 30 bonus coin",
      "Qo'shimcha AI: 15 coin",
    ],
    gradient: "from-blue-50 to-blue-100",
  },
  [PlanType.PRO]: {
    name: "Pro",
    price: 59900,
    priceLabel: "59 900 so'm/oy",
    slogan: "Eng ommabop tanlov",
    monthlyAiCredits: 6,
    aiCoinCost: 12,
    canBuyExtraAi: true,
    monthlyBonusCoins: 80,
    mockTestsIncluded: 12,
    features: [
      "6 ta AI tahlili / oy",
      "12 ta Mock test",
      "To'liq standart test bazasi",
      "Oyiga 80 bonus coin",
      "Qo'shimcha AI: 12 coin",
    ],
    isPopular: true,
    gradient: "from-violet-50 to-violet-100",
  },
  [PlanType.PRO_PLUS]: {
    name: "Pro+",
    price: 99900,
    priceLabel: "99 900 so'm/oy",
    slogan: "Kengaytirilgan imkoniyatlar",
    monthlyAiCredits: 12,
    aiCoinCost: 10,
    canBuyExtraAi: true,
    monthlyBonusCoins: 150,
    mockTestsIncluded: 20,
    features: [
      "12 ta AI tahlili / oy",
      "20 ta Mock test",
      "Barcha bo'limlar ochiq",
      "Oyiga 150 bonus coin",
      "Qo'shimcha AI: 10 coin",
    ],
    gradient: "from-amber-50 to-amber-100",
  },
  [PlanType.ULTRA]: {
    name: "Ultra",
    price: 199900,
    priceLabel: "199 900 so'm/oy",
    slogan: "Maksimal natija uchun",
    monthlyAiCredits: -1, // Cheksiz (fair-use: 5/kun)
    aiCoinCost: 0,
    canBuyExtraAi: true,
    monthlyBonusCoins: 300,
    mockTestsIncluded: -1,
    features: [
      "Cheksiz AI tahlili (5/kun)",
      "Barcha Mock testlar ochiq",
      "Barcha materiallar ochiq",
      "Oyiga 300 bonus coin",
      "Ustuvor yordam",
    ],
    gradient: "from-rose-50 to-rose-100",
  },
};

// =============================================
// COIN PAKETLARI
// =============================================

export interface CoinPackage {
  id: string;
  name: string;
  coins: number;
  bonus: number;
  totalCoins: number;
  price: number; // UZS
  priceLabel: string;
  icon: string;
}

export const COIN_PACKAGES: CoinPackage[] = [
  {
    id: "small",
    name: "Kichik paket",
    coins: 50,
    bonus: 0,
    totalCoins: 50,
    price: 9900,
    priceLabel: "9 900 so'm",
    icon: "🪙",
  },
  {
    id: "medium",
    name: "O'rta paket",
    coins: 100,
    bonus: 20,
    totalCoins: 120,
    price: 19900,
    priceLabel: "19 900 so'm",
    icon: "💰",
  },
  {
    id: "large",
    name: "Katta paket",
    coins: 240,
    bonus: 60,
    totalCoins: 300,
    price: 39900,
    priceLabel: "39 900 so'm",
    icon: "👑",
  },
];

// =============================================
// COIN MUKOFOTLARI
// =============================================

export const COIN_REWARDS = {
  TEST_COMPLETE: 1,       // Har qanday testni yakunlash
  PERFECT_SCORE: 5,       // Oddiy testdan 100%
  PERFECT_MOCK: 20,       // Mock testdan 100%
  DAILY_STREAK_5: 10,     // 5 kun ketma-ket
};

// =============================================
// COIN SARFLASH NARXLARI
// =============================================

export const COIN_COSTS = {
  UNLOCK_MOCK: 20,        // 1 ta Mock test to'plami
  UNLOCK_MODULE_BLOCK: 5, // 1 ta modul test bloki
  VIEW_EXPLANATION: 2,    // Murakkab savol yechimi
};

// =============================================
// TELEGRAM VA ALOQA
// =============================================

export const TELEGRAM_ADMIN_USERNAME = "Evalora_admin";
export const ADMIN_EMAIL = "evalora1admin@gmail.com";
