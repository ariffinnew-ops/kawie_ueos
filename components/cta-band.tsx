import { COMPANY } from '@/lib/company-contact'

export default function CtaBand() {
  return (
    <section id="contact" className="section-cyan section-pad scroll-mt-20">
      <div className="container-kawie reveal text-center max-w-[640px] mx-auto">
        <h2 className="font-heading text-[#0f2557] mb-3">Ready to see it live?</h2>
        <p className="text-[#0f2557]/85 mb-6" style={{ fontWeight: 400, lineHeight: 1.6 }}>
          Book a demo with our team. We&apos;ll walk you through your exact use case.
        </p>
        <a
          href={COMPANY.demoUrl}
          className="inline-flex items-center justify-center font-body font-medium text-base text-white no-underline rounded-lg px-7 py-3 bg-[#0f2557] hover:opacity-95 transition-opacity mb-5"
        >
          Request a Live Demo
        </a>
        <p className="text-sm text-[#0f2557]/80 m-0">
          <a
            href={`mailto:${COMPANY.emailAdmin}`}
            className="text-[#0f2557] no-underline hover:underline"
          >
            {COMPANY.emailAdmin}
          </a>
          {' · '}
          <a
            href={`mailto:${COMPANY.emailInquiry}`}
            className="text-[#0f2557] no-underline hover:underline"
          >
            {COMPANY.emailInquiry}
          </a>
        </p>
      </div>
    </section>
  )
}
