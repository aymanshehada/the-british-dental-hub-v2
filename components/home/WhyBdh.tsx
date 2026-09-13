"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { BadgeCheck, HeartHandshake, ScanLine, ShieldCheck } from "lucide-react"

// Consolidates the previous TrustBar + WhyChooseUs(values/features) homepage
// sections into one concise, deduplicated "Why BDH" section. The 5-step
// Patient Journey previously embedded inside WhyChooseUs now lives in its
// own PatientJourneyStrip component.
export default function WhyBdh() {
  const t = useTranslations("home.whyBdh")

  const items = [
    {
      key: "standards",
      icon: ShieldCheck,
      title: t("items.standards.title"),
      description: t("items.standards.description"),
    },
    {
      key: "digitalDentistry",
      icon: ScanLine,
      title: t("items.digitalDentistry.title"),
      description: t("items.digitalDentistry.description"),
    },
    {
      key: "transparentPlanning",
      icon: BadgeCheck,
      title: t("items.transparentPlanning.title"),
      description: t("items.transparentPlanning.description"),
    },
    {
      key: "patientCentred",
      icon: HeartHandshake,
      title: t("items.patientCentred.title"),
      description: t("items.patientCentred.description"),
    },
  ]

  return (
    <section id="about" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-[640px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              {t("eyebrow")}
            </p>
            <span className="h-px w-10 bg-brand-red" />
          </div>
          <h2 className="font-heading text-[2.1rem] leading-[1.08] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {t("title")}
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.7] text-[#697b95]">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-4 rounded-[12px] border border-[#edf1f6] bg-white p-4 sm:flex-col sm:gap-3 sm:p-5"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-bg text-brand-red">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold leading-[1.3] text-[#183668]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#5A6577]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
