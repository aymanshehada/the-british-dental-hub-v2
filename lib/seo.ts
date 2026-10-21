import type { Metadata } from 'next'
import { getPathname } from '@/i18n/navigation'
import { routing, type AppLocale } from '@/i18n/routing'

/**
 * Builds a locale-aware `canonical` + `alternates.languages` (hreflang) block
 * for a given pathname, using the routing config as the single source of
 * truth for locale prefixes.
 *
 * Without this, every locale of a page ends up declaring the same
 * (English) canonical URL, which tells search engines the non-default
 * locale is a duplicate rather than a distinct language version.
 *
 * @param pathname - the unprefixed, locale-agnostic path, e.g. '/dental-implants'
 *   or `/blog/${slug}`. Do not include a locale prefix here.
 * @param locale - the locale of the page currently being rendered.
 */
export function getLocaleAlternates(pathname: string, locale: AppLocale): NonNullable<Metadata['alternates']> {
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, getPathname({ href: pathname, locale: loc })]),
  ) as Record<AppLocale, string>

  return {
    canonical: getPathname({ href: pathname, locale }),
    languages: {
      ...languages,
      'x-default': getPathname({ href: pathname, locale: routing.defaultLocale }),
    },
  }
}

const SOCIAL_FALLBACK_IMAGE = { url: '/images/hero-clinic.png', width: 1536, height: 1024 }

/**
 * Next.js replaces a parent's `openGraph` / `twitter` object wholesale when a
 * page defines its own, so pages that only set title/description lost the
 * shared preview image, and a hard-coded `url: '/page'` pointed Arabic pages
 * at the English URL. This fills the gaps without overriding anything a page
 * sets explicitly: `og:url` follows the page's own locale-aware canonical, a
 * missing image falls back to the brand reception photo, and `og:locale`
 * follows the route locale.
 */
export function withSocialDefaults(metadata: Metadata, locale: AppLocale): Metadata {
  const canonical = typeof metadata.alternates?.canonical === 'string' ? metadata.alternates.canonical : undefined
  const { openGraph, twitter } = metadata

  return {
    ...metadata,
    openGraph: openGraph && {
      ...openGraph,
      url: canonical ?? openGraph.url,
      locale: openGraph.locale ?? (locale === 'ar' ? 'ar_EG' : 'en_US'),
      images: openGraph.images ?? [
        {
          ...SOCIAL_FALLBACK_IMAGE,
          alt: typeof openGraph.title === 'string' ? openGraph.title : 'The British Dental Hub',
        },
      ],
    },
    twitter: twitter && { ...twitter, images: twitter.images ?? [SOCIAL_FALLBACK_IMAGE.url] },
  }
}
