'use client'

import { useState } from 'react'
import Image from 'next/image'
import { COMPANY } from '@/lib/company-contact'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Modules', href: '#modules' },
  { label: 'Industries', href: '#industries' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-[rgba(15,37,87,0.08)]">
      <div className="container-kawie flex items-center justify-between h-14">
        <a href={COMPANY.homeUrl} className="flex items-center gap-2.5 no-underline min-w-0">
          <Image
            src="/kawie-logo.jpg"
            alt="Kawie Digital Solutions"
            width={34}
            height={34}
            className="rounded-lg shrink-0"
            priority
          />
          <span
            className="hidden sm:block font-heading text-[#0f2557] leading-tight"
            style={{ fontWeight: 700, fontSize: 15 }}
          >
            Kawie Digital Solutions
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-[#0f2557] no-underline text-base font-normal hover:text-[#00c6d7] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={COMPANY.contactUrl}
            className="inline-flex items-center justify-center font-body font-medium text-sm text-white no-underline transition-all duration-200 hover:opacity-90"
            style={{
              background: '#0f2557',
              borderRadius: 999,
              padding: '8px 18px',
            }}
          >
            Talk to Us
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-0 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className="block w-5 h-0.5 bg-[#0f2557] transition-all duration-200"
            style={{
              transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 bg-[#0f2557] transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-[#0f2557] transition-all duration-200"
            style={{
              transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(15,37,87,0.08)] bg-white px-6 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-[#0f2557] no-underline text-base py-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href={COMPANY.contactUrl}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center font-body font-medium text-base text-white no-underline mt-3"
            style={{
              background: '#0f2557',
              borderRadius: 999,
              padding: '8px 18px',
            }}
          >
            Talk to Us
          </a>
        </div>
      )}
    </header>
  )
}
