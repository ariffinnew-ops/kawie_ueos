"use client"

import Image from "next/image"
import StatusBadge from "@/components/status-badge"
import CountdownTimer from "@/components/countdown-timer"

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-2.5 px-4 py-2 text-center w-full max-w-3xl mx-auto">

      {/* Logo */}
      <div className="relative shrink-0">
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
          style={{ background: "rgba(0,229,212,0.25)" }}
          aria-hidden="true"
        />
        <Image
          src="/kawie-logo.jpg"
          alt="Kawie Digital Solution logo — neon K on circuit board"
          width={200}
          height={200}
          className="relative rounded-2xl w-[min(42vw,200px)] h-[min(42vw,200px)] object-cover"
          priority
        />
      </div>

      {/* Status badge */}
      <StatusBadge />

      {/* Company name */}
      <h1
        className="text-[clamp(1.125rem,4.2vw,2.25rem)] font-semibold tracking-[0.08em] uppercase text-foreground leading-tight whitespace-nowrap max-w-[95vw]"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        Kawie{" "}
        <span
          className="font-bold"
          style={{ color: "var(--primary)", textShadow: "0 0 24px rgba(0,229,212,0.5)" }}
        >
          Digital
        </span>{" "}
        Solutions{" "}
        <span className="font-medium tracking-[0.12em] text-muted-foreground">
          Sdn Bhd
        </span>
      </h1>

      {/* Divider */}
      <div className="flex items-center gap-3 w-full max-w-xs" aria-hidden="true">
        <div className="flex-1 h-px" style={{ background: "var(--border-bright)" }} />
        <div
          className="w-2 h-2 rotate-45"
          style={{ background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }}
        />
        <div className="flex-1 h-px" style={{ background: "var(--border-bright)" }} />
      </div>

      {/* Tagline */}
      <p className="text-sm sm:text-base text-muted-foreground leading-snug max-w-md text-balance">
        We are currently building something{" "}
        <span style={{ color: "var(--primary)" }}>powerful</span>. Our website is under
        construction and will be ready soon.
      </p>

      {/* Countdown */}
      <CountdownTimer />

      {/* Contact row */}
      <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-sm text-muted-foreground font-mono">
        <span
          className="px-3 py-1 rounded border text-sm tracking-widest uppercase"
          style={{ borderColor: "var(--border-bright)", color: "var(--primary-dim)" }}
        >
          Get in touch
        </span>
        <a
          href="mailto:info@kawiedigital.com"
          className="transition-colors hover:text-foreground"
          style={{ color: "var(--muted-foreground)" }}
        >
          info@kawiedigital.com
        </a>
      </div>

      {/* Footer note */}
      <p className="text-xs sm:text-sm text-muted-foreground font-mono tracking-widest uppercase opacity-40">
        &copy; {new Date().getFullYear()} Kawie Digital Solution Sdn Bhd
      </p>
    </section>
  )
}
