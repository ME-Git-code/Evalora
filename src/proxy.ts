import { clerkMiddleware } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const pathname = req.nextUrl.pathname;

  // Har qanday dashboard, test yoki natijalar sahifasiga kirishni to'sish
  const isProtected =
    pathname.includes("/dashboard") ||
    pathname.includes("/test") ||
    pathname.includes("/results") ||
    pathname.includes("/settings");

  if (isProtected && !userId) {
    const locale = pathname.split("/")[1] || "uz";
    const signInUrl = new URL(`/${locale}/sign-in`, req.url);
    return Response.redirect(signInUrl);
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};