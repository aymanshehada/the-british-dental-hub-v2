import { ArrowRight, Check } from 'lucide-react'
import { PremiumCard } from '@/components/ui/premium-card'

const trustPoints = [
  'British Standards',
  'Digital Planning',
  'Premium Implant Systems',
  'Personalized Care',
]

const reasons = [
  {
    number: '01',
    icon: ScanSearch,
    title: 'Digital Treatment Planning',
    description:
      'Every implant is digitally planned using advanced 3D CBCT imaging for maximum precision and predictable long-term results.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Premium Implant Systems',
    description:
      'We use internationally recognized implant systems supported by long-term scientific evidence and exceptional reliability.',
  },
  {
    number: '03',
    icon: UserRoundCheck,
    title: 'Experienced Implant Team',
    description:
      'Treatment is performed by experienced dentists following modern British clinical protocols and meticulous planning.',
  },
  {
    number: '04',
    icon: HeartPulse,
    title: 'Comfortable Surgery',
    description:
      'Gentle surgical techniques and modern anesthesia provide a comfortable and stress-free treatment experience.',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Natural Aesthetic Results',
    description:
      'Every implant restoration is carefully crafted to match your smile naturally in shape, color, and function.',
  },
  {
    number: '06',
    icon: BadgeCheck,
    title: 'Long-Term Support',
    description:
      'Regular follow-up appointments help protect your investment and maintain healthy implants for many years.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#07152C]/95 py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-10 bg-primary" />
            Why Choose The British Dental Hub?
          </p>
          <h2 className="section-title mt-6 text-white">
            Why Choose The British Dental Hub?
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
            British-inspired precision, premium implant systems and meticulous patient care designed to deliver long-term confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <PremiumCard
                key={reason.title}
                className="group h-full overflow-hidden rounded-[30px] border border-white/15 bg-[rgba(5,13,31,0.96)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm"
              >
                <div className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                      <Icon className="size-8" strokeWidth={1.6} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                      {reason.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-[1.3rem] font-semibold leading-tight text-white transition duration-300 ease-out group-hover:text-primary/95">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-slate-300/85">
                    {reason.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-300/70">
                      Learn More
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white/5 text-primary transition duration-300 ease-out group-hover:translate-x-1 group-hover:border-primary/40 group-hover:bg-primary/10">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </PremiumCard>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:gap-4 sm:p-5">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#07152C]/80 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#081a36]"
            >
              <Check className="size-3.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
