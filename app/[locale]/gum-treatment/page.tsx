import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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

const pageTitle = 'Gum Treatment | The British Dental Hub'
const pageDescription =
  'Comprehensive periodontal care in Cairo, from preventive deep cleaning to advanced gum disease treatment and crown lengthening.'

export const metadata: Metadata = {
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

const treatmentTypes = [
  {
    title: 'Deep Cleaning',
    subtitle: 'Scaling & Root Planing',
    description: 'A thorough, deep clean beneath the gumline that removes plaque and tartar to support healthier gums.',
    note: 'Ideal for: early gum concerns and routine periodontal maintenance',
    icon: Sparkles,
  },
  {
    title: 'Laser Gum Treatment',
    description: 'Laser-assisted treatment, used when clinically appropriate, for greater precision and a more comfortable recovery.',
    note: 'Ideal for: cases where a targeted, minimally invasive approach is suitable',
    icon: Zap,
  },
  {
    title: 'Gingivitis & Periodontitis Treatment',
    description: 'Structured care for gum inflammation at every stage, from early gingivitis to more advanced periodontal disease.',
    note: 'Ideal for: ongoing gum health, at whatever stage treatment is needed',
    icon: HeartPulse,
  },
  {
    title: 'Crown Lengthening',
    description: 'A precise procedure that reshapes the gumline, often used to prepare for restorative or cosmetic dental work.',
    note: 'Ideal for: patients preparing for crowns, veneers, or a more balanced smile line',
    icon: Scissors,
  },
]

const testimonials = [
  {
    quote:
      'My gums feel healthier than they have in years, and every stage of the treatment was explained clearly and calmly.',
    treatment: 'Gum Treatment',
  },
  {
    quote:
      'I appreciated how thorough the assessment was before anything was recommended — nothing felt rushed.',
    treatment: 'Periodontal Consultation',
  },
  {
    quote:
      'The team made a treatment I was nervous about feel genuinely comfortable and well managed.',
    treatment: 'Deep Cleaning',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-brand-red" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            Periodontal Care
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Restore Your Gum Health
            <span className="mt-2 block">With Quiet Care</span>
          </h1>

          <p className="mt-7 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Comprehensive periodontal care planned around your needs, from preventive maintenance to more advanced gum treatment — delivered with the same measured, clinician-led approach as every treatment here.
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

function TypesSection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Treatment Options
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            Types of Gum Treatment
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73]">
            The right approach depends on your specific gum health, from routine maintenance to more advanced periodontal care.
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
                    Treatment Option
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

function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Patient Testimonials
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl">
            What Patients Remember
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
                <p className="text-sm font-semibold text-[#0A2247]">Verified Patient</p>
                <p className="mt-1 text-sm font-light text-[#495a73]">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ConsultationCtaSection() {
  const trustItems = [
    '30–45 Minute Consultation',
    'Personalised Treatment Plan',
    'Treatment Options Discussion',
    'No Obligation',
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
              Begin Your Journey
            </p>
            <h2
              id="gum-treatment-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              Ready for Healthier Gums?
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every periodontal treatment begins with a comprehensive consultation. We'll assess your gum health, explain every available option, and shape a personalised treatment plan around your needs.
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

export default async function GumTreatmentPage({
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
      <TypesSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
