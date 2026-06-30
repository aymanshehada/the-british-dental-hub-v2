"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { MoveHorizontal } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { SectionHeader } from "@/components/ui/section-header"

type Case = {
  label: string
  before: string
  after: string
  duration: string
  visits: string
  result: string
}

const cases: Case[] = [
  {
    label: "Porcelain Veneers",
    before: "/images/case-1-before.png",
    after: "/images/case-1-after.png",
    duration: "10 Days",
    visits: "2 Visits",
    result: "Natural Smile Transformation",
  },
  {
    label: "Smile Makeover",
    before: "/images/case-2-before.png",
    after: "/images/case-2-after.png",
    duration: "14 Days",
    visits: "3 Visits",
    result: "Refined Facial Harmony",
  },
]

function Comparison({ item }: { item: Case }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <PremiumCard className="overflow-hidden border-primary/20 bg-[#07152C] shadow-[0_22px_60px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_26px_80px_rgba(0,0,0,0.24)]">
      <div className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-[28px] border border-transparent transition-all duration-300 ease-out">
        <div
          ref={containerRef}
          className="absolute inset-0"
          onPointerDown={(e) => {
            draggingRef.current = true
            ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
            updateFromClientX(e.clientX)
          }}
          onPointerMove={(e) => {
            if (draggingRef.current) updateFromClientX(e.clientX)
          }}
          onPointerUp={() => {
            draggingRef.current = false
          }}
        >
          {/* After (base) */}
          <Image
            src={item.after || "/placeholder.svg"}
            alt={`${item.label} — after treatment`}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          <span className="absolute right-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-white/10">
            After
          </span>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={item.before || "/placeholder.svg"}
              alt={`${item.label} — before treatment`}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute left-4 top-4 rounded-full bg-[#07152C] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-white/10">
              Before
            </span>
          </div>

          <div className="pointer-events-none absolute inset-y-0 flex items-center" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
            <div className="h-full w-0.5 bg-primary transition-all duration-300 ease-out" />
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_22px_48px_rgba(0,0,0,0.3)] ring-1 ring-primary/40">
              <MoveHorizontal className="size-5" />
            </div>
          </div>

          <label className="sr-only" htmlFor={`slider-${item.label}`}>
            Reveal before and after for {item.label}
          </label>
          <input
            id={`slider-${item.label}`}
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-x-0 bottom-0 z-10 h-10 w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>

      <div className="mt-6 rounded-b-[28px] border-t border-white/10 bg-[#07152C]/80 px-6 py-6 md:px-7">
        <div className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
          Treatment
        </div>
        <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
          {item.label}
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">Duration</p>
            <p className="mt-2 text-sm font-light text-slate-200">{item.duration}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">Visits</p>
            <p className="mt-2 text-sm font-light text-slate-200">{item.visits}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">Result</p>
            <p className="mt-2 text-sm font-light text-slate-200">{item.result}</p>
          </div>
        </div>
      </div>
    </PremiumCard>
  )
}

export function BeforeAfterSection() {
  return (
    <section id="results" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Before &amp; After
            <span className="h-px w-8 bg-primary" />
          </p>
          <h2 className="text-balance font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Results that speak for themselves
          </h2>
          <p className="mt-6 text-pretty text-lg font-light leading-relaxed text-muted-foreground">
            Drag the handle to reveal the transformation. Each case reflects our
            commitment to natural, refined outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {cases.map((item) => (
            <Comparison key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
