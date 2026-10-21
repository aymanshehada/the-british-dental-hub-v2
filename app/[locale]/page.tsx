import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/home/Hero"
import WhyBdh from "@/components/home/WhyBdh"
import OurStory from "@/components/home/OurStory"
import PatientJourneyStrip from "@/components/home/PatientJourneyStrip"
import Treatments from "@/components/home/Treatments"
import Doctors from "@/components/home/Doctors"
import CaseStories from "@/components/home/CaseStories"
import JournalPreview from "@/components/home/JournalPreview"
import CTA from "@/components/home/CTA"
import { InternationalPatientsPrompt } from "@/components/home/InternationalPatientsPrompt"
import type { AppLocale } from "@/i18n/routing"
import { getLocaleAlternates } from "@/lib/seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thebritishdentalhub.com"

// Without this the homepage inherited the root layout's English title,
// description and canonical, so /ar declared the English homepage as its
// canonical and carried no hreflang alternates in the HTML.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: "home.meta" })
  const title = t("title")
  const description = t("description")
  const alternates = getLocaleAlternates("/", locale as AppLocale)

  return {
    // `absolute` so the root layout's "%s | The British Dental Hub" template
    // is not appended to a title that already contains the brand.
    title: { absolute: title },
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical as string,
      siteName: "The British Dental Hub",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [{ url: "/images/hero-clinic.png", width: 1536, height: 1024, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-clinic.png"],
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const tMeta = await getTranslations("home.meta")

  // WebSite entity, homepage only. The clinic (Dentist) entity it publishes
  // for is declared once in the root layout under the same @id.
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: "The British Dental Hub",
    alternateName: "BDH",
    description: tMeta("description"),
    inLanguage: ["en", "ar"],
    publisher: { "@id": `${siteUrl}/#clinic` },
  }

  return (
    <div className="min-h-screen bg-brand-bg text-[#0A2247]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd).replace(/</g, "\\u003c") }}
      />
      <TopBar />
      <Navbar />

      <main id="insights">
        <Hero />
        <WhyBdh />
        <OurStory />
        <PatientJourneyStrip />
        <Treatments />
        <Doctors />
        <CaseStories />
        <JournalPreview locale={locale as AppLocale} />
        <CTA />
      </main>

      <InternationalPatientsPrompt />

      <Footer />
    </div>
  )
}
