import Image from 'next/image'
import { COMPANY } from '@/lib/company-contact'

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="block font-body text-[15px] text-[#c8d0e0] leading-[2.4] no-underline hover:text-[#00c6d7] transition-colors"
    >
      {children}
    </a>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="font-body text-[13px] font-bold uppercase tracking-[0.15em] mb-6"
      style={{ color: '#00c6d7' }}
    >
      {children}
    </h4>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f2557] pt-20 pb-0">
      <div
        className="container-kawie grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        style={{ paddingBottom: 48 }}
      >
        {/* Col 1 — Brand */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/kawie-logo.jpg"
              alt="Kawie Digital Solutions"
              width={44}
              height={44}
              className="rounded-lg shrink-0"
            />
            <span
              className="text-white leading-tight font-heading"
              style={{ fontWeight: 700, fontSize: 15 }}
            >
              Kawie Digital Solutions Sdn Bhd
            </span>
          </div>
          <p className="font-body text-[15px] text-[#c8d0e0] leading-relaxed mt-3">
            Your trusted digital partner — from custom software to enterprise platforms to
            hands-on workforce training.
          </p>
          <span className="font-body self-start text-[#00c6d7] text-[13px] font-bold uppercase tracking-[0.2em] mt-4">
            Authorised Training Centre — with {COMPANY.trainingVenue}
          </span>
          <p className="font-body text-[13px] text-[#8892a8] mt-4 m-0">
            SSM: 202601019532 (1681629-X)
          </p>
        </div>

        {/* Col 2 — Platform */}
        <div className="flex flex-col">
          <FooterHeading>Platform</FooterHeading>
          <ul className="flex flex-col m-0 p-0 list-none">
            <li>
              <FooterLink href="#modules">UEOS Overview</FooterLink>
            </li>
            <li>
              <FooterLink href="#pms">PMS — Projects</FooterLink>
            </li>
            <li>
              <FooterLink href="#cms">CMS — Crewing</FooterLink>
            </li>
            <li>
              <FooterLink href="#scm">SCM — Procurement</FooterLink>
            </li>
            <li>
              <FooterLink href="#pcm">PCM — Budget</FooterLink>
            </li>
          </ul>
        </div>

        {/* Col 3 — Company */}
        <div className="flex flex-col">
          <FooterHeading>Company</FooterHeading>
          <ul className="flex flex-col m-0 p-0 list-none">
            <li>
              <FooterLink href="https://kawie-digital.com/home/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink href="#platform">Our Product — UEOS</FooterLink>
            </li>
            <li>
              <FooterLink href="#training">Training — UEOS-APOG</FooterLink>
            </li>
            <li>
              <FooterLink href="#industries">Industries We Serve</FooterLink>
            </li>
            <li>
              <FooterLink href={COMPANY.contactUrl}>Contact Us</FooterLink>
            </li>
          </ul>
        </div>

        {/* Col 4 — Connect */}
        <div className="flex flex-col">
          <FooterHeading>Connect</FooterHeading>
          <ul className="flex flex-col m-0 p-0 list-none">
            <li>
              <FooterLink href={`mailto:${COMPANY.emailAdmin}`}>
                {COMPANY.emailAdmin}
              </FooterLink>
            </li>
            <li>
              <FooterLink href={`mailto:${COMPANY.emailInquiry}`}>
                {COMPANY.emailInquiry}
              </FooterLink>
            </li>
          </ul>
          <address className="not-italic font-body text-[15px] text-[#c8d0e0] leading-[2.4] mt-2">
            {COMPANY.address.line1}
            <br />
            {COMPANY.address.line2}
            <br />
            {COMPANY.address.line3}
            <br />
            {COMPANY.address.line4}
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-kawie">
          <p className="font-body text-center text-[13px] text-[#8892a8] m-0">
            &copy; 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
