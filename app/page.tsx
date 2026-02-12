import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrailerSection } from "@/components/trailer-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <HeroSection />

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <FeaturesSection />

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <TrailerSection />

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <HowItWorksSection />

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <ScreenshotsSection />

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <CtaSection />
      <Footer />
    </main>
  )
}
