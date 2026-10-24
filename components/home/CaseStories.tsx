"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { CasePhotoPair } from "@/components/patient-cases/CasePhotoPair"
import { patientCases } from "@/lib/patient-cases"

// Homepage preview only: the matched intraoral before/after pair, a short
// title and a link to the full case story at /patient-stories/[slug]. The
// complete account lives on that page (namespace: patientCases).
export default function CaseStories() {
  const t = useTranslations("home.patientStories")
  const tCase = useTranslations("patientCases")

  const patientCase = patientCases[0]
  const { before, after } = patientCase.closeup

  return (
    <section id="patient-stories" className="bg-brand-bg py-10 sm:py-14 lg:py-16">
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
          <h2 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {t("title")}
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.7] text-[#697b95]">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto mt-8 max-w-[880px] overflow-hidden rounded-[14px] border border-[#edf1f6] bg-white shadow-[0_2px_10px_rgba(15,39,78,0.05)]"
        >
          <CasePhotoPair
            ratio="aspect-[2/1]"
            before={{ ...before, alt: tCase("page.alt.beforeCloseup"), badge: t("before") }}
            after={{ ...after, alt: tCase("page.alt.afterCloseup"), badge: t("after") }}
          />

          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-red rtl:tracking-normal">
                {tCase("preview.treatment")}
              </p>
              <h3 className="mt-2 font-heading text-[1.4rem] leading-[1.15] tracking-[-0.02em] text-[#183668]">
                {tCase("preview.title")}
              </h3>
            </div>

            <Link
              href={`/patient-stories/${patientCase.slug}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[3px] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#183668] transition-colors after:absolute after:inset-0 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/30 focus-visible:ring-offset-2 rtl:tracking-normal"
            >
              {tCase("preview.readFull")}
              <ArrowRight size={14} aria-hidden="true" className="rtl:rotate-180" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
