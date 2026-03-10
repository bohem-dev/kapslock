import { getTranslations } from 'next-intl/server'

export default async function Process() {
  const t = await getTranslations('process')
  const steps = t.raw('steps') as Array<{ label: string; description: string }>

  return (
    <section id="process" className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">{t('title')}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.label}>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-blue mb-3">
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
