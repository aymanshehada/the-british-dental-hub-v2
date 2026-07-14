import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import Treatments from "@/components/home/Treatments"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import BeforeAfter from "@/components/home/BeforeAfter"
import Doctors from "@/components/home/Doctors"
import Testimonials from "@/components/home/Testimonials"
import CTA from "@/components/home/CTA"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#0A2247]">
      <TopBar />
      <Navbar />

      <main id="insights">
        <Hero />
        <TrustBar />
        <Treatments />
        <WhyChooseUs />
        <BeforeAfter />
        <Doctors />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}