import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/blog/ArticleCard"
import { getAllArticles } from "@/lib/blog/articles"
import type { AppLocale } from "@/i18n/routing"

// Homepage preview of the existing Journal. Reads the existing article data
// via getAllArticles() and renders it with the existing, unmodified
// ArticleCard component — no new article model, no article-content changes.
export default async function JournalPreview({ locale }: { locale: AppLocale }) {
  const t = await getTranslations("home.journal")
  const featured = getAllArticles().slice(0, 3)

  return (
    <section id="journal" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[560px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-red" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                {t("eyebrow")}
              </p>
            </div>
            <h2 className="font-heading text-[2.1rem] leading-[1.08] tracking-[-0.03em] text-[#183668] sm:text-[2.5rem]">
              {t("title")}
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#697b95]">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex h-[44px] shrink-0 items-center gap-2.5 self-start rounded-[3px] border border-[#8a9ab3] px-6 text-[13.5px] font-medium text-[#183668] transition-all duration-300 ease-out hover:bg-white sm:self-auto"
          >
            {t("viewJournal")}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {featured.length > 0 ? (
          <div
            className="mt-8 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {featured.map((article) => (
              <div key={article.slug} className="w-[82vw] shrink-0 lg:w-auto" style={{ scrollSnapAlign: "start" }}>
                <ArticleCard article={article} locale={locale} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
