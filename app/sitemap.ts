import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebritishdentalhub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
