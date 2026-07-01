"use client"

import { useState, type KeyboardEvent } from 'react'
import { Sparkles } from 'lucide-react'
import { CaseDetails } from '@/components/implant/CaseDetails'
import { BeforeAfterSlider } from '@/components/implant/BeforeAfterSlider'
import { beforeAfterCases, type BeforeAfterCase } from '@/components/implant/before-after-data'

interface BeforeAfterGalleryProps {
  cases?: BeforeAfterCase[]
}

export function BeforeAfterGallery({ cases = beforeAfterCases }: BeforeAfterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = cases[activeIndex] ?? cases[0] ?? null

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? cases.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === cases.length - 1 ? 0 : current + 1))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goToPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goToNext()
    }
  }

  if (!cases.length) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-[#050d1f] py-24 sm:py-28 lg:py-32"
      aria-label="Before and after implant gallery"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,110,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-10 bg-primary" />
            Before & After Gallery
          </p>
          <h2 className="section-title mt-6 text-white">
            Before & After Gallery
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-slate-300/85 sm:text-xl">
            A refined gallery framework designed to present clinical transformation with the same discretion, precision and luxury as our treatment experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <BeforeAfterSlider
            cases={cases}
            activeIndex={activeIndex}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSelect={setActiveIndex}
          />

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.95)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[20px] border border-primary/20 bg-primary/10 text-primary">
                  <Sparkles className="size-6" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-primary/80">
                    Future-Ready Infrastructure
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-slate-300/85">
                    This gallery is prepared to showcase verified patient outcomes as clinical documentation becomes available.
                  </p>
                </div>
              </div>
            </div>

            {activeCase ? (
              <CaseDetails
                treatment={activeCase.treatment}
                duration={activeCase.duration}
                technique={activeCase.technique}
                status={activeCase.status}
                summary={activeCase.summary}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
