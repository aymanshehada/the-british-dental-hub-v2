import { Activity, Microscope, ScanSearch, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'

const technologies = [
  {
    title: 'Digital Treatment Planning',
    description:
      'Each implant pathway is planned digitally to support precision, prosthetic alignment and long-term predictability.',
    icon: ScanSearch,
    eyebrow: 'Precision planning',
  },
  {
    title: 'Guided Implant Surgery',
    description:
      'When clinically indicated, digitally guided placement supports accurate positioning, efficient surgery and minimally invasive treatment.',
    icon: Activity,
    eyebrow: 'Guided care',
  },
  {
    title: 'Magnification Dentistry (Loupes)',
    description:
      'Enhanced visual accuracy allows meticulous attention to fine detail throughout assessment, treatment and review.',
    icon: Microscope,
    eyebrow: 'Fine detail',
  },
  {
    title: 'Class B Sterilisation Protocols',
    description:
      'Strict sterilisation procedures support patient safety and clinical excellence at every appointment.',
    icon: ShieldCheck,
    eyebrow: 'Safety and care',
  },
]

export function DigitalDentistrySection() {
  return (
    <section aria-labelledby="digital-dentistry-heading" className="relative overflow-hidden border-t border-white/10 bg-[#07152C] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
            Advanced Digital Dentistry
          </p>
          <h2 id="digital-dentistry-heading" className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#F8F8F6] sm:text-5xl lg:text-[3.75rem]">
            Precision Through Technology
          </h2>
          <p className="mt-4 text-lg font-light leading-8 text-[rgba(255,255,255,0.82)] sm:text-xl">
            Every stage of implant treatment is enhanced through advanced digital planning, modern imaging and precision-guided clinical protocols.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[30px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-[24px] border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                <ScanSearch className="size-7" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Digital Intraoral Scanner
              </span>
            </div>

            <h3 className="mt-6 text-[1.5rem] font-semibold leading-tight text-[#F8F8F6] sm:text-[1.7rem]">
              Digital Intraoral Scanner
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] font-light leading-7 text-[rgba(255,255,255,0.82)] sm:text-[1rem]">
              Create precise digital impressions for implant planning, restorative design and a more comfortable patient experience.
            </p>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                Patient Benefits
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {[
                  'More accurate impressions',
                  'Improved restorative communication',
                  'Smoother treatment workflow',
                  'Greater comfort for patients',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-3 py-2">
                    <span className="mt-1 size-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="text-sm font-light leading-6 text-[rgba(255,255,255,0.82)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {technologies.map((technology) => {
              const Icon = technology.icon

              return (
                <article
                  key={technology.title}
                  className="group h-full rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D4AF37]/20 hover:shadow-[0_10px_26px_rgba(212,175,55,0.05)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-[20px] border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition duration-300 ease-out group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/15">
                      <Icon className="size-5" strokeWidth={1.4} />
                    </div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                      {technology.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-4 text-[1.12rem] font-semibold leading-tight text-[#F8F8F6] transition duration-300 ease-out group-hover:text-[#F8F8F6]">
                    {technology.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-light leading-7 text-[rgba(255,255,255,0.82)]">
                    {technology.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}