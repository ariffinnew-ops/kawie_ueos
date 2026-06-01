import {
  ShieldCheck,
  Cloud,
  FileCheck,
  Lock,
} from 'lucide-react'
import { COMPANY } from '@/lib/company-contact'

const trustBadges = [
  { icon: ShieldCheck, label: 'ISO 27001 Ready' },
  { icon: Lock, label: 'SOC 2 Compliant' },
  { icon: FileCheck, label: 'PDPA-Ready' },
  { icon: Cloud, label: 'Cloud-Native' },
]

export default function Hero() {
  return (
    <section
      id="platform"
      className="section-pad flex items-center"
      style={{ background: '#f8faff', minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="container-kawie text-center max-w-[860px] mx-auto">
        <div className="flex justify-center mb-8">
          <span
            className="inline-block text-xs font-medium text-[#0f2557] px-4 py-1.5 rounded-full border border-[rgba(15,37,87,0.12)] bg-white"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Now Live — Version 1.0
          </span>
        </div>

        <h1 className="font-heading mb-5">
          Unified Enterprise Operating System
        </h1>

        <p
          className="mb-5"
          style={{
            fontWeight: 300,
            fontSize: '17px',
            color: '#4a5578',
            lineHeight: 1.5,
          }}
        >
          Built for Oil &amp; Gas. Ready for Every Industry.
        </p>

        <p
          className="max-w-[640px] mx-auto mb-10"
          style={{ fontWeight: 400, fontSize: '16px', color: '#4a5578' }}
        >
          One platform that consolidates project management, crew operations, and
          supply chain into a single, always-on cloud system.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-14">
          <a href={COMPANY.demoUrl} className="btn-primary-navy">
            Book a Demo
          </a>
          <a href="#modules" className="btn-ghost-outline">
            Explore Platform
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {trustBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-xs text-[#4a5578]"
            >
              <Icon size={14} className="text-[#00c6d7] shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
