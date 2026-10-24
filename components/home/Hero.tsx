"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Clock3, MessageCircle, ScanLine, ShieldCheck, Wallet } from "lucide-react"

// Shown under the phone hero only. "price" and "reply" are clinic-confirmed
// service promises (a clear price before treatment starts; WhatsApp replies
// within minutes), so keep their wording in step with how the clinic works.
const trustItems = [
  { key: "standards", icon: ShieldCheck },
  { key: "digital", icon: ScanLine },
  { key: "price", icon: Wallet },
  { key: "reply", icon: Clock3 },
] as const

export default function Hero() {
  const t = useTranslations("home.hero")

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px]">
        {/* Mobile / tablet: one composition — cropped image with the copy
            overlaid directly on it, lightened by a soft gradient rather than
            sitting in a separate block or behind a heavy glass panel. */}
        <div className="relative lg:hidden">
          <div className="relative h-[250px] overflow-hidden sm:h-[420px]">
            <Image
              src="/images/hero-clinic.webp"
              alt="The British Dental Hub reception"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[30%_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 via-[35%] to-transparent" />
          </div>
          <div className="relative -mt-3 px-5 pb-8 sm:-mt-10 sm:px-7 sm:pb-10">
            <h1 className="max-w-[420px] font-heading text-[2rem] leading-[1.02] tracking-[-0.035em] text-[#15356a] sm:text-[3.1rem]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h1>

            <p className="mt-3 max-w-[420px] text-[14px] leading-[1.65] text-[#314c72] sm:text-[16px]">
              {t("subtitle")}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex h-11 items-center gap-2.5 rounded-[3px] bg-[#0A2247] px-5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_16px_30px_rgba(10,34,71,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
              >
                <CalendarDays size={16} />
                {t("bookAppointment")}
              </Link>
              <Link
                href="https://wa.me/201556887765"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2.5 rounded-[3px] border border-[#7a8ca9] bg-white/92 px-5 text-[14px] font-semibold text-[#233b63] shadow-[0_10px_24px_rgba(10,34,71,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(10,34,71,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
              >
                <MessageCircle size={16} />
                {t("chatWhatsapp")}
              </Link>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#e7ecf2] pt-5 sm:max-w-[520px]">
              {trustItems.map(({ key, icon: Icon }) => (
                <li key={key} className="flex items-start gap-2.5 text-[12.5px] font-medium leading-[1.4] text-[#314c72]">
                  <Icon size={17} strokeWidth={1.6} className="mt-px shrink-0 text-brand-red" aria-hidden="true" />
                  <span>{t(`trust.${key}`)}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-[420px] text-[12.5px] leading-[1.55] text-[#4a5b74]">
              {t("internationalPrompt")}{" "}
              <Link
                href="/international-patients"
                className="inline-flex items-center gap-1 font-semibold text-[#0A2247] underline decoration-[#b9c4d3] underline-offset-[3px] transition-colors hover:decoration-[#0A2247] focus-visible:rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/25 focus-visible:ring-offset-2"
              >
                {t("internationalLink")}
                <ArrowRight size={12} className="rtl:rotate-180" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>

        {/* Desktop: unchanged existing composition. */}
        <div className="hidden lg:block">
          <div className="relative min-h-[90vh]">
            <Image
              src="/images/hero-clinic.webp"
              alt="The British Dental Hub reception"
              width={1600}
              height={1000}
              priority
              className="h-[90vh] w-full scale-[1.05] object-cover object-[62%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/38 via-white/14 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div className="mx-auto w-full max-w-[1140px]">
                <motion.div
                  initial={false}
                  className="max-w-[585px] ml-[30px] rounded-[10px] border border-white/45 bg-white/54 px-9 py-[3.15rem] shadow-[0_16px_42px_rgba(10,34,71,0.09)] backdrop-blur-[12px]"
                >
                  <h1 className="max-w-[560px] font-heading text-[5.15rem] leading-[0.98] tracking-[-0.035em] text-[#15356a] xl:text-[5.45rem]">
                    {t("titleLine1")}
                    <br />
                    {t("titleLine2")}
                  </h1>

                  <p className="mt-8 max-w-[470px] text-[18px] leading-[1.8] text-[#314c72]">
                    {t("subtitle")}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="#contact"
                      className="inline-flex h-[52px] items-center gap-2.5 rounded-[3px] bg-[#0A2247] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_16px_30px_rgba(10,34,71,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
                    >
                      <CalendarDays size={16} />
                      {t("bookAppointment")}
                    </Link>
                    <Link
                      href="https://wa.me/201556887765"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-[52px] items-center gap-2.5 rounded-[3px] border border-[#7a8ca9] bg-white/76 px-6 text-[15px] font-semibold text-[#233b63] shadow-[0_10px_24px_rgba(10,34,71,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(10,34,71,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
                    >
                      <MessageCircle size={16} />
                      {t("chatWhatsapp")}
                    </Link>
                  </div>

                  <p className="mt-6 text-[13px] leading-[1.5] text-[#4a5b74]">
                    {t("internationalPrompt")}{" "}
                    <Link
                      href="/international-patients"
                      className="inline-flex items-center gap-1 font-semibold text-[#0A2247] underline decoration-[#a9b6c8] underline-offset-[3px] transition-colors hover:decoration-[#0A2247] focus-visible:rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/25 focus-visible:ring-offset-2"
                    >
                      {t("internationalLink")}
                      <ArrowRight size={13} className="rtl:rotate-180" aria-hidden="true" />
                    </Link>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
