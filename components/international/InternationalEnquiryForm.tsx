"use client"

import { FormEvent, useState } from "react"
import { useTranslations } from "next-intl"
import { Send } from "lucide-react"

const WHATSAPP_NUMBER = "201556887765"

const TREATMENT_OPTION_KEYS = [
  "dentalImplants",
  "porcelainVeneers",
  "multipleTeeth",
  "teethWhitening",
  "orthodontics",
  "gumTreatment",
  "childrensDentistry",
  "generalConsultation",
  "notSure",
  "other",
] as const

const TRAVEL_TIMEFRAME_KEYS = [
  "asap",
  "oneToThreeMonths",
  "threeToSixMonths",
  "exploring",
] as const

const fieldClass =
  "mt-1.5 h-11 w-full rounded-[4px] border border-[#dce2e9] bg-white px-3 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10"

export function InternationalEnquiryForm() {
  const t = useTranslations("internationalPatients.enquiry")
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    treatment: "",
    travelTimeframe: "",
    contactMethod: "whatsapp",
    message: "",
  })

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const contactMethodLabel =
      form.contactMethod === "phone"
        ? t("form.contactMethodPhone")
        : t("form.contactMethodWhatsapp")
    const treatmentLabel = form.treatment
      ? t(`form.treatmentOptions.${form.treatment}`)
      : null
    const travelTimeframeLabel = form.travelTimeframe
      ? t(`form.travelTimeframeOptions.${form.travelTimeframe}`)
      : null

    const lines = [
      t("whatsappIntro"),
      `${t("form.name")}: ${form.name}`,
      `${t("form.country")}: ${form.country}`,
      `${t("form.phone")}: ${form.phone}`,
      `${t("form.email")}: ${form.email}`,
      treatmentLabel ? `${t("form.treatment")}: ${treatmentLabel}` : null,
      travelTimeframeLabel ? `${t("form.travelTimeframe")}: ${travelTimeframeLabel}` : null,
      `${t("form.preferredContact")}: ${contactMethodLabel}`,
      form.message ? `${t("form.message")}: ${form.message}` : null,
    ].filter(Boolean)

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="enquiry" className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[760px] px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              {t("eyebrow")}
            </p>
            <span className="h-px w-10 bg-brand-red" />
          </div>
          <h2 className="font-heading text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#183668] sm:text-[2.6rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-[#52647c]">
            {t("subtitle")}
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-8 rounded-[14px] border border-[#e9e5dc] bg-[#fffefa] p-5 text-start shadow-[0_12px_40px_rgba(10,34,71,0.055)] sm:mt-10 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-[13px] font-medium text-[#42546e]">
              {t("form.name")}
              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="text-[13px] font-medium text-[#42546e]">
              {t("form.country")}
              <input
                required
                autoComplete="country-name"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="text-[13px] font-medium text-[#42546e]">
              {t("form.phone")}
              <input
                required
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="text-[13px] font-medium text-[#42546e]">
              {t("form.email")}
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass}
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-[13px] font-medium text-[#42546e]">
              {t("form.treatment")}
              <select
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className={fieldClass}
              >
                <option value="">{t("form.treatmentPlaceholder")}</option>
                {TREATMENT_OPTION_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.treatmentOptions.${key}`)}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-[13px] font-medium text-[#42546e]">
              {t("form.travelTimeframe")}
              <select
                value={form.travelTimeframe}
                onChange={(e) => setForm({ ...form, travelTimeframe: e.target.value })}
                className={fieldClass}
              >
                <option value="">{t("form.travelTimeframePlaceholder")}</option>
                {TRAVEL_TIMEFRAME_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.travelTimeframeOptions.${key}`)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="mt-4">
            <legend className="text-[13px] font-medium text-[#42546e]">
              {t("form.preferredContact")}
            </legend>
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

          <label className="mt-4 block text-[13px] font-medium text-[#42546e]">
            {t("form.message")}
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full resize-y rounded-[4px] border border-[#dce2e9] bg-white px-3 py-2.5 text-[14px] text-[#183668] outline-none transition focus:border-[#0A2247] focus:ring-2 focus:ring-[#0A2247]/10"
            />
          </label>

          <p className="mt-3 text-[12.5px] leading-5 text-[#7d8aa0]">{t("form.whatsappHelper")}</p>

          <button
            type="submit"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-[#0A2247] px-5 text-[14px] font-semibold text-white transition hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
          >
            <Send size={16} aria-hidden="true" />
            {t("form.submit")}
          </button>

          <p className="mt-3 text-center text-[12px] leading-5 text-[#8a94a6]">{t("form.consent")}</p>
        </form>
      </div>
    </section>
  )
}
