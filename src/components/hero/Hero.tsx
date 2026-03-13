import Image from 'next/image'

type Props = { headline: string; cta: string }

export default function Hero({ headline, cta }: Props) {
  return (
    <section className="min-h-screen bg-brand-graphite flex items-center px-6 relative overflow-hidden">

      {/* ── O RING BACKGROUND ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          top: '10%',
          right: '-50%',
          width: '75vw',
          height: '75vw',
          opacity: 0.06,
        }}
      >
        <Image
          src="/o-graphic/o-blue.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>


      {/* ── SPOTLIGHT — narrow, intense, long beam from top ── */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[55vw] pointer-events-none hidden lg:block"
        style={{
          background:
            'radial-gradient(ellipse 35% 100% at 50% -5%, rgba(200,183,166,0.38) 0%, rgba(200,183,166,0.12) 50%, transparent 80%)',
        }}
      />

      {/* ── PRODUCT IMAGE — centred in right half ── */}
      <div
        className="absolute top-[50%] -translate-y-[45%] pointer-events-none select-none hidden lg:block w-[48vw]"
        style={{ left: 'calc(50% + 2vw)' }}
      >
        <Image
          src="/images/product/kaps-bg-removed2.png"
          alt="Kapslock pouch"
          width={1100}
          height={1100}
          className="object-contain w-full"
          priority
        />
      </div>


      {/* ── LEFT TEXT CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-24">

        <div
          aria-hidden
          className="absolute pointer-events-none select-none hidden lg:block"
          style={{
            top: '-20%',
            right: '50%',
            width: '75vw',
            height: '75vw',
            opacity: 0.06,
          }}
        >
          <Image
            src="/o-graphic/o-blue.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col items-start text-left">

          <div className="mb-10">
            <Image
              src="/logo/kapslock-full-v-sand.png"
              alt="Kapslock"
              width={340}
              height={170}
              className="object-contain"
              priority
            />
          </div>

          <div className="w-12 h-px bg-brand-sand mb-8" />

          <h1 className="font-serif text-brand-white text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-tight max-w-lg mb-10">
            {headline}
          </h1>

          <a
            href="#contact"
            className="inline-block font-sans bg-brand-sand text-brand-graphite px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue-dk hover:text-brand-white transition-colors duration-300"
          >
            {cta}
          </a>
        </div>
      </div>

    </section>
  )
}
