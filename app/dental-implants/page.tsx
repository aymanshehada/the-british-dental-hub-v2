import type { Metadata } from 'next'
import { BeforeAfterGallery } from '@/components/implant/BeforeAfterGallery'
import { ConsultationCtaSection } from '@/components/implant/ConsultationCtaSection'
import { DigitalDentistrySection } from '@/components/implant/DigitalDentistrySection'
import { HeroSection } from '@/components/implant/HeroSection'
import { ImplantSystemsSection } from '@/components/implant/ImplantSystemsSection'
import { JourneySection } from '@/components/implant/JourneySection'
import { PatientStoriesSection } from '@/components/implant/PatientStoriesSection'
import { WhyChooseSection } from '@/components/implant/WhyChooseSection'

const pageTitle = 'Dental Implants | The British Dental Hub'
const pageDescription =
  'Restore your smile with premium implant dentistry using digital planning, world-class implant systems and meticulous clinical precision in Cairo.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Dental Implants',
    'Premium Implant Dentistry',
    'Dental Implants Egypt',
    'Smile Restoration',
    'Digital Dental Planning',
    'British Dental Clinic',
    'Cosmetic Dentistry',
  ],
  alternates: {
    canonical: '/dental-implants',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/dental-implants',
    type: 'website',
    siteName: 'The British Dental Hub',
    images: [
      {
        url: '/images/hero-clinic.png',
        width: 1200,
        height: 630,
        alt: 'Premium dental implant treatment at The British Dental Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/hero-clinic.png'],
  },
}

export default function DentalImplantsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <WhyChooseSection />

      <JourneySection />

      <BeforeAfterGallery />
      <ImplantSystemsSection />
      <DigitalDentistrySection />
      <PatientStoriesSection />
      <ConsultationCtaSection />
    </main>
  )
}
