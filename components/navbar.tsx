"use client"

import { type MouseEvent, useEffect, useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/201556887765", icon: MessageCircle },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#about")

  useEffect(() => {
    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 80)

      const sections = ["about", "treatments", "results", "journal", "contact"]

      const currentSection = sections.reduce<string | null>((current, id) => {
        const section = document.getElementById(id)
        if (!section) return current

        const top = section.getBoundingClientRect().top
        return top <= 120 ? id : current
      }, null)

      setActiveSection(currentSection ? `#${currentSection}` : "#about")
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })

    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(href)
    }
    setOpen(false)
  }

  const navClassName = cn(
    "relative mx-auto flex h-[88px] items-center justify-between px-4 sm:px-6 lg:px-10",
    "border-b border-[#E3E8EF] bg-white shadow-[0_10px_35px_rgba(10,34,71,0.08)]",
    isScrolled && "shadow-[0_12px_35px_rgba(10,34,71,0.12)]",
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex h-10 items-center justify-between bg-[#0A2247] px-4 text-[13px] text-white/90 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-white" />
            New Cairo, Egypt
          </span>
          <span className="flex items-center gap-2">
            <Phone className="size-4 text-white" />
            +20 155 688 7765
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:text-white/80"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>
      </div>

      <nav aria-label="Primary" className={navClassName}>
        <div className="flex items-center">
          <a href="#about" className="block" onClick={handleNavClick("#about")}>
            <Image
              src="/images/logo-horizontal.png"
              alt="The British Dental Hub"
              width={320}
              height={60}
              priority
              quality={100}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-7 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "relative inline-flex items-center text-sm font-medium uppercase tracking-[0.16em] text-[#102542] transition-colors hover:text-[#0A2247]",
                      isActive ? "text-[#0A2247]" : "text-[#5F6B7A]",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="hidden items-center lg:flex">
          <Button
            type="button"
            onClick={handleNavClick("#contact")}
            className="rounded-[12px] bg-[#0A2247] px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#081D3B]"
          >
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0A2247] transition-colors hover:bg-[#EEF2F6] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out lg:hidden",
          open ? "max-h-[420px] opacity-100 translate-y-0" : "pointer-events-none max-h-0 opacity-0 -translate-y-3",
        )}
        aria-hidden={!open}
      >
        <div className="border-t border-[#E3E8EF] bg-white shadow-[0_10px_35px_rgba(10,34,71,0.08)]">
          <ul className="flex flex-col gap-6 px-4 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "block text-base font-medium uppercase tracking-[0.16em] transition-colors",
                      isActive ? "text-[#0A2247]" : "text-[#5F6B7A] hover:text-[#0A2247]",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <Button
                type="button"
                onClick={handleNavClick("#contact")}
                className="w-full justify-center rounded-[12px] bg-[#0A2247] text-sm font-semibold text-white hover:bg-[#081D3B]"
              >
                Book Appointment
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
