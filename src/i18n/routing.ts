import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['cs', 'en'],
  defaultLocale: 'cs'
})

// Typed navigation hooks — import these instead of next/navigation
export const { useRouter, usePathname, Link, redirect } = createNavigation(routing)
