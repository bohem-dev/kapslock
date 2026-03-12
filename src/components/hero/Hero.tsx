import Image from 'next/image'

type Props = { headline: string; cta: string }

export default function Hero({ headline, cta }: Props) {
  return (
    <section className="min-h-screen bg-brand-graphite flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Subtle product image — background right */}
      <div className="absolute right-0 bottom-0 w-[55vw] max-w-2xl pointer-events-none select-none hidden lg:block">
        <Image
          src="/images/product/kaps-bg-removed2.png"
          alt=""
          width={900}
          height={900}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Logo */}
      <div className="mb-8 relative z-10">
        <Image
          src="/logo/kapslock-full-v-sand.png"
          alt="Kapslock"
          width={640}
          height={320}
          className="object-contain"
          priority
        />
      </div>

      <div className="w-12 h-px bg-brand-sand mb-8 relative z-10" />

      <h1 className="font-serif text-brand-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl mb-8 relative z-10">
        {headline}
      </h1>

      <a
        href="#contact"
        className="inline-block font-sans bg-brand-sand text-brand-graphite px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue-dk hover:text-brand-white transition-colors duration-300 relative z-10"
      >
        {cta}
      </a>
    </section>
  )
}
