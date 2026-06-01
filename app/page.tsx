'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import VideoSection from '@/components/video-section'
import StickyModuleShowcase from '@/components/sticky-module-showcase'
import Industries from '@/components/industries'
import Training from '@/components/training'
import BeforeAfter from '@/components/before-after'
import Security from '@/components/security'
import CtaBand from '@/components/cta-band'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function Home() {
  useScrollReveal()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <StickyModuleShowcase />
      <Industries />
      <Training />
      <BeforeAfter />
      <Security />
      <CtaBand />
      <Footer />
    </main>
  )
}
