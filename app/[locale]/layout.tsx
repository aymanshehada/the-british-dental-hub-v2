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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Dentist', 'DentalClinic'],
      '@id': `${siteUrl}/#clinic`,
      name: siteName,
      url: siteUrl,
      telephone: '+20 155 688 7765',
      email: 'info@thebritishdentalhub.com',
      description: defaultDescription,
      image: `${siteUrl}/images/hero-clinic.png`,
      sameAs: [
        'https://www.instagram.com/thebritishdentalhub?igsh=ODl5OXZ0cjdxMzg2',
        'https://www.facebook.com/share/1BuVGxN8H3/',
        'https://linktr.ee/TheBritishDentalHub?utm_source=linktree_profile_share&ltsid=d36e2d8a-a8c3-4810-9f09-d13f5764cb82',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gateway Mall, D1 Clinics – Clinic 226',
        addressLocality: 'El Rehab City',
        addressRegion: 'New Cairo',
        addressCountry: 'EG',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '14:00',
          closes: '22:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
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
  alternates: {
    canonical: '/',
  },
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
