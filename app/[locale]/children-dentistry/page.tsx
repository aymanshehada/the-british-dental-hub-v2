import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  AlertCircle,
  ArrowRight,
  Bandage,
  Check,
  Eye,
  Footprints,
  Heart,
  Info,
  MessageCircle,
  MessageSquare,
  ShieldAlert,
  Smile,
  ThumbsUp,
  Users,
  Utensils,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'childrensDentistry.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "Children's Dentistry",
      'Paediatric Dentistry',
      'Kids Dental Care',
      'Fluoride Treatment',
      'Fissure Sealants',
      'Children Dental Fillings',
      'British Dental Clinic',
    ],
    alternates: {
      canonical: '/children-dentistry',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/children-dentistry',
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

const serviceItemKeys = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'] as const

const firstVisitKeys = ['environment', 'communication', 'explainShowDo', 'gradual', 'reinforcement', 'parentsInformed'] as const
const firstVisitIcons = {
  environment: Smile,
  communication: MessageCircle,
  explainShowDo: Eye,
  gradual: Footprints,
  reinforcement: ThumbsUp,
  parentsInformed: Users,
} as const

const contactSignKeys = ['pain', 'swelling', 'injury', 'decay', 'eating'] as const
const contactSignIcons = {
  pain: AlertCircle,
  swelling: ShieldAlert,
  injury: Bandage,
  decay: Eye,
  eating: Utensils,
} as const

async function HeroSection() {
  const t = await getTranslations('childrensDentistry.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/children-dentistry.png"
          alt="Gentle children's dentistry at The British Dental Hub"
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

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.1] text-[#0A2247] sm:text-5xl lg:text-[3.4rem]">
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
      </Container>
    </section>
  )
}

async function ServicesSection() {
  const t = await getTranslations('childrensDentistry.services')

  const services = serviceItemKeys.map((key) => t(`items.${key}`))

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

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[14px] border border-[#e5ebf3] bg-white px-5 py-4"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-brand-red" />
              <span className="text-[0.95rem] leading-6 text-[#495a73]">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

async function FirstVisitSection() {
  const t = await getTranslations('childrensDentistry.firstVisit')

  const firstVisit = firstVisitKeys.map((key) => ({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    icon: firstVisitIcons[key],
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
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {firstVisit.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group h-full rounded-[26px] border border-[#e5ebf3] bg-brand-bg p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex size-11 items-center justify-center rounded-[18px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-[1.08rem] font-semibold leading-[1.25] tracking-[-0.014em] text-[#0A2247]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.88rem] leading-[1.7] text-[#495a73]">
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

async function NervousChildrenSection() {
  const t = await getTranslations('childrensDentistry.nervousChildren')

  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-[22px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
            <Heart className="size-7" strokeWidth={1.5} />
          </div>
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-[1.15] text-[#0A2247] sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            {t('description')}
          </p>
        </div>
      </Container>
    </section>
  )
}

async function WhenToContactSection() {
  const t = await getTranslations('childrensDentistry.whenToContact')

  const contactSigns = contactSignKeys.map((key) => ({
    title: t(`signs.${key}`),
    icon: contactSignIcons[key],
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
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {contactSigns.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="flex h-full flex-col items-center gap-3 rounded-[22px] border border-[#e5ebf3] bg-brand-bg p-5 text-center shadow-[0_2px_10px_rgba(15,39,78,0.035)]"
              >
                <div className="flex size-11 items-center justify-center rounded-[16px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <p className="text-[0.92rem] font-semibold leading-tight text-[#0A2247]">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

async function GeneralAnaesthesiaSection() {
  const t = await getTranslations('childrensDentistry.generalAnaesthesia')

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
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border border-brand-border bg-white p-7 shadow-[0_2px_10px_rgba(15,39,78,0.035)] sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
              <Info className="size-5" strokeWidth={1.8} />
            </div>
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-[#0A2247]">
              {t('badge')}
            </p>
          </div>

          <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-[#495a73]">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
            <p className="font-medium text-[#0A2247]">{t('paragraph4')}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

async function ConsultationCtaSection() {
  const t = await getTranslations('childrensDentistry.consultationCta')

  const trustItems = [
    t('trustItems.duration'),
    t('trustItems.personalisedApproach'),
    t('trustItems.optionsDiscussion'),
    t('trustItems.noObligation'),
  ]

  return (
    <section
      aria-labelledby="children-dentistry-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('eyebrow')}
            </p>
            <h2
              id="children-dentistry-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.5rem]"
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

          <div className="rounded-[32px] border border-brand-border bg-brand-bg p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {t('includesLabel')}
            </p>

            <div className="mt-5 space-y-3.5">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-brand-border bg-white px-4 py-3">
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

export default async function ChildrenDentistryPage({
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
      <ServicesSection />
      <FirstVisitSection />
      <NervousChildrenSection />
      <WhenToContactSection />
      <GeneralAnaesthesiaSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
