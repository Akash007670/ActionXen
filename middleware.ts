import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]); // These are public routes

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }

  //auth().userId check that its logged in
  //auth().orgId checks that user has created organization or not.

  if (!auth().userId && !isPublicRoute) {
    //If not logged in and user tyring to access any url apart from public it should send it to signIn
    return auth().redirectToSignIn({ returnBackUrl: request.url });
  }

  if (
    auth().userId &&
    !auth().orgId && //This line checks if the user is logged in but there is no organization created.
    request.nextUrl.pathname !== "/select-org" // and it does not belong to select-org pathname
  ) {
    const orgSelection = new URL("/select-org", request.url); // so it should redirect to it.
    return NextResponse.redirect(orgSelection);
  }

  if (auth().userId && isPublicRoute(request)) {
    //User is logged in but still on public route
    let path = "/select-org"; // redirect user to this path

    if (auth().orgId) {
      // and if loggedIn and the orgranization already exists then redirect it to is orgId.
      path = `/organization/${auth().orgId}`;
    }
    const orgSelection = new URL(path, request.url);

    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
