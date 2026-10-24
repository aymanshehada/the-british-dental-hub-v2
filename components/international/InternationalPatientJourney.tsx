"use client"

import { useTranslations } from "next-intl"
import { motion, useReducedMotion } from "framer-motion"

const STEP_KEYS = [
  "enquiry",
  "shareCase",
  "videoConsultation",
  "treatmentPlanning",
  "coordination",
  "treatment",
  "followUp",
] as const

// Below xl: a single-column numbered rail — a clearer "journey" read than a
// multi-column card grid. From xl up: the original horizontal timeline.
// Both respect prefers-reduced-motion (no entrance animation, no motion).
export function InternationalPatientJourney() {
  const t = useTranslations("internationalPatients.journey")
  const reduceMotion = useReducedMotion()

  return (
    <section id="journey" className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="mb-8 max-w-[640px] sm:mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              {t("eyebrow")}
            </p>
          </div>
          <h2 className="font-heading text-[1.65rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {t("title")}
          </h2>
        </div>

        {/* Below xl: numbered vertical rail. */}
        <ol className="relative flex flex-col gap-5 xl:hidden">
          <div
            className="absolute start-[17px] top-[18px] bottom-[18px] w-px bg-[#e3e8ef]"
            aria-hidden="true"
          />
          {STEP_KEYS.map((key, index) => (
            <motion.li
              key={key}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative flex items-start gap-4"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0A2247] font-heading text-[0.9rem] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="text-[14px] font-semibold leading-[1.3] text-[#183668]">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.55] text-[#6a7d99]">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* xl and up: horizontal timeline, unchanged. */}
        <ol className="relative hidden xl:grid xl:grid-cols-7 xl:gap-3">
          <div className="absolute left-[7%] right-[7%] top-[21px] hidden h-px bg-[#e3e8ef] xl:block" />
          {STEP_KEYS.map((key, index) => (
            <motion.li
              key={key}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative flex flex-col items-start gap-2.5"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0A2247] font-heading text-[0.9rem] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[13.5px] font-semibold leading-[1.3] text-[#183668]">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#6a7d99]">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
