"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BeforeYouVisitSection from "@/components/before-you-visit-section"
import OperatingHoursSection from "@/components/operating-hours-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BeforeYouVisitSection />
      <OperatingHoursSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
