import {
  Flame,
  HardHat,
  Anchor,
  Building2,
  Store,
  type LucideIcon,
} from 'lucide-react'

const industries: { icon: LucideIcon; name: string }[] = [
  { icon: Flame, name: 'Oil & Gas' },
  { icon: HardHat, name: 'Construction & Services' },
  { icon: Anchor, name: 'Offshore & Shipping' },
  { icon: Building2, name: 'Workforce Operations' },
  { icon: Store, name: 'SMEs & Beyond' },
]

export default function Industries() {
  return (
    <section id="industries" className="section-pad">
      <div className="container-kawie">
        <div className="reveal text-center mb-14">
          <span className="eyebrow">Industry Verticals</span>
          <h2 className="font-heading">Designed for O&amp;G. Built for any sector.</h2>
        </div>

        <div
          className="grid gap-4"
          data-stagger
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {industries.map((ind) => (
            <div key={ind.name} className="reveal kawie-card text-center">
              <div className="icon-tile icon-tile-navy mx-auto">
                <ind.icon size={26} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-base">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
