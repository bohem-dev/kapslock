import { getTranslations } from 'next-intl/server'

export default async function Process() {
  const t = await getTranslations('process')
  const steps = t.raw('steps') as Array<{ label: string; description: string }>

  return (
    <section id="process" className="bg-brand-white text-brand-graphite px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12">{t('title')}</h2>
        <div className="grid gap-0 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-graphite/10">
          {steps.map((step, i) => (
            <div key={step.label} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue mb-4 block">
                {step.label}
              </span>
              <p className="text-sm leading-relaxed text-brand-graphite/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
