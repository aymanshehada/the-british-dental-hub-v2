import { getTranslations } from 'next-intl/server'
import { Star } from 'lucide-react'

const itemKeys = ['item1', 'item2', 'item3'] as const

function Stars() {
  return (
    <div className="flex items-center gap-1 text-brand-red" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

export async function PatientStoriesSection() {
  const t = await getTranslations('dentalImplants.patientStories')
  const verifiedPatient = t('verifiedPatient')

  const featuredTestimonial = {
    quote: t('featured.quote'),
    author: verifiedPatient,
    treatment: t('featured.treatment'),
  }

  const testimonials = itemKeys.map((key) => ({
    quote: t(`items.${key}.quote`),
    author: verifiedPatient,
    treatment: t(`items.${key}.treatment`),
  }))

  return (
    <section aria-labelledby="patient-stories-heading" className="border-t border-brand-border bg-brand-bg py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            {t('eyebrow')}
          </p>
          <h2
            id="patient-stories-heading"
            className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
          >
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#495a73] sm:text-[1.08rem]">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <article className="rounded-[32px] border border-[#e5ebf3] bg-white p-6 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)] sm:p-7 lg:p-8">
            <Stars />
            <blockquote className="mt-5 max-w-3xl text-[1.6rem] font-medium leading-[1.38] tracking-[-0.02em] text-[#0A2247] sm:text-[1.95rem] lg:text-[2.1rem]">
              “{featuredTestimonial.quote}”
            </blockquote>
            <div className="mt-6 border-t border-[#e5ebf3] pt-4">
              <p className="text-[0.95rem] font-semibold text-[#0A2247]">{featuredTestimonial.author}</p>
              <p className="mt-1 text-sm font-light text-[#495a73]">{featuredTestimonial.treatment}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.quote}
                className="rounded-[28px] border border-[#e5ebf3] bg-white p-5 shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.05)]"
              >
                <Stars />
                <p className="mt-4 text-[0.98rem] font-light leading-7 text-[#495a73]">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-[#e5ebf3] pt-3">
                  <p className="text-sm font-semibold text-[#0A2247]">{testimonial.author}</p>
                  <p className="mt-1 text-sm font-light text-[#495a73]">{testimonial.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
