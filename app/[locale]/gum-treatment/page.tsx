import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  ArrowRight,
  Check,
  HeartPulse,
  MessageSquare,
  Scissors,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'gumTreatment.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'Gum Treatment',
      'Periodontics',
      'Deep Cleaning',
      'Scaling and Root Planing',
      'Laser Gum Treatment',
      'Gingivitis Treatment',
      'Crown Lengthening',
      'British Dental Clinic',
    ],
    alternates: {
      canonical: '/gum-treatment',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/gum-treatment',
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

const typeKeys = ['deepCleaning', 'laser', 'gingivitis', 'crownLengthening'] as const
const typeIcons = { deepCleaning: Sparkles, laser: Zap, gingivitis: HeartPulse, crownLengthening: Scissors } as const

const testimonialKeys = ['item1', 'item2', 'item3'] as const

function Stars() {
  return (
    <div className="flex items-center gap-1 text-brand-red" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

async function HeroSection() {
  const t = await getTranslations('gumTreatment.hero')

  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('titleLine1')}
            <span className="mt-2 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-7 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
          <Image
            src="/images/gum-treatment.png"
            alt="Periodontal gum treatment at The British Dental Hub"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 1024px) 92vw, 896px"
            className="h-auto w-full object-cover"
          />
        </div>
      </Container>
    </section>
  )
}

async function TypesSection() {
  const t = await getTranslations('gumTreatment.types')

  const treatmentTypes = typeKeys.map((key) => ({
    title: t(`items.${key}.title`),
    subtitle: key === 'deepCleaning' ? t(`items.${key}.subtitle`) : null,
    description: t(`items.${key}.description`),
    note: t(`items.${key}.note`),
    icon: typeIcons[key],
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatmentTypes.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-[26px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-[18px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-red">
                    {t('badge')}
                  </p>
                </div>

                <h3 className="mt-5 text-[1.1rem] font-semibold leading-[1.25] tracking-[-0.014em] text-[#0A2247]">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-0.5 text-[0.78rem] font-medium text-[#5f6f88]">{item.subtitle}</p>
                ) : null}
                <p className="mt-3 flex-1 text-[0.88rem] leading-[1.7] text-[#495a73]">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-[#e5ebf3] pt-3.5">
                  <p className="text-[0.6rem] font-semibold uppercase leading-[1.5] tracking-[0.2em] text-[#5f6f88]">
                    {item.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

async function TestimonialsSection() {
  const t = await getTranslations('gumTreatment.testimonials')
  const verifiedPatient = t('verifiedPatient')

  const testimonials = testimonialKeys.map((key) => ({
    quote: t(`items.${key}.quote`),
    treatment: t(`items.${key}.treatment`),
  }))

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            {t('title')}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="group h-full rounded-[28px] border border-[#e5ebf3] bg-brand-bg p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
            >
              <Stars />
              <p className="mt-3 text-[0.95rem] font-light leading-7 text-[#495a73]">
                {testimonial.quote}
              </p>
              <div className="mt-4 border-t border-[#e5ebf3] pt-3">
                <p className="text-sm font-semibold text-[#0A2247]">{verifiedPatient}</p>
                <p className="mt-1 text-sm font-light text-[#495a73]">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

async function ConsultationCtaSection() {
  const t = await getTranslations('gumTreatment.consultationCta')

  const trustItems = [
    t('trustItems.duration'),
    t('trustItems.personalisedPlan'),
    t('trustItems.optionsDiscussion'),
    t('trustItems.noObligation'),
  ]

  return (
    <section
      aria-labelledby="gum-treatment-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('eyebrow')}
            </p>
            <h2
              id="gum-treatment-consultation-heading"
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

export default async function GumTreatmentPage({
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
      <TypesSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
