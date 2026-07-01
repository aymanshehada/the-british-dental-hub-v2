import {
  Brain,
  CalendarDays,
  HeartPulse,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { PremiumButton } from '@/components/ui/premium-button'
import { PremiumCard } from '@/components/ui/premium-card'

const journeySteps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Consultation',
    description: 'A thorough clinical assessment and treatment discussion to define the optimal implant pathway.',
    detail: 'Duration: 30–45 min',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: '3D CBCT Scan',
    description: 'Advanced digital diagnosis and bone assessment for precise anatomical planning.',
    detail: 'Precision imaging',
  },
  {
    number: '03',
    icon: Brain,
    title: 'Digital Planning',
    description: 'Virtual implant positioning designed for maximum precision, stability and long-term harmony.',
    detail: 'Custom treatment design',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Implant Placement',
    description: 'Precise implant placement using minimally invasive techniques for maximum comfort and predictability.',
    detail: 'Gentle and efficient',
  },
  {
    number: '05',
    icon: HeartPulse,
    title: 'Healing Phase',
    description: 'A carefully guided osseointegration period with attentive follow-up and recovery support.',
    detail: 'Supportive recovery',
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Final Restoration',
    description: 'A bespoke crown crafted to restore natural form, function and confidence with exceptional aesthetics.',
    detail: 'Beautiful long-term result',
  },
]

export function JourneySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050d1f] py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-10 bg-primary" />
            Your Implant Journey
          </p>
          <h2 className="section-title mt-6 text-white">
            Your Implant Journey
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
            From your first consultation to your final smile, every step is carefully planned according to modern British implant protocols.
          </p>
        </div>

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-6 right-6 top-12 h-px origin-left bg-gradient-to-r from-primary/55 via-primary/80 to-primary/55 transition-opacity duration-1000 ease-out" />
            <div className="flex items-stretch gap-4">
              {journeySteps.map((step, index) => {
                const Icon = step.icon
                const isHighlighted = step.number === '04'

                return (
                  <div key={step.title} className="relative flex-1 pt-10">
                    <div className={`absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border bg-[#07152C] text-primary shadow-[0_0_0_8px_rgba(255,209,110,0.08)] transition duration-500 ease-out ${isHighlighted ? 'border-primary/60 shadow-[0_0_0_10px_rgba(255,209,110,0.18)]' : 'border-primary/30'}`}>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-12 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-primary/70 to-transparent" />
                    <PremiumCard className={`group h-full rounded-[30px] border bg-[rgba(7,21,44,0.95)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-2 hover:border-primary/45 hover:shadow-[0_24px_80px_rgba(255,209,110,0.12)] lg:hover:shadow-[0_24px_90px_rgba(255,209,110,0.16)] ${isHighlighted ? 'border-primary/45 shadow-[0_24px_80px_rgba(255,209,110,0.12)]' : 'border-white/15'}`}>
                      <div className="h-full opacity-0 translate-y-6 animate-about-fade-scale" style={{ animationDelay: `${index * 120}ms` }}>
                        <div className="flex h-14 w-14 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                          <Icon className="size-7" strokeWidth={1.6} />
                        </div>
                        <h3 className={`mt-6 text-[1.15rem] font-semibold leading-tight transition duration-300 ease-out ${isHighlighted ? 'text-primary/95' : 'text-white group-hover:text-primary/95'}`}>
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm font-light leading-7 text-slate-300/85">
                          {step.description}
                        </p>
                        <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/75">
                          {step.detail}
                        </p>
                      </div>
                    </PremiumCard>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-8 space-y-4 lg:hidden">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-primary/40 to-transparent" />
          {journeySteps.map((step, index) => {
            const Icon = step.icon
            const isHighlighted = step.number === '04'

            return (
              <div key={step.title} className="relative pl-14">
                <div className={`absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border bg-[#07152C] text-primary shadow-[0_0_0_8px_rgba(255,209,110,0.08)] transition duration-500 ease-out ${isHighlighted ? 'border-primary/60 shadow-[0_0_0_10px_rgba(255,209,110,0.18)]' : 'border-primary/30'}`}>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]">
                    {step.number}
                  </span>
                </div>
                <PremiumCard className={`group rounded-[30px] border bg-[rgba(7,21,44,0.95)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-2 hover:border-primary/45 hover:shadow-[0_24px_80px_rgba(255,209,110,0.12)] ${isHighlighted ? 'border-primary/45 shadow-[0_24px_80px_rgba(255,209,110,0.12)]' : 'border-white/15'}`}>
                  <div className="opacity-0 translate-y-6 animate-about-fade-scale" style={{ animationDelay: `${index * 120}ms` }}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                      <Icon className="size-7" strokeWidth={1.6} />
                    </div>
                    <h3 className={`mt-6 text-[1.15rem] font-semibold leading-tight transition duration-300 ease-out ${isHighlighted ? 'text-primary/95' : 'text-white group-hover:text-primary/95'}`}>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-7 text-slate-300/85">
                      {step.description}
                    </p>
                    <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/75">
                      {step.detail}
                    </p>
                  </div>
                </PremiumCard>
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
            Ready to begin your implant journey?
          </p>
          <PremiumButton href="/#contact" variant="secondary" className="min-w-[220px]">
            Book Consultation
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
