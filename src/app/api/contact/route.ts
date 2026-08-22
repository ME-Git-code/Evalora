import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, contact_info, message } = body;

        if (!name || !contact_info || !message) {
            return NextResponse.json({ error: "Barcha maydonlar to'ldirilishi shart" }, { status: 400 });
        }

        // 1. TELEGRAM BOT ORQALI YUBORISH
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            const text = `📬 <b>Yangi xabar (Evalora Landing)</b>:\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Kontakt:</b> ${contact_info}\n💬 <b>Xabar:</b>\n${message}`;

            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML',
                }),
            }).catch((err) => console.error("Telegram xatosi:", err));
        }

        // 2. PRISMA / DATABASE SAQLASH (Agarda model bo'lsa)
        // await prisma.contactMessage.create({ data: { name, contactInfo: contact_info, message } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
    }
}