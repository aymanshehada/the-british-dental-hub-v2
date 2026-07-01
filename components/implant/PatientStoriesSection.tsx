import { ArrowRight, Star } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Heading, Text } from '@/components/ui/typography'
import { PremiumCard } from '@/components/ui/premium-card'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const testimonials = [
  {
    quote:
      'The experience felt calm, thoughtful and reassuring from the very first consultation.',
    author: 'Verified Patient',
    treatment: 'Dental Implant Treatment',
  },
  {
    quote:
      'Every step was explained clearly, which made the process feel manageable and confident.',
    author: 'Verified Patient',
    treatment: 'Implant Consultation',
  },
  {
    quote:
      'The clinical care felt precise and personal, and the overall experience was beautifully organised.',
    author: 'Verified Patient',
    treatment: 'Smile Restoration',
  },
]

export function PatientStoriesSection() {
  return (
    <SectionWrapper aria-labelledby="patient-stories-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Patient Experience</Eyebrow>
          <Heading id="patient-stories-heading" className="mt-6">
            What Our Patients Remember
          </Heading>
          <Text className="mt-6 text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
            Beyond clinical excellence, we believe every patient should remember how they were treated, supported and cared for throughout their journey.
          </Text>
        </div>

        <div className="mt-16 space-y-6">
          <PremiumCard className="group rounded-[34px] border border-white/15 bg-[rgba(5,13,31,0.96)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-10 lg:p-12">
            <div className="flex items-center gap-1 text-primary" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-6 max-w-4xl text-2xl font-medium leading-[1.35] text-white sm:text-3xl lg:text-[2.15rem]">
              “The care felt calm, reassuring and deeply considered at every stage. It was a treatment experience defined by clarity, comfort and trust.”
            </blockquote>
            <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.95rem] font-semibold text-white">Verified Patient</p>
                <p className="mt-1 text-sm font-light text-slate-300/85">Dental Implant Treatment</p>
              </div>
              <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                Premium patient experience
                <ArrowRight className="size-4" />
              </div>
            </div>
          </PremiumCard>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <PremiumCard
                key={testimonial.quote}
                className="group h-full rounded-[30px] border border-white/15 bg-[rgba(7,21,44,0.95)] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
              >
                <div className="flex items-center gap-1 text-primary" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-[0.98rem] font-light leading-7 text-slate-200/90">
                  {testimonial.quote}
                </p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm font-light text-slate-300/85">{testimonial.treatment}</p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[34px] border border-primary/20 bg-[linear-gradient(135deg,rgba(255,209,110,0.10),transparent_60%),rgba(7,21,44,0.95)] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Comfort-Focused Care',
              'Transparent Communication',
              'Precision Dentistry',
              'Long-Term Relationships',
            ].map((value) => (
              <div key={value} className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-center">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
