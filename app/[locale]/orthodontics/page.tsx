import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  ArrowRight,
  Baby,
  Check,
  Gem,
  GraduationCap,
  Layers,
  MessageSquare,
  ScanLine,
  ScanSearch,
  Star,
  UserRound,
  Workflow,
  Wrench,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'orthodontics.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'Orthodontics',
      'Braces',
      'Metal Braces',
      'Ceramic Braces',
      'Clear Aligners',
      'Invisalign',
      'Teeth Straightening',
      'British Dental Clinic',
    ],
    alternates: {
      canonical: '/orthodontics',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/orthodontics',
      type: 'website',
      siteName: 'The British Dental Hub',
      images: [
        {
          url: '/images/clear-aligners.png',
          width: 1200,
          height: 630,
          alt: 'Clear orthodontic aligner at The British Dental Hub',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/images/clear-aligners.png'],
    },
  }
}

const typeKeys = ['metal', 'ceramic', 'aligners'] as const
const typeIcons = { metal: Wrench, ceramic: Gem, aligners: Layers } as const

const planningStageKeys = ['scanning', 'xrays', 'planning'] as const
const planningStageIcons = { scanning: ScanSearch, xrays: ScanLine, planning: Workflow } as const

const audienceKeys = ['adults', 'teenagers', 'children'] as const
const audienceIcons = { adults: UserRound, teenagers: GraduationCap, children: Baby } as const

const testimonialKeys = ['item1', 'item2', 'item3', 'item4'] as const

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
  const t = await getTranslations('orthodontics.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/clear-aligners.png"
          alt="Clear aligner orthodontic treatment at The British Dental Hub"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.75)_38%,rgba(255,255,255,0.25)_62%,rgba(255,255,255,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.44)_0%,transparent_36%)]" />

      <Container className="relative flex min-h-[90vh] items-center pt-24 pb-16 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="w-full max-w-[600px]">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.94] tracking-[-0.022em] text-[#0A2247]">
            {t('titleLine1')}
            <span className="mt-2 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-[#495a73] sm:text-[1.16rem] sm:leading-9">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#treatment-types"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5f6f88] sm:gap-x-5">
            <span>{t('trust.allAges')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.digitalPlanning')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.discreetCare')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

async function TypesSection() {
  const t = await getTranslations('orthodontics.types')

  const treatmentTypes = typeKeys.map((key) => ({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    note: t(`items.${key}.note`),
    icon: typeIcons[key],
  }))

  return (
    <section id="treatment-types" className="scroll-mt-28 bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {treatmentTypes.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group h-full rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                    {t('badge')}
                  </p>
                </div>

                <h3 className="mt-5 text-[1.24rem] font-semibold leading-[1.25] tracking-[-0.016em] text-[#0A2247]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#495a73]">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-[#e5ebf3] pt-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#5f6f88]">
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

async function DigitalPlanningSection() {
  const t = await getTranslations('orthodontics.digitalPlanning')

  const planningStages = planningStageKeys.map((key) => ({
    title: t(`stages.${key}.title`),
    description: t(`stages.${key}.description`),
    icon: planningStageIcons[key],
  }))

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 rounded-[34px] border border-[#e5ebf3] bg-brand-bg p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] lg:p-8">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-[24px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
              <ScanSearch className="size-7" strokeWidth={1.4} />
            </div>
            <div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
                {t('badge')}
              </span>
              <h3 className="mt-1 text-[1.5rem] font-semibold leading-tight text-[#0A2247] sm:text-[1.7rem]">
                {t('cardTitle')}
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-[0.95rem] font-light leading-7 text-[#495a73] sm:text-[1rem]">
            {t('cardDescription')}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {planningStages.map((stage) => {
              const Icon = stage.icon

              return (
                <div
                  key={stage.title}
                  className="group h-full rounded-[24px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
                >
                  <div className="flex size-11 items-center justify-center rounded-[18px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <h4 className="mt-4 text-[1.02rem] font-semibold leading-tight text-[#0A2247]">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-[0.88rem] leading-6 text-[#495a73]">
                    {stage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

async function WhoIsItForSection() {
  const t = await getTranslations('orthodontics.whoIsItFor')

  const audiences = audienceKeys.map((key) => ({
    title: t(`audiences.${key}.title`),
    description: t(`audiences.${key}.description`),
    icon: audienceIcons[key],
  }))

  return (
    <section className="bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group h-full rounded-[30px] border border-[#e5ebf3] bg-white p-6 text-center shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-[22px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                  <Icon className="size-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[1.24rem] font-semibold leading-[1.25] tracking-[-0.016em] text-[#0A2247]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#495a73]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

async function TestimonialsSection() {
  const t = await getTranslations('orthodontics.testimonials')
  const verifiedPatient = t('verifiedPatient')

  const testimonials = testimonialKeys.map((key) => ({
    quote: t(`items.${key}.quote`),
    treatment: t(`items.${key}.treatment`),
  }))

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <article className="rounded-[34px] border border-[#e5ebf3] bg-brand-bg p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-6 lg:p-7">
            <Stars />
            <blockquote className="mt-3 max-w-4xl text-2xl font-medium leading-[1.35] text-[#0A2247] sm:text-3xl lg:text-[2.05rem]">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="mt-4 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">{verifiedPatient}</p>
              <p className="mt-1 text-sm font-light text-[#495a73]">{testimonials[0].treatment}</p>
            </div>
          </article>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.slice(1).map((testimonial) => (
              <div
                key={testimonial.quote}
                className="group h-full rounded-[30px] border border-[#e5ebf3] bg-white p-4 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <Stars />
                <p className="mt-3 text-[0.98rem] font-light leading-7 text-[#495a73]">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-[#e5ebf3] pt-3">
                  <p className="text-sm font-semibold text-[#0A2247]">{verifiedPatient}</p>
                  <p className="mt-1 text-sm font-light text-[#495a73]">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

async function ConsultationCtaSection() {
  const t = await getTranslations('orthodontics.consultationCta')

  const trustItems = [
    t('trustItems.duration'),
    t('trustItems.personalisedTimeline'),
    t('trustItems.optionsDiscussion'),
    t('trustItems.noObligation'),
  ]

  return (
    <section
      aria-labelledby="orthodontics-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('eyebrow')}
            </p>
            <h2
              id="orthodontics-consultation-heading"
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

export default async function OrthodonticsPage({
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
      <DigitalPlanningSection />
      <WhoIsItForSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
