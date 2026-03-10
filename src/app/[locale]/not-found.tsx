import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const headersList = await headers()
  const url = headersList.get('x-url') || ''
  const locale = url.split('/')[3] === 'cs' ? 'cs' : 'en'

  const t = await getTranslations({ locale, namespace: 'notFound' })

  return (
    <main className="min-h-screen bg-brand-graphite flex flex-col items-center justify-center px-6 text-center">

      {/* Kangaroo */}
      <div className="mb-8 opacity-80">
        <Image
          src="/logo/kapson-sand.svg"
          alt="Kapson the kangaroo"
          width={120}
          height={120}
          priority
        />
      </div>

      <p className="font-sans text-brand-sand tracking-[0.4em] uppercase text-xs mb-4">
        404
      </p>

      <h1 className="font-accent text-brand-white text-4xl md:text-5xl font-normal leading-tight max-w-md mb-4">
        {t('heading')}
      </h1>

      <p className="font-sans text-brand-blue text-sm max-w-sm mb-10">
        {t('subtext')}
      </p>

      <div className="w-12 h-px bg-brand-sand mb-10" />

      <Link
        href={`/${locale}`}
        className="font-sans text-brand-graphite bg-brand-sand px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue transition-colors duration-300"
      >
        {t('cta')}
      </Link>

    </main>
  )
}
