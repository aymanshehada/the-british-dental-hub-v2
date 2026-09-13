"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

// New editorial "Our Story" section. Content is sourced only from the
// founder/clinic-approved material — see the PR/task notes for provenance.
// This is deliberately short-form storytelling, not a credentials list.
export default function OurStory() {
  const t = useTranslations("home.ourStory")

  return (
    <section id="story" className="bg-brand-bg py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="order-2 lg:order-1"
          >
            <div className="flex aspect-[4/3] items-end rounded-[16px] border border-[#e4e8ed] bg-[linear-gradient(145deg,#ffffff_0%,#f1f3f6_100%)] p-6 sm:p-8">
              <div className="max-w-[260px] border-s-2 border-brand-red ps-4">
                <p className="font-heading text-[1.35rem] leading-[1.2] text-[#183668]">{t("placeholderTitle")}</p>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#697b95]">{t("placeholderText")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-red" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                {t("eyebrow")}
              </p>
            </div>
            <h2 className="font-heading text-[2.1rem] leading-[1.1] tracking-[-0.03em] text-[#183668] sm:text-[2.6rem]">
              {t("title")}
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-[#495a73]">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
              <p className="font-medium text-[#183668]">{t("paragraph4")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
