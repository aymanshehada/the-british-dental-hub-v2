import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, ArrowRight, BookOpen, Check, MessageSquare, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ArticleBody } from '@/components/blog/ArticleBody'
import {
  articles,
  formatArticleDate,
  getArticleBySlug,
  getCategoryLabel,
  getReadingTime,
  getReadingTimeAr,
  getRelatedArticles,
} from '@/lib/blog/articles'
import { getPathname } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'
import { getLocaleAlternates } from '@/lib/seo'

// Only the Arabic category labels actually needed today — for the articles
// that currently have Arabic content. A full localized categories table
// (which would touch the shared `categories` array used by every other
// article and the Journal index) is intentionally out of scope here.
const categoryLabelAr: Record<string, string> = {
  'dental-implants': 'زراعة الأسنان',
  prosthodontics: 'طب التعويضات السنية',
  // Matches the term already used sitewide for this treatment (e.g.
  // messages/ar/rootCanalTreatment.json, messages/ar/treatments.json) —
  // there's no separate abstract "Endodontics" noun established elsewhere.
  endodontics: 'علاج العصب',
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebritishdentalhub.com'
const siteName = 'The British Dental Hub'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article Not Found | The British Dental Hub' }
  }

  const isArabic = locale === 'ar' && Boolean(article.arContent)
  const metaTitleText = isArabic ? article.arContent!.title : article.title
  const metaDek = isArabic ? article.arContent!.dek : article.dek
  const title = `${metaTitleText} | The BDH Journal`

  return {
    title,
    description: metaDek,
    alternates: getLocaleAlternates(`/blog/${article.slug}`, locale as AppLocale),
    openGraph: {
      title,
      description: metaDek,
      url: `/blog/${article.slug}`,
      type: 'article',
      siteName,
      publishedTime: article.publishedAt,
      locale: isArabic ? 'ar_EG' : 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDek,
    },
  }
}

function ArticleCta({ isArabic = false }: { isArabic?: boolean }) {
  const trustItems = isArabic
    ? ['استشارة مدتها 30–45 دقيقة', 'خطة علاج مخصَّصة', 'مناقشة خيارات العلاج', 'بلا التزام']
    : [
        '30–45 Minute Consultation',
        'Personalised Treatment Plan',
        'Treatment Options Discussion',
        'No Obligation',
      ]

  return (
    <section
      aria-labelledby="article-consultation-heading"
      className="relative overflow-hidden border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {isArabic ? 'هل لديك أسئلة حول هذا؟' : 'Have Questions About This?'}
            </p>
            <h2
              id="article-consultation-heading"
              className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.05] text-[#0A2247] sm:text-5xl lg:text-[3.5rem]"
            >
              {isArabic ? 'ناقش حالتك مع فريقنا' : 'Discuss Your Own Case With Our Team'}
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[rgba(10,34,71,0.84)] sm:text-xl">
              {isArabic
                ? 'لا تُغني المعلومات العامة أبدًا عن استشارة حقيقية. إذا شعرت أن أي شيء في هذا المقال يخصّ حالتك، فالخطوة التالية هي ببساطة محادثة مع فريقنا السريري.'
                : 'General information is never a substitute for a real consultation. If anything in this article sounds relevant to you, the next step is simply a conversation with our clinical team.'}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[12px] border border-brand-navy bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(10,34,71,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#123164]"
              >
                {isArabic ? 'احجز استشارتك' : 'Book Consultation'}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="https://wa.me/201556887765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] min-w-[248px] items-center justify-center gap-2 rounded-[12px] border border-brand-red bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0A2247] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(215,25,32,0.10)]"
              >
                <MessageSquare className="size-4 text-brand-red" />
                {isArabic ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-brand-border bg-white p-6 shadow-[0_16px_42px_rgba(10,34,71,0.08)] sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-brand-red">
              {isArabic ? 'ما تتضمّنه استشارتك' : 'What your consultation includes'}
            </p>

            <div className="mt-5 space-y-3.5">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-brand-border bg-brand-bg px-4 py-3">
                  <Check className="size-4 shrink-0 text-brand-red" />
                  <span className="text-sm font-light leading-6 text-[rgba(10,34,71,0.84)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const isArabic = locale === 'ar' && Boolean(article.arContent)
  const loc = article.arContent

  const displayTitle = isArabic ? loc!.title : article.title
  const displayDek = isArabic ? loc!.dek : article.dek
  const displayContent = isArabic ? loc!.content : article.content
  const displayFaqs = isArabic ? loc!.faqs : article.faqs
  const displayReferences = isArabic ? (loc!.references ?? article.references) : article.references
  const displayAuthor = isArabic ? (loc!.author ?? article.author) : article.author
  const displayReviewer = isArabic ? (loc!.medicalReviewer ?? article.medicalReviewer) : article.medicalReviewer
  const displayCategoryLabel = isArabic
    ? (categoryLabelAr[article.category] ?? getCategoryLabel(article.category))
    : getCategoryLabel(article.category)

  // Related articles currently have no Arabic content, so the section is
  // suppressed for the Arabic rendering rather than surfacing English-only
  // cards on an otherwise-Arabic page.
  const related = isArabic ? [] : getRelatedArticles(article, 3)
  const readingTime = isArabic ? getReadingTimeAr(displayContent) : getReadingTime(article)

  const reviewerPerson = isArabic
    ? {
        '@type': 'Person',
        name: displayReviewer,
        jobTitle: 'أخصائي زراعة الأسنان وطب الأسنان التجميلي',
        description:
          loc?.reviewerCredentials ??
          'بكالوريوس طب وجراحة الأسنان (BDS)، زمالة زراعة الأسنان (الجامعة البريطانية في مصر وجامعة شيفيلد)، الجزء الأول من زمالة طب الأسنان بالكلية الملكية للجراحين في إدنبرة (MFDS)',
      }
    : {
        '@type': 'Person',
        name: displayReviewer,
        jobTitle: 'Implant & Aesthetic Dentistry Specialist',
        description:
          article.reviewerCredentials ??
          'BDS, Implant Fellowship (The British University in Egypt & University of Sheffield), MFDS Part 1 RCS Edinburgh',
      }

  const pagePathname = getPathname({ href: `/blog/${article.slug}`, locale: locale as AppLocale })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: displayTitle,
    description: displayDek,
    datePublished: article.publishedAt,
    inLanguage: locale,
    author: reviewerPerson,
    reviewedBy: reviewerPerson,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}${pagePathname}`,
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article>
        <header className="bg-white pt-28 pb-10 sm:pt-32 lg:pt-36">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-red transition hover:text-[#0A2247]"
              >
                {isArabic ? (
                  <>
                    <ArrowRight className="size-3.5" />
                    The BDH Journal
                  </>
                ) : (
                  <>
                    <ArrowLeft className="size-3.5" />
                    The BDH Journal
                  </>
                )}
              </Link>

              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-red">
                {displayCategoryLabel}
              </p>

              <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.1] text-[#0A2247] sm:text-5xl">
                {displayTitle}
              </h1>

              <p className="mt-5 text-lg font-light leading-8 text-[#495a73]">
                {displayDek}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.82rem] text-[#5f6f88]">
                <span>{formatArticleDate(article.publishedAt, isArabic ? 'ar' : 'en')}</span>
                <span className="h-1 w-1 rounded-full bg-[#c7d0dd]" />
                <span>{readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-[#c7d0dd]" />
                <span>{isArabic ? `بقلم ${displayAuthor}` : `By ${displayAuthor}`}</span>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl">
              <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#e5ebf3] bg-[linear-gradient(135deg,#F8F9FB_0%,#EEF2F6_100%)] sm:h-[320px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(215,25,32,0.06),transparent_55%)]" />
                <BookOpen className="relative size-12 text-brand-navy/20" strokeWidth={1.2} />
              </div>
            </div>
          </Container>
        </header>

        <div className="bg-white pb-20 sm:pb-24">
          <Container>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
              <div className="min-w-0">
                <ArticleBody content={displayContent} />

                {displayFaqs.length > 0 ? (
                  <div className="mt-14">
                    <h2 className="font-heading text-[1.6rem] font-semibold leading-tight text-[#0A2247]">
                      {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                    </h2>
                    <div className="mt-6 space-y-5">
                      {displayFaqs.map((faq) => (
                        <div key={faq.question} className="rounded-[16px] border border-[#e5ebf3] bg-brand-bg p-5">
                          <p className="text-[1rem] font-semibold text-[#0A2247]">{faq.question}</p>
                          <p className="mt-2 text-[0.95rem] leading-7 text-[#495a73]">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-14 flex items-start gap-4 rounded-[18px] border border-brand-border bg-brand-bg p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-brand-red/25 bg-brand-red/10 text-brand-red">
                    <ShieldCheck className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[0.95rem] font-semibold text-[#0A2247]">
                      {isArabic ? `مراجعة طبية: ${displayReviewer}` : `Medically reviewed by ${displayReviewer}`}
                    </p>
                    <p className="mt-1 text-[0.85rem] leading-6 text-[#5f6f88]">
                      {isArabic
                        ? 'هذا المقال لأغراض المعلومات العامة فقط، ولا يُغني عن استشارة سريرية أو تشخيص طبي.'
                        : 'This article is for general information only and does not replace a clinical consultation or diagnosis.'}
                    </p>
                  </div>
                </div>

                {displayReferences && displayReferences.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red">
                      {isArabic ? 'المراجع' : 'References'}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {displayReferences.map((reference) => (
                        <li key={reference.url} className="text-[0.85rem] leading-6 text-[#5f6f88]">
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A2247] underline decoration-[#0A2247]/25 underline-offset-2 transition-colors duration-200 ease-out hover:text-brand-red hover:decoration-brand-red/40"
                          >
                            {reference.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <TableOfContents content={displayContent} isArabic={isArabic} />
              </aside>
            </div>
          </Container>
        </div>

        {related.length > 0 ? (
          <section className="bg-brand-bg py-16 sm:py-20 lg:py-24">
            <Container>
              <h2 className="font-heading text-[1.8rem] font-semibold leading-tight text-[#0A2247] sm:text-[2.1rem]">
                Related Articles
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </article>

      <ArticleCta isArabic={isArabic} />
      </main>
      <Footer />
    </>
  )
}
