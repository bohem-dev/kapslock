import { getTranslations } from 'next-intl/server'
import ProductCard from './ProductCard'
import UsageModes from './UsageModes'
import Image from 'next/image'

const images = [
  'images/product/prod-kaps-obal.png',
  'images/product/prod-magnet-fix.png',
  'images/product/prod-magnet-prenosni.png'
]

export default async function Products() {
  const t = await getTranslations('products')
  const items = t.raw('items') as Array<{ name: string; description: string }>
  const modes = t.raw('modes') as Array<{ label: string; description: string }>

  return (
    <section id="products" className="bg-brand-graphite text-brand-white px-6 py-16 md:py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          top: '20%',
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

      <div
        aria-hidden
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          top: '-20%',
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

      <div className="max-w-6xl mx-auto">
        <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue mb-4 block">
          Produkty
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mb-3">{t('title')}</h2>
        <p className="text-sm md:text-base text-brand-white/55 mb-12 max-w-2xl">{t('subtitle')}</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ProductCard key={item.name} name={item.name} description={item.description} imageSrc={images[i]} />
          ))}
        </div>

        <UsageModes title={t('modesTitle')} subtitle={t('modesSubtitle')} modes={modes} />
      </div>
    </section>
  )
}
