import { Calendar, Mail } from 'lucide-react'
import { COMPANY } from '@/lib/company-contact'

const skills = [
  { num: '01', label: 'Enterprise System Integration' },
  { num: '02', label: 'Project & Operations Optimization' },
  { num: '03', label: 'Workflow Automation Skills' },
  { num: '04', label: 'Cloud-Based Scalability Practices' },
  { num: '05', label: 'Data Intelligence & Reporting' },
]

export default function Training() {
  return (
    <section id="training" className="section-pad">
      <div className="container-kawie">
        <div className="reveal text-center mb-14">
          <span className="eyebrow">Training Program</span>
          <h2 className="font-heading">UEOS-APOG</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <h3 className="mb-4">Empowering Your Operational Transformation</h3>
            <p className="mb-8">
              The UEOS-APOG program trains operators and data lodgers to take full control of the
              platform — from day-one onboarding to advanced workflow automation.
            </p>
            <div className="flex flex-col gap-3">
              {skills.map((s) => (
                <div
                  key={s.num}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[rgba(15,37,87,0.08)]"
                >
                  <span className="font-heading text-[#00c6d7] text-xs shrink-0">
                    {s.num}
                  </span>
                  <span className="text-sm text-[#4a5578]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal kawie-card">
            <h3 className="mb-2">UEOS-APOG Training</h3>
            <p className="text-sm mb-6">
              Authorised training at {COMPANY.trainingVenue}. Register your team for the next
              intake.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-[#f8faff] border border-[rgba(15,37,87,0.08)] mb-6">
              <Calendar size={16} className="text-[#00c6d7] shrink-0" aria-hidden />
              <span className="text-sm text-[#4a5578]">
                June 2026 · {COMPANY.trainingVenue}
              </span>
            </div>

            <a href={COMPANY.demoUrl} className="btn-primary-navy w-full text-center mb-4 block">
              Book a Demo
            </a>

            <a
              href={`mailto:${COMPANY.trainingEmail}`}
              className="flex items-center gap-2 text-sm text-[#4a5578] no-underline hover:text-[#00c6d7]"
            >
              <Mail size={14} aria-hidden />
              {COMPANY.trainingEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
