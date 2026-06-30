"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { PremiumButton } from "@/components/ui/premium-button"

const faqs = [
  {
    question: "Do you provide dental implants?",
    answer:
      "Yes. We provide both conventional and advanced dental implant treatments using modern digital planning to achieve long-lasting, natural-looking results.",
  },
  {
    question: "Do you offer immediate dental implants?",
    answer:
      "Yes. Selected patients may be suitable for immediate implant placement following a comprehensive clinical assessment. Our dentists will determine the safest and most predictable treatment approach for your individual case.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Treatment time depends on your individual needs. During your consultation, we will provide a personalised treatment plan with a clear timeline and every step explained.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "Your comfort is one of our highest priorities. We use modern techniques, effective local anaesthesia, and a gentle clinical approach to make every treatment as comfortable and stress-free as possible.",
  },
  {
    question: "Do you accept international patients?",
    answer:
      "Yes. We welcome international patients and can assist with treatment planning, scheduling, and coordinating your appointments before you travel.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Booking is simple. You can complete our online consultation form, call our clinic directly, or contact us through WhatsApp, and our team will arrange a convenient appointment for you.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Frequently Asked
            </p>
            <h2 className="text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Expert answers for a confident smile journey
            </h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-muted-foreground">
              Everything you need to know about our care, scheduling and patient experience — presented clearly so you can move forward with complete confidence.
            </p>
            <div className="mt-10">
              <PremiumButton variant="primary" className="w-full max-w-[320px] text-xs tracking-[0.2em]">
                Book a Consultation
              </PremiumButton>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[28px] border px-6 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.14)] transition-all duration-250 ease-out ${
                    isOpen
                      ? "border-primary/20 bg-[#07152C]/80"
                      : "border-primary/10 bg-[#07152C]/70"
                  } hover:-translate-y-0.5 hover:border-primary/20 hover:bg-[#07152C]/80`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-lg font-semibold leading-tight transition duration-250 ease-out ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <Plus
                      className={`size-5 transition-transform duration-250 ease-out ${
                        isOpen ? "rotate-45 text-primary" : "rotate-0 text-primary"
                      }`}
                    />
                  </button>

                  <div
                    className={`mt-4 overflow-hidden transition-all duration-250 ease-out ${
                      isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base font-light leading-8 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
