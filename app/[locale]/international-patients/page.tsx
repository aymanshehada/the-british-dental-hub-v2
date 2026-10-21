import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Check, X, ChevronDown, ArrowUpRight } from "lucide-react"
import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Link } from "@/i18n/navigation"
import { InternationalPatientJourney } from "@/components/international/InternationalPatientJourney"
import { InternationalEnquiryForm } from "@/components/international/InternationalEnquiryForm"
import type { AppLocale } from "@/i18n/routing"
import { getLocaleAlternates, withSocialDefaults } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale: locale as AppLocale,
    namespace: "internationalPatients.meta",
  })
  const pageTitle = t("title")
  const sharedTitle = `${pageTitle} | The British Dental Hub`
  const pageDescription = t("description")

  return withSocialDefaults({
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "International Dental Patients",
      "Dental Treatment Cairo",
      "Dental Implants Egypt",
      "Remote Dental Consultation",
      "British Dental Clinic",
      "Travel for Dental Care",
    ],
    alternates: getLocaleAlternates("/international-patients", locale as AppLocale),
    openGraph: {
      title: sharedTitle,
      description: pageDescription,
      url: "/international-patients",
      type: "website",
      siteName: "The British Dental Hub",
      images: [
        {
          url: "/images/international-patients-hero.png",
          width: 2075,
          height: 758,
          alt: "International patients travelling to The British Dental Hub in Cairo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: sharedTitle,
      description: pageDescription,
      images: ["/images/international-patients-hero.png"],
    },
  }, locale as AppLocale)
}

const ARRIVAL_STEP_KEYS = [
  "assessment",
  "diagnostics",
  "discussion",
  "plan",
  "treatment",
  "review",
] as const

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-10 bg-brand-red" />
      <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">
        {children}
      </p>
    </div>
  )
}

function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageAlt,
}: {
  eyebrow: string
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
  imageAlt: string
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* One image-led composition: the supplied hero photo is the visual
          foundation and stays dominant. The copy sits centrally over the
          calmer band of the frame (open sky, sunset, the Nile) with the
          traveller anchoring one side and the pyramids, Cairo Tower and
          treatment room reading around it. Readability comes from a soft
          text-shadow plus one very gentle centred wash — no card, no panel,
          no directional gradient. Positioning mirrors naturally under RTL. */}
      <div className="relative h-[460px] w-full sm:h-[520px] lg:h-[min(70vh,580px)]">
        <Image
          src="/images/international-patients-hero.png"
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_30%] sm:object-[43%_32%] lg:object-[47%_32%]"
        />
        {/* Very soft centred readability wash — concentrated where the copy
            sits, fading well before the edges so the photograph stays clear. */}
        <div className="absolute inset-0 bg-[radial-gradient(78%_76%_at_50%_50%,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.40)_38%,rgba(255,255,255,0.12)_66%,rgba(255,255,255,0)_82%)]" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1140px] flex-col items-center justify-center px-5 text-center sm:px-6">
            <div className="mx-auto max-w-[560px]">
              <div className="[text-shadow:0_1px_2px_rgba(255,255,255,0.9),0_2px_22px_rgba(255,255,255,0.7)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-red">
                  {eyebrow}
                </p>
                <h1 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.07] tracking-[-0.03em] text-[#0A2247] sm:text-[2.9rem] lg:mt-5 lg:text-[3.35rem]">
                  {title}
                </h1>
                <p className="mx-auto mt-4 max-w-[430px] text-[15px] leading-[1.7] text-[#2c3d55] sm:text-[16px] lg:mt-5 lg:text-[17px] lg:leading-[1.7]">
                  {subtitle}
                </p>
              </div>
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:mt-8">
                <Link
                  href="#enquiry"
                  className="inline-flex h-[48px] items-center gap-2 rounded-[3px] bg-[#0A2247] px-6 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
                >
                  {ctaPrimary}
                </Link>
                <Link
                  href="#journey"
                  className="inline-flex h-[48px] items-center gap-2 rounded-[3px] border border-[#7a8ca9] bg-white/90 px-6 text-[14px] font-semibold text-[#233b63] shadow-[0_10px_24px_rgba(10,34,71,0.08)] backdrop-blur-[2px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
                >
                  {ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection({
  eyebrow,
  title,
  body,
  imageAlt,
}: {
  eyebrow: string
  title: string
  body: string
  imageAlt: string
}) {
  return (
    <section className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-0">
        <div className="order-2 overflow-hidden rounded-[16px] lg:order-1">
          <Image
            src="/images/about-clinic.png"
            alt={imageAlt}
            width={1024}
            height={1024}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{body}</p>
        </div>
      </div>
    </section>
  )
}

// Groups "What to share" and "Speaking with the doctor" into a single visual
// movement — one eyebrow, one background, a quiet divider between the two
// sub-topics — rather than two independent-feeling sections.
function BeforeYouTravelSection({
  eyebrow,
  recordsTitle,
  recordsBody,
  recordsItems,
  recordsNote,
  recordsWhatsappNote,
  videoTitle,
  videoBody,
  videoItems,
  videoCaveatTitle,
  videoCaveat,
}: {
  eyebrow: string
  recordsTitle: string
  recordsBody: string
  recordsItems: string[]
  recordsNote: string
  recordsWhatsappNote: string
  videoTitle: string
  videoBody: string
  videoItems: string[]
  videoCaveatTitle: string
  videoCaveat: string
}) {
  return (
    <section id="before-you-travel" className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>

        <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
          {recordsTitle}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{recordsBody}</p>
        <ul className="mt-6 grid gap-2.5">
          {recordsItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[14.5px] leading-7 text-[#42546e]">
              <Check size={17} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5">
          <p className="text-[14px] leading-7 text-[#52647c]">{recordsNote}</p>
        </div>
        <p className="mt-4 text-[13.5px] leading-6 text-[#6a7d99]">{recordsWhatsappNote}</p>

        <div className="my-10 h-px bg-[#e9e5dc] sm:my-12" />

        <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
          {videoTitle}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{videoBody}</p>
        <ul className="mt-6 grid gap-2.5">
          {videoItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[14.5px] leading-7 text-[#42546e]">
              <Check size={17} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#183668]">
            {videoCaveatTitle}
          </p>
          <p className="mt-2 text-[14px] leading-7 text-[#52647c]">{videoCaveat}</p>
        </div>
      </div>
    </section>
  )
}

// The "In Cairo" arc: arrival → planning your time → coordinating
// appointments → what we help with. One continuous section and background so
// the four movements read as one coherent journey rather than four separate
// marketing blocks, separated only by quiet hairline dividers.
function InCairoSection({
  arcEyebrow,
  arrivalTitle,
  arrivalIntro,
  arrivalImageAlt,
  planningTitle,
  planningBody,
  implantsEyebrow,
  implantsBody,
  implantsTimelineNote,
  coordinationTitle,
  coordinationBody,
  boundariesTitle,
  canHelpTitle,
  canHelp,
  cannotArrangeTitle,
  cannotArrange,
  t,
}: {
  arcEyebrow: string
  arrivalTitle: string
  arrivalIntro: string
  arrivalImageAlt: string
  planningTitle: string
  planningBody: string
  implantsEyebrow: string
  implantsBody: string
  implantsTimelineNote: string
  coordinationTitle: string
  coordinationBody: string
  boundariesTitle: string
  canHelpTitle: string
  canHelp: string[]
  cannotArrangeTitle: string
  cannotArrange: string[]
  t: (key: string) => string
}) {
  return (
    <section id="in-cairo" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <SectionEyebrow>{arcEyebrow}</SectionEyebrow>

        {/* Arrival — a calm image alongside the on-the-day sequence. */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 overflow-hidden rounded-[16px] lg:order-1">
            <Image
              src="/images/about-digital.png"
              alt={arrivalImageAlt}
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
              {arrivalTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#495a73]">{arrivalIntro}</p>

            <ol className="relative mt-7 flex flex-col gap-4">
              <div
                className="absolute start-[15px] top-[16px] bottom-[16px] w-px bg-[#e3e8ef]"
                aria-hidden="true"
              />
              {ARRIVAL_STEP_KEYS.map((key, index) => (
                <li key={key} className="relative flex items-start gap-3.5">
                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0A2247] font-heading text-[0.82rem] text-white">
                    {index + 1}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[13.5px] font-semibold leading-[1.3] text-[#183668]">
                      {t(`arrival.steps.${key}.title`)}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] leading-[1.55] text-[#6a7d99]">
                      {t(`arrival.steps.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#183668]">
                {t("arrival.advanceNoteTitle")}
              </p>
              <p className="mt-2 text-[14px] leading-7 text-[#52647c]">{t("arrival.advanceNote")}</p>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-[#eef1f6] sm:my-14 lg:my-16" />

        {/* Planning your time in Cairo — generalised timing caution, with the
            implant case kept as a concrete worked example underneath. */}
        <div className="mx-auto max-w-[820px]">
          <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {planningTitle}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{planningBody}</p>
          <div className="mt-6 rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#183668]">
              {implantsEyebrow}
            </p>
            <p className="mt-2 text-[14px] leading-7 text-[#52647c]">{implantsBody}</p>
            <p className="mt-3 text-[14px] leading-7 text-[#52647c]">{implantsTimelineNote}</p>
          </div>
        </div>

        <div className="my-12 h-px bg-[#eef1f6] sm:my-14 lg:my-16" />

        {/* Coordinating your appointments. */}
        <div className="mx-auto max-w-[820px]">
          <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {coordinationTitle}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{coordinationBody}</p>
        </div>

        <div className="my-12 h-px bg-[#eef1f6] sm:my-14 lg:my-16" />

        {/* What we help with — and what you arrange yourself. */}
        <div className="mx-auto max-w-[820px]">
          <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
            {boundariesTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[12px] border border-[#e9e5dc] bg-[#fbfaf7] p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-red">
                {canHelpTitle}
              </p>
              <ul className="mt-3 grid gap-2">
                {canHelp.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-6 text-[#42546e]">
                    <Check size={15} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-[#e3e6ea] bg-white p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7d8aa0]">
                {cannotArrangeTitle}
              </p>
              <ul className="mt-3 grid gap-2">
                {cannotArrange.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-6 text-[#6a7688]">
                    <X size={15} className="mt-1 shrink-0 text-[#a7afbd]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Practical information — minimal orientation only, clearly framed
            as not a clinic service. Verified: visa2egypt.gov.eg is the
            official Egypt e-Visa portal (Ministry of Interior). */}
        <div className="mx-auto mt-12 max-w-[820px] sm:mt-14 lg:mt-16">
          <div className="rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5 sm:p-6">
            <h3 className="font-heading text-[1.1rem] text-[#183668]">{t("practicalInfo.title")}</h3>
            <p className="mt-2 text-[14px] leading-7 text-[#52647c]">{t("practicalInfo.body")}</p>
            <Link
              href="https://visa2egypt.gov.eg/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0A2247] underline decoration-[#c7cedb] underline-offset-[3px] transition-colors hover:decoration-[#0A2247]"
            >
              {t("practicalInfo.visaLinkLabel")}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-[12.5px] leading-6 text-[#8a94a6]">{t("practicalInfo.disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProseSection({
  bg,
  eyebrow,
  title,
  body,
  note,
}: {
  bg: "white" | "ivory"
  eyebrow: string
  title: string
  body: string
  note?: string
}) {
  return (
    <section
      className={`${bg === "ivory" ? "bg-[#fbfaf7]" : "bg-white"} py-14 sm:py-16 lg:py-20`}
    >
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
          {title}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.85] text-[#495a73]">{body}</p>
        {note ? (
          <p className="mt-4 rounded-[12px] border border-[#e9e5dc] bg-[#fffefa] p-5 text-[14px] leading-7 text-[#52647c]">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  )
}

// Native <details>/<summary> accordion — zero JavaScript, keyboard-native.
// FAQPage JSON-LD mirrors the visible questions/answers exactly.
function InternationalFaqSection({
  eyebrow,
  title,
  items,
  locale,
}: {
  eyebrow: string
  title: string
  items: { q: string; a: string }[]
  locale: string
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <section id="faq" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-[2rem] leading-[1.12] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
          {title}
        </h2>

        <div className="mt-8 border-t border-[#e9e5dc]">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-[#e9e5dc] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold leading-[1.4] text-[#183668] outline-none [&::-webkit-details-marker]:hidden focus-visible:text-[#0A2247]">
                {item.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#8a94a6] transition-transform duration-300 [details[open]_&]:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-[680px] text-[14.5px] leading-[1.8] text-[#52647c]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

async function RelatedSection({ locale }: { locale: AppLocale }) {
  const t = await getTranslations("internationalPatients.related")
  const links = [
    { label: t("treatments"), href: "/treatments" },
    { label: t("implants"), href: "/dental-implants" },
    { label: t("veneers"), href: "/porcelain-veneers" },
    { label: t("doctors"), href: "/#doctors" },
  ]

  // Journal articles have no Arabic translations yet, so the link is only
  // offered on the English page rather than pointing an Arabic reader to
  // English-only content.
  if (locale === "en") {
    links.push({ label: t("journal"), href: "/blog/what-to-expect-from-dental-implant-treatment" })
  }

  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">
          {t("title")}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-[42px] items-center rounded-[3px] border border-[#8a9ab3] px-5 text-[13.5px] font-medium text-[#183668] transition hover:bg-brand-bg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function InternationalPatientsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale as AppLocale)

  const t = await getTranslations("internationalPatients")

  const recordsItems = t.raw("records.items") as string[]
  const videoItems = t.raw("video.items") as string[]
  const canHelp = t.raw("helpBoundaries.canHelp") as string[]
  const cannotArrange = t.raw("helpBoundaries.cannotArrange") as string[]
  const faqItems = t.raw("faq.items") as { q: string; a: string }[]

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
          ctaPrimary={t("hero.ctaPrimary")}
          ctaSecondary={t("hero.ctaSecondary")}
          imageAlt={t("hero.imageAlt")}
        />

        <IntroSection
          eyebrow={t("intro.eyebrow")}
          title={t("intro.title")}
          body={t("intro.body")}
          imageAlt={t("intro.imageAlt")}
        />

        <InternationalPatientJourney />

        <BeforeYouTravelSection
          eyebrow={t("beforeTravel.eyebrow")}
          recordsTitle={t("records.title")}
          recordsBody={t("records.body")}
          recordsItems={recordsItems}
          recordsNote={t("records.note")}
          recordsWhatsappNote={t("records.whatsappNote")}
          videoTitle={t("video.title")}
          videoBody={t("video.body")}
          videoItems={videoItems}
          videoCaveatTitle={t("video.caveatTitle")}
          videoCaveat={t("video.caveat")}
        />

        <InCairoSection
          arcEyebrow={t("inCairo.eyebrow")}
          arrivalTitle={t("arrival.title")}
          arrivalIntro={t("arrival.intro")}
          arrivalImageAlt={t("arrival.imageAlt")}
          planningTitle={t("planningTime.title")}
          planningBody={t("planningTime.body")}
          implantsEyebrow={t("implantsExample.eyebrow")}
          implantsBody={t("implantsExample.body")}
          implantsTimelineNote={t("implantsExample.timelineNote")}
          coordinationTitle={t("coordination.title")}
          coordinationBody={t("coordination.body")}
          boundariesTitle={t("helpBoundaries.title")}
          canHelpTitle={t("helpBoundaries.canHelpTitle")}
          canHelp={canHelp}
          cannotArrangeTitle={t("helpBoundaries.cannotArrangeTitle")}
          cannotArrange={cannotArrange}
          t={t}
        />

        <ProseSection
          bg="ivory"
          eyebrow={t("afterReturn.eyebrow")}
          title={t("afterReturn.title")}
          body={t("afterReturn.body")}
        />

        <InternationalFaqSection
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          items={faqItems}
          locale={locale}
        />

        <RelatedSection locale={locale as AppLocale} />

        <InternationalEnquiryForm />
      </main>
      <Footer />
    </>
  )
}
