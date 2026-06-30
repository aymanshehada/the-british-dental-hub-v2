"use client"

import { useState, type FormEvent } from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare, Check, Globe, Share2, ExternalLink } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { PremiumButton } from "@/components/ui/premium-button"
import { SectionHeader } from "@/components/ui/section-header"

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: [
      "The British Dental Hub",
      "Gateway Mall",
      "D1 Clinics – Clinic 226",
      "El Rehab City",
      "New Cairo",
      "Egypt",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    value: ["+20 155 688 7765"],
  },
  {
    icon: Mail,
    label: "Email",
    value: ["info@thebritishdentalhub.com"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: ["Saturday – Thursday", "2:00 PM – 10:00 PM"],
  },
]

const treatmentOptions = [
  "Dental Implants",
  "Immediate Implants",
  "Veneers",
  "Orthodontics",
  "Smile Makeover",
  "General Dentistry",
  "Pediatric Dentistry",
]

const fieldStyles =
  "peer w-full rounded-[24px] border border-primary/10 bg-[#07152C]/90 px-4 pt-5 pb-3 text-sm text-foreground outline-none transition duration-200 ease-out placeholder:text-transparent focus:border-primary/40 focus:ring-2 focus:ring-primary/20"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="VISIT OUR CLINIC"
              title="Begin Your Smile Transformation"
              description="Whether you're considering a complete smile transformation, dental implants, or simply looking for exceptional everyday dental care, our team is here to guide you through every step of your journey."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {contactDetails.map((detail) => (
                <PremiumCard
                  key={detail.label}
                  className="group h-full overflow-hidden rounded-[28px] border border-primary/10 bg-[#07152C]/80 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/20"
                >
                  <div className="flex items-start gap-6">
                    <detail.icon
                      className="size-8 mt-1 text-primary transition duration-300 ease-out group-hover:text-primary/90"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                        {detail.label}
                      </p>
                      <div className="mt-4 space-y-1 text-sm font-light leading-7 text-foreground">
                        {detail.value.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>

            <div className="mt-5 space-y-4">
              <PremiumCard className="overflow-hidden rounded-[28px] border border-primary/20 bg-[#07152C]/90 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <MessageSquare className="size-7 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                        Need Immediate Assistance?
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-light leading-7 text-muted-foreground">
                    Our patient care team is available to answer your questions and help you schedule your appointment quickly and conveniently.
                  </p>
                  <PremiumButton
                    variant="primary"
                    href="https://wa.me/201556887765"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full justify-center text-xs tracking-[0.2em]"
                  >
                    Chat on WhatsApp
                  </PremiumButton>
                </div>
              </PremiumCard>

              <PremiumCard className="overflow-hidden rounded-[28px] border border-primary/10 bg-[#07152C]/85 shadow-[0_30px_90px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/20">
                <div className="relative overflow-hidden rounded-[24px] border border-primary/15 bg-[#07152C]/90 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
                  <iframe
                    title="Google Maps - The British Dental Hub"
                    src="https://maps.google.com/maps?q=Gateway%20Mall%20D1%20Clinics%20Clinic%20226%20El%20Rehab%20City%20New%20Cairo&output=embed"
                    className="h-60 w-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute right-4 top-4">
                    <a
                      href="https://maps.app.goo.gl/iSAJ3WJvZtihNLPx7"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-[#07152C]/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition duration-200 ease-out hover:border-primary/30 hover:bg-[#07152C]/90"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              </PremiumCard>

              <div className="rounded-[28px] border border-primary/10 bg-[#07152C]/85 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  Connect With Us
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://wa.me/201556887765"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-primary/15 bg-[#07152C]/85 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <MessageSquare className="size-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/thebritishdentalhub?igsh=ODl5OXZ0cjdxMzg2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-primary/15 bg-[#07152C]/85 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <Globe className="size-4" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1BuVGxN8H3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-primary/15 bg-[#07152C]/85 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <Share2 className="size-4" />
                    Facebook
                  </a>
                  <a
                    href="tel:+201556887765"
                    className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-primary/15 bg-[#07152C]/85 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <Phone className="size-4" />
                    Call Clinic
                  </a>
                  <a
                    href="https://linktr.ee/TheBritishDentalHub?utm_source=linktree_profile_share&ltsid=d36e2d8a-a8c3-4810-9f09-d13f5764cb82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-primary/15 bg-[#07152C]/85 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <ExternalLink className="size-4" />
                    All Our Links
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:-mt-4">
            <PremiumCard className="rounded-[28px] border border-primary/10 bg-[#07152C]/85 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] transition duration-300 ease-out lg:min-h-[760px]">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[24px] bg-[#07152C]/90 px-6 py-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-[#07152C] shadow-[0_0_0_20px_rgba(255,209,110,0.12)] transition-transform duration-300 ease-out">
                    <Check className="size-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold leading-tight text-foreground">
                    Thank You
                  </h3>
                  <p className="mt-4 max-w-lg text-base font-light leading-8 text-muted-foreground">
                    Your appointment request has been received successfully. One of our patient coordinators will contact you shortly to confirm your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder=" "
                        className={fieldStyles}
                      />
                      <label
                        htmlFor="name"
                        className="pointer-events-none absolute left-4 top-4 origin-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder=" "
                        className={fieldStyles}
                      />
                      <label
                        htmlFor="phone"
                        className="pointer-events-none absolute left-4 top-4 origin-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
                      >
                        Phone
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder=" "
                      className={fieldStyles}
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-4 top-4 origin-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      id="treatment"
                      name="treatment"
                      required
                      defaultValue=""
                      className={`${fieldStyles} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select a treatment
                      </option>
                      {treatmentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                      ▼
                    </span>
                    <label
                      htmlFor="treatment"
                      className="pointer-events-none absolute left-4 top-4 origin-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
                    >
                      Treatment of Interest
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder=" "
                      className={`${fieldStyles} min-h-[140px] resize-none py-5 leading-6`}
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute left-4 top-4 origin-left text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
                    >
                      Message
                    </label>
                  </div>

                  <PremiumButton
                    type="submit"
                    variant="primary"
                    className="w-full justify-center text-xs tracking-[0.2em]"
                  >
                    Request Your Consultation
                  </PremiumButton>
                </form>
              )}
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  )
}
