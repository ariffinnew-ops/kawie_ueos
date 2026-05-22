import Image from "next/image"
import Link from "next/link"

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[15px] text-[#c8d0e0] leading-[2.4] hover:text-[#00c6d7] transition-colors no-underline"
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#060810] border-t-2 border-[#00c6d7]/30 pt-20 pb-0">
      <div
        className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        style={{ maxWidth: 1160, paddingBottom: 48 }}
      >
        {/* Col 1 — Brand */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/kawie-logo.jpg"
              alt="Kawie Digital Solutions"
              width={44}
              height={44}
              className="rounded-lg shrink-0 h-11 w-auto"
            />
            <span
              className="text-white leading-tight"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Kawie Digital Solutions Sdn Bhd
            </span>
          </div>
          <p className="font-sans text-[15px] text-[#c8d0e0] leading-relaxed mt-3">
            Kawie Digital Solutions Sdn Bhd — Unified Enterprise Operating System for modern operations teams.
          </p>
          <span className="font-sans self-start text-[#00c6d7] text-[13px] font-bold uppercase tracking-[0.2em] mt-4">
            Authorised Agent &amp; Training Centre
          </span>
        </div>

        {/* Col 2 — Platform */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">Platform</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "UEOS Overview",
              "PMS — Projects",
              "CMS — Crewing",
              "SCM — Procurement",
              "PCM — Budget",
            ].map((item) => (
              <li key={item}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Industries */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">Industries</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Oil & Gas",
              "Construction",
              "Offshore & Shipping",
              "Workforce Ops",
              "SMEs",
            ].map((item) => (
              <li key={item}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">Company</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            <li>
              <FooterLink href="#">Training — UEOS-APOG</FooterLink>
            </li>
            <li>
              <FooterLink href="mailto:admin@kawie-digital.com">admin@kawie-digital.com</FooterLink>
            </li>
            <li>
              <FooterLink href="tel:+601121734434">+6011-2173 4434</FooterLink>
            </li>
            <li>
              <a
                href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-[#c8d0e0] leading-[2.4] hover:text-[#00c6d7] transition-colors no-underline"
              >
                WhatsApp Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#040609] border-t border-white/8 py-5">
        <div
          className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-[#8892a8]"
          style={{ maxWidth: 1160 }}
        >
          <p className="font-sans text-center md:text-left m-0">
            &copy; 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
          <p className="font-sans text-center md:text-right m-0">
            Powered by Next.js &middot; Supabase &middot; Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
