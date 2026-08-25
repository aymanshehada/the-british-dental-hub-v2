export interface BlogCategory {
  slug: string
  label: string
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; text: string }

export interface BlogFaq {
  question: string
  answer: string
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
  relatedSlugs?: string[]
}
