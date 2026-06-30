"use client"
import { useEffect, useRef, useState } from "react"
import { Check, CalendarCheck, ScanLine, ClipboardList, Smile } from "lucide-react"
import { PremiumButton } from "@/components/ui/premium-button"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

type Step = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  step: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Consultation",
    description:
      "A relaxed, in-depth discussion of your goals, concerns and medical history.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Digital Assessment",
    description:
      "3D scans and imaging capture every detail so we can diagnose with complete precision.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Treatment Planning",
    description:
      "Your bespoke plan is modelled digitally, with transparent timelines and care recommendations.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Clinical Procedure",
    description:
      "Care is delivered with meticulous technique, comfort and premium attention to every detail.",
  },
  {
    icon: Smile,
    step: "05",
    title: "Smile Review & Aftercare",
    description:
      "Final review and personalised aftercare keep your new smile looking exceptional for years.",
  },
]

const trustIndicators = [
  "British-trained standards",
  "Digital precision",
  "Comfortable care",
  "Long-term support",
]

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="bg-secondary pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            eyebrow="THE PATIENT JOURNEY"
            title="From first hello to final smile"
            description="A clear, considered process designed to keep you informed and at ease every step of the way."
            align="center"
          />
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[28px] border border-primary/10 bg-[#07152C]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:p-8">
          <div
            className={cn(
              "absolute left-8 top-20 h-[calc(100%-6rem)] w-[2px] rounded-full bg-primary/20 transition-all duration-700 ease-out lg:hidden",
              visible ? "scale-y-100" : "scale-y-0",
            )}
            style={{ transformOrigin: "top" }}
          />
          <div
            className={cn(
              "hidden absolute inset-x-6 top-1/2 h-[2px] rounded-full bg-primary/20 transition-all duration-700 ease-out lg:block",
              visible ? "scale-x-100" : "scale-x-0",
            )}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 items-stretch">
            {steps.map((step, index) => (
              <article
                key={step.step}
                className={cn(
                  "group relative h-full overflow-hidden rounded-[28px] border border-primary/10 bg-[#07152C] px-7 py-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.24)]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-[#07152C]/80 text-primary transition duration-300 ease-out group-hover:border-primary/50 group-hover:shadow-[0_0_0_8px_rgba(255,209,110,0.08)]">
                    <step.icon className="size-6 transition-transform duration-300 ease-out group-hover:scale-[1.08]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                      Step {step.step}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((text) => (
            <div key={text} className="flex items-center gap-4 rounded-[24px] border border-primary/10 bg-[#07152C] px-6 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[#07152C] shadow-sm">
                <Check className="size-4" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PremiumButton variant="primary" className="w-full max-w-[320px] text-xs tracking-[0.2em]">
            Book Your Consultation
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}
