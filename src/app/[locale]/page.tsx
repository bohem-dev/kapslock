import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('hero')

  return (
    <main className="min-h-screen bg-brand-graphite flex flex-col items-center justify-center px-6 text-center">

      {/* Eyebrow */}
      <p className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs mb-6">
        KAPSLOCK
      </p>

      {/* Main headline */}
      <h1 className="font-accent text-brand-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-3xl mb-8">
        {t('h1')}
      </h1>

      {/* Divider */}
      <div className="w-12 h-px bg-brand-sand mb-8" />

      {/* CTA */}
      <a
        href="#contact"
        className="font-sans text-brand-graphite bg-brand-sand px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue transition-colors duration-300"
      >
        Get in touch
      </a>

    </main>
  )
}
