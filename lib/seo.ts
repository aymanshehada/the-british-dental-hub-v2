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
