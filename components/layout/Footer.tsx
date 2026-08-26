import { Link } from "@/i18n/navigation"
import { Mail, MapPin, PhoneCall } from "lucide-react"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.3 1.4-1.3H16V5.6c-.5-.1-1.3-.2-2.1-.2-2.1 0-3.5 1.3-3.5 3.7v2.1H8V14h2.4v7h3.1Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.8">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.3" cy="6.8" r="0.8" className="fill-current stroke-none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.76.46 3.484 1.336 5.003L2.023 22l5.13-1.303a9.94 9.94 0 0 0 4.848 1.234h.005c5.523 0 10.001-4.478 10.001-10.001S17.524 2 12.001 2Zm5.842 14.253c-.245.687-1.406 1.312-1.945 1.393-.497.075-1.126.107-1.816-.114-.419-.133-.957-.31-1.645-.607-2.895-1.25-4.785-4.164-4.929-4.357-.144-.194-1.178-1.567-1.178-2.99s.737-2.121 1-2.412c.245-.27.535-.34.714-.34.18 0 .359.002.516.01.166.008.388-.063.607.464.245.588.833 2.03.907 2.178.074.148.123.32.024.514-.098.194-.148.315-.293.484-.148.17-.31.38-.44.51-.148.148-.302.309-.13.605.172.297.766 1.264 1.645 2.048 1.13 1.008 2.083 1.32 2.38 1.468.297.148.47.124.643-.075.172-.198.744-.867.943-1.165.198-.298.396-.248.667-.148.271.099 1.72.812 2.015.96.297.148.494.223.567.347.074.123.074.71-.171 1.396Z" />
    </svg>
  )
}

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
    { label: "Facebook", href: "https://www.facebook.com/share/1BuVGxN8H3/", icon: FacebookIcon },
    { label: "Instagram", href: "https://www.instagram.com/thebritishdentalhub?igsh=ODl5OXZ0cjdxMzg2", icon: InstagramIcon },
    { label: "WhatsApp", href: "https://wa.me/201556887765", icon: WhatsAppIcon },
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

            <div className="h-[130px] w-[230px] shrink-0 overflow-hidden rounded-[10px] border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Gateway+Mall+D1+Clinics+New+Cairo+Egypt&output=embed"
                title="The British Dental Hub location on Google Maps"
                className="h-full w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.65fr_0.9fr]">
          <div>
            <p className="max-w-[430px] text-base leading-8 text-white/72">
              A premium New Cairo dental clinic delivering British-inspired standards of care, elegant patient journeys, and digitally guided treatment planning.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/88 transition hover:bg-white/10 hover:text-brand-red"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Navigate</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Contact</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              <div className="flex items-start gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4">
                <MapPin size={18} className="mt-1 text-brand-red" />
                <span>Gateway Mall, D1 Clinics, Clinic 226, New Cairo, Egypt</span>
              </div>
              <Link href="tel:+201556887765" className="flex items-center gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4 transition hover:text-white">
                <PhoneCall size={18} className="text-brand-red" />
                <span>+20 155 688 7765</span>
              </Link>
              <Link href="mailto:info@thebritishdentalhub.com" className="flex items-center gap-4 rounded-[6px] border border-white/8 bg-white/5 p-4 transition hover:text-white">
                <Mail size={18} className="text-brand-red" />
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
