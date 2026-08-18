"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function sendSupportMessage(message: string, attachmentUrl?: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) throw new Error("User not found");

  await prisma.supportMessage.create({
    data: {
      id: "sup_" + Date.now().toString(), // Just to ensure id is valid as per schema @id string
      userId: user.id,
      message,
      attachmentUrl
    }
  });

  revalidatePath("/dashboard");
  return { success: true };
}

export async function getUnreadSupportMessages() {
  const { userId } = await auth();
  if (!userId) return [];

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) return [];

  // Agar adminReply bo'lsa va isRead = false bo'lsa, demak bu javobni foydalanuvchi ko'rmagan
  const unreadMessages = await prisma.supportMessage.findMany({
    where: {
      userId: user.id,
      isRead: false,
      adminReply: {
        not: null
      }
    }
  });

  return unreadMessages;
}

export async function markSupportMessageAsRead(id: string) {
  await prisma.supportMessage.update({
    where: { id },
    data: { isRead: true }
  });
}
