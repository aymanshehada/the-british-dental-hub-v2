import type { Metadata } from 'next'
import Link from 'next/link'
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

const pageTitle = 'Treatments | The British Dental Hub'
const pageDescription =
  'Explore the full range of premium dental treatments at The British Dental Hub, from implants and veneers to preventive and family care in New Cairo.'

export const metadata: Metadata = {
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

const services = [
  {
    number: '01',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth, planned with digital precision.',
    icon: Anchor,
    href: '/dental-implants',
  },
  {
    number: '02',
    title: 'Porcelain Veneers',
    description: 'Refined porcelain shells that transform shape, shade, and symmetry for a Hollywood smile.',
    icon: Sparkles,
    href: '/porcelain-veneers',
  },
  {
    number: '03',
    title: 'Check-up & Cleaning',
    description: 'Routine examinations and professional cleaning to maintain long-term oral health.',
    icon: ClipboardCheck,
    href: '/check-up-cleaning',
  },
  {
    number: '04',
    title: 'Teeth Whitening',
    description: 'Safe, effective brightening treatments for a noticeably whiter, more confident smile.',
    icon: Sun,
    href: '/teeth-whitening',
  },
  {
    number: '05',
    title: 'Orthodontics',
    description: 'Clear aligners and modern techniques to straighten teeth comfortably and discreetly.',
    icon: AlignCenter,
    href: '/orthodontics',
  },
  {
    number: '06',
    title: 'Gum Treatment',
    description: 'Comprehensive periodontal care, from prevention to advanced gum disease therapy.',
    icon: ShieldCheck,
    href: '/gum-treatment',
  },
  {
    number: '07',
    title: 'Root Canal Treatment',
    description: 'Precise, comfortable endodontic care to save damaged teeth and relieve pain at the source.',
    icon: Microscope,
    href: '/root-canal-treatment',
  },
  {
    number: '08',
    title: 'Children’s Dentistry',
    description: 'Gentle, specialised paediatric care designed to keep young smiles healthy and happy.',
    icon: Baby,
    href: '/children-dentistry',
  },
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Our Services
          </p>
          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            Comprehensive Dental Care
          </h1>
          <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            Every treatment is planned with disciplined technique and measured attention, from routine care to complete smile transformations.
          </p>
        </div>
      </Container>
    </section>
  )
}

function ServicesGridSection() {
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
                  Learn More
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

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesGridSection />
    </main>
  )
}
