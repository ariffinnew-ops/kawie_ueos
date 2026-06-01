import { COMPANY } from '@/lib/company-contact'

export default function CtaBand() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: '#0f2557' }}
    >
      <div className="container-kawie reveal text-center max-w-[720px] mx-auto">
        <h2 className="font-heading text-white mb-6">
          Your business. Your rules. One platform.
        </h2>
        <p className="text-white/80 mb-10" style={{ fontSize: '16px' }}>
          Stop managing operations in spreadsheets. Start with UEOS today.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href={COMPANY.demoUrl} className="btn-primary-cyan">
            Request a Demo
          </a>
          <a href={COMPANY.contactUrl} className="btn-ghost-white">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
