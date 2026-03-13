import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/layout/Navbar'
import LegislationHero from '@/components/legislation/LegislationHero'
import LegislationContent from '@/components/legislation/LegislationContent'
import NavbarOtherContent from '@/components/layout/NavbarOtherContent'

type Props = { params: Promise<{ locale: string }> }

export default async function LegislativaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Navbar />
      <LegislationHero />
      <LegislationContent />
      <NavbarOtherContent />
    </main>
  )
}
