import { setRequestLocale } from 'next-intl/server'
import DemoPlayer from '@/components/demo/DemoPlayer'

type Props = { params: Promise<{ locale: string }> }

export default async function DemoPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <DemoPlayer />
}
