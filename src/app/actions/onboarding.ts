"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { CefrLevel } from "@prisma/client";

export async function completeOnboarding(data: {
  fullName: string;
  phoneNumber?: string;
  targetLevel: CefrLevel;
}) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { success: false, error: "Not authenticated" };
    }

    // Update User and Profile
    await prisma.user.update({
      where: { clerkId: userId },
      data: {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber || null,
        hasCompletedOnboarding: true,
        profile: {
          update: {
            targetLevel: data.targetLevel
          }
        }
      }
    });

    // Revalidate dashboard path to remove the modal
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("Onboarding completion error:", error);
    return { success: false, error: "Internal server error" };
  }
}
