import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/container'

export async function HeroSection() {
  const t = await getTranslations('dentalImplants.hero')

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Container className="relative grid min-h-[auto] items-center gap-7 pt-8 pb-10 sm:gap-10 sm:pt-16 sm:pb-20 lg:min-h-[85vh] lg:grid-cols-[0.42fr_0.58fr] lg:pt-32 lg:pb-24">
        <div className="max-w-[600px]">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            {t('eyebrow')}
          </p>

          <h1 className="mt-5 sm:mt-8 max-w-[560px] font-serif text-[1.62rem] leading-[1.2] tracking-[-0.01em] text-[#0A2247] sm:text-[clamp(1.9rem,4.9vw,4.8rem)] sm:leading-[0.94] sm:tracking-[-0.022em]">
            {t('titleLine1')}
            <span className="mt-2 block">{t('titleLine2')}</span>
          </h1>

          <p className="mt-4 sm:mt-7 max-w-[560px] text-[0.97rem] leading-[1.7] text-[#495a73] sm:text-[1.16rem] sm:leading-9">
            {t('subtitle')}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex min-h-[48px] sm:min-h-[52px] min-w-[250px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href="#implant-journey"
              className="inline-flex min-h-[48px] sm:min-h-[52px] min-w-[280px] items-center justify-center gap-2 rounded-[12px] border border-[#8a9ab3] bg-white px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg"
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

        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="w-full overflow-hidden rounded-[28px] border border-[#e5ebf3] shadow-[0_20px_50px_rgba(15,39,78,0.08)]">
            <Image
              src="/images/implant-treatment.webp"
              alt="Premium dental implant crown at The British Dental Hub"
              width={1400}
              height={1100}
              priority
              sizes="(max-width: 1024px) 92vw, 58vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
