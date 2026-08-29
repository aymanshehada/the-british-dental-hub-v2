# BDH Journal — Editorial + SEO Master Standard

Reference document for every BDH Journal article. Read this in full before
starting any new article's research, drafting, or implementation phase.
This replaces re-explaining these rules from scratch each time.

---

## 1. Editorial Voice

The Journal must feel: clinically authoritative, calm, precise, premium,
patient-centred, British/editorial, understated, genuinely educational.

It must NOT feel: AI-generated, SEO-written, keyword-stuffed, commercially
aggressive, generic, or overlong for the sake of length.

Never use: "pain-free", "best dentist", guaranteed-outcome language,
fear-based copy, "In this comprehensive guide...", "Are you considering...",
"At our state-of-the-art clinic...", "Book your consultation today...".

Write for patient understanding + clinical accuracy + search intent +
information gain — never for keyword density.

## 2. Word Count Philosophy

Target: ~1,000–1,150 words per article body, excluding FAQ.
Acceptable range: 900–1,400 words.
This is a quality-control range, not an SEO requirement. A shorter article
is preferable to filler. Exceeding 1,400 words requires an explicit,
content-driven justification stated up front — not silent overshoot.

## 3. Clinical Evidence Rules (non-negotiable)

- Every external source must be live-fetched and inspected — never cited
  from memory, training data, or a search snippet alone.
- Every verified source must be reported as: Finding → Source → Exact
  supported implication for BDH.
- Unverifiable sources are labeled "Unverified — needs manual verification"
  and never used as a citation.
- Reject false precision: no jaw-specific healing windows, no fixed
  timelines, no headline statistics presented as universal, unless a
  source directly and specifically supports that exact figure.
- Prefer general, honest ranges (e.g. NHS's "6–12 months overall
  treatment") over precise-sounding numbers the literature doesn't
  actually converge on.
- Classify each verified finding: MUST HAVE / SHOULD HAVE / OPTIONAL /
  DO NOT INCLUDE — weighed against editorial tone, not just clinical
  relevance. A well-verified finding can still be excluded if it can't be
  phrased without sounding alarming or overly technical.
- No absolute claims, no guarantees, no universal suitability statements.

## 4. FAQ Standard

3–7 questions, genuinely useful (not written to target search phrases).
Each answer must be concise and patient-focused. Any clinical claim inside
an FAQ answer follows the same verification rule as the main body — no
exceptions for "just an FAQ."

## 5. E-E-A-T / Reviewer Attribution

Named clinical reviewer: **Dr. Ayman Chhada, BDS** (name must match
messages/en/home.json and messages/ar/home.json exactly — verify before
using). No dedicated doctor profile page currently exists — do not create
one as part of an article task; that's a separate scope decision. Person
schema fields (jobTitle, credentials) as plain text, no `url` field until
a profile page exists. Do not invent credentials beyond what is already
established for this reviewer.

No `dateModified` field currently exists in the data model — do not
invent one. A missing update date is preferable to a fabricated one.
Report this limitation if relevant rather than working around it silently.

## 6. Arabic Adaptation

- Every new article should have English and Arabic developed in parallel
  from the start (not deferred).
- Arabic is an editorial adaptation, never a literal translation — same
  clinical meaning, same certainty level, same caution, same patient
  expectations as English.
- Architecture: optional `arContent` field on `BlogArticle`
  (lib/blog/types.ts), reusing existing ContentBlock/ParagraphContent/
  InlineLink/BlogFaq/BlogReference types — never parallel Arabic-only
  types. English-only articles must continue rendering unaffected.
- External reference sources keep their original English titles/URLs in
  the Arabic version (they're English-language institutions); only
  surrounding UI labels (e.g. "References" → "المراجع") are localized.
- `/ar/blog/[slug]` renders Arabic only when `arContent` exists for that
  article; otherwise it falls back to English content under Arabic
  chrome — never crash, never silently mistranslate.

## 7. Internal Linking Model

- Inline, contextual: 1–2 links per article, placed naturally where a
  treatment concept is first named — not forced into every paragraph.
- Structural: one link to the primary related treatment page
  (`/[locale]/[service-slug]`), placed near the article's natural
  conclusion.
- Article ↔ Article: link to other Journal articles only where a genuine
  cross-reference exists (e.g. alternatives, related procedures) — verify
  the target slug actually exists in `lib/blog/articles.ts` before linking
  to it. Never create a placeholder article just to make a link resolve.
- Category↔treatment-slug mapping already exists 1:1 across all 8 service
  pages — reuse it rather than hardcoding URLs per article.
- Links use the existing `InlineLink` ContentBlock type — real
  hyperlinks, never plain-text mentions of a page name.

## 8. Structured Data

Per article: `Article` JSON-LD (already implemented), with
`inLanguage` set correctly per locale, and reviewer/author as a `Person`
object (no `url` — see Section 5). Add `FAQPage` schema only if genuine
on-page FAQ content exists (it does, by Section 4). `BreadcrumbList` schema
is a site-wide gap (no breadcrumb UI exists yet) — out of scope for a
single-article task; note it if relevant, don't implement it ad hoc.

## 9. Technical/SEO Boundaries Per Article

Each article task should stay confined to:
- The specific article's entry in `lib/blog/articles.ts`
- Shared type/helper files only where a backward-compatible, additive
  change is required (never a breaking change to existing articles)
- `app/[locale]/blog/[slug]/page.tsx` rendering logic, if needed

Do NOT touch, unless the task explicitly says so:
- `app/sitemap.ts`
- canonical/hreflang implementation (already fixed site-wide — see
  `lib/seo.ts:getLocaleAlternates()`)
- Homepage, service pages, or other unrelated articles
- `next.config.mjs` / other unrelated SEO utilities

## 10. Process Per New Article

1. **Search-intent + SERP research** — live search, not assumption; note
   what's already known from prior articles' research where it overlaps.
2. **Evidence verification pass** — close every clinical-claim gap before
   drafting, per Section 3.
3. **Blueprint** — H1, section architecture, purpose per section, target
   word count, evidence points, internal links, before writing full copy.
4. **Draft** — English and Arabic together, per Section 6.
5. **Clinical + editorial revision pass** — check wording against Section
   1 and Section 3 rules specifically (imaging certainty, material detail,
   maintenance framing, etc. — the exact traps hit in Article #1).
6. **Implementation** — smallest clean, scalable code change; verify
   `tsc --noEmit` and a clean build; live-check both locales' rendering,
   canonical/hreflang/JSON-LD, and regression-check the other existing
   articles.
7. **Scope-audit before commit** — confirm the diff contains only
   approved files, exclude stray/generated artifacts, one clean commit,
   push only after explicit approval.

## Precedent: Article #1

`what-to-expect-from-dental-implant-treatment` (commit `89772e6`,
`website-redesign` branch) is the reference implementation for this
entire standard — architecture, tone, and verification rigor should match
it going forward.
