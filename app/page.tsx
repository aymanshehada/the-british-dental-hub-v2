import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { AboutSection } from "@/components/about-section"
import { TreatmentsSection } from "@/components/treatments-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { JourneySection } from "@/components/journey-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustSection />
      <AboutSection />
      <TreatmentsSection />
      <BeforeAfterSection />
      <JourneySection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
