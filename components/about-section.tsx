import Image from "next/image"
import { Award, Cpu, Users, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeader } from "@/components/ui/section-header"

const features = [
  {
    icon: Award,
    title: "British Standards",
    description: "Clinical protocols inspired by the UK's highest standards.",
  },
  {
    icon: Cpu,
    title: "Digital Dentistry",
    description: "Modern digital workflows for greater precision.",
  },
  {
    icon: Users,
    title: "Specialist Team",
    description: "Experienced clinicians across every specialty.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Experience",
    description: "Comfort, transparency and personalized care.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-[#07152C] py-36">
      <div className="mx-auto w-full max-w-[1700px] section-premium">
        <div className="grid items-center gap-14 lg:grid-cols-[45%_55%]">
          <div className="opacity-0 translate-y-6 scale-[0.98] animate-about-fade-scale image-premium">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about-clinic.png"
                alt="The luxurious clinic interior at The British Dental Hub"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-8 opacity-0 translate-y-6 animate-about-slide-up">
            <SectionHeader
              eyebrow="ABOUT THE BRITISH DENTAL HUB"
              title="Where British standards meet exceptional care."
              description="At The British Dental Hub, exceptional dentistry begins with trust. Inspired by British clinical standards, we combine advanced technology, specialist expertise, and a refined patient experience to deliver care that is precise, comfortable, and built around you. Every treatment is tailored with meticulous attention to detail—because premium dentistry is never one-size-fits-all."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <PremiumCard
                  key={feature.title}
                  className={`group px-6 py-6 opacity-0 translate-y-4 animate-about-slide-up ${
                    index === 0
                      ? "animate-about-delay-150"
                      : index === 1
                      ? "animate-about-delay-250"
                      : index === 2
                      ? "animate-about-delay-350"
                      : "animate-about-delay-450"
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-7 text-slate-200/80">
                    {feature.description}
                  </p>
                </PremiumCard>
              ))}
            </div>

            <div>
              <Button
                size="lg"
                className="rounded-none bg-primary px-9 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition duration-300 ease-out hover:bg-primary/90"
              >
                ABOUT OUR CLINIC
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
