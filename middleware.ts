import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Guard the /finale route: only visible if all 15 questions are completed
  if (pathname === "/finale" || pathname.startsWith("/finale/")) {
    const finaleOpened = request.cookies.get("aisha_bday_finale_opened")?.value;
    const unlockedCookie = request.cookies.get("aisha_bday_unlocked")?.value;

    const unlocked = unlockedCookie ? parseInt(unlockedCookie, 10) : 0;
    const isAllCompleted =
      finaleOpened === "true" || (!isNaN(unlocked) && unlocked >= 15);

    // If all 15 questions have not yet been completed, route to the last incomplete question
    if (!isAllCompleted) {
      const incompleteIndex =
        isNaN(unlocked) || unlocked < 0 ? 0 : Math.min(unlocked, 14);
      const targetQuestion = `q${incompleteIndex + 1}`;
      const redirectUrl = new URL(`/questions/${targetQuestion}`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/finale", "/finale/:path*"],
};
