import { getTranslations } from 'next-intl/server'

export default async function About() {
  const t = await getTranslations('about')
  const bullets = t.raw('bullets') as string[]

  return (
    <section id="about" className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl">{t('title')}</h2>
        <p className="text-base leading-relaxed">{t('p1')}</p>
        <p className="text-base leading-relaxed">{t('p2')}</p>
        <p className="text-base leading-relaxed">{t('p3')}</p>
        <ul className="space-y-2 text-base">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
