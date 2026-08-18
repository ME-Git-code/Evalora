// =============================================
// EVALORA XP VA REYTING TIZIMI QOIDALARI
// =============================================

export const XP_RULES = {
  DAILY_CAP: 250, // Bir kunda eng ko'p yig'ish mumkin bo'lgan XP

  // Test turlariga ko'ra maksimal XP
  MAX_XP: {
    MINI_TEST: 15,
    MODULE_TEST: 40,
    MOCK_TEST: 100,
  },

  // Bonuslar
  BONUS: {
    STREAK_5_DAYS: 25,
    FIRST_PERFECT_SCORE: 10,
  },

  MIN_PERCENTAGE_REQUIRED: 50, // XP olish uchun eng kamida 50% yechilgan bo'lishi kerak
};

/**
 * Testdan olingan foiz va test turiga qarab XP hisoblash
 * @param percentage 0 dan 100 gacha bo'lgan foiz
 * @param testType "MINI" | "MODULE" | "MOCK"
 * @returns Beriladigan XP miqdori
 */
export function calculateEarnedXp(percentage: number, testType: "MINI" | "MODULE" | "MOCK"): number {
  if (percentage < XP_RULES.MIN_PERCENTAGE_REQUIRED) return 0;

  const max = XP_RULES.MAX_XP[`${testType}_TEST` as keyof typeof XP_RULES.MAX_XP];
  return Math.round(max * (percentage / 100));
}
