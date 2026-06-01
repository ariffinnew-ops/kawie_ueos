'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import {
  STICKY_SCROLL_PANELS,
  MODULE_ACCENTS,
  screenshotPath,
} from '@/lib/showcase-data'

export default function StickyModuleShowcase() {
  const [activeId, setActiveId] = useState(STICKY_SCROLL_PANELS[0].id)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  const activePanel =
    STICKY_SCROLL_PANELS.find((p) => p.id === activeId) ?? STICKY_SCROLL_PANELS[0]
  const activeAccent = MODULE_ACCENTS[activePanel.moduleTag]

  const setPanelRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    panelRefs.current[index] = el
  }, [])

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!panels.length) return

    const updateActiveFromViewport = () => {
      const viewportCenter = window.innerHeight / 2
      let closestId = STICKY_SCROLL_PANELS[0].id
      let closestDistance = Number.POSITIVE_INFINITY

      panels.forEach((panel) => {
        const id = panel.getAttribute('data-panel-id')
        if (!id) return
        const rect = panel.getBoundingClientRect()
        const panelCenter = rect.top + rect.height / 2
        const distance = Math.abs(panelCenter - viewportCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestId = id
        }
      })

      setActiveId(closestId)
    }

    const observer = new IntersectionObserver(() => updateActiveFromViewport(), {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-35% 0px -35% 0px',
    })

    panels.forEach((panel) => observer.observe(panel))
    window.addEventListener('scroll', updateActiveFromViewport, { passive: true })
    window.addEventListener('resize', updateActiveFromViewport)
    updateActiveFromViewport()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateActiveFromViewport)
      window.removeEventListener('resize', updateActiveFromViewport)
    }
  }, [])

  return (
    <section id="modules" className="sticky-module-section">
      <div className="container-kawie">
        <div className="reveal sticky-module-header text-center max-w-[720px] mx-auto mb-12 lg:mb-16">
          <span className="eyebrow eyebrow-on-dark">Platform Modules</span>
          <h2 className="font-heading text-white mt-2">Four engines. One platform.</h2>
          <p className="text-white/70 mt-3" style={{ fontWeight: 400, lineHeight: 1.6 }}>
            Every module connected. Data flows automatically. Zero re-entry. Scroll to explore
            each live screen.
          </p>
        </div>

        <div className="sticky-module-layout">
          <div className="sticky-module-panels">
            {STICKY_SCROLL_PANELS.map((panel, index) => {
              const accent = MODULE_ACCENTS[panel.moduleTag]
              const isActive = activeId === panel.id
              return (
                <div key={panel.id}>
                  <div
                    id={panel.id}
                    ref={setPanelRef(index)}
                    data-panel-id={panel.id}
                    className={`content-panel content-panel--tall scroll-mt-24 ${isActive ? 'content-panel--active' : ''}`}
                    style={{ '--panel-accent': accent } as React.CSSProperties}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="module-tag-pill"
                        style={{
                          color: accent,
                          borderColor: `${accent}55`,
                          background: `${accent}18`,
                        }}
                      >
                        [{panel.moduleTag}]
                      </span>
                      <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                        {panel.screenLabel}
                      </span>
                    </div>
                    <h3 className="font-heading text-white text-[26px] leading-tight mb-4">
                      {panel.title}
                    </h3>
                    <p className="text-white/70 mb-6" style={{ fontWeight: 400, lineHeight: 1.65 }}>
                      {panel.body}
                    </p>
                    <ul className="feature-list-sticky">
                      {panel.features.map((feature, fi) => (
                        <li
                          key={feature}
                          className="feature-list-sticky__item"
                          style={{ '--stagger': `${fi * 0.1}s` } as React.CSSProperties}
                        >
                          <CheckCircle2
                            size={18}
                            className="shrink-0 mt-0.5"
                            style={{ color: accent }}
                            aria-hidden
                          />
                          <span className="text-white/85 text-sm leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sticky-module-mobile-shot lg:hidden">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2 px-6">
                      {panel.screenLabel}
                    </p>
                    <div
                      className="sticky-screenshot-frame mx-6"
                      style={
                        {
                          '--shot-accent': accent,
                          boxShadow: `0 0 0 1px ${accent}66, 0 24px 80px rgba(0,0,0,0.5)`,
                        } as React.CSSProperties
                      }
                    >
                      <Image
                        src={screenshotPath(panel.screenshot)}
                        alt={`${panel.screenLabel} — ${panel.moduleTag}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto block rounded-lg"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <aside className="sticky-module-aside hidden lg:block" aria-label="Platform screenshots">
            <div className="sticky-module-visual">
              <div className="progress-dots" aria-hidden>
                {STICKY_SCROLL_PANELS.map((panel) => {
                  const accent = MODULE_ACCENTS[panel.moduleTag]
                  return (
                    <button
                      key={panel.id}
                      type="button"
                      title={panel.screenLabel}
                      className={`progress-dot ${activeId === panel.id ? 'progress-dot--active' : ''}`}
                      style={
                        activeId === panel.id
                          ? ({ '--dot-accent': accent } as React.CSSProperties)
                          : undefined
                      }
                      onClick={() => {
                        const el = panelRefs.current.find(
                          (p) => p?.getAttribute('data-panel-id') === panel.id
                        )
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      }}
                      aria-label={`View ${panel.screenLabel}`}
                    />
                  )
                })}
              </div>

              <div
                className="sticky-screenshot-frame flex-1 min-w-0"
                style={
                  {
                    '--shot-accent': activeAccent,
                    boxShadow: `0 0 0 1px ${activeAccent}66, 0 24px 80px rgba(0,0,0,0.5)`,
                  } as React.CSSProperties
                }
              >
                <div className="sticky-screenshot-stack">
                  {STICKY_SCROLL_PANELS.map((panel) => (
                    <Image
                      key={panel.id}
                      src={screenshotPath(panel.screenshot)}
                      alt={`${panel.screenLabel} — ${panel.moduleTag}`}
                      width={1200}
                      height={800}
                      className={`sticky-screenshot-img ${
                        activeId === panel.id ? 'sticky-screenshot-img--active' : ''
                      }`}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority={panel.id === 'overview'}
                    />
                  ))}
                </div>
                <p className="sticky-screenshot-caption text-center mt-3 mb-0 text-sm text-white/60">
                  <span style={{ color: activeAccent }} className="font-semibold">
                    [{activePanel.moduleTag}]
                  </span>{' '}
                  {activePanel.screenLabel}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
