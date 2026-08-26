import { Link } from "@/i18n/navigation"
import { categories } from "@/lib/blog/articles"

export function CategoryFilter({ activeCategory }: { activeCategory?: string }) {
  const isAllActive = !activeCategory || activeCategory === "all"

  const pillClasses = (isActive: boolean) =>
    `inline-flex h-10 items-center rounded-full border px-5 text-[0.82rem] font-medium transition-all duration-200 ease-out whitespace-nowrap ${
      isActive
        ? "border-brand-navy bg-brand-navy text-white"
        : "border-[#dfe4ec] bg-white text-[#495a73] hover:border-brand-red/30 hover:text-[#0A2247]"
    }`

  return (
    <div className="flex flex-wrap gap-2.5">
      <Link href="/blog" className={pillClasses(isAllActive)}>
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog?category=${category.slug}`}
          className={pillClasses(activeCategory === category.slug)}
        >
          {category.label}
        </Link>
      ))}
    </div>
  )
}
