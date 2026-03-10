const modes = [
  {
    label: '1) Standardní režim',
    description:
      'Škola odebere obaly a 1–2 fixní magnety, které se zavádí nejčastěji u vstupu do budovy.',
  },
  {
    label: '2) Flexibilní režim',
    description:
      'Škola odebere obaly, 1–2 fixní magnety a několik přenosných magnetů (např. 1 přenosný magnet na kabinet).',
  },
  {
    label: '3) Maximální volnost pro pedagogy',
    description:
      'Škola odebere obaly, 1–2 fixní magnety a pro každého pedagoga přenosný magnet – učitelé mohou odemykat kdykoli to výuka vyžaduje.',
  },
]

export default function UsageModes() {
  return (
    <div className="mt-16">
      <h3 className="font-serif text-2xl mb-3">Doporučené sestavy použití</h3>
      <p className="text-sm md:text-base text-brand-light/80 mb-8 max-w-2xl">
        Vyberte přístup podle režimu školy a míry flexibility pro pedagogy.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {modes.map((mode) => (
          <div
            key={mode.label}
            className="bg-brand-light/5 border border-brand-light/10 p-5"
          >
            <div className="font-sans text-xs tracking-[0.18em] uppercase text-brand-blue mb-2">
              {mode.label}
            </div>
            <div className="text-sm leading-relaxed text-brand-light/90">
              {mode.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
