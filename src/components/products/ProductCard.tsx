type Props = {
  name: string
  description: string
  imageSrc: string
}

export default function ProductCard({ name, description, imageSrc }: Props) {
  return (
    <div className="bg-brand-light/5 border border-brand-light/10">
      <div className="aspect-3/4 flex items-center justify-center overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-sans text-sm tracking-[0.15em] uppercase mb-1">
          {name}
        </div>
        <div className="text-sm text-brand-light/80">{description}</div>
      </div>
    </div>
  )
}
