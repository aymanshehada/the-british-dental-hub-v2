import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ConsultationCtaSection } from '@/components/implant/ConsultationCtaSection'
import { HeroSection } from '@/components/implant/HeroSection'
import { SuitabilitySection } from '@/components/implant/SuitabilitySection'
import { JourneySection } from '@/components/implant/JourneySection'
import { DigitalDentistrySection } from '@/components/implant/DigitalDentistrySection'
import { PatientStoriesSection } from '@/components/implant/PatientStoriesSection'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'dentalImplants.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
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
}

export default async function DentalImplantsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale as AppLocale)

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-background">
      <HeroSection />
      <SuitabilitySection />
      <JourneySection />
      <DigitalDentistrySection />
      <PatientStoriesSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
