import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Camera,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  MessageSquare,
  ScanLine,
} from 'lucide-react'
import { Container } from '@/components/ui/container'

const pageTitle = 'Check-up & Cleaning | The British Dental Hub'
const pageDescription =
  'A comprehensive, visual, evidence-based dental assessment in Cairo, built around digital diagnostics and a clear, personalised treatment plan.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Dental Check-up',
    'Dental Cleaning',
    'Digital Dental Assessment',
    'Preventive Dentistry',
    'Oral Health Examination',
    'British Dental Clinic',
  ],
  alternates: {
    canonical: '/check-up-cleaning',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/check-up-cleaning',
    type: 'website',
    siteName: 'The British Dental Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const steps = [
  {
    number: '01',
    title: 'Clinical Examination',
    description: 'A comprehensive review of your teeth, gums, and overall oral health, forming the foundation of every visit.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Diagnostic Imaging',
    description: 'Dental X-rays are used as part of the diagnostic assessment where clinically appropriate, not as a routine step for every patient.',
    icon: ScanLine,
  },
  {
    number: '03',
    title: 'Intraoral Photography',
    description: 'An intraoral camera captures precise, detailed images of your teeth and gums for a clearer picture.',
    icon: Camera,
  },
  {
    number: '04',
    title: 'Diagnosis',
    description: "Findings are reviewed and explained clearly, so you understand exactly what we're seeing.",
    icon: FileSearch,
  },
  {
    number: '05',
    title: 'Personalised Treatment Plan',
    description: 'Any recommendations — or the absence of them — are explained visually, using your own images and findings.',
    icon: FileCheck2,
  },
]

const recordItems = [
  'Examination results',
  'Clinical diagnosis and assessment',
  'Intraoral photographs',
  'Relevant X-rays, where taken',
  'A personalised treatment and prevention plan',
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            Check-up & Cleaning
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            A Comprehensive, Visual, Evidence-Based Assessment
          </h1>

          <p className="mt-7 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Every check-up goes beyond a quick look — it's a considered, digitally supported assessment of your whole mouth, explained clearly at every step.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

function DigitalAssessmentSection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Our Process
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            Your Digital Dental Assessment
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            A clear, five-stage process that helps you see and understand exactly what we see, before any treatment is discussed.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="relative flex h-full min-h-[240px] flex-col rounded-[18px] border border-[#e5ebf3] bg-white px-6 py-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[1.9rem] leading-none tracking-[-0.03em] text-[#0A2247]">
                      {step.number}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-[14px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="mt-5 text-[1.02rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A2247]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.85rem] leading-[1.65] text-[#495a73]">
                    {step.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-10 rounded-[18px] border border-brand-border bg-white px-6 py-4.5 text-[#4f627f] shadow-[0_1px_6px_rgba(15,39,78,0.03)] sm:px-7">
          <p className="text-[0.95rem] leading-7">
            Not every visit requires the same diagnostic imaging — X-rays and other investigations are recommended individually, based on clinical need, not as a standard step for every patient.
          </p>
        </div>
      </Container>
    </section>
  )
}

function DigitalRecordSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              For New Patients
            </p>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
              Your Personalised Digital Dental Record
            </h2>
            <p className="mt-6 max-w-lg text-lg font-light leading-8 text-[#495a73]">
              From your first visit, everything is gathered into one clear, personal record — so your care stays informed and consistent over time.
            </p>
          </div>

          <div className="rounded-[28px] border border-brand-border bg-brand-bg p-7 shadow-[0_2px_10px_rgba(15,39,78,0.035)] sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
              Your record includes
            </p>
            <div className="mt-5 space-y-3.5">
              {recordItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-brand-border bg-white px-4 py-3">
                  <Check className="size-4 shrink-0 text-brand-red" />
                  <span className="text-sm leading-6 text-[#495a73]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ConsultationCtaSection() {
  const trustItems = [
    '30–45 Minute Consultation',
    'Digital Diagnostic Assessment',
    'Treatment Options Discussion',
    'No Obligation',
  ]

  return (
    <section
      aria-labelledby="checkup-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              Begin Your Journey
            </p>
            <h2
              id="checkup-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              Ready for Your Assessment?
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every visit begins with a comprehensive, digitally supported assessment. We'll walk you through exactly what we find and what, if anything, we'd recommend next.
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-7 text-[rgba(10,34,71,0.78)]">
              No pressure. Just honest clinical advice.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
              >
                Book Consultation
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="https://wa.me/201556887765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] min-w-[248px] items-center justify-center gap-2 rounded-[12px] border border-brand-red bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(215,25,32,0.10)]"
              >
                <MessageSquare className="size-4 text-brand-red" />
                Chat on WhatsApp
              </Link>
            </div>

            <p className="mt-5 text-sm font-light leading-7 text-[rgba(10,34,71,0.72)]">
              Our team will personally contact you to arrange your consultation at a convenient time.
            </p>
          </div>

          <div className="rounded-[32px] border border-brand-border bg-white p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              What your consultation includes
            </p>

            <div className="mt-5 space-y-3.5">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-brand-border bg-brand-bg px-4 py-3">
                  <Check className="size-4 shrink-0 text-brand-red" />
                  <span className="text-sm font-light leading-6 text-[rgba(10,34,71,0.84)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CheckUpCleaningPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <DigitalAssessmentSection />
      <DigitalRecordSection />
      <ConsultationCtaSection />
    </main>
  )
}
