import HeroHeadline from './HeroHeadline'

type Props = { headline: string; cta: string }

export default function Hero({ headline, cta }: Props) {
  return (
    <section className="min-h-screen bg-brand-graphite flex flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs mb-6">
        KAPSLOCK
      </p>
      <HeroHeadline text={headline} />
      <div className="w-12 h-px bg-brand-sand mb-8" />
      <a
        href="#contact"
        className="inline-block font-sans text-brand-graphite bg-brand-sand px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue transition-colors duration-300"
      >
        {cta}
      </a>
    </section>
  )
}
