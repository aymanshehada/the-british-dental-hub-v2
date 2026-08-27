"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfter() {
  const t = useTranslations("home.beforeAfter")
  const [activeIndex, setActiveIndex] = useState(0)

  const cases = [
    {
      title: t("case1.title"),
      treatment: t("case1.treatment"),
      before: "/images/case-1-before.png",
      after: "/images/case-1-after.png",
      summary: t("case1.summary"),
    },
    {
      title: t("case2.title"),
      treatment: t("case2.treatment"),
      before: "/images/case-2-before.png",
      after: "/images/case-2-after.png",
      summary: t("case2.summary"),
    },
  ]

  const activeCase = cases[activeIndex]

  const goPrevious = () => {
    setActiveIndex((current) => (current === 0 ? cases.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current === cases.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="gallery" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
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
            <p className="mt-5 text-[15px] leading-7 text-[#697b95]">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              aria-label={t("previousCase")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#d6deea] bg-white text-[#183668] transition hover:bg-brand-bg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t("nextCase")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#d6deea] bg-white text-[#183668] transition hover:bg-brand-bg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-10 rounded-[10px] border border-[#edf1f6] bg-white p-4 shadow-[0_2px_8px_rgba(15,39,78,0.06)] sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[10px] border border-[#edf1f6] bg-white">
                  <div className="border-b border-[#edf1f6] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#183668]">
                    {t("before")}
                  </div>
                  <Image
                    src={activeCase.before}
                    alt={`${activeCase.title} before treatment`}
                    width={800}
                    height={960}
                    className="h-[320px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[420px]"
                  />
                </div>
                <div className="overflow-hidden rounded-[10px] border border-[#edf1f6] bg-white">
                  <div className="border-b border-[#edf1f6] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#183668]">
                    {t("after")}
                  </div>
                  <Image
                    src={activeCase.after}
                    alt={`${activeCase.title} after treatment`}
                    width={800}
                    height={960}
                    className="h-[320px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[420px]"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-[10px] bg-brand-bg p-5 sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  {t("featuredCase", { number: activeIndex + 1 })}
                </p>
                <h3 className="mt-4 font-heading text-[2.3rem] leading-[1.04] tracking-[-0.03em] text-[#183668]">
                  {activeCase.title}
                </h3>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#183668]">
                  {activeCase.treatment}
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[#5A6577]">{activeCase.summary}</p>

                <div className="mt-8 grid gap-3">
                  {cases.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-[8px] border px-4 py-4 text-left transition ${
                        index === activeIndex
                          ? "border-[#b8c5d9] bg-white text-[#183668] shadow-[0_2px_8px_rgba(15,39,78,0.06)]"
                          : "border-[#edf1f6] bg-transparent text-[#6A7485] hover:border-[#d9e1ec] hover:bg-white"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                        {t("caseLabel", { number: index + 1 })}
                      </span>
                      <span className="mt-2 block text-base font-semibold leading-6">{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}