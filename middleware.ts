import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'zh'];

export default createMiddleware({
  locales,
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};