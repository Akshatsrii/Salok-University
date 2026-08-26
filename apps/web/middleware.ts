import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define which routes are meant for which roles
const roleRoutes: Record<string, string> = {
  SUPER_ADMIN: '/superadmin',
  ADMIN: '/admin',
  TEACHER: '/teacher',
  STUDENT: '/student',
  PARENT: '/parent',
  FACILITY: '/facility',
};

// Define public routes that shouldn't redirect to dashboard if logged in (except auth routes)
const authRoutes = ['/login', '/register', '/forgot-password', '/mfa'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const token = request.cookies.get('accessToken')?.value;
  const role = request.cookies.get('role')?.value;

  // 1. If trying to access an auth route while logged in
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (token && role && roleRoutes[role]) {
      return NextResponse.redirect(new URL(roleRoutes[role], request.url));
    }
    return NextResponse.next();
  }

  // 2. Protect dashboard routes
  const isDashboardRoute = Object.values(roleRoutes).some(route => pathname.startsWith(route));
  
  if (isDashboardRoute) {
    if (!token || !role) {
      // Not logged in -> redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Determine expected base path for current role
    const expectedBasePath = roleRoutes[role];
    
    // If the user tries to access a different role's dashboard
    if (expectedBasePath && !pathname.startsWith(expectedBasePath)) {
      return NextResponse.redirect(new URL(expectedBasePath, request.url));
    }
  }

  return NextResponse.next();
}

// Ensure the middleware only runs for specific paths to optimize performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|svg).*)',
  ],
};
