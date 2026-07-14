"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Stethoscope } from "lucide-react"

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8c-3.9 0-7 3.2-7 7.1 0 2 .7 4.1 1.7 6l1.8 3.2c1.4 2.4 2.2 5.1 2.5 7.9l.4 4.2c.2 1.7 1.5 3 3.1 3 1.4 0 2.6-.9 3-2.2l2-6.7c.2-.7.8-1.1 1.5-1.1s1.3.5 1.5 1.1l2 6.7c.4 1.3 1.6 2.2 3 2.2 1.6 0 2.9-1.3 3.1-3l.4-4.2c.3-2.8 1.1-5.5 2.5-7.9l1.8-3.2c1-1.9 1.7-4 1.7-6 0-3.9-3.1-7.1-7-7.1-2.2 0-4.1 1-5.4 1.8-1 .6-2.3.6-3.3 0C20.1 9 18.2 8 16 8Z" />
    </svg>
  )
}

function HandHoldingHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 29.5h8.5c1.2 0 2.2.9 2.3 2.1.1 1.4-1 2.6-2.4 2.6H15" />
      <path d="M10 35h7.5l4.1 2.9c.8.6 1.9.9 2.9.9h5.1c1.4 0 2.8-.5 3.8-1.5l5-4.7c1-.9 1-2.5.1-3.5-.8-.8-2-.9-2.9-.4l-4.2 2.3H25" />
      <path d="M6.5 28.5h3.9c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H6.5" />
      <path d="M28.7 12.1c1.5-1.7 4.2-1.9 5.9-.4 1.8 1.6 1.9 4.4.3 6.1L29 23l-5.9-5.2c-1.7-1.5-1.8-4.2-.3-5.9 1.6-1.8 4.4-1.9 6.1-.3Z" />
    </svg>
  )
}

export default function TrustBar() {
  const trustItems = [
    {
      title: "British Standards",
      description: "International protocols and sterilization standards",
      icon: ShieldCheck,
      iconClassName: "text-white",
    },
    {
      title: "Advanced Technology",
      description: "Digital dentistry for precision, comfort, and predictability",
      icon: ToothIcon,
      iconClassName: "text-white",
    },
    {
      title: "Expert Team",
      description: "Specialized dentists with years of experience",
      icon: Stethoscope,
      iconClassName: "text-white",
    },
    {
      title: "Patient Care",
      description: "Personalized care in a warm and comfortable environment",
      icon: HandHoldingHeartIcon,
      iconClassName: "text-white",
    },
  ]

  return (
    <section className="bg-[#0A2247] py-0">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-0">
        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className={`group flex min-h-[144px] items-center gap-7 border-white/24 px-6 py-9 transition-all duration-300 ease-out hover:bg-white/[0.03] ${index !== trustItems.length - 1 ? "xl:border-r" : ""}`}
              >
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center self-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  <Icon size={54} className={item.iconClassName} strokeWidth={1.7} />
                </div>
                <div className="flex min-h-[64px] flex-col justify-center">
                  <h3 className="text-[17px] font-bold uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[205px] text-[14px] leading-[1.75] text-white/72">
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