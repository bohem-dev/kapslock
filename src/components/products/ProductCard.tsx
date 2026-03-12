type Props = {
  name: string
  description: string
  imageSrc: string
}

export default function ProductCard({ name, description, imageSrc }: Props) {
  return (
    <div className="bg-brand-white/6 border border-brand-white/10 hover:border-brand-blue/40 transition-colors duration-300">
      <div className="aspect-3/4 flex items-center justify-center overflow-hidden bg-brand-white/4 p-4">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="px-4 py-4 border-t border-brand-white/8">
        <div className="font-sans text-sm tracking-[0.15em] uppercase text-brand-white mb-1">
          {name}
        </div>
        <div className="text-xs text-brand-white/45 mt-1">{description}</div>
      </div>
    </div>
  )
}
