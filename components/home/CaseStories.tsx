"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Compact "Patient Stories" teaser, replacing the previous large BeforeAfter
// homepage section. Reuses the same two real, existing cases (images + copy)
// from home.beforeAfter — no new case content invented.
//
// "Read the Case Story" is intentionally NOT a link: full case-story pages
// (/patient-stories/[slug]) are a later approved phase. Rendering it as a
// real link now would point at a route that doesn't exist yet; rendering it
// as "#" would be a fake destination. It's shown as plain, non-interactive
// text so the affordance is honest about what exists today, and the card
// markup is already shaped so a real <Link> can wrap it cleanly once the
// route ships.
export default function CaseStories() {
  const t = useTranslations("home.patientStories")
  const tCase = useTranslations("home.beforeAfter")

  const cases = [
    {
      key: "case1",
      before: "/images/case-1-before.png",
      after: "/images/case-1-after.png",
      title: tCase("case1.title"),
      treatment: tCase("case1.treatment"),
      summary: tCase("case1.summary"),
    },
    {
      key: "case2",
      before: "/images/case-2-before.png",
      after: "/images/case-2-after.png",
      title: tCase("case2.title"),
      treatment: tCase("case2.treatment"),
      summary: tCase("case2.summary"),
    },
  ]

  return (
    <section id="patient-stories" className="bg-brand-bg py-12 sm:py-14 lg:py-16">
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {cases.map((item, index) => (
            <motion.article
              key={item.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[14px] border border-[#edf1f6] bg-white shadow-[0_2px_10px_rgba(15,39,78,0.05)]"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <span className="absolute start-3 top-3 z-10 rounded-[4px] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#183668]">
                    {t("before")}
                  </span>
                  <Image
                    src={item.before}
                    alt={`${item.title} — before`}
                    width={512}
                    height={512}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="relative">
                  <span className="absolute start-3 top-3 z-10 rounded-[4px] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#183668]">
                    {t("after")}
                  </span>
                  <Image
                    src={item.after}
                    alt={`${item.title} — after`}
                    width={512}
                    height={512}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-red">
                  {item.treatment}
                </p>
                <h3 className="mt-2 font-heading text-[1.4rem] leading-[1.15] tracking-[-0.02em] text-[#183668]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-[#5A6577]">
                  {item.summary}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a97ac]">
                  {t("readCaseStory")}
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
