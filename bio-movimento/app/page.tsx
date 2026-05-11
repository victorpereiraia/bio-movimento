import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { HeroSection } from "@/components/hero-section"
import { PilatesSection } from "@/components/pilates-section"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-16 sm:pt-[4.5rem]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PilatesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
