export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-graphite/90 backdrop-blur-sm border-b border-brand-light/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs">
          KAPSLOCK
        </span>

        <nav className="hidden md:flex gap-8">
          {[
            { label: 'Jak to funguje', href: '#process' },
            { label: 'O Kapslock', href: '#about' },
            { label: 'Produkty', href: '#products' },
            { label: 'Kontakt', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] uppercase text-brand-light/70 hover:text-brand-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
