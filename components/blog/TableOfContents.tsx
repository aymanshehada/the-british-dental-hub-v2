import type { ContentBlock } from "@/lib/blog/types"

export function TableOfContents({ content, isArabic = false }: { content: ContentBlock[]; isArabic?: boolean }) {
  const headings = content.filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> => block.type === "heading" && block.level === 2,
  )

  if (headings.length === 0) return null

  return (
    <nav aria-label={isArabic ? "فهرس المقال" : "Table of contents"} className="rounded-[18px] border border-[#e5ebf3] bg-brand-bg p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red">
        {isArabic ? "في هذا المقال" : "In This Article"}
      </p>
      <ol className="mt-4 space-y-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-[0.88rem] leading-6 text-[#495a73] transition-colors duration-200 ease-out hover:text-brand-red"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
