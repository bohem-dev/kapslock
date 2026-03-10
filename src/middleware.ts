import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)

  // URL Injection - Screw Translations
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
