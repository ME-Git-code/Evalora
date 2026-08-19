import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Himoyalangan sahifalar (prefiksli va prefikssiz barcha holatlar uchun)
const isProtectedRoute = createRouteMatcher([
  '/(.*)/dashboard(.*)',
  '/(.*)/test(.*)',
  '/(.*)/results(.*)',
  '/(.*)/settings(.*)',
  '/dashboard(.*)',
  '/test(.*)',
  '/results(.*)',
  '/settings(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Next.js ichki fayllari va statik fayllarni o'tkazib yuborish
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Har doim API yo'nalishlarida ishlash
    '/(api|trpc)(.*)',
  ],
};