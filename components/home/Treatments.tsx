"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Treatments() {
  const treatments = [
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth",
      image: "/images/implant-treatment.png",
      href: "/dental-implants",
      imagePosition: "center center",
    },
    {
      title: "Veneers",
      description: "Perfect your smile with natural-looking veneers",
      image: "/images/veneers-treatment.png",
      href: "/porcelain-veneers",
      imagePosition: "center 42%",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth discreetly and comfortably",
      image: "/images/clear-aligners.png",
      href: "#contact",
      imagePosition: "center 38%",
    },
    {
      title: "General Dentistry",
      description: "Preventive care for long-term oral health",
      image: "/images/general-dentistry.png",
      href: "#contact",
      imagePosition: "58% center",
    },
  ]

  return (
    <section id="treatments" className="bg-white pt-14 pb-9 sm:pt-16 sm:pb-12 lg:pt-24 lg:pb-[4.5rem]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
          className="max-w-[900px] pt-3 lg:pt-4"
        >
          <div className="mb-6 flex items-center gap-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
              Our Treatments
            </p>
            <span className="h-px w-16 bg-brand-red" />
          </div>

          <h2 className="max-w-[820px] font-heading text-[3.15rem] leading-[1.04] tracking-[-0.04em] text-[#183668] lg:text-[3.72rem]">
            Comprehensive Dental Solutions Tailored to You
          </h2>

          <p className="mt-6 max-w-[660px] text-[16px] leading-[1.9] text-[#697b95]">
            From routine care to complete smile makeovers, we offer a wide range of
            treatments using the latest techniques and materials.
          </p>

          <Link
            href="#contact"
            className="mt-7 inline-flex h-[46px] items-center gap-3 rounded-[3px] border border-[#8a9ab3] px-7 text-[14px] font-medium text-[#183668] transition-all duration-300 ease-out hover:bg-brand-bg hover:shadow-[0_5px_12px_rgba(15,39,78,0.045)]"
          >
            Explore All Treatments
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-[26px]">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group h-full"
            >
              <Link
                href={treatment.href}
                className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-[18px] border border-[#edf1f6] bg-white shadow-[0_5px_16px_rgba(15,39,78,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_12px_24px_rgba(15,39,78,0.075)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
              >
                <div className="relative mx-3 mt-3 overflow-hidden rounded-[16px]">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={720}
                    height={540}
                    quality={94}
                    sizes="(min-width: 1440px) 330px, (min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                    className="h-[364px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                    style={{ objectPosition: treatment.imagePosition }}
                  />
                </div>

                <div className="flex flex-1 flex-col px-6 pb-8 pt-4.5">
                  <h3 className="font-heading text-[1.96rem] font-bold leading-[1.05] tracking-[-0.036em] text-[#1a3767]">
                    {treatment.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.75] text-[#6a7d99]">
                    {treatment.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}