const bullets = [
  'Podpora soustředění během výuky',
  'Jasně nastavená pravidla bez konfliktů',
  'Možnost zvolit režim podle potřeb školy',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-brand-light text-brand-graphite px-6 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl">
          Seznamte se s Kapslock
        </h2>

        <p className="text-base leading-relaxed">
          Kapslock je systém uzamykacích obalů a magnetických odemykacích prvků
          navržený pro základní a střední školy. Umožňuje omezit používání
          mobilních telefonů během výuky, aniž by bylo nutné zařízení studentům
          odebírat.
        </p>

        <p className="text-base leading-relaxed">
          Řešení je jednoduché, bezpečné a flexibilní. Telefony zůstávají po
          celou dobu u žáků, ale jsou uzamčeny v obalu a lze je odemknout pouze
          pomocí speciálního magnetu.
        </p>

        <p className="text-base leading-relaxed">
          Systém je zároveň udržitelnější. Odpovědnost za zařízení zůstává u
          samotných žáků, nikoli u školy. Škola tak neshromažďuje velké množství
          telefonů na jednom místě, čímž se minimalizuje riziko ztráty a s tím
          spojená odpovědnost pracovníků školy.
        </p>

        <ul className="space-y-2 text-base">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
