import { CheckCircle2 } from 'lucide-react'
import { MODULE_DIVES } from '@/lib/showcase-data'
import AnimatedScreenshot from '@/components/showcase/animated-screenshot'

export default function ModuleDeepDive() {
  return (
    <>
      {MODULE_DIVES.map((mod) => {
        const isDark = mod.theme === 'dark'
        const imageFirst = mod.imageSide === 'left'

        const imageCol = (
          <div
            className={`reveal flex flex-col gap-4 w-full ${
              imageFirst ? 'lg:items-start' : 'lg:items-end lg:ml-auto'
            } ${imageFirst ? '' : 'lg:order-2'}`}
          >
            <AnimatedScreenshot
              filename={mod.primaryImage}
              alt={`${mod.eyebrow} primary screenshot`}
              variant="primary"
            />
            <AnimatedScreenshot
              filename={mod.secondaryImage}
              alt={`${mod.eyebrow} secondary screenshot`}
              variant="secondary"
              delay
              className="w-full max-w-[420px]"
            />
          </div>
        )

        const contentCol = (
          <div className={`reveal ${imageFirst ? '' : 'lg:order-1'}`}>
            <span className={isDark ? 'eyebrow eyebrow-on-dark' : 'eyebrow'}>
              {mod.eyebrow}
            </span>
            <h2
              className={`font-heading mt-2 mb-4 whitespace-pre-line ${isDark ? 'text-white' : ''}`}
            >
              {mod.title}
            </h2>
            <p
              className={`mb-6 ${isDark ? 'text-white/75' : ''}`}
              style={{ fontWeight: 300, lineHeight: 1.6 }}
            >
              {mod.body}
            </p>
            <ul className="space-y-2.5">
              {mod.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5 text-[#00c6d7]"
                    aria-hidden
                  />
                  <span className={isDark ? 'text-white/90' : 'text-[#4a5578]'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )

        return (
          <section
            key={mod.id}
            id={mod.id}
            className={isDark ? 'section-dark section-pad' : 'section-light section-pad'}
          >
            <div className="container-kawie">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                {imageFirst ? (
                  <>
                    {imageCol}
                    {contentCol}
                  </>
                ) : (
                  <>
                    {contentCol}
                    {imageCol}
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
