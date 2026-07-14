"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Clock3, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    title: "Consultations with clarity",
    description: "You receive a clear diagnosis, carefully explained options, and a treatment roadmap shaped around your priorities.",
    icon: BadgeCheck,
  },
  {
    title: "Technology with purpose",
    description: "Digital workflows are used where they improve accuracy, comfort, and decision-making rather than for show.",
    icon: Sparkles,
  },
  {
    title: "Safe, structured protocols",
    description: "From sterilisation to follow-up, every detail is delivered with measured attention and consistent standards.",
    icon: ShieldCheck,
  },
]

const values = [
  {
    title: "British Standards",
    description: "Measured protocols, consistent sterilisation, and a clinical approach shaped by clarity and discipline.",
  },
  {
    title: "Digital Dentistry",
    description: "Modern scanning and planning tools are used to improve comfort, precision, and decision-making.",
  },
  {
    title: "Transparent Planning",
    description: "Every recommendation is explained carefully, so treatment feels informed, calm, and fully tailored.",
  },
]

export default function WhyChooseUs() {
  const journeySteps = [
    {
      number: "01",
      title: "Consultation",
      description: "A calm first visit focused on your concerns, goals, and clinical assessment.",
    },
    {
      number: "02",
      title: "Digital Scan",
      description: "Detailed digital records are gathered to guide accurate diagnosis and planning.",
    },
    {
      number: "03",
      title: "Personalised Treatment Plan",
      description: "Your options are explained clearly with a plan shaped around your priorities.",
    },
    {
      number: "04",
      title: "Precision Treatment",
      description: "Treatment is delivered with measured technique, comfort, and attention to detail.",
    },
    {
      number: "05",
      title: "Review & Long-term Care",
      description: "Follow-up and ongoing care help protect results and support lasting oral health.",
    },
  ]

  return (
    <section id="about" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:px-6 lg:grid-cols-[344px_minmax(0,1fr)] lg:gap-10 lg:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="pt-2"
        >
          <div className="mb-6 flex items-center gap-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#ff2a22]">
              Why Choose Us
            </p>
            <span className="h-px w-16 bg-[#ff6f67]" />
          </div>
          <h2 className="max-w-[340px] font-heading text-[3rem] leading-[1.03] tracking-[-0.036em] text-[#183668] lg:text-[3.28rem]">
            British-inspired dental care with true clinical depth.
          </h2>
          <p className="mt-6 max-w-[330px] text-[15px] leading-[1.9] text-[#697b95]">
            Calm surroundings, measured protocols, and a patient experience designed around clarity and trust.
          </p>

          <div className="mt-8 grid gap-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="min-h-[118px] rounded-[14px] border border-[#eaf0f6] bg-white px-5 py-4.5 shadow-[0_3px_10px_rgba(15,39,78,0.035)]"
              >
                <p className="font-heading text-[1.56rem] leading-[1.12] tracking-[-0.028em] text-[#183668]">{value.title}</p>
                <p className="mt-2 max-w-[250px] text-[13.5px] leading-[1.72] text-[#5A6577]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-[18px] border border-[#edf1f6] bg-[#fbfcfe] p-6 shadow-[0_8px_24px_rgba(15,39,78,0.05)] sm:p-7 lg:p-8"
        >
          <div className="flex items-center gap-3 rounded-[10px] bg-white px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.17em] text-[#183668] shadow-[0_4px_12px_rgba(15,39,78,0.045)]">
            <Clock3 size={16} className="shrink-0 text-[#ff2a22]" />
            Luxury care, thoughtfully timed around your life
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-4.5">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: 0.06 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="rounded-[14px] border border-[#edf1f6] bg-white p-5 shadow-[0_4px_14px_rgba(15,39,78,0.045)] transition-shadow duration-300 ease-out hover:shadow-[0_8px_18px_rgba(15,39,78,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-[10px] bg-[#f4f7fb] p-3 text-[#ff2a22]">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-[21px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#183668]">
                        {feature.title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-[1.75] text-[#5A6577]">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-6 rounded-[16px] bg-[#0A2247] p-6 text-white lg:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ff7268]">
              The patient journey
            </p>
            <div className="mt-3.5 max-w-[540px] text-[15px] leading-[1.8] text-white/72">
              What happens after you book is clearly structured from your first consultation through long-term care.
            </div>
            <div className="relative mt-6 grid gap-3.5 lg:grid-cols-5 lg:gap-3.5">
              <div className="absolute left-[8%] right-[8%] top-[33px] hidden h-px bg-white/12 lg:block" />
              {journeySteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex min-h-[220px] flex-col rounded-[14px] border border-white/10 bg-white/[0.05] px-4.5 py-5"
                >
                  <div className="relative z-10 inline-flex w-fit text-[2.32rem] font-heading leading-none tracking-[-0.06em] text-white/96">
                    {step.number}
                  </div>
                  <h3 className="mt-5 min-h-[44px] text-[17px] font-semibold leading-[1.22] tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.72] text-white/72">
                    {step.description}
                  </p>
                  <div className="mt-auto hidden pt-5 lg:block">
                    <div className={`h-px w-full ${index < journeySteps.length - 1 ? "bg-white/10" : "bg-transparent"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}