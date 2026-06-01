import {
  FileSpreadsheet,
  TrendingDown,
  ShieldAlert,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react'

const problems: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: FileSpreadsheet,
    title: 'Version-conflict spreadsheets',
    description:
      'Roster updates in one tool, procurement in another, payroll elsewhere. No single source of truth.',
  },
  {
    icon: TrendingDown,
    title: 'No real-time cost visibility',
    description:
      'Budget overruns discovered at month-end — not when decisions can still be made.',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance surprises',
    description:
      'Crew members offshore with lapsed BOSIET or APC — because no one was tracking certificate expiry.',
  },
  {
    icon: ClipboardList,
    title: 'Audit unreadiness',
    description:
      'PETRONAS audit incoming. Hours spent assembling data that should have been one click away.',
  },
]

export default function ProblemBand() {
  return (
    <section className="section-pad">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow">The Challenge</span>
          <h2 className="font-heading max-w-[600px] mx-auto">
            Fragmented systems are costing you money.
          </h2>
        </div>

        <div
          className="grid gap-2"
          data-stagger
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {problems.map((p) => (
            <div key={p.title} className="reveal kawie-card">
              <div className="icon-tile icon-tile-navy">
                <p.icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mb-1 text-base">{p.title}</h3>
              <p className="text-sm text-clamp-2">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
