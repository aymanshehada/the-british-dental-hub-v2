"use client"

import { useId, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Award, Minus, Plus, Stethoscope } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Doctor {
  name: string
  role: string
  image: string
  intro: string
  expandLabel: string
  // Homepage card shows only the strongest 2–3 credentials. For Dr. Ayman the
  // Fellowship and MFDS status are the most concrete/verifiable; the King's
  // College course is the strongest name-recognition point. The "currently
  // pursuing MRD/MProstho" line is intentionally omitted here (still accurate,
  // just the least concrete) — full detail belongs on the future profile page.
  details: string[]
  icon: LucideIcon
}

function CredentialList({ details }: { details: string[] }) {
  return (
    <div className="space-y-3">
      {details.slice(0, 3).map((detail) => (
        <div
          key={detail}
          className="flex items-start gap-3 text-sm leading-6 text-[#556273]"
        >
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
          <span>{detail}</span>
        </div>
      ))}
    </div>
  )
}

// Collapsed by default on mobile: the patient sees both doctors, their photo,
// name, specialty and a short intro without any horizontal scrolling, and can
// expand either card independently to read a few verified credentials. On
// desktop (sm+) the card renders exactly as before — every credential shown,
// no disclosure control.
function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const t = useTranslations("home.doctors")
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const Icon = doctor.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="w-full rounded-[10px] border border-[#edf1f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,39,78,0.06)] transition hover:shadow-[0_10px_24px_rgba(15,39,78,0.1)] sm:w-auto sm:p-6"
    >
      <div className="flex items-center justify-between">
        <div className="h-[96px] w-[96px] overflow-hidden rounded-full bg-brand-bg sm:h-[120px] sm:w-[120px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={120}
            height={120}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden rounded-[8px] bg-brand-bg p-3 text-brand-red sm:block">
          <Icon size={20} aria-hidden="true" />
        </div>
      </div>

      <h3 className="mt-5 font-heading text-[1.7rem] tracking-[-0.03em] text-[#183668] sm:mt-6 sm:text-[2rem]">
        {doctor.name}
      </h3>
      <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-red">
        {doctor.role}
      </p>

      {/* Short intro — mobile only; desktop shows the full credential list instead. */}
      <p className="mt-3 text-[14px] leading-6 text-[#5f6f88] sm:hidden">{doctor.intro}</p>

      {/* Mobile: an accessible disclosure that reveals a few verified credentials. */}
      <div className="sm:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="mt-4 inline-flex items-center gap-1.5 rounded-[3px] text-[13px] font-semibold text-[#183668] transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
        >
          {doctor.expandLabel}
          {open ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
        </button>

        {/* CSS grid-rows disclosure — animates height with no JS measurement,
            and honours prefers-reduced-motion. */}
        <div
          id={panelId}
          className="grid"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: reduceMotion ? "none" : "grid-template-rows 280ms ease-out",
          }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-5">
              <CredentialList details={doctor.details} />

              {/* Full-profile CTA. Dedicated doctor profile routes are a later
                  phase; until they exist this is a non-interactive affordance
                  (matching the Case Stories pattern), shaped so a real
                  <Link href={`/doctors/${slug}`}> can wrap it. */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8a97ac]">
                  {t("viewFullProfile")}
                  <ArrowRight size={13} aria-hidden="true" className="rtl:rotate-180" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: full credential list, always visible, no disclosure. */}
      <div className="mt-7 hidden sm:block">
        <CredentialList details={doctor.details} />
      </div>
    </motion.article>
  )
}

export default function Doctors() {
  const t = useTranslations("home.doctors")

  const doctors: Doctor[] = [
    {
      name: t("dr1.name"),
      role: t("role"),
      image: "/images/dr-ayman-chhada.webp",
      intro: t("dr1.intro"),
      expandLabel: t("dr1.expandLabel"),
      details: [
        t("dr1.qualification1"),
        t("dr1.qualification4"),
        t("dr1.qualification3"),
      ],
      icon: Award,
    },
    {
      name: t("dr2.name"),
      role: t("role"),
      image: "/images/dr-issam-kayali.webp",
      intro: t("dr2.intro"),
      expandLabel: t("dr2.expandLabel"),
      details: [t("dr2.qualification1")],
      icon: Stethoscope,
    },
  ]

  return (
    <section id="doctors" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[640px]">
            <div className="mb-5 flex items-center gap-3">
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                {t("eyebrow")}
              </p>
              <span className="h-px w-16 bg-brand-red" />
            </div>
            <h2 className="font-heading text-[2.8rem] leading-[1.02] tracking-[-0.03em] text-[#183668] sm:text-[3.2rem]">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-7 text-[#697b95]">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto mt-8 flex max-w-[1140px] flex-col gap-4 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-5">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex h-[41px] items-center gap-3 rounded-[3px] border border-[#8a9ab3] px-5 text-[14px] font-medium text-[#183668] transition hover:bg-brand-bg"
          >
            {t("requestConsultation")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
