import { Activity, Gauge, Microscope, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Heading, Text } from '@/components/ui/typography'
import { PremiumCard } from '@/components/ui/premium-card'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const systems = [
  {
    title: 'Swiss Precision',
    description:
      'Engineered for exceptional precision, long-term stability and predictable clinical outcomes.',
    label: 'Premium Swiss Implant Systems',
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: 'German Engineering',
    description:
      'Renowned manufacturing excellence delivering outstanding reliability and mechanical accuracy.',
    label: 'Advanced German Implant Technologies',
    icon: Gauge,
    featured: false,
  },
  {
    title: 'American Innovation',
    description:
      'Research-driven implant solutions combining modern restorative science with proven clinical performance.',
    label: 'Contemporary American Implant Systems',
    icon: Microscope,
    featured: false,
  },
  {
    title: 'Modern Korean Technology',
    description:
      'Versatile implant solutions recognised for excellent osseointegration and innovative treatment options.',
    label: 'Advanced Korean Implant Systems',
    icon: Activity,
    featured: false,
  },
]

export function ImplantSystemsSection() {
  return (
    <SectionWrapper aria-labelledby="implant-systems-heading" className="py-12 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>World-Class Implant Systems</Eyebrow>
          <Heading id="implant-systems-heading" className="mt-2 text-[#F8F8F6]">
            Engineered for Long-Term Success
          </Heading>
          <Text className="mt-2 text-lg font-light leading-8 text-[rgba(255,255,255,0.82)] sm:text-xl">
            We carefully select globally recognised implant technologies based on each patient’s clinical needs, ensuring exceptional precision, stability and long-term outcomes.
          </Text>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <PremiumCard className="group h-full rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_8px_22px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D4AF37]/20 hover:shadow-[0_10px_26px_rgba(212,175,55,0.05)] lg:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                <ShieldCheck className="size-7" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                Premium Swiss Implant Systems
              </span>
            </div>

            <h3 className="mt-4 text-[1.5rem] font-semibold leading-tight text-[#F8F8F6] transition duration-300 ease-out group-hover:text-primary/95 sm:text-[1.7rem]">
              Swiss Precision
            </h3>
            <p className="mt-2 max-w-xl text-[0.95rem] font-light leading-7 text-[rgba(255,255,255,0.82)] sm:text-[1rem]">
              Engineered for exceptional precision, long-term stability and predictable clinical outcomes.
            </p>

            <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                Clinical Intent
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {[
                  'Precision-led planning',
                  'Soft-tissue harmony',
                  'Long-term predictability',
                  'Refined restorative integration',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-3 py-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-light leading-6 text-[rgba(255,255,255,0.82)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>

          <div className="grid gap-5 md:grid-cols-2">
            {systems.slice(1).map((system) => {
              const Icon = system.icon

              return (
                <PremiumCard
                  key={system.title}
                  className="group h-full rounded-[30px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_8px_22px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D4AF37]/20 hover:shadow-[0_10px_26px_rgba(212,175,55,0.05)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                      <Icon className="size-5" strokeWidth={1.4} />
                    </div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                      {system.label}
                    </p>
                  </div>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-tight text-[#F8F8F6] transition duration-300 ease-out group-hover:text-primary/95">
                    {system.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-light leading-7 text-[rgba(255,255,255,0.82)]">
                    {system.description}
                  </p>
                </PremiumCard>
              )
            })}
          </div>
        </div>

        <div className="mt-4 rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,209,110,0.10),transparent_60%),rgba(255,255,255,0.04)] p-5 shadow-[0_8px_22px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-primary/80">
            Clinical Philosophy
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#F8F8F6] sm:text-[1.8rem]">
            Every patient deserves the right implant—not simply the same implant.
          </h3>
          <p className="mt-2 max-w-3xl text-[0.95rem] font-light leading-7 text-[rgba(255,255,255,0.82)] sm:text-[1rem]">
            Our clinicians select the most appropriate implant system according to bone quality, anatomy, aesthetics and long-term prognosis.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  )
}
