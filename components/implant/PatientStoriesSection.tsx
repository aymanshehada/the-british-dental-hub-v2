import { Star } from 'lucide-react'

const featuredTestimonial = {
  quote:
    'The care felt calm, thoughtful and reassuring from the very first consultation. Every step was explained clearly and the experience felt exceptionally well organised.',
  author: 'Verified Patient',
  treatment: 'Dental Implant Treatment',
}

const testimonials = [
  {
    quote:
      'The consultation was thorough, calm and easy to follow. I left feeling informed rather than overwhelmed.',
    author: 'Verified Patient',
    treatment: 'Implant Consultation',
  },
  {
    quote:
      'The clinical care felt precise and personal, and the treatment experience was handled with real attention to detail.',
    author: 'Verified Patient',
    treatment: 'Smile Restoration',
  },
  {
    quote:
      'Everything was explained with clarity and patience, which made the whole journey feel reassuring and premium.',
    author: 'Verified Patient',
    treatment: 'Full-Arch Treatment',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-brand-red" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

export function PatientStoriesSection() {
  return (
    <section aria-labelledby="patient-stories-heading" className="border-t border-brand-border bg-brand-bg py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
            Patient Experience
          </p>
          <h2
            id="patient-stories-heading"
            className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.75rem]"
          >
            What Our Patients Remember
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#495a73] sm:text-[1.08rem]">
            Beyond clinical excellence, we believe every patient should remember how they were treated, supported and cared for throughout their journey.
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
