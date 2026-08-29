export interface BlogCategory {
  slug: string
  label: string
}

// An inline link within a paragraph. `external` marks a link that leaves
// the site (rendered as a plain <a>); omit it (or set false) for internal
// site routes, which render via the locale-aware Link component so they
// pick up the /ar prefix automatically.
export interface InlineLink {
  text: string
  href: string
  external?: boolean
}

// Paragraph text is normally a plain string. Where a paragraph needs one
// or more inline links, it can instead be an array mixing plain string
// runs with InlineLink runs, rendered in order.
export type ParagraphContent = string | Array<string | InlineLink>

export type ContentBlock =
  | { type: 'paragraph'; text: ParagraphContent }
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; text: string }

export interface BlogFaq {
  question: string
  answer: string
}

export interface BlogReference {
  title: string
  url: string
}

// A localized (non-English) representation of an article's content. Reuses
// the same ContentBlock / BlogFaq / BlogReference shapes as the English
// article — no parallel Arabic-specific types — so an article can gain a
// translation progressively without changing how content is authored or
// rendered. Fields not overridden here (e.g. publishedAt, category) are
// shared with the English article, since they don't need translation.
export interface BlogArticleLocaleContent {
  title: string
  dek: string
  content: ContentBlock[]
  faqs: BlogFaq[]
  author?: string
  medicalReviewer?: string
  references?: BlogReference[]
}

export interface BlogArticle {
  slug: string
  title: string
  dek: string
  category: string
  publishedAt: string
  author: string
  medicalReviewer: string
  content: ContentBlock[]
  faqs: BlogFaq[]
  references?: BlogReference[]
  relatedSlugs?: string[]
  // Optional Arabic content. When present, locale-aware rendering (e.g. the
  // /ar/blog/[slug] page) uses these fields instead of the English ones;
  // when absent, the article renders in English under every locale.
  arContent?: BlogArticleLocaleContent
}
