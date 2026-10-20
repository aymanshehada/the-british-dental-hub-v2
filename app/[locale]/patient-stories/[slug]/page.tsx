import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ArrowLeft, Check } from "lucide-react"
import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Link } from "@/i18n/navigation"
import { CasePhotoPair } from "@/components/patient-cases/CasePhotoPair"
import { getPatientCase, patientCases } from "@/lib/patient-cases"
import type { AppLocale } from "@/i18n/routing"
import { getLocaleAlternates } from "@/lib/seo"

export function generateStaticParams() {
  return patientCases.map((patientCase) => ({ slug: patientCase.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!getPatientCase(slug)) {
    return { title: "Case Not Found" }
  }

  const t = await getTranslations({ locale: locale as AppLocale, namespace: "patientCases.meta" })
  const pageTitle = t("title")
  const sharedTitle = `${pageTitle} | The British Dental Hub`
  const pageDescription = t("description")

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: getLocaleAlternates(`/patient-stories/${slug}`, locale as AppLocale),
    openGraph: {
      title: sharedTitle,
      description: pageDescription,
      url: `/patient-stories/${slug}`,
      type: "article",
      siteName: "The British Dental Hub",
      locale: locale === "ar" ? "ar_EG" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: sharedTitle,
      description: pageDescription,
    },
  }
}

const sectionHeading =
  "font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]"
const bodyText = "text-[15px] leading-[1.85] text-[#495a73]"
const noteBox = "rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5"

export default async function PatientCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale as AppLocale)

  const patientCase = getPatientCase(slug)
  if (!patientCase) {
    notFound()
  }

  const t = await getTranslations("patientCases")
  const tNav = await getTranslations("common.nav")

  const challengeParagraphs = t.raw("challenge.paragraphs") as string[]
  const planSteps = t.raw("diagnosis.planSteps") as string[]
  const stages = t.raw("journey.stages") as { title: string; body: string }[]
  const resultParagraphs = t.raw("result.paragraphs") as string[]
  const reflectionParagraphs = t.raw("reflection.paragraphs") as string[]

  const badge = (label: string, side: "before" | "after") => `${label} · ${t(`page.${side}`)}`

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="bg-white pb-10 pt-10 sm:pt-14 lg:pb-14 lg:pt-16">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
            <Link
              href="/#patient-stories"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#233b63] transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
            >
              <ArrowLeft size={15} aria-hidden="true" className="rtl:rotate-180" />
              {t("page.backToStories")}
            </Link>

            <div className="mt-8 max-w-[760px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red rtl:tracking-normal">
                  {t("page.eyebrow")}
                </p>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-red rtl:tracking-normal">
                {t("page.treatment")}
              </p>
              <h1 className="mt-3 text-balance font-heading text-[2.35rem] font-semibold leading-[1.07] tracking-[-0.03em] text-[#0A2247] sm:text-[2.9rem] lg:text-[3.35rem]">
                {t("page.title")}
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-[#2c3d55] sm:text-[17px]">
                {t("page.lead")}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1140px] space-y-1 px-4 sm:px-6 lg:px-0">
            <div className="overflow-hidden rounded-[14px] border border-[#edf1f6] bg-white shadow-[0_2px_10px_rgba(15,39,78,0.05)]">
              <div className="grid gap-1">
                <CasePhotoPair
                  ratio="aspect-[2000/834]"
                  before={{
                    ...patientCase.smile.before,
                    alt: t("page.alt.beforeSmile"),
                    badge: badge(t("page.smileLabel"), "before"),
                  }}
                  after={{
                    ...patientCase.smile.after,
                    alt: t("page.alt.afterSmile"),
                    badge: badge(t("page.smileLabel"), "after"),
                  }}
                />
                <CasePhotoPair
                  ratio="aspect-[2/1]"
                  before={{
                    ...patientCase.closeup.before,
                    alt: t("page.alt.beforeCloseup"),
                    badge: badge(t("page.closeupLabel"), "before"),
                  }}
                  after={{
                    ...patientCase.closeup.after,
                    alt: t("page.alt.afterCloseup"),
                    badge: badge(t("page.closeupLabel"), "after"),
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6">
            <h2 className={sectionHeading}>{t("challenge.title")}</h2>
            <div className="mt-5 space-y-4">
              {challengeParagraphs.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6">
            <h2 className={sectionHeading}>{t("diagnosis.title")}</h2>
            <p className={`mt-5 ${bodyText}`}>{t("diagnosis.intro")}</p>
            <p className={`mt-4 ${bodyText}`}>{t("diagnosis.findings")}</p>
            <p className="mt-4 text-[15px] font-semibold leading-[1.85] text-[#183668]">
              {t("diagnosis.emphasis")}
            </p>

            <p className={`mt-8 ${bodyText}`}>{t("diagnosis.planIntro")}</p>
            <ul className="mt-5 grid gap-3">
              {planSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-[14.5px] leading-7 text-[#42546e]">
                  <Check size={17} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-7 ${noteBox}`}>
              <p className="text-[14px] leading-7 text-[#52647c]">{t("diagnosis.closing")}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6">
            <h2 className={sectionHeading}>{t("journey.title")}</h2>
            <p className={`mt-5 ${bodyText}`}>{t("journey.intro")}</p>

            <ol className="relative mt-8 flex flex-col gap-6">
              <div
                className="absolute start-[17px] top-[18px] bottom-[18px] w-px bg-[#e3e8ef]"
                aria-hidden="true"
              />
              {stages.map((stage, index) => (
                <li key={stage.title} className="relative flex items-start gap-4">
                  <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0A2247] font-heading text-[0.9rem] text-white">
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[15px] font-semibold leading-[1.3] text-[#183668]">{stage.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.75] text-[#52647c]">{stage.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6">
            <h2 className={sectionHeading}>{t("result.title")}</h2>
            <div className="mt-5 space-y-4">
              {resultParagraphs.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6">
            <div className={`${noteBox} p-6 sm:p-8`}>
              <h2 className="font-heading text-[1.5rem] leading-[1.15] tracking-[-0.02em] text-[#183668] sm:text-[1.8rem]">
                {t("reflection.title")}
              </h2>
              <div className="mt-4 space-y-4">
                {reflectionParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[14.5px] leading-[1.8] text-[#52647c]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[12.5px] leading-6 text-[#8a94a6]">{t("note")}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-[48px] items-center gap-2 rounded-[3px] bg-[#0A2247] px-6 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
              >
                {tNav("bookAppointment")}
              </Link>
              <Link
                href="/#patient-stories"
                className="inline-flex h-[48px] items-center gap-2 rounded-[3px] border border-[#7a8ca9] bg-white px-6 text-[14px] font-semibold text-[#233b63] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
              >
                {t("page.backToStories")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
