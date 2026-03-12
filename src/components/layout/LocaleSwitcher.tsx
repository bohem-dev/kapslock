'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useState } from 'react'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [optimistic, setOptimistic] = useState<'cs' | 'en'>(locale as 'cs' | 'en')

  function switchLocale(next: 'cs' | 'en') {
    if (next === optimistic) return
    setOptimistic(next)
    sessionStorage.setItem('scrollY', String(window.scrollY))
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="relative flex items-center bg-brand-graphite/8 p-0.5 w-[72px]">
      <div
        className="absolute top-0.5 bottom-0.5 w-[32px] bg-brand-sand"
        style={{
          left: optimistic === 'cs' ? '2px' : 'calc(50% + 2px)',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <button
        onClick={() => switchLocale('cs')}
        className={`relative z-10 w-[36px] py-1 font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300
          ${optimistic === 'cs' ? 'text-brand-graphite' : 'text-brand-graphite/40 hover:text-brand-graphite/70'}`}
      >
        CS
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`relative z-10 w-[36px] py-1 font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300
          ${optimistic === 'en' ? 'text-brand-graphite' : 'text-brand-graphite/40 hover:text-brand-graphite/70'}`}
      >
        EN
      </button>
    </div>
  )
}
