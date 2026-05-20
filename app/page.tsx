import HeroSection from "@/components/hero-section"
import CircuitBackground from "@/components/circuit-background"

export default function Page() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      <CircuitBackground />
      <HeroSection />
    </main>
  )
}
