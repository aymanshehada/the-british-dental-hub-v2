"use client"

import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { CalendarDays, MessageCircle } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[620px] lg:min-h-[90vh]">
          <Image
            src="/images/hero-clinic.png"
            alt="The British Dental Hub reception"
            width={1600}
            height={1000}
            priority
            className="h-[620px] w-full scale-[1.05] object-cover object-[62%_center] lg:h-[90vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/38 via-white/14 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex items-center px-6 sm:px-8 lg:px-0">
            <div className="mx-auto w-full max-w-[1140px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-[585px] rounded-[10px] border border-white/45 bg-white/54 px-6 py-9 shadow-[0_16px_42px_rgba(10,34,71,0.09)] backdrop-blur-[12px] sm:px-8 sm:py-11 lg:ml-[30px] lg:-translate-y-12 lg:px-9 lg:py-[3.15rem] xl:-translate-y-14"
              >
                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.28em] text-brand-red">
                  Premium Dentistry in Cairo
                </p>

                <h1 className="max-w-[560px] font-heading text-[3.45rem] leading-[0.91] tracking-[-0.035em] text-[#15356a] sm:text-[4.25rem] lg:text-[5.15rem] xl:text-[5.45rem]">
                  British Standards
                  <br />
                  Exceptional Care
                </h1>

                <p className="mt-7 max-w-[470px] text-[18px] leading-[1.8] text-[#314c72] lg:mt-8">
                  Experience world-class dentistry in a modern, comfortable environment
                  with advanced technology and a patient-first approach.
                </p>

                <div className="mt-9 flex flex-wrap gap-4 lg:mt-10">
                  <Link
                    href="#contact"
                    className="inline-flex h-[52px] items-center gap-2.5 rounded-[3px] bg-[#0A2247] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_16px_30px_rgba(10,34,71,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
                  >
                    <CalendarDays size={16} />
                    Book Appointment
                  </Link>
                  <Link
                    href="https://wa.me/201556887765"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-[52px] items-center gap-2.5 rounded-[3px] border border-[#7a8ca9] bg-white/76 px-6 text-[15px] font-semibold text-[#233b63] shadow-[0_10px_24px_rgba(10,34,71,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(10,34,71,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}