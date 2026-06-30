import Image from "next/image"
import { Award, ShieldCheck, Sparkles, Users, Cpu } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeader } from "@/components/ui/section-header"

const pillars = [
  {
    icon: Award,
    title: "British-Trained Standards",
    description:
      "Protocols and clinical governance modelled on the highest international benchmarks of dental care.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Sterilisation",
    description:
      "Hospital-grade hygiene and single-use systems for complete peace of mind at every visit.",
  },
  {
    icon: Sparkles,
    title: "Luxury Patient Experience",
    description:
      "A calm, refined environment designed to make premium dentistry feel effortless and unhurried.",
  },
  {
    icon: Users,
    title: "Specialist-Led Team",
    description:
      "Experienced clinicians and specialists collaborating on every treatment plan, tailored to you.",
  },
]

const values = [
  {
    icon: Award,
    title: "British-Inspired Standards",
    description:
      "Delivering dentistry with precision, professionalism and exceptional patient care.",
  },
  {
    icon: Cpu,
    title: "Advanced Digital Dentistry",
    description:
      "Modern technology and digital workflows for accurate diagnosis and predictable results.",
  },
  {
    icon: Users,
    title: "Comprehensive Specialist Care",
    description:
      "A multidisciplinary team providing complete dental care under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Patient Experience",
    description:
      "Every treatment plan is tailored to the individual needs and goals of each patient.",
  },
]

export function TrustSection() {
  return (
    <section id="standards" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl section-premium">
        {/* Heading */}
        <SectionHeader
          eyebrow="Why Patients Trust Us"
          title="Excellence in every detail"
          description="From clinical precision to genuine warmth, every aspect of The British Dental Hub is built to earn — and keep — your confidence."
          align="center"
          className="mx-auto max-w-2xl"
          eyebrowClassName="mb-5"
          eyebrowLine="double"
          eyebrowLineClassName="w-8"
          titleClassName="text-balance font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl"
          descriptionClassName="mt-6 text-pretty text-lg font-light leading-relaxed text-muted-foreground"
        />

        {/* Pillars + image */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/trust-detail.png"
              alt="Polished dental instruments arranged at The British Dental Hub"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/20" />
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {pillars.map((pillar) => (
              <PremiumCard
                key={pillar.title}
                className="bg-card p-8 transition-colors hover:bg-secondary"
                hover={false}
              >
                <pillar.icon
                  className="size-7 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-heading text-2xl font-medium text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>

        <div className="mt-24 lg:mt-32" />
      </div>
    </section>
  )
}
