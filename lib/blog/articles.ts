import type { BlogArticle, BlogCategory, ContentBlock } from './types'

export const categories: BlogCategory[] = [
  { slug: 'dental-implants', label: 'Dental Implants' },
  { slug: 'prosthodontics', label: 'Prosthodontics' },
  { slug: 'endodontics', label: 'Endodontics' },
  { slug: 'periodontal-care', label: 'Periodontal Care' },
  { slug: 'cosmetic-dentistry', label: 'Cosmetic Dentistry' },
  { slug: 'childrens-dentistry', label: "Children's Dentistry" },
  { slug: 'oral-surgery', label: 'Oral Surgery' },
  { slug: 'preventive-dentistry', label: 'Preventive Dentistry' },
]

export function getCategoryLabel(slug: string): string {
  return categories.find((category) => category.slug === slug)?.label ?? slug
}

const DEFAULT_AUTHOR = 'The British Dental Hub Editorial Team'
const DEFAULT_REVIEWER = 'The British Dental Hub Clinical Team'

export const articles: BlogArticle[] = [
  {
    slug: 'what-to-expect-from-dental-implant-treatment',
    title: 'What to Expect From Dental Implant Treatment',
    dek: 'A clear walk-through of how implant treatment is typically planned and delivered, from first consultation to long-term care.',
    category: 'dental-implants',
    publishedAt: '2026-08-20',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Dental implants are one of the more considered treatments in dentistry, precisely because they involve several stages of planning before any placement takes place. Understanding the general shape of that process can make the idea feel far less unfamiliar." },
      { type: 'heading', level: 2, id: 'why-planning-matters', text: 'Why Planning Matters' },
      { type: 'paragraph', text: "Every jaw, gum, and bite is different, so implant treatment is never approached as a single fixed procedure. A considered plan — built around your own anatomy and goals — is what allows the rest of the process to go smoothly." },
      { type: 'heading', level: 2, id: 'general-stages-of-treatment', text: 'The General Stages of Treatment' },
      { type: 'list', items: [
        'An initial consultation and clinical assessment',
        'Digital planning to map the intended implant position',
        'Placement of the implant itself',
        'A period of healing and integration',
        'Fitting of the final restoration',
      ] },
      { type: 'callout', text: 'Every implant case is different — your own suitability and timeline are only confirmed after a full clinical assessment, not from a general description like this one.' },
      { type: 'heading', level: 2, id: 'caring-for-your-implant', text: 'Caring for Your Implant Long-Term' },
      { type: 'paragraph', text: "Once treatment is complete, an implant is generally cared for much like a natural tooth — through consistent oral hygiene and regular review visits, so any concerns can be identified early." },
    ],
    faqs: [
      { question: 'Is dental implant treatment suitable for everyone?', answer: 'Not necessarily. Suitability depends on an individual clinical assessment of gum health, bone support, and general health, carried out during a consultation.' },
      { question: 'How long does the process take from start to finish?', answer: "Timelines vary by case. Rather than following a fixed schedule, your own timeline is discussed as part of your personalised treatment plan." },
    ],
  },
  {
    slug: 'crowns-bridges-and-dentures-explained',
    title: 'Crowns, Bridges, and Dentures: Understanding Your Restorative Options',
    dek: 'A general overview of the main ways a damaged, missing, or worn tooth can be restored.',
    category: 'prosthodontics',
    publishedAt: '2026-08-18',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "Prosthodontics covers the range of treatments used to restore or replace teeth, and the terminology can feel overwhelming at first. In general terms, three options come up most often." },
      { type: 'heading', level: 2, id: 'what-prosthodontics-covers', text: 'What Prosthodontics Covers' },
      { type: 'paragraph', text: 'These treatments are generally considered when a tooth is significantly damaged, missing, or worn, and a natural repair is no longer the most suitable option.' },
      { type: 'heading', level: 2, id: 'comparing-the-main-options', text: 'Comparing the Main Options' },
      { type: 'table', headers: ['Option', 'Best Suited For', 'Fixed or Removable'], rows: [
        ['Crown', 'Strengthening a single damaged tooth', 'Fixed'],
        ['Bridge', 'Replacing one or more missing teeth using neighbouring teeth for support', 'Fixed'],
        ['Denture', 'Replacing multiple or all missing teeth', 'Removable, or fixed depending on the case'],
      ] },
      { type: 'callout', text: 'The right option depends on the condition of your remaining teeth and gums, which is assessed individually rather than assumed from a general comparison.' },
      { type: 'heading', level: 2, id: 'living-comfortably-with-a-restoration', text: 'Living Comfortably With a Restoration' },
      { type: 'paragraph', text: 'Whichever option is recommended, ongoing comfort tends to come down to fit, maintenance, and regular review — all of which are part of the plan your clinician builds with you.' },
    ],
    faqs: [
      { question: 'How do I know which option is right for me?', answer: 'This is decided together with your dentist after an assessment of your remaining teeth, gums, and overall goals — not from a general comparison alone.' },
      { question: 'Do these restorations require special care?', answer: 'Generally, they benefit from the same consistent oral hygiene as natural teeth, alongside regular check-ups so fit and condition can be reviewed.' },
    ],
  },
  {
    slug: 'understanding-root-canal-treatment',
    title: 'Understanding Root Canal Treatment',
    dek: 'What root canal treatment involves, in plain terms, and why it is often the option that saves a tooth.',
    category: 'endodontics',
    publishedAt: '2026-08-16',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Root canal treatment has a reputation that often outpaces the reality of the procedure itself. Understanding what it actually involves can help put that reputation into perspective.' },
      { type: 'heading', level: 2, id: 'what-happens-inside-a-tooth', text: 'What Happens Inside a Tooth' },
      { type: 'paragraph', text: 'Beneath the visible surface, every tooth contains soft tissue that can become irritated or affected by decay or injury. Root canal treatment addresses this tissue with the aim of retaining the natural tooth wherever possible.' },
      { type: 'heading', level: 2, id: 'signs-worth-discussing', text: 'Signs Worth Discussing With Your Dentist' },
      { type: 'list', items: [
        'Persistent pain in or around a tooth',
        'Noticeable sensitivity to hot or cold that lingers',
        'Swelling or tenderness near a tooth',
      ] },
      { type: 'callout', text: 'These are general signs only, shared for awareness — a proper diagnosis always requires a clinical examination with your dentist.' },
      { type: 'heading', level: 2, id: 'what-treatment-generally-involves', text: 'What Treatment Generally Involves' },
      { type: 'paragraph', text: 'In broad terms, treatment involves carefully treating the affected tissue and then restoring the tooth so it can continue to function comfortably.' },
    ],
    faqs: [
      { question: 'Does root canal treatment hurt?', answer: 'Modern approaches are planned around comfort throughout. Your clinician can explain exactly what to expect during your specific treatment.' },
      { question: 'Can any tooth be treated this way?', answer: 'Root canal treatment can generally be considered for any tooth, front or back, though suitability is always confirmed clinically first.' },
    ],
  },
  {
    slug: 'gum-health-what-you-should-know',
    title: 'Gum Health: What You Should Know',
    dek: 'How healthy gums support your whole smile, and what ongoing periodontal care usually looks like.',
    category: 'periodontal-care',
    publishedAt: '2026-08-14',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "It's easy to focus entirely on teeth and overlook the gums that support them, but gum health plays a central role in how a smile looks and functions over time." },
      { type: 'heading', level: 2, id: 'why-gum-health-matters', text: 'Why Gum Health Matters' },
      { type: 'paragraph', text: 'Gums provide the foundation for your teeth. When that foundation is compromised, it can affect comfort, appearance, and long-term stability.' },
      { type: 'heading', level: 2, id: 'common-approaches-to-gum-care', text: 'Common Approaches to Gum Care' },
      { type: 'list', items: [
        'Deep cleaning beneath the gumline where needed',
        'Ongoing periodontal maintenance',
        'Treatment for gum inflammation at different stages',
      ] },
      { type: 'callout', text: 'The right approach depends on your specific gum health, assessed individually rather than assumed from general information.' },
      { type: 'heading', level: 2, id: 'everyday-habits', text: 'Everyday Habits That Support Healthy Gums' },
      { type: 'list', items: [
        'A consistent, gentle brushing technique',
        'Regular interdental cleaning',
        'Routine dental check-ups',
      ] },
    ],
    faqs: [
      { question: 'How often should gum health be checked?', answer: 'This depends on your individual history and risk factors, which your dentist will discuss with you directly.' },
      { question: 'Can gum health affect the rest of my mouth?', answer: 'Gum health is closely linked to the long-term stability of your teeth, which is part of why it is assessed at every routine visit.' },
    ],
  },
  {
    slug: 'veneers-vs-whitening-choosing-the-right-approach',
    title: 'Veneers vs. Whitening: Choosing the Right Approach',
    dek: 'Two different ways to refine your smile, and how they are generally suited to different goals.',
    category: 'cosmetic-dentistry',
    publishedAt: '2026-08-12',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Veneers and whitening are often mentioned in the same breath, but they solve fairly different problems. Knowing the distinction can make it easier to think about what you actually want to change.' },
      { type: 'heading', level: 2, id: 'two-different-goals', text: 'Two Different Goals' },
      { type: 'paragraph', text: 'In general terms, whitening addresses colour, while veneers address shape, alignment, and colour together.' },
      { type: 'heading', level: 2, id: 'a-general-comparison', text: 'A General Comparison' },
      { type: 'table', headers: ['Consideration', 'Whitening', 'Veneers'], rows: [
        ['Addresses', 'Shade and brightness only', 'Shape, shade, and symmetry together'],
        ['Tooth structure', 'No alteration', 'Conservative preparation is typically required'],
        ['Best suited for', 'Patients happy with tooth shape, wanting a brighter shade', 'Patients wanting a more comprehensive change'],
      ] },
      { type: 'callout', text: 'Suitability for either option is assessed individually, based on your teeth, gums, and goals.' },
      { type: 'heading', level: 2, id: 'making-the-right-choice', text: 'Making the Right Choice for You' },
      { type: 'paragraph', text: 'Many patients start with a conversation about what they would actually like to see change, and work backwards from there with their clinician.' },
    ],
    faqs: [
      { question: 'Can whitening and veneers be combined?', answer: 'This is something to discuss directly with your dentist, as it depends on your specific case and goals.' },
      { question: 'Which option lasts longer?', answer: 'Longevity depends on the option, the material used, and how well it is cared for — your clinician can explain what applies to your case.' },
    ],
  },
  {
    slug: 'helping-your-child-feel-comfortable-at-the-dentist',
    title: 'Helping Your Child Feel Comfortable at the Dentist',
    dek: 'Practical, reassuring context for parents preparing their child for a dental visit.',
    category: 'childrens-dentistry',
    publishedAt: '2026-08-10',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: "A child's early experiences at the dentist can shape how they feel about dental visits for years to come, which is why the approach taken matters as much as the treatment itself." },
      { type: 'heading', level: 2, id: 'why-early-experiences-matter', text: 'Why Early, Positive Experiences Matter' },
      { type: 'paragraph', text: 'Children who feel informed and unrushed tend to build genuine confidence around dental care, rather than simply tolerating it.' },
      { type: 'heading', level: 2, id: 'what-helps-most', text: 'What Helps Most' },
      { type: 'list', items: [
        'Age-appropriate explanations of what is happening',
        'A gradual, patient introduction to each step',
        'Positive reinforcement throughout the visit',
        'Keeping parents informed at every stage',
      ] },
      { type: 'callout', text: 'Every child adjusts at their own pace — there is no single timeline that applies to every visit.' },
      { type: 'heading', level: 2, id: 'preventive-habits-that-start-early', text: 'Preventive Habits That Start Early' },
      { type: 'paragraph', text: 'Alongside a positive clinical experience, early guidance on brushing and diet tends to have a lasting effect on long-term oral health.' },
    ],
    faqs: [
      { question: 'At what age should a child first visit the dentist?', answer: 'This is best discussed with your dentist, who can advise based on your child’s individual development.' },
      { question: 'What if my child is nervous?', answer: 'A gradual, patient approach is used for nervous or first-time children, letting them set the pace rather than rushing any step.' },
    ],
  },
  {
    slug: 'what-oral-surgery-can-involve',
    title: 'What Oral Surgery Can Involve',
    dek: 'A general introduction to when oral surgery may be recommended and what preparation usually looks like.',
    category: 'oral-surgery',
    publishedAt: '2026-08-08',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'Oral surgery covers a range of procedures, and being recommended one can feel like a big step. In most cases, it simply reflects a considered clinical decision rather than anything to be alarmed by.' },
      { type: 'heading', level: 2, id: 'when-oral-surgery-may-be-considered', text: 'When Oral Surgery May Be Considered' },
      { type: 'paragraph', text: 'It may be recommended for reasons such as a complex extraction, or as part of preparing for another treatment, always following a full clinical assessment.' },
      { type: 'heading', level: 2, id: 'how-cases-are-typically-planned', text: 'How Cases Are Typically Planned' },
      { type: 'list', items: [
        'A detailed clinical assessment',
        'Diagnostic imaging where clinically needed',
        'A personalised plan explained clearly before anything proceeds',
      ] },
      { type: 'callout', text: 'Every recommendation follows an individual assessment — general information like this is never a substitute for that consultation.' },
      { type: 'heading', level: 2, id: 'recovery-generally-speaking', text: 'Recovery, Generally Speaking' },
      { type: 'paragraph', text: 'Recovery varies by procedure and by patient. Rather than a fixed expectation, your clinician will explain a recovery approach suited specifically to your case.' },
    ],
    faqs: [
      { question: 'Is oral surgery always complex?', answer: 'Not necessarily — the term covers a range of procedures, some more involved than others. Your dentist can explain what applies to your case.' },
      { question: 'How should I prepare?', answer: 'Preparation is discussed individually during your consultation, based on the specific procedure being planned.' },
    ],
  },
  {
    slug: 'the-case-for-regular-dental-check-ups',
    title: 'The Case for Regular Dental Check-Ups',
    dek: 'Why consistent preventive care tends to matter more than any single treatment.',
    category: 'preventive-dentistry',
    publishedAt: '2026-08-06',
    author: DEFAULT_AUTHOR,
    medicalReviewer: DEFAULT_REVIEWER,
    content: [
      { type: 'paragraph', text: 'It can be tempting to think of dental visits as something for when a problem arises. In practice, the visits that matter most are often the ones where nothing appears to be wrong at all.' },
      { type: 'heading', level: 2, id: 'prevention-vs-treatment', text: 'Prevention vs. Treatment' },
      { type: 'paragraph', text: 'Regular check-ups are built around identifying small concerns early, well before they become larger ones — which is generally more comfortable and more manageable for everyone involved.' },
      { type: 'heading', level: 2, id: 'what-a-preventive-visit-covers', text: 'What a Preventive Visit Typically Covers' },
      { type: 'list', items: [
        'A comprehensive clinical examination',
        'Professional cleaning',
        'Personalised advice for your own oral health',
        'Diagnostic imaging, where clinically appropriate',
      ] },
      { type: 'callout', text: 'Not every visit requires the same diagnostic imaging — this is recommended individually, based on clinical need, not as a routine step for every patient.' },
      { type: 'heading', level: 2, id: 'building-good-habits', text: 'Building Good Habits Between Visits' },
      { type: 'list', items: [
        'A consistent brushing routine',
        'Regular interdental cleaning',
        'General awareness of diet and its effect on oral health',
      ] },
    ],
    faqs: [
      { question: 'How often should I have a check-up?', answer: 'This depends on your individual oral health and history, which your dentist will advise on directly.' },
      { question: 'Will I always need an X-ray?', answer: 'No — X-rays are recommended when clinically appropriate, not as a standard part of every single visit.' },
    ],
  },
]

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getArticlesByCategory(categorySlug?: string): BlogArticle[] {
  const all = getAllArticles()
  if (!categorySlug || categorySlug === 'all') return all
  return all.filter((article) => article.category === categorySlug)
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: BlogArticle, count = 3): BlogArticle[] {
  const all = getAllArticles().filter((candidate) => candidate.slug !== article.slug)

  if (article.relatedSlugs?.length) {
    const explicit = article.relatedSlugs
      .map((slug) => all.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is BlogArticle => Boolean(candidate))
    if (explicit.length >= count) return explicit.slice(0, count)
  }

  const sameCategory = all.filter((candidate) => candidate.category === article.category)
  const rest = all.filter((candidate) => candidate.category !== article.category)

  return [...sameCategory, ...rest].slice(0, count)
}

export function formatArticleDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

const WORDS_PER_MINUTE = 200

function extractText(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph':
      return block.text
    case 'heading':
      return block.text
    case 'callout':
      return block.text
    case 'list':
      return block.items.join(' ')
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ')
    default:
      return ''
  }
}

export function getReadingTime(article: BlogArticle): string {
  const wordCount = article.content.reduce((total, block) => total + extractText(block).split(/\s+/).filter(Boolean).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}
