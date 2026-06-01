import {
  LayoutDashboard,
  Users,
  Package,
  DollarSign,
  type LucideIcon,
} from 'lucide-react'

const modules: {
  id: string
  abbr: string
  full: string
  color: string
  icon: LucideIcon
  description: string
  features: string[]
}[] = [
  {
    id: 'pms',
    abbr: 'PMS',
    full: 'Project Management System',
    color: '#00c6d7',
    icon: LayoutDashboard,
    description: 'The command centre for every active contract.',
    features: [
      'Portfolio dashboard with live contract values',
      'Budget vs actual across all projects',
      'S-curve forecasting & variance analysis',
      'L1/L2/L3 role-gated project access',
    ],
  },
  {
    id: 'cms',
    abbr: 'CMS',
    full: 'Crewing Management System',
    color: '#7c3aed',
    icon: Users,
    description: 'Full crew lifecycle from onboarding to offboarding.',
    features: [
      'Complete crew records — every position covered',
      'Auto-alerts at 90, 30, and 0 days before cert expiry',
      '24-cycle rotation management per year',
      'Statement auto-calculated, flows to project budget',
    ],
  },
  {
    id: 'scm',
    abbr: 'SCM',
    full: 'Supply Chain Management',
    color: '#f59e0b',
    icon: Package,
    description: 'Full procurement lifecycle, every transaction tagged.',
    features: [
      'MSR → PO → DO — zero manual reference tracking',
      'Real-time inventory with reorder alerts at 5 units',
      'Vendor directory & payment tracking (OS Days)',
      'Auto-charged to requesting project budget',
    ],
  },
  {
    id: 'pcm',
    abbr: 'PCM',
    full: 'Project Cost Management',
    color: '#10b981',
    icon: DollarSign,
    description: 'Financial intelligence per project, live.',
    features: [
      'Manpower · Materials · Machinery · Special Services',
      'Real-time burn rate & risk analysis per day',
      'Forecast mode for future financial planning',
      'Pulls live from SCM + CMS — zero re-entry',
    ],
  },
]

export default function Modules() {
  return (
    <section id="modules" className="section-pad">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow">Core Modules</span>
          <h2 className="font-heading">Four engines. One platform.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-stagger>
          {modules.map((mod) => (
            <div key={mod.abbr} id={mod.id} className="reveal kawie-card">
              <div
                className="icon-tile mb-2"
                style={{ background: `${mod.color}18`, color: mod.color }}
              >
                <mod.icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <span
                className="inline-block text-xs font-bold tracking-wider mb-0.5"
                style={{ color: mod.color }}
              >
                {mod.abbr}
              </span>
              <h3 className="mb-1 text-base">{mod.full}</h3>
              <p className="text-sm mb-2 text-clamp-2">{mod.description}</p>
              <ul className="feature-list">
                {mod.features.map((f) => (
                  <li key={f}>
                    <span style={{ color: mod.color }} className="shrink-0">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
