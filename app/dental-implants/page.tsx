import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Brain, CalendarDays, Check, HeartPulse, MessageSquare, ScanSearch, ShieldCheck, Sparkles } from 'lucide-react'
import { PremiumButton } from '@/components/ui/premium-button'
import { PremiumCard } from '@/components/ui/premium-card'
import { JourneySection } from '@/components/journey-section'

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
      <section className="relative isolate overflow-hidden bg-[#07152C]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-clinic.png"
            alt="Luxury dental clinic interior at The British Dental Hub"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,44,0.96)_0%,rgba(7,21,44,0.82)_45%,rgba(7,21,44,0.7)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,209,110,0.16),transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow justify-start">
              <span className="h-px w-10 bg-primary" />
              Premium Implant Dentistry
            </p>

            <h1 className="section-title mt-6 max-w-3xl text-balance text-white sm:text-5xl lg:text-[4rem] leading-[0.95]">
              Dental Implants Inspired by British Standards
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-slate-200/90 sm:text-xl sm:leading-9">
              Restore your smile with premium implant dentistry using digital planning, world-class implant systems and meticulous clinical precision in Cairo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PremiumButton
                href="/#contact"
                variant="primary"
                className="min-w-[220px]"
                iconRight={<ArrowRight className="size-4" />}
              >
                Book Consultation
              </PremiumButton>
              <PremiumButton
                href="https://wa.me/201556887765"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[240px]"
                iconLeft={<MessageSquare className="size-4" />}
              >
                WhatsApp Consultation
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      <JourneySection />
    </main>
  )
}
