import { getTranslations } from 'next-intl/server'
import ProductCard from './ProductCard'
import UsageModes from './UsageModes'

const images = [
  'https://static.wixstatic.com/media/1762f3_40e39016a21f47249d2ced1ddef1b56f~mv2.png',
  'https://static.wixstatic.com/media/1762f3_6f6fb67dec9a42a99463e7c3069380d1~mv2.png',
  'https://static.wixstatic.com/media/1762f3_868f4c99f37f4411ba2be89da1c71cd1~mv2.png',
  'https://static.wixstatic.com/media/1762f3_ab393eaeedff4a41a5fc837621f59bf9~mv2.png',
]

export default async function Products() {
  const t = await getTranslations('products')
  const items = t.raw('items') as Array<{ name: string; description: string }>
  const modes = t.raw('modes') as Array<{ label: string; description: string }>

  return (
    <section id="products" className="bg-brand-graphite text-brand-light px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{t('title')}</h2>
        <p className="text-sm md:text-base text-brand-light/80 mb-10 max-w-2xl">{t('subtitle')}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <ProductCard key={item.name} name={item.name} description={item.description} imageSrc={images[i]} />
          ))}
        </div>

        <UsageModes title={t('modesTitle')} subtitle={t('modesSubtitle')} modes={modes} />
      </div>
    </section>
  )
}
