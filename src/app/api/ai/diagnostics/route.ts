import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
// import { GoogleGenerativeAI } from "@google/genai"; // Gemini SDK
// import Groq from "groq-sdk"; // Groq SDK

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { testId, skill, content } = body;

    if (!testId || !skill) {
      return new NextResponse("testId and skill are required", { status: 400 });
    }

    // TODO: Baza (Prisma) orqali foydalanuvchining obunasi va AI limitlari tekshiriladi
    // Agar limit tugagan bo'lsa va Coin ham yetmasa, 403 qaytariladi.

    if (skill === "WRITING") {
      if (!content) {
        return new NextResponse("Content is required for WRITING skill", { status: 400 });
      }
      // 1. Gemini API (gemini-1.5-flash) ga insho va TÖMER CEFR rubrikasi jo'natiladi
      // 2. Qat'iy JSON formatdagi baho, tushuntirish va xatolar tuzatmasi qaytariladi
      
      // Mocked Response
      return NextResponse.json({
        scores: { taskAchievement: 22, coherenceCohesion: 20, lexicalResource: 21, grammaticalAccuracy: 19, totalScore: 82, calculatedLevel: "B2" },
        corrections: [{ original: "Ben gitmek istedim", corrected: "Gitmek istiyordum", reason: "Zaman uyumu" }],
        generalFeedback: "Umuman olganda yaxshi, lekin murakkabroq so'zlar ishlating.",
        recommendations: ["Ko'proq sinonimlarni yodlang"]
      });
    }

    if (skill === "SPEAKING") {
      // 1. Groq (whisper-large-v3) ga audio uzatiladi
      // 2. Transkript va metrikalar (so'z/daqiqa) olinadi
      // 3. Gemini API yordamida fonetik/grammatik baholanadi
      return NextResponse.json({ status: "Speaking baholandi (WIP)" });
    }

    if (skill === "READING" || skill === "LISTENING") {
      // 1. Faqat xato qilingan savollar ro'yxati va ularning to'g'ri javoblari Gemini'ga yuboriladi
      // 2. Tushuntirish olinadi
      return NextResponse.json({ status: "Reading/Listening tahlili (WIP)" });
    }

    return new NextResponse("Invalid Skill", { status: 400 });

  } catch (error) {
    console.error("[AI_DIAGNOSTICS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
