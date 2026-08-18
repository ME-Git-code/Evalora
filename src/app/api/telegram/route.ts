import { NextResponse } from "next/server";

export async function GET() {
    const RENDER_BOT_URL = process.env.RENDER_BOT_URL || "https://evalora-userbot.onrender.com/ping";

    try {
        const res = await fetch(RENDER_BOT_URL, { cache: "no-store" });
        const text = await res.text();

        return NextResponse.json({
            status: "success",
            message: "Render botga ping yuborildi",
            botResponse: text,
        });
    } catch (error: any) {
        return NextResponse.json(
            { status: "error", error: error.message },
            { status: 500 }
        );
    }
}