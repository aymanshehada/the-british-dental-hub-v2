import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Container } from '@/components/ui/container'
import { CategoryFilter } from '@/components/blog/CategoryFilter'
import { ArticleCard, FeaturedArticleCard } from '@/components/blog/ArticleCard'
import { getArticlesByCategory, getCategoryLabel, getCategoryLabelAr } from '@/lib/blog/articles'
import type { AppLocale } from '@/i18n/routing'
import { getLocaleAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale: locale as AppLocale, namespace: 'blog.meta' })
  const pageTitle = t('title')
  const pageDescription = t('description')

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: getLocaleAlternates('/blog', locale as AppLocale),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: '/blog',
      type: 'website',
      siteName: 'The British Dental Hub',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
    },
  }
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  const t = await getTranslations('blog.hero')

  const { category } = await searchParams
  const articles = getArticlesByCategory(category)
  const [featured, ...rest] = articles

  const displayCategoryLabel = category
    ? (isArabic ? getCategoryLabelAr(category) : getCategoryLabel(category))
    : undefined

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white">
        <Container className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              <span className="h-px w-10 bg-brand-red" />
              {t('eyebrow')}
            </p>
            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.08] text-[#0A2247] sm:text-5xl lg:text-[3.5rem]">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg font-light leading-8 text-[#495a73] sm:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-bg py-14 sm:py-16 lg:py-20">
        <Container>
          <CategoryFilter activeCategory={category} locale={locale as AppLocale} />

          {articles.length === 0 ? (
            <p className="mt-16 text-center text-[1rem] text-[#495a73]">
              {isArabic
                ? 'لا توجد مقالات في هذا التصنيف بعد — يُرجى العودة لاحقًا.'
                : 'No articles in this category yet — please check back soon.'}
            </p>
          ) : (
            <>
              {featured ? (
                <div className="mt-10">
                  <FeaturedArticleCard article={featured} locale={locale as AppLocale} />
                </div>
              ) : null}

              {rest.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article) => (
                    <ArticleCard key={article.slug} article={article} locale={locale as AppLocale} />
                  ))}
                </div>
              ) : null}
            </>
          )}

          {category && category !== 'all' && displayCategoryLabel ? (
            <p className="mt-10 text-center text-[0.85rem] text-[#5f6f88]">
              {isArabic ? (
                <>
                  عرض المقالات في{' '}
                  <span className="font-semibold text-[#0A2247]">{displayCategoryLabel}</span>
                </>
              ) : (
                <>
                  Showing articles in{' '}
                  <span className="font-semibold text-[#0A2247]">{displayCategoryLabel}</span>
                </>
              )}
            </p>
          ) : null}
        </Container>
      </section>
      </main>
      <Footer />
    </>
  )
}
