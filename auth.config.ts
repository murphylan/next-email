import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isOnHome = nextUrl.pathname === '/';

      // Allow access to login and home pages for everyone
      if (isOnLogin || isOnHome) {
        return true;
      }

      // Redirect unauthenticated users to the home page for other pages
      if (!isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true; // Allow authenticated users to access other pages
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;