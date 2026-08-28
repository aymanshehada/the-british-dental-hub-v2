import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/container'

export async function HeroSection() {
  const t = await getTranslations('dentalImplants.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/implant-treatment.png"
          alt="Premium dental implant crown at The British Dental Hub"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.75)_38%,rgba(255,255,255,0.25)_62%,rgba(255,255,255,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.44)_0%,transparent_36%)]" />

      <Container className="relative flex min-h-[90vh] items-center pt-24 pb-16 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="w-full max-w-[620px]">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-8 max-w-[560px] font-serif text-[clamp(2.55rem,4.9vw,4.8rem)] leading-[0.94] tracking-[-0.022em] text-[#0A2247]">
            {t('titleLine1')}
            <span className="mt-2 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.08rem] leading-8 text-[#495a73] sm:text-[1.16rem] sm:leading-9">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#implant-journey"
              className="inline-flex min-h-[52px] min-w-[280px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5f6f88] sm:gap-x-5">
            <span>{t('trust.clinicianLed')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.digitalPlanning')}</span>
            <span className="hidden h-px w-4 bg-[#d9e2ed] sm:block" />
            <span>{t('trust.aftercare')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
