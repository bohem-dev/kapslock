import { getTranslations } from 'next-intl/server'

export default async function LegislationHero() {
  const t = await getTranslations('legislation')

  return (
    <section className="min-h-[55vh] bg-brand-graphite flex flex-col items-center justify-center px-6 text-center pt-14">
      <p className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs mb-6">
        KAPSLOCK
      </p>
      <div className="w-12 h-px bg-brand-sand mb-8" />
      <h1 className="font-serif text-3xl md:text-5xl text-brand-white max-w-3xl leading-tight mb-6">
        {t('heroTitle')}
      </h1>
      <p className="font-sans text-brand-white/55 text-sm md:text-base max-w-xl leading-relaxed mb-10">
        {t('heroSubtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="https://edu.gov.cz/methodology/metodicka-k-nastavovani-pravidel-mobilnich-telefonu-a-jinych-elektronickych-zarizeni-ve-skolach/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans bg-brand-sand text-brand-graphite px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue-dk hover:text-brand-white transition-colors duration-300"
        >
          {t('ctaPage')}
        </a>
        <a
          href="https://edu.gov.cz/wp-content/uploads/2026/02/Metodika-k-nastavovani-pravidel-pouzivani-mobilinich-telefonu-a-jinych-el.-zarizeni-ve-skolach.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans border border-brand-white/25 text-brand-white/65 px-8 py-3 text-sm tracking-widest uppercase hover:border-brand-white/60 hover:text-brand-white transition-colors duration-300"
        >
          {t('ctaPdf')} ↓
        </a>
      </div>
      <div className="mt-16 w-px h-12 bg-brand-sand/40" />
    </section>
  )
}
