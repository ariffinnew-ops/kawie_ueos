import {
  Shield,
  Lock,
  FileCheck,
  Cloud,
  KeyRound,
  type LucideIcon,
} from 'lucide-react'

const securityItems: { icon: LucideIcon; title: string }[] = [
  { icon: Shield, title: 'Row Level Security' },
  { icon: Lock, title: 'RBAC L1/L2/L3' },
  { icon: FileCheck, title: 'Audit Trails' },
  { icon: Cloud, title: 'Cloud-Native Infrastructure' },
  { icon: KeyRound, title: 'Session Authentication' },
]

const badges = [
  'ISO 27001 Ready',
  'SOC 2 Compliant',
  'PDPA-Ready',
  'PostgreSQL 15+',
  'Edge Network',
]

export default function Security() {
  return (
    <section className="section-dark section-pad">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow eyebrow-on-dark">Security & Compliance</span>
          <h2 className="font-heading text-white">Enterprise-grade. At every layer.</h2>
        </div>

        <div
          className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
          data-stagger
        >
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="reveal flex flex-col items-center text-center p-4 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="icon-tile icon-tile-navy mb-2 mx-auto" style={{ width: 48, height: 48 }}>
                <item.icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-sm text-white font-heading" style={{ fontWeight: 700 }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="reveal flex gap-2 flex-wrap justify-center">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-medium text-[#00c6d7] px-3 py-1.5 rounded-full border border-[#00c6d7]/40 bg-transparent"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
