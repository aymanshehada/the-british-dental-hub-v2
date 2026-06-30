import Image from "next/image"
import { cn } from "@/lib/utils"
import { PremiumButton } from "@/components/ui/premium-button"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeader } from "@/components/ui/section-header"

const treatments = [
  {
    title: "Dental & Immediate Implants",
    description:
      "Permanent tooth replacement using conventional and immediate implant solutions.",
    image: "/images/about-clinic.png",
    featured: true,
  },
  {
    title: "Veneers & Smile Design",
    description:
      "Natural-looking smile transformations with minimally invasive techniques.",
    image: "/images/hero-clinic.png",
  },
  {
    title: "Orthodontics",
    description:
      "Modern teeth straightening for children and adults.",
    image: "/images/about-digital.png",
  },
  {
    title: "Paediatric Dentistry",
    description:
      "Gentle and comfortable dental care designed specifically for children.",
    image: "/images/trust-detail.png",
  },
  {
    title: "General & Preventive Dentistry",
    description:
      "Routine examinations, hygiene therapy and long-term oral health maintenance.",
    image: "/images/blog-1.png",
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive restorative treatment combining implants, prosthodontics and advanced restorative care.",
    image: "/images/blog-3.png",
    featured: true,
  },
]

export function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-[#07152C] py-[140px]">
      <div className="mx-auto w-full max-w-[1700px] section-premium">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="OUR TREATMENTS"
            title="Exceptional dentistry, tailored to every smile."
            description="From preventive care to advanced rehabilitation, every treatment is delivered with British-inspired precision, modern technology, and uncompromising attention to detail."
            align="center"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {treatments.map((treatment, index) => (
            <PremiumCard
              key={treatment.title}
              className={cn(
                "group flex h-full flex-col overflow-hidden border border-primary/20 bg-[#07152C] shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/80 hover:shadow-[0_32px_80px_rgba(0,0,0,0.28)]",
                treatment.featured
                  ? index === 0
                    ? "lg:col-span-4 lg:row-span-2"
                    : "lg:col-span-4 lg:col-start-3"
                  : "lg:col-span-2",
                "opacity-0 translate-y-8 animate-treatments-fade-up",
              )}
              hover={false}
              style={{ animationDelay: `${150 + index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-[28px] pb-[52%] lg:pb-[48%] transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition duration-300 ease-out group-hover:from-slate-950/95 group-hover:via-slate-950/50" />
              </div>

              <div className="flex flex-1 flex-col px-7 py-7 md:px-8 md:py-8">
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                  Treatment
                </span>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-foreground transition-colors duration-300 ease-out">
                  {treatment.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-slate-200/80 transition-colors duration-300 ease-out">
                  {treatment.description}
                </p>

                <div className="mt-8 grid gap-4 text-sm text-slate-200/80 sm:grid-cols-3">
                  <div>
                    <p className="font-semibold text-foreground">Duration</p>
                    <p className="mt-2 font-light">60–90 min</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Recovery</p>
                    <p className="mt-2 font-light">Minimal</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ideal for</p>
                    <p className="mt-2 font-light">Refined smiles</p>
                  </div>
                </div>

                <div className="mt-8">
                  <PremiumButton
                    variant="primary"
                    className="group w-full justify-center text-xs tracking-[0.2em] transition-all duration-300 ease-out hover:bg-primary/95 hover:shadow-[0_16px_30px_rgba(255,209,110,0.18)]"
                  >
                    <span>Learn More</span>
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                  </PremiumButton>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <PremiumButton variant="outline" className="w-full max-w-[260px] justify-center text-xs tracking-[0.2em]">
            VIEW ALL TREATMENTS
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
