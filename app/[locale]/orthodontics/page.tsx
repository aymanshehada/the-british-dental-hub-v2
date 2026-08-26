import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
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

const pageTitle = 'Orthodontics | The British Dental Hub'
const pageDescription =
  'Straighten your smile with metal braces, ceramic braces, or clear aligners, planned with digital precision for adults, teenagers, and children in Cairo.'

export const metadata: Metadata = {
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

const treatmentTypes = [
  {
    title: 'Metal Braces',
    description:
      'A traditional, highly effective system of metal brackets and wires that reliably corrects a wide range of orthodontic cases.',
    note: 'Ideal for: comprehensive correction and dependable, well-proven results',
    icon: Wrench,
  },
  {
    title: 'Ceramic Braces',
    description:
      'Tooth-coloured ceramic brackets that work the same way as traditional braces while blending naturally with your smile.',
    note: 'Ideal for: effective correction with a more discreet appearance',
    icon: Gem,
  },
  {
    title: 'Clear Aligners',
    description:
      'A series of clear, removable trays that gradually and comfortably guide teeth into their ideal position.',
    note: 'Ideal for: a virtually invisible, flexible everyday option',
    icon: Layers,
  },
]

const planningStages = [
  {
    title: 'Intraoral Digital Scanning',
    description: 'A digital scanner captures precise, detailed impressions of your teeth without messy trays.',
    icon: ScanSearch,
  },
  {
    title: 'Diagnostic X-Rays',
    description: 'X-rays help assess tooth position, roots, and jaw structure to guide safe, accurate planning.',
    icon: ScanLine,
  },
  {
    title: 'Digital Treatment Planning',
    description: 'Your case is mapped in specialised planning software to shape a considered, personalised approach.',
    icon: Workflow,
  },
]

const audiences = [
  {
    title: 'Adults',
    description: "It's never too late to improve alignment and confidence — many adults choose treatment for comfort as much as appearance.",
    icon: UserRound,
  },
  {
    title: 'Teenagers',
    description: 'The most common stage for orthodontic treatment, planned around growth and everyday school life.',
    icon: GraduationCap,
  },
  {
    title: 'Children',
    description: 'Early evaluation helps guide healthy jaw and bite development from a young age.',
    icon: Baby,
  },
]

const testimonials = [
  {
    quote:
      'The whole process felt calm and clearly explained from the very first visit. I always knew exactly what to expect at each stage.',
    treatment: 'Orthodontic Consultation',
  },
  {
    quote:
      'Every option was explained patiently, and I felt fully involved in choosing the right treatment for me.',
    treatment: 'Adult Orthodontic Treatment',
  },
  {
    quote:
      'The team made the entire experience comfortable, from the first scan to the final review.',
    treatment: 'Teen Orthodontic Care',
  },
  {
    quote:
      'I appreciated how carefully everything was planned before we even started.',
    treatment: 'Clear Aligner Treatment',
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
    <section className="relative isolate overflow-hidden bg-white">
      <Container className="relative grid min-h-[auto] items-center gap-10 pt-28 pb-16 sm:pb-20 lg:min-h-[80vh] lg:grid-cols-[0.5fr_0.5fr] lg:pt-32 lg:pb-24">
        <div className="max-w-[600px]">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            Orthodontics in Cairo
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.94] tracking-[-0.022em] text-[#0A2247]">
            Straighten Your Smile
            <span className="mt-2 block">With Quiet Precision</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-[#495a73] sm:text-[1.16rem] sm:leading-9">
            Orthodontic treatment is planned calmly and precisely, with a personalised treatment timeline built around your goals — for adults, teenagers, and children alike.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              Book Orthodontic Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#treatment-types"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
            >
              Explore Treatment Options
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5f6f88] sm:gap-x-5">
            <span>All ages welcome</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>Digital treatment planning</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>Discreet, clinician-led care</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-[90%] overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
            <Image
              src="/images/clear-aligners.png"
              alt="Clear orthodontic aligner"
              width={1200}
              height={1000}
              priority
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

function TypesSection() {
  return (
    <section id="treatment-types" className="scroll-mt-28 bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Treatment Options
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Types of Orthodontic Treatment
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            The right system is selected around your clinical needs, daily lifestyle, and how discreet you'd like treatment to be.
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
                    Treatment Option
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

function DigitalPlanningSection() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Digital Workflow
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Digital Treatment Planning
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            A digital workflow helps map your treatment precisely before it begins, reducing uncertainty and guiding a considered result.
          </p>
        </div>

        <div className="mt-16 rounded-[34px] border border-[#e5ebf3] bg-brand-bg p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] lg:p-8">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-[24px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
              <ScanSearch className="size-7" strokeWidth={1.4} />
            </div>
            <div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
                Precision planning
              </span>
              <h3 className="mt-1 text-[1.5rem] font-semibold leading-tight text-[#0A2247] sm:text-[1.7rem]">
                A plan mapped before treatment starts
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-[0.95rem] font-light leading-7 text-[#495a73] sm:text-[1rem]">
            An intraoral scan replaces messy impression trays, diagnostic X-rays give a clear picture of teeth and jaw structure, and specialised software brings it all together into a personalised treatment plan.
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

function WhoIsItForSection() {
  return (
    <section className="bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            All Ages Welcome
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Who Is Orthodontic Treatment For
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Orthodontic care is planned around your stage of life, not a single one-size-fits-all approach.
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

function TestimonialsSection() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Patient Testimonials
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            What Patients Remember
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Beyond the final result, we believe patients should remember the clarity, calm, and consideration of the experience itself.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <article className="rounded-[34px] border border-[#e5ebf3] bg-brand-bg p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-6 lg:p-7">
            <Stars />
            <blockquote className="mt-3 max-w-4xl text-2xl font-medium leading-[1.35] text-[#0A2247] sm:text-3xl lg:text-[2.05rem]">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="mt-4 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">Verified Patient</p>
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
                  <p className="text-sm font-semibold text-[#0A2247]">Verified Patient</p>
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

function ConsultationCtaSection() {
  const trustItems = [
    '30–45 Minute Consultation',
    'Personalised Treatment Timeline',
    'Treatment Options Discussion',
    'No Obligation',
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
              Begin Your Journey
            </p>
            <h2
              id="orthodontics-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              Ready to Straighten Your Smile?
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every successful orthodontic treatment begins with a comprehensive consultation. We'll assess your smile, explain every available option, and shape a personalised treatment timeline around your clinical needs.
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

export default async function OrthodonticsPage({
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
      <DigitalPlanningSection />
      <WhoIsItForSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  )
}
