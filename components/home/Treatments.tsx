"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Treatments() {
  const t = useTranslations("home.treatments")

  const treatments = [
    {
      title: t("dentalImplants.title"),
      description: t("dentalImplants.description"),
      image: "/images/implant-treatment.png",
      href: "/dental-implants",
    },
    {
      title: t("porcelainVeneers.title"),
      description: t("porcelainVeneers.description"),
      image: "/images/veneers-showcase.png",
      href: "/porcelain-veneers",
    },
    {
      title: t("teethWhitening.title"),
      description: t("teethWhitening.description"),
      image: "/images/teeth-whitening.png",
      href: "/teeth-whitening",
    },
    {
      title: t("orthodontics.title"),
      description: t("orthodontics.description"),
      image: "/images/clear-aligners.png",
      href: "/orthodontics",
    },
    {
      title: t("gumTreatment.title"),
      description: t("gumTreatment.description"),
      image: "/images/gum-treatment.png",
      href: "/gum-treatment",
    },
    {
      title: t("childrensDentistry.title"),
      description: t("childrensDentistry.description"),
      image: "/images/children-dentistry.png",
      href: "/children-dentistry",
    },
  ]

  return (
    <section id="treatments" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
          className="max-w-[720px] px-4 sm:px-6 lg:px-0"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              {t("eyebrow")}
            </p>
          </div>

          <h2 className="font-heading text-[2.1rem] leading-[1.08] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {t("title")}
          </h2>

          <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-[#697b95]">
            {t("subtitle")}
          </p>

          <Link
            href="/treatments"
            className="mt-6 inline-flex h-[44px] items-center gap-2.5 rounded-[3px] border border-[#8a9ab3] px-6 text-[13.5px] font-medium text-[#183668] transition-all duration-300 ease-out hover:bg-brand-bg"
          >
            {t("exploreAll")}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Mobile / tablet: horizontal scroll-snap carousel. Desktop (lg+): elegant 3-col grid. */}
        <div
          className="mt-7 flex gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-[26px] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-[80vw] shrink-0 sm:w-[45vw] lg:w-auto"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                href={treatment.href}
                className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-[#edf1f6] bg-white shadow-[0_5px_16px_rgba(15,39,78,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-brand-red/20 hover:shadow-[0_12px_24px_rgba(15,39,78,0.075)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={768}
                    height={512}
                    className="aspect-[3/2] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-[1.3rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#1a3767]">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-[#6a7d99]">
                    {treatment.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-red transition-all duration-300 ease-out group-hover:gap-2.5">
                    {t("learnMore")}
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
