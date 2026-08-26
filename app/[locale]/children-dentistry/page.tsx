import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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

const pageTitle = "Children's Dentistry | The British Dental Hub"
const pageDescription =
  'Gentle, patient-led paediatric dental care in Cairo, welcoming children of all ages with a focus on prevention, early detection, and positive dental experiences.'

export const metadata: Metadata = {
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

const services = [
  'Routine dental examinations and preventive check-ups',
  'Fluoride applications',
  'Fissure sealants',
  "Children's fillings and early caries management",
  'Extraction of primary teeth when clinically indicated',
  'Monitoring eruption and dental development',
  'Oral hygiene and brushing guidance',
  'Dietary and caries-prevention advice',
  'Early identification of orthodontic and developmental concerns',
  'Assessment of dental pain, trauma, swelling, and other urgent concerns',
]

const firstVisit = [
  {
    title: 'A Calm, Child-Friendly Environment',
    description: 'A relaxed clinical setting designed to feel welcoming rather than clinical or intimidating.',
    icon: Smile,
  },
  {
    title: 'Age-Appropriate Communication',
    description: "Every explanation is pitched to your child's age and understanding, in simple, reassuring language.",
    icon: MessageCircle,
  },
  {
    title: 'Explain-Show-Do',
    description: 'Each step is explained and demonstrated before it happens, so nothing feels sudden or unfamiliar.',
    icon: Eye,
  },
  {
    title: 'Gradual, Patient Introduction',
    description: "For anxious or first-time children, we introduce the visit step by step, at a pace that feels safe.",
    icon: Footprints,
  },
  {
    title: 'Positive Reinforcement',
    description: 'Encouragement and praise throughout help build genuine confidence around dental visits.',
    icon: ThumbsUp,
  },
  {
    title: 'Parents Informed Every Step',
    description: "You're kept informed throughout the visit, from what to expect to what happens next.",
    icon: Users,
  },
]

const contactSigns = [
  { title: 'Dental Pain', icon: AlertCircle },
  { title: 'Swelling', icon: ShieldAlert },
  { title: 'Injury or Broken Tooth', icon: Bandage },
  { title: 'Visible Decay', icon: Eye },
  { title: 'Difficulty Eating', icon: Utensils },
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            Children's Dentistry
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.1] text-[#0A2247] sm:text-5xl lg:text-[3.4rem]">
            Prevention, early detection, and positive dental experiences.
          </h1>

          <p className="mt-7 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            The British Dental Hub welcomes children of all ages, from their very first dental visit through every stage of growth, with care that's gentle, patient, and reassuring.
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

function ServicesSection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            What We Offer
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            Our Children's Dental Services
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            Comprehensive, age-appropriate care that grows with your child, from first check-up to ongoing prevention.
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

function FirstVisitSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            What To Expect
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            Your Child's First Dental Visit
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            Every visit is shaped around your child's comfort, so it becomes a positive part of growing up rather than something to dread.
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

function NervousChildrenSection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-[22px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
            <Heart className="size-7" strokeWidth={1.5} />
          </div>
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            For Nervous or First-Time Children
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-[1.15] text-[#0A2247] sm:text-4xl">
            There's no rush — your child sets the pace.
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            For children who feel unsure or are visiting for the very first time, we take extra time to build familiarity and trust before any treatment begins. Every step is introduced gradually, patiently, and only when your child feels ready — never rushed, and always with plenty of encouragement along the way.
          </p>
        </div>
      </Container>
    </section>
  )
}

function WhenToContactSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            For Parents
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            When Should You Contact Us?
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            If your child experiences any of the following, it's worth reaching out so we can assess and advise on next steps.
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

function GeneralAnaesthesiaSection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Your Child's Comfort
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            General Anaesthesia (GA) — When Needed
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border border-brand-border bg-white p-7 shadow-[0_2px_10px_rgba(15,39,78,0.035)] sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
              <Info className="size-5" strokeWidth={1.8} />
            </div>
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-[#0A2247]">
              Important information for parents
            </p>
          </div>

          <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-[#495a73]">
            <p>The British Dental Hub does not provide any form of sedation within the clinic.</p>
            <p>
              In cases where this is clinically necessary, our dentists may recommend and deliver treatment under General Anaesthesia (GA) — always arranged in an appropriate hospital setting outside the clinic, never on-site.
            </p>
            <p>
              This follows an individual clinical assessment of each child's specific case, with careful coordination and referral to the appropriate hospital.
            </p>
            <p className="font-medium text-[#0A2247]">
              General Anaesthesia is never offered or provided as a routine service within the clinic itself — it is reserved specifically for cases where it is clinically indicated, following assessment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ConsultationCtaSection() {
  const trustItems = [
    '30–45 Minute Consultation',
    'Personalised, Age-Appropriate Approach',
    'Treatment Options Discussion',
    'No Obligation',
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
              Begin Your Journey
            </p>
            <h2
              id="children-dentistry-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.5rem]"
            >
              Book a Children's Dental Assessment
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every visit begins with a comprehensive, unhurried assessment. We'll get to know your child, explain everything clearly, and shape a calm, personalised approach around their needs.
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-7 text-[rgba(10,34,71,0.78)]">
              No pressure. Just honest, patient clinical advice.
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

          <div className="rounded-[32px] border border-brand-border bg-brand-bg p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              What your consultation includes
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
  setRequestLocale(locale)

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
