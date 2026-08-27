import { getTranslations } from 'next-intl/server'
import { Activity, Microscope, ScanSearch, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'

const technologyMeta = [
  { key: 'planning', icon: ScanSearch },
  { key: 'guidedSurgery', icon: Activity },
  { key: 'magnification', icon: Microscope },
  { key: 'sterilisation', icon: ShieldCheck },
] as const

export async function DigitalDentistrySection() {
  const t = await getTranslations('dentalImplants.digitalDentistry')

  const technologies = technologyMeta.map((tech) => ({
    icon: tech.icon,
    eyebrow: t(`technologies.${tech.key}.eyebrow`),
    title: t(`technologies.${tech.key}.title`),
    description: t(`technologies.${tech.key}.description`),
  }))

  return (
    <section aria-labelledby="digital-dentistry-heading" className="relative overflow-hidden border-t border-brand-border bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2 id="digital-dentistry-heading" className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[30px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] sm:p-7 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-[24px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                <ScanSearch className="size-7" strokeWidth={1.4} />
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
                {t('scanner.label')}
              </span>
            </div>

            <h3 className="mt-6 text-[1.5rem] font-semibold leading-tight text-[#0A2247] sm:text-[1.7rem]">
              {t('scanner.label')}
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] font-light leading-7 text-[#495a73] sm:text-[1rem]">
              {t('scanner.description')}
            </p>

            <div className="mt-6 rounded-[24px] border border-[#e5ebf3] bg-brand-bg p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                {t('scanner.benefitsLabel')}
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {[
                  t('scanner.benefits.accurate'),
                  t('scanner.benefits.communication'),
                  t('scanner.benefits.workflow'),
                  t('scanner.benefits.comfort'),
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 rounded-2xl border border-[#e5ebf3] bg-white px-3 py-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-red" />
                    <span className="text-sm font-light leading-6 text-[#495a73]">{benefit}</span>
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
                  className="group h-full rounded-[28px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-[20px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                      <Icon className="size-5" strokeWidth={1.4} />
                    </div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                      {technology.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-4 text-[1.12rem] font-semibold leading-tight text-[#0A2247] transition duration-300 ease-out group-hover:text-[#0A2247]">
                    {technology.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-light leading-7 text-[#495a73]">
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