type Props = { text: string }

export default function HeroHeadline({ text }: Props) {
  return (
    <h1 className="font-serif text-brand-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-3xl mb-8">
      {text}
    </h1>
  )
}
