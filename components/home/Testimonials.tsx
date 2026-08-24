"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "From the first consultation, everything felt calm, organised, and genuinely premium. The treatment plan was explained beautifully and the result exceeded my expectations.",
    patient: "Patient Story",
    treatment: "Smile Design and Restorative Care",
  },
  {
    quote:
      "The level of professionalism is exceptional. The team made implant treatment feel structured and reassuring, and the aftercare was every bit as thoughtful as the procedure itself.",
    patient: "Patient Story",
    treatment: "Dental Implants",
  },
  {
    quote:
      "A clinic that feels luxurious without losing its medical credibility. Every detail, from communication to comfort, was handled with real precision.",
    patient: "Patient Story",
    treatment: "Cosmetic and Preventive Care",
  },
]

export default function Testimonials() {
  return (
    <section id="patient-stories" className="bg-brand-bg py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            Patient Stories
          </p>
          <h2 className="mt-5 font-heading text-[2.8rem] leading-[1.02] tracking-[-0.03em] text-[#183668] sm:text-[3.2rem]">
            Trust built through thoughtful care and beautifully delivered results.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[10px] border border-[#edf1f6] bg-white p-6 shadow-[0_2px_8px_rgba(15,39,78,0.06)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#ffb400]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" />
                  ))}
                </div>
                <div className="rounded-[8px] bg-brand-bg p-3 text-[#183668]/35">
                  <Quote size={22} />
                </div>
              </div>

              <p className="mt-6 font-heading text-[1.7rem] leading-[1.45] tracking-[-0.02em] text-[#183668]">
                “{testimonial.quote}”
              </p>

              <div className="mt-7 border-t border-[#edf1f6] pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#183668]">
                  {testimonial.patient}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6a7b95]">{testimonial.treatment}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}