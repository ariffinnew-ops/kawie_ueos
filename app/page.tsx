'use client'

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ProblemBand from '@/components/problem-band'
import Modules from '@/components/modules'
import Industries from '@/components/industries'
import Training from '@/components/training'
import Security from '@/components/security'
import CtaBand from '@/components/cta-band'
import Footer from '@/components/footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => {
      if (el.closest('#platform')) return
      observer.observe(el)
    })

    document.querySelectorAll('[data-stagger]').forEach((grid) => {
      const children = grid.querySelectorAll(':scope > .reveal')
      children.forEach((child, index) => {
        ;(child as HTMLElement).style.transitionDelay = `${index * 0.1}s`
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="landing-page min-h-screen">
      <Navbar />
      <div className="section-wrap-odd">
        <Hero />
      </div>
      <div className="section-wrap-even">
        <ProblemBand />
      </div>
      <div className="section-wrap-odd">
        <Modules />
      </div>
      <div className="section-wrap-even">
        <Industries />
      </div>
      <div className="section-wrap-odd">
        <Training />
      </div>
      <div className="section-wrap-even">
        <Security />
      </div>
      <div className="section-wrap-odd">
        <CtaBand />
      </div>
      <div className="section-wrap-even">
        <Footer />
      </div>
    </main>
  )
}
