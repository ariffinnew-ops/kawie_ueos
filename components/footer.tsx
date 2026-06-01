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
      className="block font-body text-[15px] text-[#c8d0e0] leading-[2] no-underline hover:text-[#00c6d7] transition-colors"
    >
      {children}
    </a>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="font-body text-[13px] font-bold uppercase tracking-[0.15em] mb-3"
      style={{ color: '#00c6d7' }}
    >
      {children}
    </h4>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f2557] py-8 pb-0">
      <div className="container-kawie grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="Kawie Digital Solutions"
              width={56}
              height={56}
              className="shrink-0 h-14 w-14"
            />
            <span
              className="text-white leading-tight font-heading"
              style={{ fontWeight: 700, fontSize: 15 }}
            >
              Kawie Digital Solutions Sdn Bhd
            </span>
          </div>
          <p className="font-body text-[15px] text-[#c8d0e0] leading-snug mt-2">
            Unified Enterprise Operating System for modern operations teams.
          </p>
          <p className="font-body self-start text-[#00c6d7] text-[12px] font-bold uppercase tracking-[0.18em] mt-3 m-0">
            Authorised Training Centre
          </p>
          <p className="font-body text-[13px] text-[#c8d0e0] mt-1 m-0">
            {COMPANY.trainingVenue}
          </p>
          <Image
            src="/ayerspot%20logo.png"
            alt="Cyber9HUB @ Ayerspot"
            width={140}
            height={48}
            className="mt-2 h-10 w-auto object-contain object-left"
          />
        </div>

        <div className="flex flex-col">
          <FooterHeading>Company</FooterHeading>
          <ul className="flex flex-col m-0 p-0 list-none">
            <li>
              <FooterLink href={COMPANY.aboutUrl}>About Us</FooterLink>
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
          </ul>
        </div>

        <div className="flex flex-col">
          <FooterHeading>Contact</FooterHeading>
          <ul className="flex flex-col m-0 p-0 list-none">
            <li>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </li>
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
          <address className="not-italic font-body text-[15px] text-[#c8d0e0] leading-[1.8] mt-2">
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

      <div className="border-t border-white/10 py-3">
        <div className="container-kawie">
          <p className="font-body text-center text-[13px] text-[#8892a8] m-0">
            &copy; 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
