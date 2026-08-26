import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Check, MessageSquare, ScanSearch, Sparkles, Star } from 'lucide-react'
import { ArtOfPorcelainVeneersSection } from '@/components/porcelain/ArtOfPorcelainVeneersSection'
import { Container } from '@/components/ui/container'
import { PremiumButton } from '@/components/ui/premium-button'
import { PremiumCard } from '@/components/ui/premium-card'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const pageTitle = 'Porcelain Veneers | The British Dental Hub'
const pageDescription =
  'Refine your smile with premium porcelain veneers planned with digital smile design and meticulous British-inspired care in Cairo.'

export const metadata: Metadata = {
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

const journeySteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'A calm clinical assessment of your smile, goals and suitability for veneer treatment.',
  },
  {
    number: '02',
    title: 'Digital Smile Design',
    description: 'Photography, facial analysis and digital planning shape the intended result before treatment begins.',
  },
  {
    number: '03',
    title: 'Tooth Preparation',
    description: 'Selected teeth are prepared conservatively with careful attention to structure and symmetry.',
  },
  {
    number: '04',
    title: 'Temporary Veneers',
    description: 'Temporaries protect the teeth while the final porcelain veneers are crafted.',
  },
  {
    number: '05',
    title: 'Final Porcelain Veneers',
    description: 'The final veneers are fitted, refined and checked for harmony, shade and bite.',
  },
  {
    number: '06',
    title: 'Review & Follow-up',
    description: 'Ongoing review helps maintain comfort, appearance and long-term stability.',
  },
]

const veneerTypes = [
  {
    title: 'Porcelain Veneers',
    description:
      'Best when a refined cosmetic transformation is required with excellent stain resistance, translucency and a highly natural finish.',
    note: 'Ideal for: complete smile refinement and lasting aesthetic precision',
  },
  {
    title: 'E.max Veneers',
    description:
      'A strong lithium disilicate option for front teeth where translucency, durability and a polished ceramic appearance are important.',
    note: 'Ideal for: strength, translucency and premium anterior cases',
  },
  {
    title: 'Composite Veneers',
    description:
      'Useful when a more conservative or staged approach is preferred, or when subtle enhancement is the right clinical choice.',
    note: 'Ideal for: selective improvement and more conservative planning',
  },
]

const smileDesignStages = [
  'Digital Photography',
  'Intraoral Scanner',
  'Smile Simulation',
  'Mock-up Preview',
  'Precision Planning',
]

const veneerBenefits = [
  {
    title: 'Natural Aesthetics',
    description: 'Ceramic surfaces are shaped to reflect light in a subtle, natural way.',
  },
  {
    title: 'Minimal Preparation',
    description: 'Treatment is planned conservatively whenever anatomy and smile goals allow.',
  },
  {
    title: 'Smile Symmetry',
    description: 'Careful design helps align proportions, contours and visible balance.',
  },
  {
    title: 'Long-Term Beauty',
    description: 'A refined finish supports stable appearance when maintained properly.',
  },
  {
    title: 'Premium Ceramic Materials',
    description: 'Material choice is guided by translucency, durability and clinical intent.',
  },
  {
    title: 'British Treatment Philosophy',
    description: 'Measured planning and discreet presentation remain central to the experience.',
  },
]

const testimonials = [
  {
    quote:
      'The planning felt precise and calm. Everything was explained carefully and the result looked beautifully natural.',
    treatment: 'Porcelain Veneer Treatment',
  },
  {
    quote:
      'The consultation was thorough without ever feeling rushed. The final result felt balanced, refined and elegant.',
    treatment: 'Smile Design Consultation',
  },
  {
    quote:
      'The process was discreet, detailed and reassuring. I appreciated how considered every stage felt.',
    treatment: 'Cosmetic Dentistry Review',
  },
  {
    quote:
      'Every step was handled with care and clarity. The smile design discussion was especially helpful.',
    treatment: 'Veneers Planning Appointment',
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
    <section className="relative isolate overflow-hidden bg-[#050d1f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(5,13,31,0.86)_0%,rgba(5,13,31,0.72)_38%,rgba(5,13,31,0.3)_62%,rgba(5,13,31,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,13,31,0.44)_0%,transparent_36%)]" />

      <Container className="relative grid min-h-[850px] items-center gap-10 pt-24 pb-16 sm:pb-20 lg:min-h-[90vh] lg:grid-cols-[0.41fr_0.59fr] lg:pt-28 lg:pb-24">
        <div className="max-w-[620px]">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/68">
            The British Dental Hub
            <span className="mt-1 block text-[0.58rem] tracking-[0.24em] text-white/56">
              (British-inspired Cosmetic Dentistry)
            </span>
          </p>

          <p className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            Porcelain Veneers in Cairo
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.92] tracking-[-0.022em] text-white">
            Refine Your Smile
            <span className="mt-3 block">With Quiet Precision</span>
          </h1>

          <p className="mt-7 max-w-[600px] text-[1.08rem] leading-8 text-white/84 sm:text-[1.16rem] sm:leading-9">
            Porcelain veneers are planned with a calm, step-by-step approach to improve shape, proportion and harmony while respecting natural tooth structure.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <PremiumButton
              href="/#contact"
              variant="primary"
              className="min-w-[250px] justify-center"
              iconRight={<ArrowRight className="size-4" />}
            >
              Book Veneers Consultation
            </PremiumButton>
            <PremiumButton
              href="#veneers-journey"
              variant="outline"
              className="min-w-[280px] justify-center border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              Explore the Veneers Journey
            </PremiumButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/72 sm:gap-x-5">
            <span>Digital smile design</span>
            <span className="hidden h-px w-4 bg-white/30 sm:block" />
            <span>Premium ceramic materials</span>
            <span className="hidden h-px w-4 bg-white/30 sm:block" />
            <span>Discreet, clinician-led care</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end">
          <Image
            src="/images/veneers-layering.png"
            alt="Porcelain veneer layering artwork"
            width={1800}
            height={1400}
            priority
            sizes="(max-width: 1024px) 92vw, 58vw"
            className="h-auto w-[90%] object-contain"
          />
        </div>
      </Container>
    </section>
  )
}

function JourneySection() {
  return (
    <section id="veneers-journey" className="scroll-mt-28 bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            The Veneers Journey
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] tracking-[-0.032em] text-[#0A2247]">
            Your Veneer Journey,
            <span className="mt-2 block">Step by Step.</span>
          </h2>
          <p className="mt-7 text-[1.06rem] leading-8 text-[#566681] sm:text-[1.12rem] sm:leading-9">
            From your first consultation to your final porcelain veneers, every stage is carefully planned to maximise comfort, precision and long-term success.
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
            Every treatment plan is personalised. Some patients may require additional stages such as minor recontouring or selective preparation before veneer placement.
          </p>
        </div>
      </Container>
    </section>
  )
}

function TypesSection() {
  return (
    <SectionWrapper aria-labelledby="veneer-types-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Types of Veneers
          </p>
          <h2 id="veneer-types-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Veneer Options Planned Around Your Smile
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            The right material is selected according to your clinical needs, the amount of refinement required and the long-term aesthetic result.
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
                  Veneer Option
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

function DigitalSmileDesignSection() {
  return (
    <SectionWrapper aria-labelledby="digital-smile-design-heading" className="bg-brand-bg">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Digital Smile Design
          </p>
          <h2 id="digital-smile-design-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Precision Before a Tooth Is Prepared
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            A digital workflow helps define proportions, preview the smile and reduce uncertainty before treatment begins.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <PremiumCard className="group h-full rounded-[34px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-[24px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                <ScanSearch className="size-7" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
                Digital workflow
              </span>
            </div>

            <h3 className="mt-6 text-[1.5rem] font-semibold leading-tight text-[#0A2247] sm:text-[1.7rem]">
              Smile design that is planned, not guessed
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] font-light leading-7 text-[#495a73] sm:text-[1rem]">
              Digital photography, scanner-based records and simulation tools help shape a clear and measured treatment plan.
            </p>

            <div className="mt-6 rounded-[24px] border border-[#e5ebf3] bg-brand-bg p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                Precision tools
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {[
                  'Digital Photography',
                  'Intraoral Scanner',
                  'Smile Simulation',
                  'Mock-up Preview',
                  'Precision Planning',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl border border-[#e5ebf3] bg-white px-3 py-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-red" />
                    <span className="text-sm font-light leading-6 text-[#495a73]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>

          <div className="grid gap-5 md:grid-cols-2">
            {smileDesignStages.map((item) => (
              <article
                key={item}
                className="group h-full rounded-[28px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Sparkles className="size-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                    Workflow stage
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

function WhyPatientsChooseVeneersSection() {
  return (
    <section className="bg-brand-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Why Patients Choose Veneers
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] tracking-[-0.032em] text-[#0A2247]">
            A Smile Design That Feels Natural
          </h2>
          <p className="mt-7 text-[1.06rem] leading-8 text-[#566681] sm:text-[1.12rem] sm:leading-9">
            Veneers are chosen for their ability to refine the smile with precision, discretion and a consistently elegant result.
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
                  Veneer Benefit
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

function BeforeAfterSection() {
  return (
    <SectionWrapper aria-labelledby="veneers-before-after-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Before & After Gallery
          </p>
          <h2 id="veneers-before-after-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Clinical Photography Framework
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Verified before-and-after photography will be presented here once real veneer cases are professionally documented.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {['Before', 'After'].map((label) => (
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
                    Clinical documentation
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-[#495a73]">
                    This section is reserved for verified veneer cases once professional photography becomes available.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
                Case notes
              </p>
              <div className="mt-5 space-y-3">
                {[
                  'Shade matching and enamel blending',
                  'Smile proportion and symmetry',
                  'Conservative preparation planning',
                  'Follow-up review and maintenance',
                ].map((item) => (
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

function TestimonialsSection() {
  return (
    <SectionWrapper aria-labelledby="veneers-testimonials-heading" className="bg-brand-bg">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Patient Testimonials
          </p>
          <h2 id="veneers-testimonials-heading" className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            What Patients Remember
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Beyond the final result, we believe patients should remember the clarity, calm and consideration of the experience itself.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <article className="rounded-[34px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-6 lg:p-7">
            <Stars />
            <blockquote className="mt-3 max-w-4xl text-2xl font-medium leading-[1.35] text-[#0A2247] sm:text-3xl lg:text-[2.05rem]">
              “{testimonials[0].quote}”
            </blockquote>
            <div className="mt-4 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">Verified Patient</p>
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
                  <p className="text-sm font-semibold text-[#0A2247]">Verified Patient</p>
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

function ConsultationCtaSection() {
  const trustItems = [
    '30–45 Minute Consultation',
    'Digital Smile Preview',
    'Treatment Options Discussion',
    'No Obligation',
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
              Begin Your Journey
            </p>
            <h2
              id="consultation-cta-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
            >
              Ready to Refine Your Smile?
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              Every successful veneer treatment begins with a comprehensive consultation. We’ll assess your smile, explain every available option and create a personalised treatment plan designed around your clinical needs.
            </p>
            <p className="mt-3 text-[0.95rem] font-light leading-7 text-[rgba(10,34,71,0.78)]">
              No pressure. Just honest clinical advice.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_14px_30px_rgba(10,34,71,0.26)]"
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
  setRequestLocale(locale)

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