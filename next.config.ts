// next.config.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'], // Define paths for middleware
};

// Middleware function
export function middleware(request: NextRequest) {
  // Custom logic can be added here
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Example logic for dashboard paths
    return NextResponse.next();
  }
  
  return NextResponse.next(); // Proceed with the request
}
