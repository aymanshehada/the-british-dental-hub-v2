"use client"

import { FormEvent, useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, MapPin, MessageCircle, PhoneCall, Send } from "lucide-react"

const WHATSAPP_NUMBER = "201556887765"
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Gateway+Mall%2C+Clinics+D1%2C+Clinic+226%2C+El+Rehab+City%2C+New+Cairo%2C+Egypt"

const TREATMENT_OPTION_KEYS = [
  "dentalImplants",
  "porcelainVeneers",
  "teethWhitening",
  "orthodontics",
  "gumTreatment",
  "childrensDentistry",
  "generalConsultation",
  "other",
] as const

export default function CTA() {
  const t = useTranslations("home.cta")
  const [form, setForm] = useState({ name: "", phone: "", treatment: "", contactMethod: "whatsapp", message: "" })

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const contactMethodLabel = form.contactMethod === "phone" ? t("form.contactMethodPhone") : t("form.contactMethodWhatsapp")
    const treatmentLabel = form.treatment ? t(`form.treatmentOptions.${form.treatment}`) : null
    const lines = [
      t("whatsappIntro"),
      `${t("form.name")}: ${form.name}`,
      `${t("form.phone")}: ${form.phone}`,
      treatmentLabel ? `${t("form.treatment")}: ${treatmentLabel}` : null,
      `${t("form.preferredContact")}: ${contactMethodLabel}`,
      form.message ? `${t("form.message")}: ${form.message}` : null,
    ].filter(Boolean)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="bg-[#fbfaf7] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="grid gap-8 rounded-[16px] border border-[#e9e5dc] bg-[#fffefa] p-5 shadow-[0_12px_40px_rgba(10,34,71,0.055)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-12">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">{t("eyebrow")}</p>
            <h2 className="mt-4 max-w-[520px] font-heading text-[2.35rem] leading-[1.08] tracking-[-0.03em] text-[#183668] sm:text-[3rem]">{t("title")}</h2>
            <p className="mt-5 max-w-[510px] text-[15px] leading-7 text-[#52647c]">{t("subtitle")}</p>
            <div className="mt-8 space-y-4 border-t border-[#e9e5dc] pt-6">
              <a href="tel:+201556887765" className="flex items-start gap-3 text-[#183668] transition hover:text-brand-red"><PhoneCall className="mt-0.5 shrink-0 text-brand-red" size={18} aria-hidden="true" /><span><span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#697b95]">{t("callUs")}</span><span dir="ltr" className="mt-1 block text-[16px] font-medium">+20 155 688 7765</span></span></a>
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-[#183668] transition hover:text-brand-red"><MapPin className="mt-0.5 shrink-0 text-brand-red" size={18} aria-hidden="true" /><span><span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#697b95]">{t("location")}</span><span className="mt-1 block text-[15px] leading-6">{t("address")}</span><span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-red">{t("getDirections")}<ArrowRight size={14} aria-hidden="true" /></span></span></a>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-[12px] border border-[#e8e6e0] bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-2 text-[#183668]"><MessageCircle size={19} className="text-brand-red" aria-hidden="true" /><h3 className="font-heading text-[1.5rem]">{t("form.title")}</h3></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-[13px] font-medium text-[#42546e]">{t("form.name")}<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 h-11 w-full rounded-[4px] border border-[#dce2e9] bg-white px-3 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10" /></label>
              <label className="text-[13px] font-medium text-[#42546e]">{t("form.phone")}<input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5 h-11 w-full rounded-[4px] border border-[#dce2e9] bg-white px-3 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10" /></label>
            </div>
            <label className="mt-4 block text-[13px] font-medium text-[#42546e]">
              {t("form.treatment")}
              <select
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-[4px] border border-[#dce2e9] bg-white px-3 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10"
              >
                <option value="">{t("form.treatmentPlaceholder")}</option>
                {TREATMENT_OPTION_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.treatmentOptions.${key}`)}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="mt-4">
              <legend className="text-[13px] font-medium text-[#42546e]">{t("form.preferredContact")}</legend>
              <div className="mt-2 flex gap-5">
                <label className="flex items-center gap-2 text-[14px] text-[#183668]">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={form.contactMethod === "whatsapp"}
                    onChange={() => setForm({ ...form, contactMethod: "whatsapp" })}
                    className="h-4 w-4 accent-[#0A2247]"
                  />
                  {t("form.contactMethodWhatsapp")}
                </label>
                <label className="flex items-center gap-2 text-[14px] text-[#183668]">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={form.contactMethod === "phone"}
                    onChange={() => setForm({ ...form, contactMethod: "phone" })}
                    className="h-4 w-4 accent-[#0A2247]"
                  />
                  {t("form.contactMethodPhone")}
                </label>
              </div>
            </fieldset>

            <label className="mt-4 block text-[13px] font-medium text-[#42546e]">{t("form.message")}<textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full resize-y rounded-[4px] border border-[#dce2e9] bg-white px-3 py-2.5 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10" /></label>
            <button type="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-[#0A2247] px-5 text-[14px] font-semibold text-white transition hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"><Send size={16} aria-hidden="true" />{t("form.submit")}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
