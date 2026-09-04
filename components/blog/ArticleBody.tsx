import { Info } from "lucide-react"
import { Fragment } from "react"
import { Link } from "@/i18n/navigation"
import type { ContentBlock } from "@/lib/blog/types"

const linkClassName =
  "text-[#0A2247] underline decoration-[#0A2247]/25 underline-offset-2 transition-colors duration-200 ease-out hover:text-brand-red hover:decoration-brand-red/40"

export function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-[1.02rem] leading-8 text-[#3d4a5c]">
                {typeof block.text === "string"
                  ? block.text
                  : block.text.map((part, partIndex) =>
                      typeof part === "string" ? (
                        <Fragment key={partIndex}>{part}</Fragment>
                      ) : part.external ? (
                        <a
                          key={partIndex}
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClassName}
                        >
                          {part.text}
                        </a>
                      ) : (
                        <Link key={partIndex} href={part.href} className={linkClassName}>
                          {part.text}
                        </Link>
                      ),
                    )}
              </p>
            )

          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3"
            return (
              <Tag
                key={index}
                id={block.id}
                className={
                  block.level === 2
                    ? "scroll-mt-28 pt-4 font-heading text-[1.7rem] font-semibold leading-tight tracking-[-0.01em] text-[#0A2247] sm:text-[1.9rem]"
                    : "scroll-mt-28 pt-2 text-[1.25rem] font-semibold leading-tight text-[#0A2247]"
                }
              >
                {block.text}
              </Tag>
            )
          }

          case "list":
            return (
              <ul key={index} className="space-y-2.5 ps-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-7 text-[#3d4a5c]">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          case "table":
            return (
              <div key={index} className="overflow-x-auto rounded-[14px] border border-[#e5ebf3]">
                <table className="w-full min-w-[480px] border-collapse text-start text-[0.92rem]">
                  {block.columnWidths && (
                    <colgroup>
                      {block.columnWidths.map((width, colIndex) => (
                        <col key={colIndex} style={{ width }} />
                      ))}
                    </colgroup>
                  )}
                  <thead>
                    <tr className="bg-brand-bg">
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          className="border-b border-[#e5ebf3] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#0A2247]"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-brand-bg/50" : "bg-white"}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border-b border-[#edf1f6] px-4 py-3 align-top leading-6 text-[#495a73] last:border-b-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case "callout":
            return (
              <div key={index} className="flex gap-3 rounded-[14px] border border-brand-border bg-brand-bg px-5 py-4">
                <Info className="mt-0.5 size-4 shrink-0 text-brand-red" strokeWidth={2} />
                <p className="text-[0.94rem] leading-6 text-[#0A2247]">{block.text}</p>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
