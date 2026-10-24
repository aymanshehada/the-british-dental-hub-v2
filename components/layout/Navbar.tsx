"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { CalendarDays, Menu, X } from "lucide-react"
import { Link, usePathname } from "@/i18n/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { MobileMenu } from "./MobileMenu"
import { FloatingContact } from "./FloatingContact"

const WHATSAPP_HREF = "https://wa.me/201556887765"
const DIRECTIONS_HREF = "https://maps.app.goo.gl/26faiYRKD64g9f729"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("common.nav")
  const tFloat = useTranslations("common.floatingContact")

  // `mobileOnly` items appear in the slide-out menu but not the desktop bar —
  // the desktop bar is already at capacity, so "International Patients" is
  // surfaced there via the footer and the mobile menu instead.
  const navigation: { label: string; href: string; mobileOnly?: boolean }[] = [
    { label: t("home"), href: "/#home" },
    { label: t("about"), href: "/#about" },
    { label: t("treatments"), href: "/treatments" },
    { label: t("doctors"), href: "/#doctors" },
    { label: t("patientStories"), href: "/#patient-stories" },
    { label: t("blog"), href: "/blog" },
    { label: t("internationalPatients"), href: "/international-patients", mobileOnly: true },
    { label: t("contact"), href: "/#contact" },
  ]

  const desktopNavigation = navigation.filter((item) => !item.mobileOnly)

  // The phone menu is deliberately short: Home is the logo, About lives in the
  // page itself, and Treatments becomes an expandable list of every service.
  const mobileNavigation = navigation.filter(
    (item) => !["/#home", "/#about", "/treatments"].includes(item.href),
  )

  const tServices = useTranslations("treatments.services")
  const treatmentsMenu = {
    label: t("treatments"),
    allLabel: t("allTreatments"),
    allHref: "/treatments",
    items: [
      { key: "dentalImplants", href: "/dental-implants" },
      { key: "porcelainVeneers", href: "/porcelain-veneers" },
      { key: "orthodontics", href: "/orthodontics" },
      { key: "rootCanalTreatment", href: "/root-canal-treatment" },
      { key: "gumTreatment", href: "/gum-treatment" },
      { key: "childrensDentistry", href: "/children-dentistry" },
      { key: "checkUpCleaning", href: "/check-up-cleaning" },
      { key: "teethWhitening", href: "/teeth-whitening" },
    ].map(({ key, href }) => ({ label: tServices(`${key}.title`), href })),
  }

  // The header CTA normally books via the homepage Contact section, but the
  // International Patients page has its own enquiry section — sending that
  // page's visitors to the homepage instead would be a routing error, so the
  // CTA target and its in-page scroll behaviour both switch based on route.
  const isInternationalPatients = pathname === "/international-patients"
  const bookHref = isInternationalPatients ? "/international-patients#enquiry" : "/#contact"

  const handleContactClick = () => {
    const targetId = isInternationalPatients ? "enquiry" : pathname === "/" ? "contact" : null

    if (!targetId) {
      return
    }

    const targetSection = document.getElementById(targetId)

    if (!targetSection) {
      return
    }

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${targetId}`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEF2F6] bg-white shadow-[0_6px_18px_rgba(10,34,71,0.045)]">
      <div className="mx-auto flex h-[76px] w-[min(1600px,96vw)] sm:h-[104px] items-center justify-between gap-10 px-6 sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="-ms-2 shrink-0 lg:-ms-12 xl:-ms-16 2xl:-ms-[72px]">
          <Image
            src="/images/logo-horizontal.webp"
            alt="The British Dental Hub"
            width={320}
            height={160}
            className="h-[68px] w-auto sm:h-[150px] md:h-[175px] lg:h-[200px]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center self-stretch px-2 2xl:px-10 xl:flex">
          <div className="flex h-full items-center gap-4 2xl:gap-10 text-[13px] font-semibold tracking-[0.03em] text-[#233b63]">
            {desktopNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative inline-flex h-full items-center whitespace-nowrap py-1 transition-colors duration-300 ease-out hover:text-[#0A2247] after:absolute after:bottom-[30px] after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#0A2247] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="relative z-10 me-[-42px] hidden shrink-0 items-center self-center gap-3 sm:flex xl:me-[-72px] 2xl:me-[-64px]">
          <LanguageSwitcher />
          <Link
            href={bookHref}
            onClick={handleContactClick}
            className="inline-flex h-[48px] items-center gap-2 rounded-[3px] bg-[#0A2247] px-7 text-[14px] font-semibold text-white shadow-[0_2px_6px_rgba(10,34,71,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164] hover:shadow-[0_6px_16px_rgba(10,34,71,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
          >
            <CalendarDays size={16} />
            {t("bookAppointment")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8dee8] text-[#0A2247] transition-colors duration-300 hover:bg-brand-bg xl:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <MobileMenu
        id="mobile-nav-panel"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navigation={mobileNavigation}
        treatments={treatmentsMenu}
        location={{
          label: t("location"),
          address: t("locationAddress"),
          directionsLabel: t("getDirections"),
          directionsHref: DIRECTIONS_HREF,
        }}
        menuLabel={t("menu")}
        languageLabel={t("language")}
        bookHref={bookHref}
        bookLabel={t("bookAppointment")}
        onBookClick={() => {
          setIsOpen(false)
          handleContactClick()
        }}
        whatsappHref={WHATSAPP_HREF}
        whatsappLabel={tFloat("whatsappLabel")}
      />
      <FloatingContact hidden={isOpen} />
    </header>
  )
}
