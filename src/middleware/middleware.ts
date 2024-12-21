import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Middleware executed for:', request.nextUrl.pathname); 
  
    if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/public') {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  
    return NextResponse.next();
  }
  

export const config = {
  matcher: ['/', '/public/*'], 
};
