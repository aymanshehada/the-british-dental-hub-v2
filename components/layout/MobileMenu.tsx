"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, MessageCircle } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"

interface NavItem {
  label: string
  href: string
}

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
  navigation: NavItem[]
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

// A premium, accessible mobile navigation panel: fixed below the sticky
// header, focus-trapped and scroll-locked while open, closed via Escape,
// the header's own toggle button, or a nav/CTA selection. Fully mirrors
// under RTL through logical properties — no separate Arabic layout.
export function MobileMenu({
  id,
  isOpen,
  onClose,
  navigation,
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
          <nav className="mx-auto flex min-h-full max-w-[640px] flex-col px-6 py-8 sm:px-8">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-[10px] px-4 py-4 text-[1.05rem] font-medium text-[#233b63] transition-colors duration-200 ease-out hover:bg-brand-bg hover:text-[#0A2247] focus-visible:bg-brand-bg focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-[#e9edf3]" />

            <div className="flex items-center justify-between rounded-[10px] px-4 py-3">
              <span className="text-[0.95rem] font-medium text-[#5f6f88]">{languageLabel}</span>
              <LanguageSwitcher />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={bookHref}
                onClick={onBookClick}
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[3px] bg-[#0A2247] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(10,34,71,0.12)] transition-all duration-300 ease-out hover:bg-[#123164] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/20 focus-visible:ring-offset-2"
              >
                <CalendarDays size={16} />
                {bookLabel}
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[3px] border border-[#7a8ca9] bg-white px-6 text-[15px] font-semibold text-[#233b63] transition-all duration-300 ease-out hover:bg-brand-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/10 focus-visible:ring-offset-2"
              >
                <MessageCircle size={16} />
                {whatsappLabel}
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
