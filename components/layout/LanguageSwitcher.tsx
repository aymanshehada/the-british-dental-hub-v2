"use client"

import { useLocale } from "next-intl"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "@/i18n/navigation"

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const nextLocale = locale === "en" ? "ar" : "en"

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={nextLocale === "ar" ? "Switch to Arabic" : "Switch to English"}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full border border-[#d8dee8] px-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#233b63] transition-colors duration-200 ease-out hover:border-brand-red/40 hover:text-brand-red ${className ?? ""}`}
    >
      <Globe size={14} strokeWidth={1.8} />
      {nextLocale === "ar" ? "العربية" : "EN"}
    </button>
  )
}
