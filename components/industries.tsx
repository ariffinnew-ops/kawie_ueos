import { Flame, HardHat, Anchor, Building2, Store } from 'lucide-react'

const industries = [
  { icon: Flame, name: 'Oil & Gas' },
  { icon: HardHat, name: 'Construction & Services' },
  { icon: Anchor, name: 'Offshore & Shipping' },
  { icon: Building2, name: 'Workforce Operations' },
  { icon: Store, name: 'SMEs & Beyond' },
]

export default function Industries() {
  return (
    <section id="industries" className="section-light section-pad scroll-mt-20">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow">Industry Verticals</span>
          <h2 className="font-heading">Designed for O&amp;G. Built for any sector.</h2>
          <p className="mt-3 max-w-[560px] mx-auto text-center">
            UEOS was stress-tested in offshore Oil &amp; Gas — that rigour now serves every
            industry vertical.
          </p>
        </div>
        <div
          className="grid gap-3 reveal"
          data-stagger
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
        >
          {industries.map((ind) => (
            <div key={ind.name} className="reveal kawie-card text-center py-4">
              <div className="icon-tile icon-tile-navy mx-auto mb-2">
                <ind.icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-sm">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
