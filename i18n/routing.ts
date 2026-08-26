import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  // English stays unprefixed (/dental-implants); Arabic gets /ar (/ar/dental-implants).
  localePrefix: 'as-needed',
})

export type AppLocale = (typeof routing.locales)[number]
