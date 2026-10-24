"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { MessageCircle, Phone } from "lucide-react"

// Persistent WhatsApp + Phone actions, desktop and mobile. `hidden` is driven
// by the mobile menu's open state so the two never compete for space or
// overlap the menu's own contact CTAs. While hidden the buttons are also
// pulled out of the tab order (aria-hidden + tabIndex=-1) — opacity/pointer-
// events alone would still leave them reachable by keyboard.
//
// Also self-hides while the Hero section (#home) is in view: the Hero
// already has its own, larger Book Appointment + WhatsApp CTAs, and on a
// typical phone viewport the floating bar would otherwise render directly
// on top of them at first paint.
export function FloatingContact({ hidden }: { hidden: boolean }) {
  const t = useTranslations("common.floatingContact")
  const [overHero, setOverHero] = useState(true)
  const [overContact, setOverContact] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("home")
    if (!hero) {
      setOverHero(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // The booking section and the footer already carry the phone number, the
  // WhatsApp link and the directions, and on a phone the floating buttons
  // would otherwise sit on top of that text.
  useEffect(() => {
    const targets: Element[] = []
    const contact = document.getElementById("contact")
    const footer = document.querySelector("footer")
    if (contact) targets.push(contact)
    if (footer) targets.push(footer)
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setOverContact(visible.size > 0)
    })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const isHidden = hidden || overHero || overContact

  return (
    <div
      className={`fixed end-4 z-40 flex gap-2 bottom-[calc(1rem+env(safe-area-inset-bottom))] transition-all duration-200 sm:end-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:flex-col ${isHidden ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"}`}
    >
      <a
        href="https://wa.me/201556887765"
        target="_blank"
        rel="noreferrer"
        aria-label={t("whatsappAria")}
        aria-hidden={isHidden}
        tabIndex={isHidden ? -1 : undefined}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(10,34,71,0.2)] transition hover:scale-[1.03] sm:w-12 sm:px-0"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span className="sm:sr-only">{t("whatsappLabel")}</span>
      </a>
      <a
        href="tel:+201556887765"
        aria-label={t("callAria")}
        aria-hidden={isHidden}
        tabIndex={isHidden ? -1 : undefined}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0A2247] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(10,34,71,0.2)] ring-1 ring-white/70 transition hover:scale-[1.03] sm:w-12 sm:px-0"
      >
        <Phone size={19} aria-hidden="true" />
        <span className="sm:sr-only">{t("callLabel")}</span>
      </a>
    </div>
  )
}
