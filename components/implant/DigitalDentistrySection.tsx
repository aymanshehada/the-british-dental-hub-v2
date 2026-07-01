import { Activity, Microscope, ScanSearch, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Heading, Text } from '@/components/ui/typography'
import { PremiumCard } from '@/components/ui/premium-card'
import { SectionWrapper } from '@/components/ui/section-wrapper'

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
    <SectionWrapper aria-labelledby="digital-dentistry-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Advanced Digital Dentistry</Eyebrow>
          <Heading id="digital-dentistry-heading" className="mt-6">
            Precision Through Technology
          </Heading>
          <Text className="mt-6 text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
            Every stage of implant treatment is enhanced through advanced digital planning, modern imaging and precision-guided clinical protocols.
          </Text>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <PremiumCard className="group h-full rounded-[34px] border border-white/15 bg-[rgba(5,13,31,0.96)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-15 w-15 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                <ScanSearch className="size-8" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                Digital Intraoral Scanner
              </span>
            </div>

            <h3 className="mt-8 text-[1.5rem] font-semibold leading-tight text-white transition duration-300 ease-out group-hover:text-primary/95 sm:text-[1.7rem]">
              Digital Intraoral Scanner
            </h3>
            <p className="mt-4 max-w-xl text-[0.95rem] font-light leading-7 text-slate-200/90 sm:text-[1rem]">
              Create precise digital impressions for implant planning, restorative design and a more comfortable patient experience.
            </p>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                Patient Benefits
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'More accurate impressions',
                  'Improved restorative communication',
                  'Smoother treatment workflow',
                  'Greater comfort for patients',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-[#07152C]/70 px-3 py-2.5">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-light leading-6 text-slate-200/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>

          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((technology) => {
              const Icon = technology.icon

              return (
                <PremiumCard
                  key={technology.title}
                  className="group h-full rounded-[30px] border border-white/15 bg-[rgba(7,21,44,0.95)] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[20px] border border-primary/20 bg-primary/10 text-primary transition duration-300 ease-out group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15">
                      <Icon className="size-6" strokeWidth={1.4} />
                    </div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                      {technology.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-6 text-[1.15rem] font-semibold leading-tight text-white transition duration-300 ease-out group-hover:text-primary/95">
                    {technology.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] font-light leading-7 text-slate-200/90">
                    {technology.description}
                  </p>
                </PremiumCard>
              )
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[34px] border border-primary/20 bg-[linear-gradient(135deg,rgba(255,209,110,0.10),transparent_60%),rgba(7,21,44,0.95)] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-primary/80">
            Clinical Philosophy
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-[1.8rem]">
            Technology supports expertise—never replaces it.
          </h3>
          <p className="mt-4 max-w-3xl text-[0.95rem] font-light leading-7 text-slate-200/90 sm:text-[1rem]">
            Advanced digital dentistry allows our clinicians to deliver safer, more predictable and more comfortable implant treatment while maintaining meticulous attention to every clinical detail. When clinically indicated, CBCT imaging is obtained through trusted diagnostic imaging partners, and treatment is supported by trusted dental laboratory collaboration for restorative precision.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  )
}
