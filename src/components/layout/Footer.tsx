'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer id="contact" className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div>
          <span className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs mb-6 block">
            KAPSLOCK
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t('contactTitle')}</h2>
          <p className="text-sm md:text-base mb-6">{t('tagline')}</p>
          <div className="space-y-2 text-sm">
            <p><strong>{t('company')}</strong></p>
            <p>{t('address')}</p>
            <p>{t('ico')}</p>
            <p>{t('email')}</p>
            <p>{t('phone')}</p>
          </div>
        </div>

        <form className="space-y-4">
          {(['name', 'email', 'school'] as const).map((field) => (
            <div key={field}>
              <label className="block text-xs font-sans tracking-[0.16em] uppercase mb-1">
                {t(`fields.${field}`)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                className="w-full border border-brand-graphite/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs font-sans tracking-[0.16em] uppercase mb-1">
              {t('fields.message')}
            </label>
            <textarea
              rows={4}
              className="w-full border border-brand-graphite/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-sans text-brand-graphite bg-brand-sand px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue hover:text-brand-light transition-colors duration-300"
          >
            {t('fields.submit')}
          </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-brand-graphite/10 text-xs text-brand-graphite/50 flex justify-between">
        <span>© {new Date().getFullYear()} {t('company')}</span>
        <span>{t('copyright')}</span>
      </div>
    </footer>
  )
}
