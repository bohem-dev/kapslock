type Mode = { label: string; description: string }

type Props = {
  title: string
  subtitle: string
  modes: Mode[]
}

export default function UsageModes({ title, subtitle, modes }: Props) {
  return (
    <div className="mt-20 pt-12 border-t border-brand-white/10">
      <h3 className="font-serif text-2xl md:text-3xl text-brand-white mb-3">{title}</h3>
      <p className="text-sm md:text-base text-brand-white/50 mb-10 max-w-2xl">{subtitle}</p>
      <div className="grid gap-px md:grid-cols-3 bg-brand-white/8">
        {modes.map((mode) => (
          <div key={mode.label} className="bg-brand-graphite p-7">
            <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-blue mb-3">
              {mode.label}
            </div>
            <div className="text-sm leading-relaxed text-brand-white/70">{mode.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
