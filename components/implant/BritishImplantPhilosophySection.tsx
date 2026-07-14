import { BadgeCheck, HeartPulse, ScanSearch, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'

const philosophyPoints = [
  {
    title: 'Digital Planning Before Treatment',
    description:
      'CBCT imaging and intraoral scanning are used to guide restorative planning before any implant is placed.',
    icon: ScanSearch,
  },
  {
    title: 'Clinically Proven Implant Systems',
    description:
      'System selection is based on long-term evidence, bone condition and restorative requirements for each patient.',
    icon: ShieldCheck,
  },
  {
    title: 'Comfort-Led Clinical Protocols',
    description:
      'Where clinically appropriate, minimally invasive protocols are chosen to support healing and reduce treatment burden.',
    icon: HeartPulse,
  },
  {
    title: 'Structured Long-Term Maintenance',
    description:
      'Ongoing review and maintenance planning protects implant health, gum stability and restorative longevity.',
    icon: BadgeCheck,
  },
]

export function BritishImplantPhilosophySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0F1F38] py-8 sm:py-10 lg:py-11">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
            The British Implant Philosophy
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#F8F8F6] sm:text-5xl lg:text-[3.75rem]">
            Why Every Implant Is Planned for Long-Term Success
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.02rem] leading-8 text-[rgba(255,255,255,0.82)] sm:text-[1.08rem] sm:leading-8">
            Every treatment is digitally planned and individually tailored to maximise health, function, aesthetics and long-term predictability.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <aside className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 shadow-[0_8px_26px_rgba(0,0,0,0.1)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Clinical Standard
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-[rgba(255,255,255,0.82)]">
                Every implant decision is made through diagnosis, restorative intent and long-term biological stability.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] px-5 py-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Treatment Aim
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-[rgba(255,255,255,0.82)]">
                Replace missing teeth while protecting function, comfort, gum health and confidence for years ahead.
              </p>
            </div>
          </aside>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] sm:p-5">
            <div className="divide-y divide-white/10">
              {philosophyPoints.map((point) => {
                const Icon = point.icon

                return (
                  <article key={point.title} className="group flex items-start gap-4 py-3.5 transition-colors duration-300 ease-out hover:bg-white/[0.02]">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 ease-out group-hover:border-[#D4AF37]/45 group-hover:bg-[#D4AF37]/15">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[1.06rem] font-semibold leading-6 text-[#F8F8F6]">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-[0.95rem] leading-7 text-[rgba(255,255,255,0.82)]">
                        {point.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-4xl text-center">
          <p className="text-[0.95rem] leading-7 text-[rgba(255,255,255,0.82)] sm:text-[1rem] sm:leading-8">
            Successful implant dentistry is measured not only by replacing missing teeth, but by preserving health, function and confidence for decades.
          </p>
        </div>
      </Container>
    </section>
  )
}
