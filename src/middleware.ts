import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// No longer need to import getUserProfile here, will use supabase client directly
// import { getUserProfile } from '@/libs/user'; 

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // --- Handle Supabase Auth Callback ---
  // This section processes the code parameter from auth redirects (like email confirmation)
  const { searchParams, pathname } = req.nextUrl;
  const code = searchParams.get('code');

  if (code) {
    try {
      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code);
      // Once the session is set, redirect the user to a clean URL without the code
      // We'll redirect to /complete-profile here, and let the subsequent middleware logic 
      // handle if they are already complete and should go to dashboard.
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.searchParams.delete('code'); // Remove the code parameter
      redirectUrl.pathname = '/complete-profile'; // Redirect to profile completion page
      return NextResponse.redirect(redirectUrl);

    } catch (error) {
      console.error("Error exchanging auth code:", error);
      // Handle error, perhaps redirect to an error page or login with an error message
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.searchParams.delete('code');
      redirectUrl.pathname = '/login'; // Redirect to login on error
      // Optionally add an error query param: redirectUrl.searchParams.set('error', 'auth_failed');
      return NextResponse.redirect(redirectUrl);
    }
  }
  // --- End Supabase Auth Callback Handling ---

  // After handling the code, get the session for subsequent checks
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const authRoutes = ['/login', '/signup']
  const protectedRoutes = ['/dashboard']; // Routes that require authentication and potentially profile completion
  const completeProfileRoute = '/complete-profile'; // The profile completion route

  const isAuthRoute = authRoutes.includes(pathname);
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isCompleteProfileRoute = pathname === completeProfileRoute;

  // If user is authenticated and session is valid (after potential code exchange)
  if (session) {
    const user = session.user;
    let profileData = null;
    let profileFetchError = null;

    try {
        // Fetch only the fields needed for the completeness check
        const { data, error } = await supabase
            .from('profiles')
            .select('full_name, phone_number') // Select only necessary fields
            .eq('id', user.id)
            .single();
        
        profileData = data;
        profileFetchError = error;

    } catch (error) {
        console.error("Error fetching profile in middleware:", error);
        // Treat fetch errors as profile incomplete for safety
        profileData = null; 
        profileFetchError = error;
    }

    // Define what a complete profile means (customize this condition)
    const isProfileComplete = profileData && profileData.full_name && profileData.full_name.trim() !== '' && profileData.phone_number && profileData.phone_number.trim() !== ''; 

    // Scenario 1: Authenticated user on an auth route (login/signup)
    // Redirect them to the dashboard.
    if (isAuthRoute) { // Removed !isCompleteProfileRoute here as callback handles it
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/dashboard';
        return NextResponse.redirect(redirectUrl);
    }

    // Scenario 2: Authenticated user on a protected route (dashboard) but profile is NOT complete.
    // Redirect them to the complete profile page.
    if (isProtectedRoute && !isProfileComplete) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = completeProfileRoute;
        return NextResponse.redirect(redirectUrl);
    }

    // Scenario 3: Authenticated user on the complete profile route, and profile IS complete.
    // Redirect them to the dashboard.
    if (isCompleteProfileRoute && isProfileComplete) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/dashboard';
        return NextResponse.redirect(redirectUrl);
    }

    // Scenario 4: Authenticated user is on a route that doesn't require special handling (e.g., already on dashboard with complete profile, or on complete profile but not complete).
    // Allow them to proceed.
    return res;

  }

  // If user is NOT authenticated and trying to access protected routes or complete profile, redirect to login
  if (!session && (isProtectedRoute || isCompleteProfileRoute)) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/login';
      return NextResponse.redirect(redirectUrl);
  }

  // If user is NOT authenticated and on a non-protected, non-auth route, allow to proceed (e.g., landing page without auth code)
  return res;
}

export const config = {
  // Match all routes we need to consider for auth and profile checks
  matcher: ['/login', '/signup', '/dashboard', '/complete-profile', '/'] 
} 