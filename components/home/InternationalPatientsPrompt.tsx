"use client"

import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { Link } from "@/i18n/navigation"

const DISMISS_KEY = "bdh:intl-pathway"
const ASSET_DIR = "/images/international"

// All artwork below is approved, static, and used as supplied — no redrawing,
// no SVG re-interpretation, no rotation/mirroring. EN and AR each get their
// own correctly-oriented plane and caption image; nothing is flipped in CSS.
const PLANE_EN = { src: `${ASSET_DIR}/international-plane-en.png`, width: 1536, height: 1024 }
const PLANE_AR = { src: `${ASSET_DIR}/international-plane-ar.png`, width: 1536, height: 1024 }
const CAPTION_EN = { src: `${ASSET_DIR}/international-caption-en.png`, width: 556, height: 242 }
const CAPTION_AR = { src: `${ASSET_DIR}/international-caption-ar.png`, width: 506, height: 242 }
const CLOUDS = { src: `${ASSET_DIR}/international-clouds.png`, width: 593, height: 203 }
const WATERMARK = { src: `${ASSET_DIR}/international-cairo-watermark.png`, width: 1536, height: 306 }

// The International Patients invitation for the homepage.
//
//  - lg and up : an open, always-visible editorial card (no hover needed to
//                discover or use it — it's a real Link the whole time). The
//                approved plane/caption/cloud/watermark artwork is composed
//                as a single still illustration above and inside the card —
//                nothing in it animates. Hover/focus only add a small CSS
//                elevation + shadow refinement, gated behind
//                `motion-reduce:` so it disappears under reduced motion.
//  - below lg  : a simplified compact card using the same artwork at a
//                smaller scale, dismissible.
//
// EN and AR use their own correctly-oriented plane/caption assets and their
// own hand-tuned offsets below — not one layout mirrored via a transform.
//
// The whole surface reveals once the visitor has scrolled a little past the
// Hero rather than on load: the Hero's own frosted card keeps a physical
// left position in both directions (untouched here), so an end-anchored
// card arriving immediately would sit on top of it in the Arabic layout.
export function InternationalPatientsPrompt() {
  const t = useTranslations("home.internationalPathway")
  const locale = useLocale()
  const isRtl = locale === "ar"

  const [pastHero, setPastHero] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "dismissed") setDismissed(true)
    } catch {}

    const onScroll = () => {
      const hero = document.getElementById("home")
      const threshold = hero ? hero.offsetHeight * 0.55 : 360
      setPastHero(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    // Mirror the mobile menu's body scroll-lock so neither surface is ever
    // left sitting under the open navigation panel (the hamburger menu is
    // reachable from lg up to xl, overlapping the desktop card's own range).
    const syncMenu = () => setMenuOpen(document.body.style.overflow === "hidden")
    syncMenu()
    const bodyObserver = new MutationObserver(syncMenu)
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      bodyObserver.disconnect()
    }
  }, [])

  // One dismissal hides both the desktop card and the mobile card for the
  // rest of the session; the page stays reachable from the nav and footer.
  const dismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(DISMISS_KEY, "dismissed")
    } catch {}
  }

  const desktopShown = pastHero && !menuOpen
  const mobileShown = pastHero && !menuOpen
  const accessibleName = `${t("eyebrow")} — ${t("question")} ${t("cta")}`

  const plane = isRtl ? PLANE_AR : PLANE_EN
  const caption = isRtl ? CAPTION_AR : CAPTION_EN

  if (dismissed) return null

  return (
    <>
      {/* ==== lg and up: open editorial invitation, visible without hover ==== */}
      <div
        className={`fixed end-6 top-1/2 z-30 hidden w-[350px] -translate-y-1/2 transition-opacity duration-300 lg:block ${
          desktopShown ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!desktopShown}
      >
        <div className={`relative ${isRtl ? "pt-[104px]" : "pt-24"}`}>
          {/* Clouds: a quiet atmospheric wisp behind the plane, never behind
              the card's own text. EN sits tucked under the plane's tail; AR
              sits a little higher and further out, tuned independently for
              where the AR plane and caption actually land. */}
          <Image
            {...CLOUDS}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute h-auto opacity-70 ${
              isRtl ? "end-6 top-0 w-[190px]" : "end-[-10px] top-2 w-[210px]"
            }`}
          />

          {/* Editorial caption — supplied artwork, used as-is. */}
          <Image
            {...caption}
            alt={isRtl ? "من أي مكان في العالم، إلى القاهرة." : "From wherever you are, to Cairo."}
            className={`pointer-events-none absolute top-0 h-auto ${
              isRtl ? "end-0 w-[150px]" : "end-3 w-[160px]"
            }`}
          />

          {/* Airplane — supplied artwork, used exactly as oriented; no
              rotation, no mirroring, no animation. It overlaps the card's
              own upper corner so the two read as one composed illustration. */}
          <Image
            {...plane}
            alt=""
            aria-hidden="true"
            priority={false}
            className={`pointer-events-none absolute z-10 h-auto drop-shadow-[0_10px_14px_rgba(10,34,71,0.22)] ${
              isRtl ? "end-[-6px] top-9 w-[172px]" : "end-[-8px] top-11 w-[184px]"
            }`}
          />

          {/* Card: open by default, a real Link the whole time. Hover/focus
              only add a small CSS elevation + shadow refinement — nothing
              about visibility depends on interaction, and reduced motion
              simply skips the transition (the artwork itself never moves). */}
          <Link
            href="/international-patients"
            aria-label={accessibleName}
            tabIndex={desktopShown ? undefined : -1}
            className="relative block overflow-hidden rounded-[16px] border border-[#e6e0d1] bg-[#fffdf8] shadow-[0_18px_40px_-18px_rgba(10,34,71,0.45)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_28px_56px_-20px_rgba(10,34,71,0.4)] focus-visible:-translate-y-1 focus-visible:shadow-[0_28px_56px_-20px_rgba(10,34,71,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/30 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {/* Cairo watermark — supplied artwork, used as-is, sitting low
                in the card behind the text. */}
            <Image
              {...WATERMARK}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full object-cover object-bottom opacity-60"
            />

            <div className="relative px-5 pb-5 pt-11">
              <span className="flex items-center gap-2">
                <span className="h-px w-5 shrink-0 bg-brand-red" aria-hidden="true" />
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-red">
                  {t("eyebrow")}
                </span>
              </span>

              <span
                className={`mt-3 block font-heading text-[1.2rem] text-[#0A2247] ${
                  isRtl ? "leading-[1.5]" : "leading-[1.35]"
                }`}
              >
                {t("question")}
              </span>

              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#233b63]">
                {t("cta")}
                <ArrowRight size={14} className="rtl:rotate-180" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Close control: a sibling of the card link (a button can't live
              inside it), pinned to the card's start-side top corner — the
              plane and caption artwork sit on the end side in both
              directions, so this corner is free. */}
          <button
            type="button"
            onClick={dismiss}
            aria-label={t("dismiss")}
            title={t("dismiss")}
            tabIndex={desktopShown ? undefined : -1}
            className={`absolute start-2.5 z-20 inline-flex size-8 items-center justify-center rounded-full border border-[#e6e0d1] bg-white/95 text-[#233b63] shadow-[0_2px_6px_rgba(10,34,71,0.12)] transition-colors hover:bg-white hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/30 ${
              isRtl ? "top-[114px]" : "top-[106px]"
            }`}
          >
            <X size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ==== below lg: simplified compact card, same artwork, dismissible ==== */}
      <div
        className={`fixed end-4 z-30 bottom-[calc(6.25rem+env(safe-area-inset-bottom))] transition-opacity duration-300 sm:bottom-[calc(8.5rem+env(safe-area-inset-bottom))] lg:hidden ${
          mobileShown ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileShown}
      >
        <div className="relative w-[min(88vw,300px)] overflow-hidden rounded-[14px] border border-[#e6e0d1] bg-[#fffdf8] shadow-[0_14px_30px_-12px_rgba(10,34,71,0.32)]">
          <Image
            {...WATERMARK}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-9 w-full object-cover object-bottom opacity-50"
          />

          <Link
            href="/international-patients"
            tabIndex={mobileShown ? undefined : -1}
            aria-label={accessibleName}
            className="relative block px-3.5 pb-3 pt-2.5 pe-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/25"
          >
            <div className="flex items-center gap-1.5">
              <Image
                {...caption}
                alt={isRtl ? "من أي مكان في العالم، إلى القاهرة." : "From wherever you are, to Cairo."}
                className="h-auto w-[92px] shrink-0"
              />
              <Image {...plane} alt="" aria-hidden="true" className="-ms-2 h-auto w-[62px] shrink-0" />
            </div>

            <span className="relative mt-1.5 flex items-center justify-between gap-2">
              <span className="min-w-0">
                <span className="block text-[9.5px] font-semibold uppercase tracking-[0.13em] text-brand-red">
                  {t("eyebrow")}
                </span>
                <span className="block truncate font-heading text-[13px] leading-tight text-[#0A2247]">
                  {t("question")}
                </span>
              </span>
              <ArrowRight size={14} className="shrink-0 text-[#233b63] rtl:rotate-180" aria-hidden="true" />
            </span>
          </Link>

          <button
            type="button"
            onClick={dismiss}
            aria-label={t("dismiss")}
            title={t("dismiss")}
            tabIndex={mobileShown ? undefined : -1}
            className="absolute end-1 top-1 z-10 inline-flex size-8 items-center justify-center rounded-full border border-[#e6e0d1] bg-white/95 text-[#233b63] shadow-[0_1px_4px_rgba(10,34,71,0.12)] transition-colors hover:bg-white hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2247]/30"
          >
            <X size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}
