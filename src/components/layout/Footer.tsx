'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'


export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer id="contact" className="bg-brand-white text-brand-graphite px-6 py-16 md:py-20 border-t border-brand-graphite/8 relative">
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div>
          <span className="font-sans text-brand-graphite tracking-[0.3em] uppercase text-xs mb-6 block">
            KAPSLOCK
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t('contactTitle')}</h2>
          <p className="text-sm md:text-base text-brand-graphite/65 mb-8">{t('tagline')}</p>
          <div className="space-y-1.5 text-sm text-brand-graphite/70">
            <p className="font-sans font-medium text-brand-graphite">{t('company')}</p>
            <p>{t('address')}</p>
            <p>{t('ico')}</p>
            <p>{t('email')}</p>
            <p>{t('phone')}</p>
          </div>
        </div>
        <div
                aria-hidden
                className="absolute pointer-events-none select-none hidden lg:block"
                style={{
                  top: '20%',
                  right: '55%',
                  width: '75vw',
                  height: '75vw',
                  opacity: 0.12,
                }}
              >
                <Image
                  src="/logo/kapson-sand.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

        <form className="space-y-5">
          {(['name', 'email', 'school'] as const).map((field) => (
            <div key={field}>
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-brand-graphite/50 mb-1.5">
                {t(`fields.${field}`)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                className="w-full border border-brand-graphite/15 bg-white px-4 py-2.5 text-sm text-brand-graphite outline-none focus:border-brand-blue-dk transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-brand-graphite/50 mb-1.5">
              {t('fields.message')}
            </label>
            <textarea
              rows={4}
              className="w-full border border-brand-graphite/15 bg-white px-4 py-2.5 text-sm text-brand-graphite outline-none focus:border-brand-blue-dk transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-sans bg-brand-sand text-brand-graphite px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue-dk hover:text-brand-white transition-colors duration-300"
          >
            {t('fields.submit')}
          </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-brand-graphite/8 text-xs text-brand-graphite/35 flex justify-between">
        <span>&copy; {new Date().getFullYear()} {t('company')}</span>
        <span>{t('copyright')}</span>
      </div>
    </footer>
  )
}
