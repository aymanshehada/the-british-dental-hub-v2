import type { MetadataRoute } from 'next'
import { getPathname } from '@/i18n/navigation'
import { routing, type AppLocale } from '@/i18n/routing'
import { articles } from '@/lib/blog/articles'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebritishdentalhub.com'

// Every static route that exists under app/[locale]/, verified against the
// actual directory listing rather than assumed.
const staticPathnames = [
  '/',
  '/treatments',
  '/dental-implants',
  '/porcelain-veneers',
  '/orthodontics',
  '/root-canal-treatment',
  '/gum-treatment',
  '/children-dentistry',
  '/check-up-cleaning',
  '/teeth-whitening',
  '/blog',
] as const

function absoluteUrl(pathname: string, locale: AppLocale): string {
  const localePath = getPathname({ href: pathname, locale })
  return new URL(localePath, siteUrl).toString()
}

function buildLanguageAlternates(pathname: string): Record<AppLocale, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(pathname, locale)]),
  ) as Record<AppLocale, string>
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const pathname of staticPathnames) {
    const languages = buildLanguageAlternates(pathname)

    for (const locale of routing.locales) {
      entries.push({
        url: absoluteUrl(pathname, locale),
        // No real "last modified" date exists for these static pages, so
        // the field is omitted rather than fabricated with the build time.
        changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
        priority: pathname === '/' ? 1 : pathname === '/blog' ? 0.7 : 0.8,
        alternates: { languages },
      })
    }
  }

  for (const article of articles) {
    const pathname = `/blog/${article.slug}`
    const languages = buildLanguageAlternates(pathname)

    for (const locale of routing.locales) {
      entries.push({
        url: absoluteUrl(pathname, locale),
        lastModified: article.publishedAt,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: { languages },
      })
    }
  }

  return entries
}
