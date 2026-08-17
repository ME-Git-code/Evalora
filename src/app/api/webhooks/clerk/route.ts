import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { PlanType } from '../../../../../generated/prisma/enums';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env');
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: id! }
    });

    if (!existingUser) {
      // Generate customId (EV-XXXXXX)
      const customId = `EV-${Math.floor(100000 + Math.random() * 900000)}`;
      const email = evt.data.email_addresses?.[0]?.email_address || "";

      // Foydalanuvchini, profili va bepul obunasini bitta atomik tranzaksiyada yaratish
      await prisma.user.create({
        data: {
          clerkId: id!,
          customId,
          email,
          fullName: evt.data.first_name ? `${evt.data.first_name} ${evt.data.last_name || ''}`.trim() : null,
          avatarUrl: evt.data.image_url,
          profile: {
            create: {
              updatedAt: new Date(),
            }
          },
          subscription: {
            create: {
              plan: PlanType.FREE,
              freeAiCredits: 2,
              updatedAt: new Date(),
            }
          }
        }
      });
    }
  }

  if (eventType === 'user.updated') {
    const email = evt.data.email_addresses?.[0]?.email_address;
    await prisma.user.updateMany({
      where: { clerkId: id! },
      data: {
        ...(email ? { email } : {}),
        fullName: evt.data.first_name ? `${evt.data.first_name} ${evt.data.last_name || ''}`.trim() : null,
        avatarUrl: evt.data.image_url,
      }
    });
  }

  if (eventType === 'user.deleted') {
    await prisma.user.deleteMany({
      where: { clerkId: id! }
    });
  }

  return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
}

