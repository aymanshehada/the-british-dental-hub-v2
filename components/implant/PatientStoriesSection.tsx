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
    <div className="flex items-center gap-1 text-[#D4AF37]" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

export function PatientStoriesSection() {
  return (
    <section aria-labelledby="patient-stories-heading" className="border-t border-white/10 bg-[#07152C] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
            Patient Experience
          </p>
          <h2
            id="patient-stories-heading"
            className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#F8F8F6] sm:text-5xl lg:text-[3.75rem]"
          >
            What Our Patients Remember
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.02rem] leading-8 text-[rgba(255,255,255,0.82)] sm:text-[1.08rem]">
            Beyond clinical excellence, we believe every patient should remember how they were treated, supported and cared for throughout their journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <article className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D4AF37]/20 hover:shadow-[0_10px_26px_rgba(212,175,55,0.05)] sm:p-7 lg:p-8">
            <Stars />
            <blockquote className="mt-5 max-w-3xl text-[1.6rem] font-medium leading-[1.38] tracking-[-0.02em] text-[#F8F8F6] sm:text-[1.95rem] lg:text-[2.1rem]">
              “{featuredTestimonial.quote}”
            </blockquote>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[0.95rem] font-semibold text-[#F8F8F6]">{featuredTestimonial.author}</p>
              <p className="mt-1 text-sm font-light text-[rgba(255,255,255,0.82)]">{featuredTestimonial.treatment}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.quote}
                className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D4AF37]/20 hover:shadow-[0_10px_26px_rgba(212,175,55,0.05)]"
              >
                <Stars />
                <p className="mt-4 text-[0.98rem] font-light leading-7 text-[rgba(255,255,255,0.82)]">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-sm font-semibold text-[#F8F8F6]">{testimonial.author}</p>
                  <p className="mt-1 text-sm font-light text-[rgba(255,255,255,0.82)]">{testimonial.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
