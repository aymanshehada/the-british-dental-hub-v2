import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, PhoneCall } from "lucide-react"

export default function Footer() {
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Doctors", href: "#doctors" },
    { label: "Patient Stories", href: "#patient-stories" },
    { label: "Gallery", href: "#gallery" },
  ]

  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/share/1BuVGxN8H3/", shortLabel: "Fb" },
    { label: "Instagram", href: "https://www.instagram.com/thebritishdentalhub?igsh=ODl5OXZ0cjdxMzg2", shortLabel: "Ig" },
    { label: "WhatsApp", href: "https://wa.me/201556887765", shortLabel: "Wa" },
  ]

  return (
    <footer className="bg-[#0A2247] text-white">
      <div className="mx-auto max-w-[1140px] px-4 py-12 sm:px-6 lg:px-0 lg:py-14">
        <div className="mb-10 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-red">The British Dental Hub</p>
              <h2 className="mt-4 max-w-[560px] font-heading text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3rem]">
                Luxury dental care with British-inspired standards and modern clinical precision.
              </h2>
            </div>

            <Image
              src="/images/logo-horizontal.png"
              alt="The British Dental Hub"
              width={520}
              height={112}
              className="h-12 w-auto max-w-full sm:h-14"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.65fr_0.9fr]">
          <div>
            <p className="max-w-[430px] text-base leading-8 text-white/72">
              A premium New Cairo dental clinic delivering British-inspired standards of care, elegant patient journeys, and digitally guided treatment planning.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, shortLabel }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 px-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88 transition hover:bg-white/10 hover:text-brand-red"
                >
                  {shortLabel}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Navigate</p>
            <div className="mt-6 grid gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/72 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Contact</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              <div className="flex items-start gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4">
                <MapPin size={18} className="mt-1 text-[#D4AF37]" />
                <span>Gateway Mall, D1 Clinics, Clinic 226, New Cairo, Egypt</span>
              </div>
              <Link href="tel:+201556887765" className="flex items-center gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4 transition hover:text-white">
                <PhoneCall size={18} className="text-[#D4AF37]" />
                <span>+20 155 688 7765</span>
              </Link>
              <Link href="mailto:info@thebritishdentalhub.com" className="flex items-center gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4 transition hover:text-white">
                <Mail size={18} className="text-[#D4AF37]" />
                <span>info@thebritishdentalhub.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/52">
          © 2026 The British Dental Hub. British-inspired dental care in New Cairo.
        </div>
      </div>
    </footer>
  )
}