import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import type { BlogArticle } from "@/lib/blog/types"
import { formatArticleDate, getCategoryLabel, getReadingTime } from "@/lib/blog/articles"

function ArticlePlaceholderArt({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#F8F9FB_0%,#EEF2F6_100%)] ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(215,25,32,0.06),transparent_55%)]" />
      <BookOpen className="relative size-8 text-brand-navy/20" strokeWidth={1.3} />
    </div>
  )
}

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e5ebf3] bg-white shadow-[0_2px_10px_rgba(15,39,78,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_10px_26px_rgba(215,25,32,0.06)]"
    >
      <ArticlePlaceholderArt className="h-[160px] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red">
          {getCategoryLabel(article.category)}
        </p>
        <h3 className="mt-3 text-[1.15rem] font-semibold leading-[1.3] text-[#0A2247]">
          {article.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[0.9rem] leading-6 text-[#495a73]">
          {article.dek}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#edf1f6] pt-4 text-[0.76rem] text-[#5f6f88]">
          <span>{formatArticleDate(article.publishedAt)}</span>
          <span>{getReadingTime(article)}</span>
        </div>
      </div>
    </Link>
  )
}

export function FeaturedArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-[22px] border border-[#e5ebf3] bg-white shadow-[0_5px_20px_rgba(15,39,78,0.05)] transition-all duration-300 ease-out hover:border-brand-red/20 hover:shadow-[0_14px_32px_rgba(215,25,32,0.06)] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <ArticlePlaceholderArt className="min-h-[220px] w-full lg:min-h-[320px]" />
      <div className="flex flex-col justify-center p-7 sm:p-9">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-red">
          Featured &middot; {getCategoryLabel(article.category)}
        </p>
        <h2 className="mt-4 text-balance font-heading text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0A2247] sm:text-[2.3rem]">
          {article.title}
        </h2>
        <p className="mt-4 text-[0.98rem] leading-7 text-[#495a73]">
          {article.dek}
        </p>
        <div className="mt-6 flex items-center gap-4 text-[0.78rem] text-[#5f6f88]">
          <span>{formatArticleDate(article.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-[#c7d0dd]" />
          <span>{getReadingTime(article)}</span>
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-red transition-all duration-300 ease-out group-hover:gap-2.5">
          Read the Article
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
