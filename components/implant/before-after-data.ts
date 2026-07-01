export type BeforeAfterCase = {
  id: string
  title: string
  treatment: string
  duration: string
  technique: string
  status: string
  beforeImage?: string
  afterImage?: string
  summary: string
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-01',
    title: 'Full Smile Rehabilitation',
    treatment: 'Full-Arch Implant Rehabilitation',
    duration: '6–8 Months',
    technique: 'Guided Implant Placement',
    status: 'Verified Case',
    beforeImage: '/cases/case-01/before.jpg',
    afterImage: '/cases/case-01/after.jpg',
    summary:
      'A carefully planned full smile transformation using premium implant systems and meticulous restorative design.',
  },
  {
    id: 'case-02',
    title: 'Single Tooth Implant',
    treatment: 'Single Implant Crown',
    duration: '3–4 Months',
    technique: 'Digital Implant Workflow',
    status: 'Verified Case',
    beforeImage: '/cases/case-02/before.jpg',
    afterImage: '/cases/case-02/after.jpg',
    summary:
      'A conservative implant solution designed to restore function and natural aesthetics with precision.',
  },
]
