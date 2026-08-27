"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react"

export default function CTA() {
  const t = useTranslations("home.cta")

  return (
    <section id="contact" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[10px] bg-[#0A2247] px-6 py-10 shadow-[0_6px_18px_rgba(10,34,71,0.14)] sm:px-8 lg:px-12"
        >
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 max-w-[760px] font-heading text-[2.8rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.2rem]">
                {t("title")}
              </h2>
              <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/80">
                {t("subtitle")}
              </p>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-white/8 p-5 backdrop-blur sm:p-6">
              <div className="space-y-4">
                <Link
                  href="#contact"
                  className="inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-[3px] bg-white px-6 text-[14px] font-medium text-[#183668] transition hover:bg-brand-bg"
                >
                  {t("bookAppointment")}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
                <Link
                  href="https://wa.me/201556887765"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-[3px] border border-white/28 bg-transparent px-6 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="mr-2" size={16} />
                  {t("chatWhatsapp")}
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[6px] border border-white/10 bg-white/8 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <PhoneCall size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">{t("callUs")}</span>
                  </div>
                  <Link href="tel:+201556887765" className="mt-3 block text-lg text-white/78 transition hover:text-white">
                    <span dir="ltr">+20 155 688 7765</span>
                  </Link>
                </div>
                <div className="rounded-[6px] border border-white/10 bg-white/8 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <MessageCircle size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">{t("location")}</span>
                  </div>
                  <p className="mt-3 text-lg leading-7 text-white/78">{t("address")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}