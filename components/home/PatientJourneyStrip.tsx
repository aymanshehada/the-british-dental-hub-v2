"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

// Compact visual treatment of the 5-step patient journey. Deliberately
// reuses the existing home.whyChooseUs.journeySteps translations rather than
// duplicating that verified copy into a new namespace — WhyChooseUs.tsx is
// retired from the homepage but its data is untouched and still valid.
export default function PatientJourneyStrip() {
  const t = useTranslations("home.whyChooseUs")

  const steps = [
    "consultation",
    "digitalScan",
    "treatmentPlan",
    "precisionTreatment",
    "reviewCare",
  ] as const

  return (
    <section id="patient-journey" className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-10 bg-brand-red" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            {t("journeyEyebrow")}
          </p>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-5 sm:gap-4">
          <div className="absolute left-[10%] right-[10%] top-[19px] hidden h-px bg-[#e3e8ef] sm:block" />
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative flex items-center gap-3 rounded-[10px] border border-[#edf1f6] bg-white p-2.5 sm:flex-col sm:items-start sm:gap-2.5 sm:border-0 sm:bg-transparent sm:p-0"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0A2247] font-heading text-[0.95rem] text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-[13.5px] font-semibold leading-[1.3] text-[#183668]">
                  {t(`journeySteps.${step}.title`)}
                </h3>
                <p className="mt-1 hidden text-[12px] leading-[1.5] text-[#6a7d99] sm:block">
                  {t(`journeySteps.${step}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
