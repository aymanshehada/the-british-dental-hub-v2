import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock3,
  Focus,
  HeartHandshake,
  LayoutGrid,
  MessageSquare,
  Settings2,
  ShieldAlert,
  Star,
  Thermometer,
} from 'lucide-react'
import { Container } from '@/components/ui/container'

const pageTitle = 'Root Canal Treatment | The British Dental Hub'
const pageDescription =
  'Comfortable, precisely planned root canal treatment for front and back teeth alike, using magnifying loupes and modern rotary instruments in Cairo.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Root Canal Treatment',
    'Endodontics',
    'Pain-Free Dentistry',
    'Tooth Pain Relief',
    'Rotary Endodontics',
    'British Dental Clinic',
  ],
  alternates: {
    canonical: '/root-canal-treatment',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/root-canal-treatment',
    type: 'website',
    siteName: 'The British Dental Hub',
    images: [
      {
        url: '/images/general-dentistry.png',
        width: 1200,
        height: 630,
        alt: 'Root canal treatment at The British Dental Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/general-dentistry.png'],
  },
}

const approachPoints = [
  {
    title: 'Magnifying Dental Loupes',
    description: 'Magnifying dental loupes support finer control and a more precise view throughout every stage of treatment.',
    icon: Focus,
  },
  {
    title: 'Modern Rotary Instruments',
    description: 'Rotary instruments help shape and clean the root canal system efficiently, supporting a precise, well-controlled result.',
    icon: Settings2,
  },
  {
    title: 'Single-Visit Potential',
    description: 'Depending on clinical assessment, some cases can be completed in a single visit for a more convenient experience.',
    icon: Clock3,
  },
  {
    title: 'Comfort-Focused Care',
    description: "We use considered equipment and materials throughout, aiming for treatment that's as comfortable and pain-free as possible.",
    icon: HeartHandshake,
  },
  {
    title: 'Every Tooth, Front or Back',
    description: 'Root canal treatment is available for any tooth that needs it, front or back, without exception.',
    icon: LayoutGrid,
  },
]

const signs = [
  {
    title: 'Persistent Tooth Pain',
    description: 'Ongoing discomfort in or around a tooth is often the first sign worth discussing with your dentist.',
    icon: AlertCircle,
  },
  {
    title: 'Sensitivity to Hot or Cold',
    description: "Sharp sensitivity that lingers after hot or cold food and drink can be a useful early signal.",
    icon: Thermometer,
  },
  {
    title: 'Swelling or Tenderness',
    description: 'Swelling, tenderness, or a visible bump near a tooth is always worth a proper clinical assessment.',
    icon: ShieldAlert,
  },
]

const testimonials = [
  {
    quote:
      'I was nervous beforehand, but everything was explained clearly and the treatment itself was far more comfortable than I expected.',
    treatment: 'Root Canal Treatment',
  },
  {
    quote:
      'The team took the time to explain each step, and the whole appointment felt calm and well organised.',
    treatment: 'Root Canal Consultation',
  },
  {
    quote:
      'What stood out was how gently and carefully everything was handled, even though I was dreading the visit.',
    treatment: 'Endodontic Treatment',
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
            Root Canal Treatment in Cairo
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.94] tracking-[-0.022em] text-[#0A2247]">
            Comfortable Care
            <span className="mt-2 block">Without the Worry</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-[#495a73] sm:text-[1.16rem] sm:leading-9">
            Root canal treatment is planned to be as gentle and pain-free as possible, and is available for any tooth that needs it — front or back.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#our-approach"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
            >
              See Our Approach
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5f6f88] sm:gap-x-5">
            <span>Front and back teeth</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>Magnifying loupes</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>Comfort-focused care</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-[90%] overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
            <Image
              src="/images/general-dentistry.png"
              alt="Precise, comfort-focused dental treatment"
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

function ApproachSection() {
  return (
    <section id="our-approach" className="bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Our Approach
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Our Approach to Root Canal Treatment
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Every step is planned with precision equipment and a considered, comfort-focused technique.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approachPoints.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group h-full rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-[1.15rem] font-semibold leading-[1.25] tracking-[-0.016em] text-[#0A2247]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-[1.75] text-[#495a73]">
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

function WhenRecommendedSection() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            General Awareness
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            When Root Canal Treatment May Be Recommended
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            These general signs are shared for awareness only — a proper diagnosis always requires a clinical examination with your dentist.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {signs.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group h-full rounded-[30px] border border-[#e5ebf3] bg-brand-bg p-6 text-center shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-[0.9rem] leading-7 text-[#5f6f88]">
          If any of this sounds familiar, the next step is simply a consultation — not a diagnosis. Our team will assess your specific case in person before recommending any treatment.
        </p>
      </Container>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-brand-bg py-24 sm:py-28 lg:py-32">
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
          <article className="rounded-[34px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-6 lg:p-7">
            <Stars />
            <blockquote className="mt-3 max-w-4xl text-2xl font-medium leading-[1.35] text-[#0A2247] sm:text-3xl lg:text-[2.05rem]">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="mt-4 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">Verified Patient</p>
              <p className="mt-1 text-sm font-light text-[#495a73]">{testimonials[0].treatment}</p>
            </div>
          </article>

          <div className="grid gap-5 lg:grid-cols-2">
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
    'Comfort-Focused Treatment Plan',
    'Treatment Options Discussion',
    'No Obligation',
  ]

  return (
    <section
      aria-labelledby="root-canal-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              Begin Your Journey
            </p>
            <h2
              id="root-canal-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              Ready to Feel Comfortable Again?
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every root canal treatment begins with a comprehensive consultation. We'll assess your tooth, explain the recommended approach, and answer every question before any treatment begins.
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

export default function RootCanalTreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ApproachSection />
      <WhenRecommendedSection />
      <TestimonialsSection />
      <ConsultationCtaSection />
    </main>
  )
}
