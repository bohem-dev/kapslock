import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function About() {
  const t = await getTranslations('about')
  const bullets = t.raw('bullets') as string[]

  return (
    <section id="about" className="bg-brand-white text-brand-graphite px-6 py-16 md:py-24 border-t border-brand-graphite/8">
      <div className="max-w-4xl mx-auto">
        <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue-dk mb-4 block">
          O Kapslock
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mb-10">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mb-10">
          <p className="text-base leading-relaxed text-brand-graphite/80">{t('p1')}</p>
          <p className="text-base leading-relaxed text-brand-graphite/80">{t('p2')}</p>
          <p className="text-base leading-relaxed text-brand-graphite/80 md:col-span-2">{t('p3')}</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-4 mb-12">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-brand-graphite/4 px-5 py-4 text-sm text-brand-graphite/80"
            >
              <span className="text-brand-sand mt-0.5 shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>

        {/* MŠMT callout */}
        <Link
          href="/legislativa"
          className="group flex items-center gap-5 border border-brand-graphite/12 px-6 py-5 hover:border-brand-blue transition-colors duration-300 max-w-xl"
        >
          <span className="font-sans text-brand-blue tracking-[0.15em] uppercase text-[11px] shrink-0">
            MŠMT 2026
          </span>
          <div className="w-px h-8 bg-brand-graphite/12 shrink-0" />
          <div className="flex-1">
            <p className="font-serif text-base text-brand-graphite group-hover:text-brand-blue-dk transition-colors duration-300">
              {t('msmtCalloutTitle')}
            </p>
            <p className="font-sans text-xs text-brand-graphite/45 mt-0.5">
              {t('msmtCalloutSub')}
            </p>
          </div>
          <span className="text-brand-graphite/25 group-hover:text-brand-blue transition-colors duration-300 text-lg">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
