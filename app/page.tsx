import { CursorTrail } from "@/components/cursor-trail"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PrincipalMessage } from "@/components/principal-message"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { AdmissionsSection } from "@/components/admissions-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PrincipalMessage />
        <EventsSection />
        <GallerySection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
