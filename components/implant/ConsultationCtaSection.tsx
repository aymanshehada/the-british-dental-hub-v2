import { ArrowRight, MessageSquare } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Heading, Text } from '@/components/ui/typography'
import { PremiumButton } from '@/components/ui/premium-button'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const trustItems = [
  '30–45 Minute Consultation',
  'Personalised Treatment Plan',
  'Transparent Pricing',
  'No Obligation',
]

export function ConsultationCtaSection() {
  return (
    <SectionWrapper aria-labelledby="consultation-cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.08),transparent_70%)]" />

      <Container>
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,209,110,0.10),transparent_65%),rgba(7,21,44,0.98)] shadow-[0_30px_100px_rgba(0,0,0,0.26)] backdrop-blur-sm">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div className="flex flex-col justify-between">
              <div>
                <Eyebrow align="left">Begin Your Journey</Eyebrow>
                <Heading id="consultation-cta-heading" className="mt-6 sm:text-4xl lg:text-[3rem]">
                  Ready to Restore Your Smile?
                </Heading>
                <Text className="mt-6 max-w-2xl text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
                  Every successful implant treatment begins with a comprehensive consultation. We’ll assess your smile, explain every available option and create a personalised treatment plan designed around your clinical needs.
                </Text>
                <Text className="mt-4 text-[0.95rem] font-light leading-7 text-slate-200/90">
                  No pressure. Just honest clinical advice.
                </Text>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PremiumButton
                  href="/#contact"
                  variant="primary"
                  className="min-w-[220px] justify-center"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Book Consultation
                </PremiumButton>
                <PremiumButton
                  href="https://wa.me/201556887765"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[240px] justify-center"
                  iconLeft={<MessageSquare className="size-4" />}
                >
                  Chat on WhatsApp
                </PremiumButton>
              </div>

              <p className="mt-6 text-sm font-light leading-7 text-slate-300/85">
                Our team will contact you as soon as possible to arrange your consultation.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[rgba(7,21,44,0.92)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-8">
              <div className="rounded-[28px] border border-primary/20 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.16),transparent_70%)] p-6 sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-primary/80">
                  What your consultation includes
                </p>
                <div className="mt-6 space-y-4">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-primary" />
                      <span className="text-sm font-light leading-6 text-slate-200/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
