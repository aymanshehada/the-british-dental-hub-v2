import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Link } from '@/i18n/navigation'
import {
  Anchor,
  ArrowRight,
  AlignCenter,
  Baby,
  ClipboardCheck,
  Microscope,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import type { AppLocale } from '@/i18n/routing'

const serviceMeta = [
  { key: 'dentalImplants', number: '01', icon: Anchor, href: '/dental-implants' },
  { key: 'porcelainVeneers', number: '02', icon: Sparkles, href: '/porcelain-veneers' },
  { key: 'checkUpCleaning', number: '03', icon: ClipboardCheck, href: '/check-up-cleaning' },
  { key: 'teethWhitening', number: '04', icon: Sun, href: '/teeth-whitening' },
  { key: 'orthodontics', number: '05', icon: AlignCenter, href: '/orthodontics' },
  { key: 'gumTreatment', number: '06', icon: ShieldCheck, href: '/gum-treatment' },
  { key: 'rootCanalTreatment', number: '07', icon: Microscope, href: '/root-canal-treatment' },
  { key: 'childrensDentistry', number: '08', icon: Baby, href: '/children-dentistry' },
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'treatments.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'Dental Treatments',
      'Dental Implants',
      'Porcelain Veneers',
      'Teeth Whitening',
      'Orthodontics',
      'Gum Treatment',
      'Root Canal Treatment',
      'Children’s Dentistry',
      'British Dental Clinic',
    ],
    alternates: {
      canonical: '/treatments',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/treatments',
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

function HeroSection({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {title}
          </h1>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}

function ServicesGridSection({
  services,
  learnMore,
}: {
  services: Array<{
    number: string
    title: string
    description: string
    icon: (typeof serviceMeta)[number]['icon']
    href: string
  }>
  learnMore: string
}) {
  return (
    <section className="bg-brand-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex h-full flex-col rounded-[18px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-[1.9rem] leading-none tracking-[-0.03em] text-[#0A2247]">
                    {service.number}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-[14px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="mt-5 text-[1.15rem] font-semibold leading-[1.25] text-[#0A2247]">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.92rem] leading-6 text-[#495a73]">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-red transition-all duration-300 ease-out group-hover:gap-2.5">
                  {learnMore}
                  <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default async function TreatmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale as AppLocale)

  const t = await getTranslations('treatments')

  const services = serviceMeta.map((service) => ({
    number: service.number,
    icon: service.icon,
    href: service.href,
    title: t(`services.${service.key}.title`),
    description: t(`services.${service.key}.description`),
  }))

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-white">
      <HeroSection eyebrow={t('hero.eyebrow')} title={t('hero.title')} subtitle={t('hero.subtitle')} />
      <ServicesGridSection services={services} learnMore={t('learnMore')} />
      </main>
      <Footer />
    </>
  )
}
