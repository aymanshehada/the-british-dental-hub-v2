import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PremiumCard } from "@/components/ui/premium-card"

const posts = [
  {
    image: "/images/blog-1.png",
    category: "Cosmetic",
    title: "Are veneers right for you? A considered guide",
    excerpt:
      "Understanding when porcelain veneers are the ideal choice — and how to keep them looking flawless for years.",
  },
  {
    image: "/images/blog-2.png",
    category: "Implants",
    title: "The science behind same-day dental implants",
    excerpt:
      "How digital planning makes immediate implants both possible and predictable, without compromising on safety.",
  },
  {
    image: "/images/blog-3.png",
    category: "Wellbeing",
    title: "Building a premium daily oral care routine",
    excerpt:
      "Small, refined habits that protect your investment and keep your smile healthy between visits.",
  },
]

export function BlogSection() {
  return (
    <section id="journal" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary" />
              The Journal
            </p>
            <h2 className="text-balance font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Insights from our specialists
            </h2>
          </div>
          <Button
            variant="outline"
            className="rounded-none border-primary/50 bg-transparent px-7 py-6 text-xs font-medium uppercase tracking-[0.2em] text-foreground hover:border-primary hover:bg-primary/10 hover:text-foreground"
          >
            View All Articles
          </Button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PremiumCard
              key={post.title}
              className="group flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/80"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent transition duration-300 ease-out group-hover:from-slate-950/70" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20" />
              </div>
              <p className="mt-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary">
                {post.category}
              </p>
              <h3 className="mt-4 font-heading text-[2.05rem] font-medium leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-slate-200/80">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
                Read Article
                <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  )
}
