import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope, Cairo, Tajawal } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, type AppLocale } from '@/i18n/routing'
import { colors } from '@/lib/design-system'
import '../globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebritishdentalhub.com'
const siteName = 'The British Dental Hub'
const defaultTitle = 'The British Dental Hub | Premium Dental Clinic in New Cairo'
const defaultDescription =
  'Experience British standards of dentistry in New Cairo. Premium Dental Implants, Veneers, Smile Makeovers, Orthodontics and Cosmetic Dentistry delivered with exceptional care.'

// Latin (English) typefaces — unchanged from the original site.
const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
})

// Arabic typefaces — a refined display sans for headings (mirroring
// Cormorant's role) and a clean sans for body text (mirroring Manrope's
// role). Loaded unconditionally (required by next/font) but only applied
// when locale === 'ar'.
const cairo = Cairo({
  variable: '--font-heading-ar',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
})
const tajawal = Tajawal({
  variable: '--font-body-ar',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
})

// Shared clinic entity, emitted on every page. `DentalClinic` was removed from
// the types: it does not exist in schema.org (Dentist already is a
// LocalBusiness). The WebSite entity is homepage-only, see app/[locale]/page.tsx.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Dentist'],
      '@id': `${siteUrl}/#clinic`,
      name: siteName,
      url: `${siteUrl}/`,
      telephone: '+20 155 688 7765',
      email: 'info@thebritishdentalhub.com',
      description: defaultDescription,
      image: `${siteUrl}/images/hero-clinic.png`,
      logo: `${siteUrl}/images/logo-horizontal.png`,
      // Official profile URLs only (no share links, link hubs or tracking
      // parameters). Facebook page and the two Instagram profiles were each
      // opened and confirmed by title: "The British Dental Hub | Cairo",
      // "The British Dental Hub (@thebritishdentalhub)" and
      // "Dr. Ayman Chhada (@dr_aymanchhada)".
      sameAs: [
        'https://www.facebook.com/TheBritishDentalHub/',
        'https://www.instagram.com/thebritishdentalhub/',
        'https://www.instagram.com/dr_aymanchhada/',
      ],
      // Verified against the clinic's public Google Maps listing: "Gateway mall,
      // clinics, Talat mostafa, D1 226, Cairo Governorate" (plus code 3F7J+H2,
      // Second New Cairo) and the site's own footer address. New Cairo is the
      // city; the governorate is the region. No postal code is published, so
      // none is given.
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gateway Mall, Clinics D1, Clinic 226, El Rehab City',
        addressLocality: 'New Cairo',
        addressRegion: 'Cairo Governorate',
        addressCountry: 'EG',
      },
      // Owner-confirmed hours: Saturday–Thursday 14:00–22:00, Friday closed.
      // Friday is closed, so it has no entry (no 00:00–00:00 placeholder,
      // which is ambiguous between "closed" and "open all day").
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '14:00',
          closes: '22:00',
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | The British Dental Hub',
  },
  description: defaultDescription,
  keywords: [
    'British Dental Clinic',
    'Dental Clinic New Cairo',
    'Dentist Rehab City',
    'Dental Implants Egypt',
    'Smile Makeover',
    'Veneers',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Premium Dentistry',
  ],
  // No default `alternates.canonical` here: a root-level canonical is inherited
  // by every page without its own (it made /ar canonical to the English
  // homepage). Each page declares its own via getLocaleAlternates().
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    url: '/',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-clinic.png',
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/hero-clinic.png'],
  },
  generator: 'v0.app',
  // The ?v=2 query busts browser favicon caches; the files themselves are
  // static in /public and ignore it.
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '48x48' },
      { url: '/icon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: colors.background,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound()
  }

  setRequestLocale(locale as AppLocale)
  const messages = await getMessages()
  const isArabic = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`${cormorant.variable} ${manrope.variable} ${cairo.variable} ${tajawal.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
