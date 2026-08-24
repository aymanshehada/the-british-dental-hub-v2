"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Stethoscope } from "lucide-react"

const doctors = [
  {
    name: "Dr. Ayman Chhada",
    role: "Implant & Aesthetic Dentistry Specialist",
    image: "/images/dr-ayman-chhada.jpg",
    qualifications: [
      "Fellowship in Dental Implantology from The British University in Egypt (with the Sheffield Implantology team)",
      "Currently pursuing MRD and MProstho (Prosthodontics)",
      "King's College London certificate: \"The Art and Science of Indirect Aesthetic Restorations\"",
    ],
    icon: Award,
  },
  {
    name: "Dr. Issam Kayali",
    role: "Implant & Aesthetic Dentistry Specialist",
    image: "/images/dr-issam-kayali.jpg",
    qualifications: [
      "Fellowship in Dental Implantology from The British University in Egypt (with the Sheffield Implantology team)",
    ],
    icon: Stethoscope,
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[640px]">
            <div className="mb-5 flex items-center gap-3">
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#ff2a22]">
                Clinical Team
              </p>
              <span className="h-px w-16 bg-[#ff6f67]" />
            </div>
            <h2 className="font-heading text-[2.8rem] leading-[1.02] tracking-[-0.03em] text-[#183668] sm:text-[3.2rem]">
              Specialists chosen for precision, judgement, and calm patient care.
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-7 text-[#697b95]">
            Every treatment pathway is supported by clinicians who combine disciplined technique with the warmth and communication expected from a premium healthcare brand.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-[760px] gap-5 sm:grid-cols-2">
          {doctors.map((doctor, index) => {
            const Icon = doctor.icon

            return (
              <motion.article
                key={doctor.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[10px] border border-[#edf1f6] bg-white p-6 shadow-[0_2px_8px_rgba(15,39,78,0.06)] transition hover:shadow-[0_10px_24px_rgba(15,39,78,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <div className="h-[120px] w-[120px] overflow-hidden rounded-full bg-[#f6f8fb]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[8px] bg-[#f6f8fb] p-3 text-[#ff2a22]">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-[2rem] tracking-[-0.03em] text-[#183668]">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#ff2a22]">
                  {doctor.role}
                </p>

                <div className="mt-7 space-y-3">
                  {doctor.qualifications.map((qualification) => (
                    <div key={qualification} className="flex items-start gap-3 text-sm leading-6 text-[#556273]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37]" />
                      <span>{qualification}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex h-[41px] items-center gap-3 rounded-[3px] border border-[#8a9ab3] px-5 text-[14px] font-medium text-[#183668] transition hover:bg-[#f8fafc]"
          >
            Request a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
