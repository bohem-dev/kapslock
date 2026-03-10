import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/components/hero/Hero'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('hero')

  return <Hero headline={t('h1')} />
}
