"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { CalendarDays, Menu, X } from "lucide-react"
import { Link, usePathname } from "@/i18n/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { MobileMenu } from "./MobileMenu"

const WHATSAPP_HREF = "https://wa.me/201556887765"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations("common.nav")

  const navigation = [
    { label: t("home"), href: "/#home" },
    { label: t("about"), href: "/#about" },
    { label: t("treatments"), href: "/treatments" },
    { label: t("doctors"), href: "/#doctors" },
    { label: t("patientStories"), href: "/#patient-stories" },
    { label: t("gallery"), href: "/#gallery" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/#contact" },
  ]

  const handleContactClick = () => {
    if (pathname !== "/") {
      return
    }

    const contactSection = document.getElementById("contact")

    if (!contactSection) {
      return
    }

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", "#contact")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEF2F6] bg-white shadow-[0_6px_18px_rgba(10,34,71,0.045)]">
      <div className="mx-auto flex h-[104px] w-[min(1600px,96vw)] items-center justify-between gap-10 px-6 sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="-ms-2 shrink-0 lg:-ms-12 xl:-ms-16 2xl:-ms-[72px]">
          <Image
            src="/images/logo-horizontal.png"
            alt="The British Dental Hub"
            width={320}
            height={160}
            className="h-[clamp(100px,24vw,140px)] w-auto sm:h-[202px] lg:h-[216px]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center self-stretch px-6 2xl:px-10 xl:flex">
          <div className="flex h-full items-center gap-8 2xl:gap-10 text-[13px] font-semibold tracking-[0.03em] text-[#233b63]">
            {navigation.map((item) => (
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

        <div className="relative z-10 me-[-42px] hidden shrink-0 items-center self-center gap-3 sm:flex xl:me-[-56px] 2xl:me-[-64px]">
          <LanguageSwitcher />
          <Link
            href="/#contact"
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
        navigation={navigation}
        menuLabel={t("menu")}
        languageLabel={t("language")}
        bookHref="/#contact"
        bookLabel={t("bookAppointment")}
        onBookClick={() => {
          setIsOpen(false)
          handleContactClick()
        }}
        whatsappHref={WHATSAPP_HREF}
        whatsappLabel={t("chatWhatsapp")}
      />
    </header>
  )
}
