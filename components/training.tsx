import { Calendar, Mail } from 'lucide-react'
import { COMPANY } from '@/lib/company-contact'

export default function Training() {
  return (
    <section id="training" className="section-light section-pad scroll-mt-20">
      <div className="container-kawie">
        <div className="reveal section-header">
          <span className="eyebrow">Training Program</span>
          <h2 className="font-heading">UEOS-APOG</h2>
          <p className="mt-3 max-w-[560px] mx-auto text-center">
            Hands-on operator training — from day-one onboarding to advanced workflow automation.
          </p>
        </div>
        <div className="reveal max-w-[640px] mx-auto kawie-card text-center">
          <h3 className="mb-2 text-lg">Authorised Training Centre</h3>
          <p className="text-sm mb-4">
            {COMPANY.trainingVenue} — register your team for the next UEOS-APOG intake.
          </p>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#f8faff] border border-[rgba(15,37,87,0.08)] mb-4">
            <Calendar size={16} className="text-[#00c6d7] shrink-0" aria-hidden />
            <span className="text-sm text-[#4a5578]">June 2026 · {COMPANY.trainingVenue}</span>
          </div>
          <a href={COMPANY.demoUrl} className="btn-primary-navy inline-block mb-3">
            Book Training Inquiry
          </a>
          <a
            href={`mailto:${COMPANY.trainingEmail}`}
            className="flex items-center justify-center gap-2 text-sm text-[#4a5578] no-underline hover:text-[#00c6d7]"
          >
            <Mail size={14} aria-hidden />
            {COMPANY.trainingEmail}
          </a>
        </div>
      </div>
    </section>
  )
}
