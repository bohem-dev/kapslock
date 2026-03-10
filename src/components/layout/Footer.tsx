'use client'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

        {/* Company info */}
        <div>
          <span className="font-sans text-brand-blue tracking-[0.3em] uppercase text-xs mb-6 block">
            KAPSLOCK
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-sm md:text-base mb-6">
            Zajímá vás zavedení Kapslocku ve vaší škole? Napište nám a
            připravíme nabídku na míru.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Kapslock s.r.o.</strong></p>
            <p>Ulice 123, 100 00 Praha</p>
            <p>IČO: 00000000</p>
            <p>E-mail: info@kapslock.cz</p>
            <p>Telefon: +420 000 000 000</p>
          </div>
        </div>

        {/* Contact form */}
        <form className="space-y-4">
          {[
            { label: 'Jméno a příjmení', type: 'text' },
            { label: 'E-mail', type: 'email' },
            { label: 'Škola / organizace', type: 'text' },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-xs font-sans tracking-[0.16em] uppercase mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                className="w-full border border-brand-graphite/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs font-sans tracking-[0.16em] uppercase mb-1">
              Zpráva
            </label>
            <textarea
              rows={4}
              className="w-full border border-brand-graphite/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-sans text-brand-graphite bg-brand-sand px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-blue hover:text-brand-light transition-colors duration-300"
          >
            Odeslat
          </button>
        </form>

      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-brand-graphite/10 text-xs text-brand-graphite/50 flex justify-between">
        <span>© {new Date().getFullYear()} Kapslock s.r.o.</span>
        <span>Všechna práva vyhrazena</span>
      </div>
    </footer>
  )
}
