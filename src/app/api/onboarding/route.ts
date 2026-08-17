import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { CefrLevel } from "../../../../generated/prisma/enums";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    const formData = await req.formData();
    const fullName = (formData.get("fullName") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim() || null;
    const rawTargetLevel = formData.get("targetLevel") as string;
    const targetLevel: CefrLevel = Object.values(CefrLevel).includes(rawTargetLevel as CefrLevel)
      ? (rawTargetLevel as CefrLevel)
      : CefrLevel.B2;

    // Foydalanuvchi va profilni yangilash
    await prisma.user.update({
      where: { clerkId: userId },
      data: {
        ...(fullName ? { fullName } : {}),
        phone,
        hasCompletedOnboarding: true,
        profile: {
          upsert: {
            create: {
              targetLevel,
              updatedAt: new Date()
            },
            update: {
              targetLevel,
              updatedAt: new Date()
            }
          }
        }
      }
    });

    // Dashboardga qaytarish
    return NextResponse.redirect(new URL("/dashboard", req.url), 303);
  } catch (error) {
    console.error("[ONBOARDING_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
