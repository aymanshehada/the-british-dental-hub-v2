import {
  BadgeCheck,
  Brain,
  CalendarDays,
  HeartPulse,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react'

export const trustPoints = [
  'British Standards',
  'Digital Planning',
  'Premium Implant Systems',
  'Personalized Care',
]

export const reasons = [
  {
    number: '01',
    icon: ScanSearch,
    title: 'Digital Treatment Planning',
    description:
      'Every implant is digitally planned using advanced 3D CBCT imaging for maximum precision and predictable long-term results.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Premium Implant Systems',
    description:
      'We use internationally recognized implant systems supported by long-term scientific evidence and exceptional reliability.',
  },
  {
    number: '03',
    icon: UserRoundCheck,
    title: 'Experienced Implant Team',
    description:
      'Treatment is performed by experienced dentists following modern British clinical protocols and meticulous planning.',
  },
  {
    number: '04',
    icon: HeartPulse,
    title: 'Comfortable Surgery',
    description:
      'Gentle surgical techniques and modern anesthesia provide a comfortable and stress-free treatment experience.',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Natural Aesthetic Results',
    description:
      'Every implant restoration is carefully crafted to match your smile naturally in shape, color, and function.',
  },
  {
    number: '06',
    icon: BadgeCheck,
    title: 'Long-Term Support',
    description:
      'Regular follow-up appointments help protect your investment and maintain healthy implants for many years.',
  },
]

export const journeySteps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Consultation',
    description: 'A thorough clinical assessment and treatment discussion to define the optimal implant pathway.',
    detail: 'Duration: 30–45 min',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: '3D CBCT Scan',
    description: 'Advanced digital diagnosis and bone assessment for precise anatomical planning.',
    detail: 'Precision imaging',
  },
  {
    number: '03',
    icon: Brain,
    title: 'Digital Planning',
    description: 'Virtual implant positioning designed for maximum precision, stability and long-term harmony.',
    detail: 'Custom treatment design',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Implant Placement',
    description: 'Precise implant placement using minimally invasive techniques for maximum comfort and predictability.',
    detail: 'Gentle and efficient',
  },
  {
    number: '05',
    icon: HeartPulse,
    title: 'Healing Phase',
    description: 'A carefully guided osseointegration period with attentive follow-up and recovery support.',
    detail: 'Supportive recovery',
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Final Restoration',
    description: 'A bespoke crown crafted to restore natural form, function and confidence with exceptional aesthetics.',
    detail: 'Beautiful long-term result',
  },
]
