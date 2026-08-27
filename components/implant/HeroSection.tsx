import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { PremiumButton } from '@/components/ui/premium-button'

export async function HeroSection() {
  const t = await getTranslations('dentalImplants.hero')

  return (
    <section className="relative isolate overflow-hidden bg-[#050d1f]">
      <div className="absolute inset-0">
        <Image
          src="/images/implant-treatment.png"
          alt="Clinician reviewing a digital implant treatment plan with a patient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(5,13,31,0.82)_0%,rgba(5,13,31,0.62)_38%,rgba(5,13,31,0.3)_62%,rgba(5,13,31,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,13,31,0.44)_0%,transparent_36%)]" />

      <Container className="relative flex min-h-[90vh] items-center pt-24 pb-16 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="w-full max-w-[620px]">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/68">
            The British Dental Hub
            <span className="mt-1 block text-[0.58rem] tracking-[0.24em] text-white/56">
              {t('tagline')}
            </span>
          </p>

          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.92] tracking-[-0.022em] text-white">
            {t('titleLine1')}
            <span className="mt-3 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-7 max-w-[600px] text-[1.08rem] leading-8 text-white/84 sm:text-[1.16rem] sm:leading-9">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <PremiumButton
              href="/#contact"
              variant="primary"
              className="min-w-[250px] justify-center"
              iconRight={<ArrowRight className="size-4" />}
            >
              {t('ctaPrimary')}
            </PremiumButton>
            <PremiumButton
              href="#implant-journey"
              variant="outline"
              className="min-w-[280px] justify-center border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              {t('ctaSecondary')}
            </PremiumButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/72 sm:gap-x-5">
            <span>{t('trust.clinicianLed')}</span>
            <span className="hidden h-px w-4 bg-white/30 sm:block" />
            <span>{t('trust.digitalPlanning')}</span>
            <span className="hidden h-px w-4 bg-white/30 sm:block" />
            <span>{t('trust.aftercare')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
