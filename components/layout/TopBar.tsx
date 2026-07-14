import Link from "next/link"
import { MapPin, MessageCircle, Phone } from "lucide-react"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[13px] w-[13px] fill-current">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.3 1.4-1.3H16V5.6c-.5-.1-1.3-.2-2.1-.2-2.1 0-3.5 1.3-3.5 3.7v2.1H8V14h2.4v7h3.1Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[13px] w-[13px] fill-none stroke-current" strokeWidth="1.8">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.3" cy="6.8" r="0.8" className="fill-current stroke-none" />
    </svg>
  )
}

export default function TopBar() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1BuVGxN8H3/",
      label: "Facebook",
      icon: FacebookIcon,
    },
    {
      href: "https://www.instagram.com/thebritishdentalhub?igsh=ODl5OXZ0cjdxMzg2",
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: "https://wa.me/201556887765",
      label: "WhatsApp",
      icon: MessageCircle,
    },
  ]

  return (
    <div className="bg-[#0A2247] text-white">
      <div className="mx-auto flex min-h-[36px] w-full max-w-[1440px] flex-col gap-2 px-6 py-2 sm:px-8 md:flex-row md:items-center md:justify-between md:py-0 lg:px-10 xl:px-12">
        <div className="flex flex-wrap items-center gap-7 text-[13px] font-medium text-white/94 sm:gap-12 lg:gap-14">
          <div className="flex items-center gap-2.5">
            <MapPin size={13} className="text-[#ff1f1f]" />
            <span>New Cairo, Egypt</span>
          </div>

          <Link
            href="tel:+201556887765"
            className="flex items-center gap-2.5 transition hover:text-white/80"
          >
            <Phone size={13} className="text-[#ff1f1f]" />
            <span>+20 155 688 7765</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 self-start text-white/92 md:self-auto">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-6 w-6 items-center justify-center text-white/92 transition hover:text-[#ff1f1f]"
            >
              <Icon size={14} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}