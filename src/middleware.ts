import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Auth routes that should redirect to dashboard if logged in
  const authRoutes = ['/login', '/signup']
  const isAuthRoute = authRoutes.some(route => req.nextUrl.pathname === route)

  // If user is logged in and trying to access auth pages, redirect to dashboard
  if (session && isAuthRoute) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/dashboard'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/login', '/signup']
} 