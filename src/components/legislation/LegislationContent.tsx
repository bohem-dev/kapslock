import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function LegislationContent() {
  const t = await getTranslations('legislation')

  return (
    <article className="bg-brand-white text-brand-graphite">

      {/* Section 1 — What is the methodology */}
      <section className="px-6 py-16 md:py-20 border-b border-brand-graphite/8">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue-dk mb-4 block">
            {t('section1Label')}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mb-8">{t('section1Title')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-base leading-relaxed text-brand-graphite/75">{t('section1p1')}</p>
            <p className="text-base leading-relaxed text-brand-graphite/75">{t('section1p2')}</p>
          </div>
        </div>
      </section>

      {/* Section 2 — The recommended solution (quote) */}
      <section className="px-6 py-16 md:py-20 bg-brand-graphite border-b border-brand-white/8">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue mb-4 block">
            {t('section2Label')}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-white mb-10">
            {t('section2Title')}
          </h2>

          <blockquote className="border-l-2 border-brand-sand pl-8 py-2 mb-10">
            <p className="font-serif text-xl md:text-2xl text-brand-white/90 leading-relaxed italic">
              &ldquo;{t('quote')}&rdquo;
            </p>
            <cite className="block mt-4 font-sans text-xs tracking-[0.15em] uppercase text-brand-white/35 not-italic">
              {t('quoteSource')}
            </cite>
          </blockquote>

          <p className="text-brand-white/60 text-base leading-relaxed max-w-2xl">
            {t('section2body')}
          </p>
        </div>
      </section>

      {/* Section 3 — The one drawback & how Kapslock solves it */}
      <section className="px-6 py-16 md:py-20 border-b border-brand-graphite/8">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue-dk mb-4 block">
            {t('section3Label')}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mb-10">{t('section3Title')}</h2>

          <div className="grid md:grid-cols-2 gap-px bg-brand-graphite/8">
            {/* Drawback card */}
            <div className="bg-brand-white p-8">
              <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-brand-graphite/40 mb-4">
                {t('drawbackLabel')}
              </p>
              <p className="text-base leading-relaxed text-brand-graphite/75">{t('drawbackText')}</p>
            </div>

            {/* Solution card */}
            <div className="bg-brand-blue/8 p-8">
              <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-brand-blue-dk mb-4">
                {t('solutionLabel')}
              </p>
              <p className="text-base leading-relaxed text-brand-graphite/75">{t('solutionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA back to main site */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-2">{t('ctaSectionTitle')}</h2>
            <p className="text-brand-graphite/55 text-sm max-w-md">{t('ctaSectionBody')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/#contact"
              className="inline-block font-sans bg-brand-sand text-brand-graphite px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue-dk hover:text-brand-white transition-colors duration-300"
            >
              {t('ctaSectionCta')}
            </Link>
            <Link
              href="/"
              className="inline-block font-sans border border-brand-graphite/15 text-brand-graphite/55 px-8 py-3 text-sm tracking-widest uppercase hover:border-brand-graphite/40 hover:text-brand-graphite transition-colors duration-300"
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>

    </article>
  )
}
