const steps = [
  {
    label: '1. Vložit',
    description:
      'Student vloží svůj telefon do speciálního obalu Kapslock ještě před začátkem výuky.',
  },
  {
    label: '2. Uzamknout',
    description:
      'Obal se jednoduchým pohybem uzamkne pomocí skrytého magnetického mechanismu.',
  },
  {
    label: '3. Odemykat dle potřeby',
    description:
      'Během dne lze obaly odemknout pouze pomocí speciálního magnetu, a to podle pravidel školy.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">
          Jak Kapslock funguje
        </h2>

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
