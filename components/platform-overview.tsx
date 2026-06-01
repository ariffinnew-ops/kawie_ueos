import { MODULE_CARDS } from '@/lib/showcase-data'
import AnimatedScreenshot from '@/components/showcase/animated-screenshot'

export default function PlatformOverview() {
  return (
    <section id="modules" className="section-light section-pad">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow">What You Get</span>
          <h2 className="font-heading">Four engines. One platform.</h2>
          <p className="mt-3 max-w-[560px] mx-auto text-center">
            Every module connected. Data flows automatically. Zero re-entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-stagger>
          {MODULE_CARDS.map((mod) => (
            <div key={mod.id} className="reveal module-showcase-card kawie-card flex flex-col">
              <div
                className="icon-tile mb-3"
                style={{ background: `${mod.color}18`, color: mod.color, width: 56, height: 56 }}
              >
                <mod.icon size={26} strokeWidth={1.75} aria-hidden />
              </div>
              <span
                className="inline-block text-xs font-bold tracking-wider mb-1"
                style={{ color: mod.color }}
              >
                [{mod.tag}]
              </span>
              <h3 className="mb-1 text-lg">{mod.name}</h3>
              <p className="text-sm mb-3">{mod.description}</p>
              <ul className="feature-list mb-4 flex-1">
                {mod.features.map((f) => (
                  <li key={f}>
                    <span style={{ color: mod.color }} className="shrink-0">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <AnimatedScreenshot
                filename={mod.screenshot}
                alt={`${mod.name} screenshot`}
                variant="card"
                className="mt-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
