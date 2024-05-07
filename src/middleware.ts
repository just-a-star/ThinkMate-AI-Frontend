import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware hit, URL:", request.nextUrl.pathname);

    // Check for token presence directly on login access
    if (request.nextUrl.pathname === "/pengajar/login") {
        const accessToken = request.cookies.get("accessToken");
        console.log("Access Token on login page:", accessToken);

        if (accessToken) {
            console.log("Token found, redirecting to create-discussion...");
            const targetUrl = new URL("/pengajar/create-discussion", request.url);
            return NextResponse.redirect(targetUrl);
        }

        console.log("No token found, access to login page granted.");
        return NextResponse.next();
    }

    // Check all other /pengajar routes
    if (request.nextUrl.pathname.startsWith("/pengajar")) {
        const accessToken = request.cookies.get("accessToken");
        console.log("Access Token:", accessToken);

        if (!accessToken) {
            console.log("No access token, redirecting to login...");
            const loginUrl = new URL("/pengajar/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    console.log("Access token found or not required, proceeding...");
    return NextResponse.next();
}

export const config = {
    matcher: ["/pengajar/:path*"],
};
