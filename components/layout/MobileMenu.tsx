"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, ChevronDown, MapPin, MessageCircle, Navigation } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"

interface NavItem {
  label: string
  href: string
}

// The Treatments row opens a short list of every service so a visitor can
// jump straight to the one they want without leaving the menu first.
interface TreatmentsMenu {
  label: string
  allLabel: string
  allHref: string
  items: NavItem[]
}

// Quick "how do I get there" card: the address plus a one-tap Google Maps link.
interface LocationCard {
  label: string
  address: string
  directionsLabel: string
  directionsHref: string
}

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
  navigation: NavItem[]
  treatments: TreatmentsMenu
  location: LocationCard
  menuLabel: string
  languageLabel: string
  bookHref: string
  bookLabel: string
  onBookClick: () => void
  whatsappHref: string
  whatsappLabel: string
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const rowClass =
  "flex w-full items-center justify-between rounded-[10px] px-3 py-3 text-[1.02rem] font-medium text-[#233b63] transition-colors duration-200 ease-out hover:bg-brand-bg hover:text-[#0A2247] focus-visible:bg-brand-bg focus-visible:outline-none"

// A premium, accessible mobile navigation panel: fixed below the sticky
// header, focus-trapped and scroll-locked while open, closed via Escape,
// the header's own toggle button, or a nav/CTA selection. Laid out to fit one
// phone screen (compact rows, a collapsible treatments list, the location and
// both contact actions together) and mirrored under RTL through logical
// properties — no separate Arabic layout.
export function MobileMenu({
  id,
  isOpen,
  onClose,
  navigation,
  treatments,
  location,
  menuLabel,
  languageLabel,
  bookHref,
  bookLabel,
  onBookClick,
  whatsappHref,
  whatsappLabel,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const treatmentsPanelId = `${id}-treatments`

  // `onClose` is a fresh inline function on every parent render. Reading it
  // through a ref (updated on every render, but never used as an effect
  // dependency) keeps the focus-trap effect below from tearing down and
  // re-running on unrelated re-renders while the menu is open — it should
  // only run once per actual open/close transition.
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  // The header is `position: sticky`, so its distance from the viewport
  // top varies with scroll position (e.g. it sits below the TopBar until
  // the page has scrolled past it). Measure that distance directly rather
  // than assuming a fixed pixel offset, so the panel always starts flush
  // against the header's actual current bottom edge.
  const [topOffset, setTopOffset] = useState(0)

  useLayoutEffect(() => {
    if (!isOpen) return

    const measure = () => {
      const header = document.querySelector("header")
      if (header) setTopOffset(header.getBoundingClientRect().bottom)
    }

    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [isOpen])

  // Always reopen with the treatments list collapsed.
  useEffect(() => {
    if (!isOpen) setTreatmentsOpen(false)
  }, [isOpen])

  // Body scroll lock while the panel is open.
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // Focus management: move focus into the panel on open, trap Tab within
  // it, close on Escape, and restore focus to whatever triggered it.
  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const panel = panelRef.current
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
    firstFocusable?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current()
        return
      }

      if (event.key !== "Tab" || !panel) return

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label={menuLabel}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ top: topOffset }}
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white xl:hidden"
        >
          <nav className="mx-auto flex min-h-full max-w-[640px] flex-col px-5 pb-5 pt-3 sm:px-8 sm:pt-6">
            <ul className="flex flex-col">
              <li>
                <button
                  type="button"
                  aria-expanded={treatmentsOpen}
                  aria-controls={treatmentsPanelId}
                  onClick={() => setTreatmentsOpen((open) => !open)}
                  className={`${rowClass} ${treatmentsOpen ? "bg-brand-bg text-[#0A2247]" : ""}`}
                >
                  {treatments.label}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-[#697b95] transition-transform duration-200 ${treatmentsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {treatmentsOpen && (
                    <motion.div
                      id={treatmentsPanelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 px-1 pb-3 pt-2">
                        {treatments.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="flex min-h-11 items-center rounded-[10px] border border-[#e6ebf2] bg-[#f8f9fb] px-3 py-2 text-[13.5px] font-medium leading-[1.25] text-[#233b63] transition-colors duration-200 hover:border-[#d3dbe7] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20"
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href={treatments.allHref}
                          onClick={onClose}
                          className="col-span-2 flex min-h-10 items-center justify-center rounded-[10px] text-[13.5px] font-semibold text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20"
                        >
                          {treatments.allLabel}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={onClose} className={rowClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4">
              <div className="flex items-center gap-3 rounded-[12px] border border-[#e6ebf2] bg-[#f8f9fb] p-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-red shadow-[0_1px_3px_rgba(10,34,71,0.08)]">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#697b95] rtl:tracking-normal">
                    {location.label}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-[1.35] text-[#233b63]">{location.address}</p>
                </div>
                <a
                  href={location.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-[8px] bg-[#0A2247] px-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/30 focus-visible:ring-offset-2"
                >
                  <Navigation size={14} aria-hidden="true" />
                  {location.directionsLabel}
                </a>
              </div>

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[0.9rem] font-medium text-[#5f6f88]">{languageLabel}</span>
                <LanguageSwitcher />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  href={bookHref}
                  onClick={onBookClick}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-[#0A2247] px-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.12)] transition-all duration-300 ease-out hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
                >
                  <CalendarDays size={16} aria-hidden="true" />
                  {bookLabel}
                </Link>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-[#7a8ca9] bg-white px-3 text-[14px] font-semibold text-[#233b63] transition-all duration-300 ease-out hover:bg-brand-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {whatsappLabel}
                </Link>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
