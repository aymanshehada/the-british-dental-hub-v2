import { Container } from '@/components/ui/container'
import { PremiumButton } from '@/components/ui/premium-button'

const qualificationPoints = [
  {
    title: 'Missing teeth',
    detail: 'Looking for a fixed, natural-looking replacement.',
  },
  {
    title: 'Long-term replacement goals',
    detail: 'To removable dentures or traditional bridges.',
  },
  {
    title: 'Healthy gums',
    detail: 'Or happy to complete any recommended gum treatment before implant placement.',
  },
  {
    title: 'Adequate bone support',
    detail: 'Or suitable for bone grafting following clinical assessment.',
  },
  {
    title: 'Good general health',
    detail: 'Committed to excellent oral hygiene and regular follow-up care.',
  },
]

export function SuitabilitySection() {
  return (
    <section id="implant-suitability" className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[40%_60%] lg:gap-16 xl:gap-20">
          <div className="max-w-[520px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-red">
              Implant Suitability
            </p>

            <h2 className="mt-6 max-w-[520px] font-serif text-[clamp(2.25rem,3.7vw,3.55rem)] leading-[1.02] tracking-[-0.03em] text-[#0A2247]">
              Is Dental Implant Treatment Right For You?
            </h2>

            <p className="mt-7 max-w-[500px] text-[1.02rem] leading-8 text-[#495a73]">
              Most patients can be assessed for implant treatment with a careful review of their gums,
              bone support, and long-term restorative goals.
            </p>

            <p className="mt-5 max-w-[500px] text-[0.95rem] leading-7 text-[#667892]">
              This section is designed to answer the first questions patients usually have before deciding whether to book a consultation.
            </p>

            <div className="mt-10">
              <PremiumButton
                href="/#contact"
                variant="primary"
                className="min-w-[270px] justify-center bg-brand-navy text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] hover:bg-[#123164] focus-visible:ring-brand-navy/50"
              >
                Book Your Implant Assessment
              </PremiumButton>
            </div>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-[#0A2247]/78">
              You may benefit from dental implants if you...
            </p>

            <ol className="mt-6 space-y-4">
              {qualificationPoints.map((point) => (
                <li
                  key={point.title}
                  className="rounded-[16px] border border-[#e8edf4] bg-white px-5 py-3.5 shadow-[0_1px_4px_rgba(15,39,78,0.03)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[0.9rem] font-semibold text-[#1b3256]">✓</span>
                    <div>
                      <span className="block font-semibold text-[#1b3256]">{point.title}</span>
                      <span className="mt-1 block text-[0.95rem] leading-7 text-[#5e6f88]">{point.detail}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-[16px] bg-[#0A2247] px-5 py-5.5 text-white shadow-[0_4px_14px_rgba(10,34,71,0.12)]">
              <h3 className="text-[1.02rem] font-semibold leading-7 tracking-[-0.01em] text-white">
                Still unsure?
              </h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-white/82">
                Many patients who believe implants are not possible are successfully treated after a detailed clinical assessment.
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-white/82">
                Every recommendation begins with a comprehensive examination and 3D CBCT planning.
              </p>
              <a
                href="/#contact"
                className="group mt-4 inline-flex items-center gap-2 rounded-[12px] border border-white/28 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all duration-300 ease-out hover:border-white/45 hover:text-white"
              >
                Book an Implant Consultation
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
