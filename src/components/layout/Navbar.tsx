import { getTranslations } from 'next-intl/server'
import LocaleSwitcher from './LocaleSwitcher'

export default async function Navbar() {
  const t = await getTranslations('nav')

  const links = [
    { label: t('process'), href: '#process' },
    { label: t('about'),   href: '#about'   },
    { label: t('products'),href: '#products' },
    { label: t('contact'), href: '#contact'  },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/90 backdrop-blur-sm border-b border-brand-graphite/8">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <a
          href="#"
          className="font-sans text-brand-graphite tracking-[0.3em] uppercase text-xs"
        >
          KAPSLOCK
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-[0.15em] uppercase text-brand-graphite/50 hover:text-brand-graphite transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-px h-4 bg-brand-graphite/15" />

          <LocaleSwitcher />
        </div>

      </div>
    </header>
  )
}
