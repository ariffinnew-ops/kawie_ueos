"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Launch: 1 June 2026 at 00:00 (local time)
const LAUNCH_DATE = new Date(2026, 5, 1, 0, 0, 0, 0)

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = LAUNCH_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

interface UnitBoxProps {
  value: number
  label: string
}

function UnitBox({ value, label }: UnitBoxProps) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-[4.5rem] sm:w-20 md:w-24 h-[4.5rem] sm:h-20 md:h-24 flex items-center justify-center rounded-lg border font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tabular-nums tracking-tight"
        style={{
          borderColor: "var(--border-bright)",
          background: "rgba(0,229,212,0.04)",
          color: "var(--primary)",
          textShadow: "0 0 16px rgba(0,229,212,0.5)",
          boxShadow: "inset 0 0 20px rgba(0,229,212,0.04)",
        }}
      >
        {pad(value)}
      </div>
      <span
        className="text-sm sm:text-base font-medium uppercase tracking-[0.2em] font-sans"
        style={{ color: "var(--muted-foreground)" }}
      >
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 md:gap-5" aria-label="Countdown timer loading">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <UnitBox key={label} value={0} label={label} />
        ))}
      </div>
    )
  }

  return (
    <div
      className="flex gap-3 sm:gap-4 md:gap-5"
      role="timer"
      aria-label="Countdown to launch"
      aria-live="polite"
    >
      <UnitBox value={timeLeft.days} label="Days" />
      <UnitBox value={timeLeft.hours} label="Hours" />
      <UnitBox value={timeLeft.minutes} label="Mins" />
      <UnitBox value={timeLeft.seconds} label="Secs" />
    </div>
  )
}
