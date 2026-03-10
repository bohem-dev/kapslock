import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/components/hero/Hero'
import Process from '@/components/process/Process'
import About from '@/components/about/About'
import Products from '@/components/products/Products'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('hero')

  return (
    <main>
      <Hero headline={t('h1')} />
      <Process />
      <About />
      <Products />
    </main>
  )
}