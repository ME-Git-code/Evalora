import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const targetLevel = formData.get("targetLevel") as any; // CefrLevel
    
    // Foydalanuvchining ismini yangilash
    await prisma.user.update({
      where: { clerkId: userId },
      data: { fullName }
    });

    // Profilni yangilash
    await prisma.profile.update({
      where: { userId: (await prisma.user.findUnique({ where: { clerkId: userId } }))?.id },
      data: { targetLevel }
    });

    // Dashboardga qaytarish
    return NextResponse.redirect(new URL("/dashboard", req.url), 303);
  } catch (error) {
    console.error("[ONBOARDING_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
