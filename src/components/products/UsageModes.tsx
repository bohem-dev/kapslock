type Mode = { label: string; description: string }

type Props = {
  title: string
  subtitle: string
  modes: Mode[]
}

export default function UsageModes({ title, subtitle, modes }: Props) {
  return (
    <div className="mt-16">
      <h3 className="font-serif text-2xl mb-3">{title}</h3>
      <p className="text-sm md:text-base text-brand-light/80 mb-8 max-w-2xl">{subtitle}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {modes.map((mode) => (
          <div key={mode.label} className="bg-brand-light/5 border border-brand-light/10 p-5">
            <div className="font-sans text-xs tracking-[0.18em] uppercase text-brand-blue mb-2">
              {mode.label}
            </div>
            <div className="text-sm leading-relaxed text-brand-light/90">{mode.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
