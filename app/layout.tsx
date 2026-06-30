import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebritishdentalhub.com'
const siteName = 'The British Dental Hub'
const defaultTitle = 'The British Dental Hub | Premium Dental Clinic in New Cairo'
const defaultDescription =
  'Experience British standards of dentistry in New Cairo. Premium Dental Implants, Veneers, Smile Makeovers, Orthodontics and Cosmetic Dentistry delivered with exceptional care.'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
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
  colorScheme: 'dark',
  themeColor: '#0a1428',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
