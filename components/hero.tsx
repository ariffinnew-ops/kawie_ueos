import { COMPANY } from '@/lib/company-contact'
import AnimatedScreenshot from '@/components/showcase/animated-screenshot'

export default function Hero() {
  return (
    <section id="platform" className="section-light section-pad scroll-mt-20">
      <div className="container-kawie">
        <div className="reveal max-w-[720px] mx-auto text-center mb-8">
          <span className="eyebrow-pill">Enterprise Platform — Live V1.0</span>
          <h1 className="font-heading mt-4 mb-4 whitespace-pre-line">
            See exactly how UEOS{'\n'}runs your operations.
          </h1>
          <p
            className="mb-6 max-w-[560px] mx-auto"
            style={{ fontWeight: 300, fontSize: '17px', lineHeight: 1.55 }}
          >
            Not a pitch deck. A real system built for Oil &amp; Gas, used in production
            today.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={COMPANY.demoUrl} className="btn-primary-navy">
              Request a Live Demo
            </a>
            <a href="#video" className="btn-ghost-outline">
              Watch Overview ↓
            </a>
          </div>
        </div>

        <div className="reveal mx-auto max-w-[1000px] w-full">
          <AnimatedScreenshot
            filename="ueos-ecosystem-v2.png"
            alt="UEOS platform ecosystem overview"
            variant="hero"
            priority
          />
        </div>
      </div>
    </section>
  )
}
