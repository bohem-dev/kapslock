import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

const CZECH_LOCALES = ['cs', 'sk', 'cs-CZ', 'cs-SK', 'sk-SK']
const CZECH_COUNTRIES = ['CZ', 'SK']

function detectLocale(request: NextRequest): 'cs' | 'en' {
  // 1. Geo — Vercel sets this header automatically in production
  const country = request.headers.get('x-vercel-ip-country')
  if (country && CZECH_COUNTRIES.includes(country)) return 'cs'

  // 2. Accept-Language header
  const acceptLang = request.headers.get('accept-language') ?? ''
  const preferred = acceptLang
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())

  for (const lang of preferred) {
    if (CZECH_LOCALES.some((l) => lang.startsWith(l.toLowerCase()))) return 'cs'
    if (lang.startsWith('en')) return 'en'
  }

  // 3. Fall back to default
  return routing.defaultLocale as 'cs' | 'en'
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If root path with no locale, redirect to detected locale
  if (pathname === '/') {
    const locale = detectLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}`
    return NextResponse.redirect(url)
  }

  const response = intlMiddleware(request)

  // Pass redirect responses straight through
  if ([301, 302, 307, 308].includes(response.status)) {
    return response
  }

  // Attach x-url header for use in server components
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)

  return NextResponse.next({
    request: { headers: requestHeaders },
    headers: response.headers,
  })
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
