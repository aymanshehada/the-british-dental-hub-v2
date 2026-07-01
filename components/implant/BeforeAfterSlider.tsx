"use client"

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BeforeAfterCard } from '@/components/implant/BeforeAfterCard'
import { EmptyCasePlaceholder } from '@/components/implant/EmptyCasePlaceholder'
import { type BeforeAfterCase } from '@/components/implant/before-after-data'

interface BeforeAfterSliderProps {
  cases: BeforeAfterCase[]
  activeIndex: number
  onPrevious: () => void
  onNext: () => void
  onSelect: (index: number) => void
}

export function BeforeAfterSlider({
  cases,
  activeIndex,
  onPrevious,
  onNext,
  onSelect,
}: BeforeAfterSliderProps) {
  const activeCase = cases[activeIndex] ?? null
  const hasCases = cases.length > 0

  return (
    <div className="space-y-6" aria-live="polite">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-primary/60" />
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-primary/80">
            Featured Cases
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="View previous case"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-[#07152C]/90 text-primary transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#081a36] motion-reduce:transition-none motion-reduce:transform-none"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="View next case"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-[#07152C]/90 text-primary transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#081a36] motion-reduce:transition-none motion-reduce:transform-none"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {hasCases ? (
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="transition duration-500 ease-out">
            <BeforeAfterCard
              title={activeCase.title}
              beforeImage={activeCase.beforeImage}
              afterImage={activeCase.afterImage}
              altPrefix={activeCase.title}
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.95)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                Case Overview
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cases.map((caseItem, index) => (
                  <button
                    key={caseItem.id}
                    type="button"
                    aria-label={`View ${caseItem.title}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => onSelect(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${activeIndex === index ? 'w-8 bg-primary' : 'w-2.5 bg-white/25 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.95)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <p className="text-sm font-light leading-7 text-slate-300/85">
                {activeCase.summary}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCasePlaceholder />
      )}
    </div>
  )
}
