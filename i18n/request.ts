import { getRequestConfig } from 'next-intl/server'
import { routing, type AppLocale } from './routing'

// One JSON file per page/section, merged into a single namespaced
// messages object per locale. Add a new page's file to this list when
// it needs translations — no other wiring required.
const namespaces = [
  'common',
  'home',
  'treatments',
  'dentalImplants',
  'porcelainVeneers',
  'orthodontics',
  'rootCanalTreatment',
  'gumTreatment',
  'childrensDentistry',
  'checkUpCleaning',
  'teethWhitening',
  'blog',
] as const

async function loadMessages(locale: AppLocale) {
  const entries = await Promise.all(
    namespaces.map(async (namespace) => {
      const messages = (await import(`../messages/${locale}/${namespace}.json`)).default
      return [namespace, messages] as const
    }),
  )

  return Object.fromEntries(entries)
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as AppLocale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: await loadMessages(locale as AppLocale),
  }
})
