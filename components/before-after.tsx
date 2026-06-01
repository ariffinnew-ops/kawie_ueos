'use client'

import { useEffect, useRef, useState } from 'react'
import { COMPANY } from '@/lib/company-contact'
import {
  TIMELINE_COMPARISON_ITEMS,
  TIMELINE_STATS,
  type TimelineComparisonItem,
} from '@/lib/timeline-comparison-data'

function TypingError({ text, active }: { text: string; active: boolean }) {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (!active) {
      setLength(0)
      return
    }
    setLength(0)
    let i = 0
    const timer = window.setInterval(() => {
      i += 1
      setLength(i)
      if (i >= text.length) window.clearInterval(timer)
    }, 30)
    return () => window.clearInterval(timer)
  }, [active, text])

  return <span className="whitespace-pre-wrap">{text.slice(0, length)}</span>
}

function TerminalCard({
  item,
  active,
}: {
  item: TimelineComparisonItem['terminal']
  active: boolean
}) {
  return (
    <div
      className="terminal-timeline__card rounded-[10px] border p-5"
      style={{
        background: '#0d1117',
        borderColor: 'rgba(244,63,94,0.3)',
      }}
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ background: '#f43f5e' }}
          aria-hidden
        />
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ background: '#f59e0b' }}
          aria-hidden
        />
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ background: '#10b981' }}
          aria-hidden
        />
        <span
          className="font-body ml-2 text-[12px]"
          style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}
        >
          system.log
        </span>
      </div>
      <pre
        className="font-terminal m-0 whitespace-pre-wrap"
        style={{
          fontSize: '14px',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        {item.command}
        {'\n'}
        <span className="terminal-card__error-line">[ERROR] </span>
        <TypingError text={item.error} active={active} />
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.footer}</span>
      </pre>
    </div>
  )
}

function SolutionCard({ item }: { item: TimelineComparisonItem['solution'] }) {
  return (
    <div
      className="terminal-timeline__card rounded-[10px] border p-5 h-full flex flex-col"
      style={{
        background: 'rgba(0,198,215,0.06)',
        borderColor: 'rgba(0,198,215,0.25)',
      }}
    >
      <p
        className="font-body m-0 mb-3 text-[11px] uppercase tracking-[0.2em]"
        style={{ fontWeight: 700, color: '#00c6d7' }}
      >
        ✦ WITH UEOS
      </p>
      <div className="flex-1 space-y-0">
        {item.lines.map((line) => (
          <p
            key={line}
            className="font-body m-0 text-white"
            style={{ fontWeight: 500, fontSize: '15px', lineHeight: 1.8 }}
          >
            {line}
          </p>
        ))}
      </div>
      <span
        className="font-body self-start mt-4 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
        style={{
          background: 'rgba(0,198,215,0.12)',
          color: '#00c6d7',
        }}
      >
        [{item.module}]
      </span>
    </div>
  )
}

function TimelineRow({
  item,
  index,
}: {
  item: TimelineComparisonItem
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.22 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const problem = <TerminalCard item={item.terminal} active={visible} />
  const solution = <SolutionCard item={item.solution} />
  const left = item.swap ? solution : problem
  const right = item.swap ? problem : solution

  return (
    <div
      ref={ref}
      className={`terminal-timeline__item relative ${visible ? 'is-visible' : ''}`}
      style={{ '--item-index': index } as React.CSSProperties}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_24px_1fr] gap-6 md:gap-5 items-center">
        <div className="terminal-timeline__col-left min-w-0">{left}</div>
        <div className="flex justify-center md:px-0 py-1 md:py-0">
          <div className="terminal-timeline__dot shrink-0" aria-hidden />
        </div>
        <div className="terminal-timeline__col-right min-w-0">{right}</div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section
      className="terminal-timeline py-16"
      style={{ backgroundColor: '#0a0c10' }}
      aria-labelledby="terminal-timeline-heading"
    >
      <div className="container-kawie">
        <div className="reveal text-center max-w-[720px] mx-auto">
          <span className="eyebrow eyebrow-on-dark block text-center">
            The Difference
          </span>
          <h2
            id="terminal-timeline-heading"
            className="font-heading text-white text-center m-0"
            style={{ fontWeight: 800, fontSize: '40px' }}
          >
            From chaos to clarity.
          </h2>
          <p
            className="mt-4 text-center font-body m-0"
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Five real problems. Five permanent fixes.
          </p>
        </div>
      </div>

      <div className="relative max-w-[860px] mx-auto px-4 sm:px-6 mt-12">
        <div
          className="terminal-timeline__line pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col gap-12 md:gap-14">
          {TIMELINE_COMPARISON_ITEMS.map((item, index) => (
            <TimelineRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="container-kawie mt-14">
        <div
          className="reveal border-t pt-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 max-w-[720px] mx-auto"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {TIMELINE_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-8 sm:px-12 ${
                index > 0 ? 'sm:border-l' : ''
              }`}
              style={index > 0 ? { borderColor: 'rgba(255,255,255,0.08)' } : undefined}
            >
              <span
                className="font-heading text-[#00c6d7] leading-none"
                style={{ fontWeight: 800, fontSize: '48px' }}
              >
                {stat.value}
              </span>
              <span
                className="font-body mt-2 text-[13px]"
                style={{ fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="reveal text-center mt-10 font-body text-[14px] m-0"
          style={{ fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}
        >
          Enterprise operations deserve more than spreadsheets.{' '}
          <a
            href={COMPANY.demoUrl}
            className="text-[#00c6d7] no-underline hover:underline transition-colors"
            style={{ fontWeight: 600 }}
          >
            See UEOS in action →
          </a>
        </p>
      </div>
    </section>
  )
}
