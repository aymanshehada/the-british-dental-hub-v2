import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
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
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'checkUpCleaning.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
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
}

const stepKeys = ['examination', 'imaging', 'photography', 'diagnosis', 'treatmentPlan'] as const
const stepNumbers = ['01', '02', '03', '04', '05'] as const
const stepIcons = {
  examination: ClipboardCheck,
  imaging: ScanLine,
  photography: Camera,
  diagnosis: FileSearch,
  treatmentPlan: FileCheck2,
} as const

const recordItemKeys = ['examinationResults', 'diagnosis', 'photographs', 'xrays', 'plan'] as const

async function HeroSection() {
  const t = await getTranslations('checkUpCleaning.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Container className="relative grid min-h-[auto] items-center gap-10 pt-28 pb-16 sm:pb-20 lg:min-h-[85vh] lg:grid-cols-[0.42fr_0.58fr] lg:pt-32 lg:pb-24">
        <div className="max-w-[600px]">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h1>

          <p className="mt-7 max-w-[560px] text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-full overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
            <Image
              src="/images/check-up-cleaning.png"
              alt="Dental check-up and cleaning at The British Dental Hub"
              width={1400}
              height={1100}
              priority
              sizes="(max-width: 1024px) 92vw, 58vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

async function DigitalAssessmentSection() {
  const t = await getTranslations('checkUpCleaning.digitalAssessment')

  const steps = stepKeys.map((key, index) => ({
    number: stepNumbers[index],
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
    icon: stepIcons[key],
  }))

  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            {t('subtitle')}
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
            {t('footnote')}
          </p>
        </div>
      </Container>
    </section>
  )
}

async function DigitalRecordSection() {
  const t = await getTranslations('checkUpCleaning.digitalRecord')

  const recordItems = recordItemKeys.map((key) => t(`items.${key}`))

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('eyebrow')}
            </p>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-lg text-lg font-light leading-8 text-[#495a73]">
              {t('subtitle')}
            </p>
          </div>

          <div className="rounded-[28px] border border-brand-border bg-brand-bg p-7 shadow-[0_2px_10px_rgba(15,39,78,0.035)] sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
              {t('includesLabel')}
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

async function ConsultationCtaSection() {
  const t = await getTranslations('checkUpCleaning.consultationCta')

  const trustItems = [
    t('trustItems.duration'),
    t('trustItems.digitalAssessment'),
    t('trustItems.optionsDiscussion'),
    t('trustItems.noObligation'),
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
              {t('eyebrow')}
            </p>
            <h2
              id="checkup-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              {t('title')}
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              {t('description')}
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-7 text-[rgba(10,34,71,0.78)]">
              {t('noPressure')}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
              >
                {t('bookConsultation')}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="https://wa.me/201556887765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] min-w-[248px] items-center justify-center gap-2 rounded-[12px] border border-brand-red bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(215,25,32,0.10)]"
              >
                <MessageSquare className="size-4 text-brand-red" />
                {t('chatWhatsapp')}
              </Link>
            </div>

            <p className="mt-5 text-sm font-light leading-7 text-[rgba(10,34,71,0.72)]">
              {t('contactNote')}
            </p>
          </div>

          <div className="rounded-[32px] border border-brand-border bg-white p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('includesLabel')}
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

export default async function CheckUpCleaningPage({
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
      <main className="min-h-screen bg-white">
      <HeroSection />
      <DigitalAssessmentSection />
      <DigitalRecordSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
