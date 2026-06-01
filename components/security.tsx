import {
  Shield,
  Lock,
  FileCheck,
  Cloud,
  KeyRound,
  type LucideIcon,
} from 'lucide-react'

const securityItems: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Shield,
    title: 'Row Level Security',
    description:
      'Database-enforced RLS on all tables. Project managers see only their project. Zero data leakage.',
  },
  {
    icon: Lock,
    title: 'RBAC L1/L2/L3',
    description:
      'Role-gated access at every route. Admin, Reviewer, and Viewer — fully enforced at system level.',
  },
  {
    icon: FileCheck,
    title: 'Audit Trails',
    description:
      'Login logs, procurement history, and cost ledgers — immutable, timestamped, always ready for audit.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    description:
      'Cloud infrastructure with PostgreSQL. Zero servers to maintain. 99.9% uptime SLA.',
  },
  {
    icon: KeyRound,
    title: 'Session Authentication',
    description:
      'Secure session management with role-based access. Security by design — no bypass flags.',
  },
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
    <section className="section-pad">
      <div className="container-kawie">
        <div className="reveal text-center mb-14">
          <span className="eyebrow">Security & Compliance</span>
          <h2 className="font-heading">Enterprise-grade. At every layer.</h2>
        </div>

        <div
          className="grid gap-4 mb-12"
          data-stagger
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {securityItems.map((item) => (
            <div key={item.title} className="reveal kawie-card">
              <div className="icon-tile icon-tile-navy">
                <item.icon size={24} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-base mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex gap-3 flex-wrap justify-center">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-medium text-[#0f2557] px-4 py-2 rounded-full border border-[rgba(15,37,87,0.12)] bg-white"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
