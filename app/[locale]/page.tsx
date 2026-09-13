import { setRequestLocale } from "next-intl/server"
import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/home/Hero"
import WhyBdh from "@/components/home/WhyBdh"
import OurStory from "@/components/home/OurStory"
import PatientJourneyStrip from "@/components/home/PatientJourneyStrip"
import Treatments from "@/components/home/Treatments"
import Doctors from "@/components/home/Doctors"
import CaseStories from "@/components/home/CaseStories"
import JournalPreview from "@/components/home/JournalPreview"
import CTA from "@/components/home/CTA"
import { InternationalPatientsPrompt } from "@/components/home/InternationalPatientsPrompt"
import type { AppLocale } from "@/i18n/routing"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-brand-bg text-[#0A2247]">
      <TopBar />
      <Navbar />

      <main id="insights">
        <Hero />
        <WhyBdh />
        <OurStory />
        <PatientJourneyStrip />
        <Treatments />
        <Doctors />
        <CaseStories />
        <JournalPreview locale={locale as AppLocale} />
        <CTA />
      </main>

      <InternationalPatientsPrompt />

      <Footer />
    </div>
  )
}
