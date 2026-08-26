"use client"

import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { AlignCenter, Anchor, ArrowRight, Baby, ShieldCheck, Sparkles, Sun } from "lucide-react"

export default function Treatments() {
  const treatments = [
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth, planned with digital precision.",
      icon: Anchor,
      href: "/dental-implants",
    },
    {
      title: "Porcelain Veneers",
      description: "Refined porcelain shells that transform shape, shade, and symmetry for a Hollywood smile.",
      icon: Sparkles,
      href: "/porcelain-veneers",
    },
    {
      title: "Teeth Whitening",
      description: "Safe, effective brightening treatments for a noticeably whiter, more confident smile.",
      icon: Sun,
      href: "/teeth-whitening",
    },
    {
      title: "Orthodontics",
      description: "Clear aligners and modern techniques to straighten teeth comfortably and discreetly.",
      icon: AlignCenter,
      href: "/orthodontics",
    },
    {
      title: "Gum Treatment",
      description: "Comprehensive periodontal care, from prevention to advanced gum disease therapy.",
      icon: ShieldCheck,
      href: "/gum-treatment",
    },
    {
      title: "Children’s Dentistry",
      description: "Gentle, specialised paediatric care designed to keep young smiles healthy and happy.",
      icon: Baby,
      href: "/children-dentistry",
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
            href="/treatments"
            className="mt-7 inline-flex h-[46px] items-center gap-3 rounded-[3px] border border-[#8a9ab3] px-7 text-[14px] font-medium text-[#183668] transition-all duration-300 ease-out hover:bg-brand-bg hover:shadow-[0_5px_12px_rgba(15,39,78,0.045)]"
          >
            Explore All Treatments
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-[26px]">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon

            return (
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
                  className="flex h-full flex-col rounded-[18px] border border-[#edf1f6] bg-white p-6 shadow-[0_5px_16px_rgba(15,39,78,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-brand-red/20 hover:shadow-[0_12px_24px_rgba(15,39,78,0.075)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
                >
                  <div className="flex size-14 items-center justify-center rounded-[16px] border border-brand-red/25 bg-brand-red/10 text-brand-red transition duration-300 ease-out group-hover:border-brand-red/40 group-hover:bg-brand-red/15">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-heading text-[1.56rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a3767]">
                    {treatment.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.75] text-[#6a7d99]">
                    {treatment.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-red transition-all duration-300 ease-out group-hover:gap-2.5">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
