import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Check, MessageSquare, ScanSearch, Sparkles, Star } from 'lucide-react'
import { ArtOfPorcelainVeneersSection } from '@/components/porcelain/ArtOfPorcelainVeneersSection'
import { Container } from '@/components/ui/container'
import { PremiumCard } from '@/components/ui/premium-card'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'porcelainVeneers.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'Porcelain Veneers',
      'E.max Veneers',
      'Composite Veneers',
      'Digital Smile Design',
      'Luxury Cosmetic Dentistry',
      'British Dental Clinic',
    ],
    alternates: {
      canonical: '/porcelain-veneers',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/porcelain-veneers',
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

const journeyStepKeys = [
  'consultation',
  'digitalSmileDesign',
  'toothPreparation',
  'temporaryVeneers',
  'finalVeneers',
  'reviewFollowUp',
] as const
const journeyStepNumbers = ['01', '02', '03', '04', '05', '06'] as const

const typeKeys = ['porcelain', 'emax', 'composite'] as const

const smileDesignToolKeys = ['photography', 'scanner', 'simulation', 'mockup', 'planning'] as const

const benefitKeys = [
  'naturalAesthetics',
  'minimalPreparation',
  'smileSymmetry',
  'longTermBeauty',
  'premiumMaterials',
  'britishPhilosophy',
] as const

const noteKeys = ['shadeMatching', 'symmetry', 'conservativePlanning', 'followUp'] as const

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
  const t = await getTranslations('porcelainVeneers.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Container className="relative grid min-h-[auto] items-center gap-10 pt-28 pb-16 sm:pb-20 lg:min-h-[85vh] lg:grid-cols-[0.42fr_0.58fr] lg:pt-32 lg:pb-24">
        <div className="max-w-[620px]">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#5f6f88]">
            The British Dental Hub
            <span className="mt-1 block text-[0.58rem] tracking-[0.24em] text-[#8a95a8]">
              {t('tagline')}
            </span>
          </p>

          <p className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.92] tracking-[-0.022em] text-[#0A2247]">
            {t('titleLine1')}
            <span className="mt-3 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-7 max-w-[600px] text-[1.08rem] leading-8 text-[#495a73] sm:text-[1.16rem] sm:leading-9">
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
              href="#veneers-journey"
              className="inline-flex min-h-[52px] min-w-[280px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5f6f88] sm:gap-x-5">
            <span>{t('trust.digitalSmileDesign')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.premiumMaterials')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.discreetCare')}</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-full overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
            <Image
              src="/images/veneers-showcase.png"
              alt="Premium porcelain veneers at The British Dental Hub"
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

async function JourneySection() {
  const t = await getTranslations('porcelainVeneers.journey')

  const journeySteps = journeyStepKeys.map((key, index) => ({
    number: journeyStepNumbers[index],
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
  }))

  return (
    <section id="veneers-journey" className="scroll-mt-28 bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] tracking-[-0.032em] text-[#0A2247]">
            {t('titleLine1')}
            <span className="mt-2 block">{t('titleLine2')}</span>
          </h2>
          <p className="mt-7 text-[1.06rem] leading-8 text-[#566681] sm:text-[1.12rem] sm:leading-9">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[7%] right-[7%] top-[58px] hidden h-px bg-[#d9e2ed] xl:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
            {journeySteps.map((step, index) => (
              <article
                key={step.number}
                className="relative flex h-full min-h-[286px] flex-col rounded-[18px] border border-[#e5ebf3] bg-white px-6 py-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_5px_14px_rgba(15,39,78,0.05)]"
              >
                {index > 0 ? (
                  <span className="absolute -left-4 top-[58px] hidden h-px w-4 bg-[#d9e2ed] xl:block" />
                ) : null}
                <p className="relative z-10 w-fit bg-white pr-2 font-serif text-[3rem] leading-none tracking-[-0.052em] text-[#0A2247]">
                  {step.number}
                </p>
                <h3 className="mt-6 text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[#16355f]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#5f6f88]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[18px] border border-[#e6edf5] bg-brand-bg px-6 py-4.5 text-[#4f627f] shadow-[0_1px_6px_rgba(15,39,78,0.03)] sm:px-7">
          <p className="text-[0.95rem] leading-7">
            {t('footnote')}
          </p>
        </div>
      </Container>
    </section>
  )
}

async function TypesSection() {
  const t = await getTranslations('porcelainVeneers.types')

  const veneerTypes = typeKeys.map((key) => ({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    note: t(`items.${key}.note`),
  }))

  return (
    <SectionWrapper aria-labelledby="veneer-types-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 id="veneer-types-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {veneerTypes.map((item) => (
            <PremiumCard
              key={item.title}
              className="group h-full rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                  <Sparkles className="size-5" strokeWidth={1.6} />
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
            </PremiumCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}

async function DigitalSmileDesignSection() {
  const t = await getTranslations('porcelainVeneers.digitalSmileDesign')

  const tools = smileDesignToolKeys.map((key) => t(`tools.${key}`))

  return (
    <SectionWrapper aria-labelledby="digital-smile-design-heading" className="bg-brand-bg">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 id="digital-smile-design-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <PremiumCard className="group h-full rounded-[34px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-[24px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                <ScanSearch className="size-7" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
                {t('workflowBadge')}
              </span>
            </div>

            <h3 className="mt-6 text-[1.5rem] font-semibold leading-tight text-[#0A2247] sm:text-[1.7rem]">
              {t('cardTitle')}
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] font-light leading-7 text-[#495a73] sm:text-[1rem]">
              {t('cardDescription')}
            </p>

            <div className="mt-6 rounded-[24px] border border-[#e5ebf3] bg-brand-bg p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                {t('toolsLabel')}
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {tools.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl border border-[#e5ebf3] bg-white px-3 py-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-red" />
                    <span className="text-sm font-light leading-6 text-[#495a73]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>

          <div className="grid gap-5 md:grid-cols-2">
            {tools.map((item) => (
              <article
                key={item}
                className="group h-full rounded-[28px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Sparkles className="size-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                    {t('stageBadge')}
                  </span>
                </div>
                <h3 className="mt-4 text-[1.12rem] font-semibold leading-tight text-[#0A2247]">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

async function WhyPatientsChooseVeneersSection() {
  const t = await getTranslations('porcelainVeneers.whyChoose')

  const veneerBenefits = benefitKeys.map((key) => ({
    title: t(`benefits.${key}.title`),
    description: t(`benefits.${key}.description`),
  }))

  return (
    <section className="bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] tracking-[-0.032em] text-[#0A2247]">
            {t('title')}
          </h2>
          <p className="mt-7 text-[1.06rem] leading-8 text-[#566681] sm:text-[1.12rem] sm:leading-9">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {veneerBenefits.map((item) => (
            <PremiumCard
              key={item.title}
              className="group h-full overflow-hidden rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#d5deea] hover:shadow-[0_6px_14px_rgba(15,39,78,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                  <Check className="size-5" strokeWidth={1.8} />
                </div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                  {t('badge')}
                </span>
              </div>
              <h3 className="mt-5 text-[1.12rem] font-semibold leading-tight text-[#16355f]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] font-light leading-7 text-[#5f6f88]">
                {item.description}
              </p>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

async function BeforeAfterSection() {
  const t = await getTranslations('porcelainVeneers.beforeAfter')

  const notes = noteKeys.map((key) => t(`notes.${key}`))
  const labels = [t('before'), t('after')]

  return (
    <SectionWrapper aria-labelledby="veneers-before-after-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 id="veneers-before-after-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {labels.map((label) => (
              <div key={label} className="rounded-[30px] border border-[#e5ebf3] bg-white p-4 shadow-[0_2px_10px_rgba(15,39,78,0.035)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-red">
                    {label}
                  </p>
                  <Sparkles className="size-4 text-brand-red" strokeWidth={1.6} />
                </div>
                <div className="mt-4 aspect-[4/5] rounded-[24px] border border-[#e5ebf3] bg-[radial-gradient(circle_at_top,rgba(215,25,32,0.07),transparent_45%),linear-gradient(180deg,#F8F9FB_0%,#EEF2F6_100%)]" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)]">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                  <Sparkles className="size-6" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-red">
                    {t('clinicalDocumentation')}
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-[#495a73]">
                    {t('clinicalDocumentationDescription')}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
                {t('caseNotesLabel')}
              </p>
              <div className="mt-5 space-y-3">
                {notes.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[14px] border border-[#e5ebf3] bg-brand-bg px-4 py-3">
                    <span className="size-2.5 rounded-full bg-brand-red" />
                    <span className="text-sm font-light leading-6 text-[#495a73]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

async function TestimonialsSection() {
  const t = await getTranslations('porcelainVeneers.testimonials')
  const verifiedPatient = t('verifiedPatient')

  const testimonials = testimonialKeys.map((key) => ({
    quote: t(`items.${key}.quote`),
    treatment: t(`items.${key}.treatment`),
  }))

  return (
    <SectionWrapper aria-labelledby="veneers-testimonials-heading" className="bg-brand-bg">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 id="veneers-testimonials-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <article className="rounded-[34px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-6 lg:p-7">
            <Stars />
            <blockquote className="mt-3 max-w-4xl text-2xl font-medium leading-[1.35] text-[#0A2247] sm:text-3xl lg:text-[2.05rem]">
              “{testimonials[0].quote}”
            </blockquote>
            <div className="mt-4 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">{verifiedPatient}</p>
              <p className="mt-1 text-sm font-light text-[#495a73]">{testimonials[0].treatment}</p>
            </div>
          </article>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.slice(1).map((testimonial) => (
              <PremiumCard
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
              </PremiumCard>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

async function ConsultationCtaSection() {
  const t = await getTranslations('porcelainVeneers.consultationCta')

  const trustItems = [
    t('trustItems.duration'),
    t('trustItems.digitalPreview'),
    t('trustItems.optionsDiscussion'),
    t('trustItems.noObligation'),
  ]

  return (
    <section
      aria-labelledby="consultation-cta-heading"
      className="relative overflow-hidden border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('eyebrow')}
            </p>
            <h2
              id="consultation-cta-heading"
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
                className="inline-flex min-h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_14px_30px_rgba(10,34,71,0.26)]"
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

          <div className="rounded-[32px] border border-brand-border bg-brand-bg p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('includesLabel')}
            </p>

            <div className="mt-5 space-y-3.5">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-brand-border bg-white px-4 py-3">
                  <span className="size-2.5 rounded-full bg-brand-red" />
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

export default async function PorcelainVeneersPage({
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
      <JourneySection />
      <TypesSection />
      <DigitalSmileDesignSection />
      <WhyPatientsChooseVeneersSection />
      <ArtOfPorcelainVeneersSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
