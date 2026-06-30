"use client"

import { type MouseEvent, useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
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

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(href)
    }
    setOpen(false)
  }

  const navClassName = cn(
    "relative mx-auto flex items-center justify-between px-8 xl:px-10 transition-all duration-350 ease-out",
    isScrolled
      ? "h-[76px] rounded-full border border-primary/20 bg-[#07152C]/95 shadow-[0_32px_76px_rgba(0,0,0,0.24)] backdrop-blur-xl"
      : "h-[92px] bg-transparent shadow-none border-transparent backdrop-blur-none",
  )

  const logoClassName = cn(
    "block transition-transform duration-300 ease-out",
    isScrolled ? "scale-[0.95]" : "scale-100",
  )

  const logoImageClassName = cn(
    "h-auto object-contain transition-all duration-350 ease-out",
    isScrolled ? "w-[420px] lg:w-[390px]" : "w-[520px] lg:w-[490px]",
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className={navClassName}>
        <div className="flex items-center h-full">
          <a href="#about" className={logoClassName} onClick={handleNavClick("#about")}> 
            <Image
              src="/images/logo-horizontal.png"
              alt="The British Dental Hub"
              width={490}
              height={98}
              priority
              quality={100}
              className={cn(
                logoImageClassName,
                "max-w-[calc(100vw-92px)] sm:max-w-[calc(100vw-104px)]",
              )}
            />
          </a>
        </div>

        <div className="hidden lg:block absolute left-[calc(50%+24px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pl-[32px] -ml-[32px]">
          <ul className="flex items-center gap-[44px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "group relative inline-flex items-center text-sm font-light uppercase tracking-[0.18em] transition-colors duration-300 ease-out hover:text-primary",
                      isActive ? "text-primary" : "text-foreground/80",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-1/2 top-full mt-2 h-[1.5px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out",
                        isActive && "w-full",
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="ml-auto hidden items-center h-full pr-10 lg:flex lg:pr-10">
          <Button
            className="rounded-none bg-primary px-[34px] lg:px-[36px] text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            size="lg"
          >
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-primary/10 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden lg:hidden transition-all duration-350 ease-out",
          open
            ? "max-h-[640px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-3 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="border-t border-primary/10 bg-[#07152C]/95 backdrop-blur-xl shadow-2xl">
          <ul className="flex flex-col gap-8 px-5 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "block text-base font-light uppercase tracking-[0.18em] transition-colors duration-300 ease-out",
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <Button className="w-full rounded-none bg-primary text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90">
                Book a Consultation
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
