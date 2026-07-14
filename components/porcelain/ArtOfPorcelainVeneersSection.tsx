'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function ArtOfPorcelainVeneersSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const zoomIn = () => setZoom((current) => clamp(current + 0.2, 1, 3))
  const zoomOut = () => setZoom((current) => clamp(current - 0.2, 1, 3))
  const resetZoom = () => setZoom(1)

  return (
    <>
      <section className="bg-[#f8f9fb] py-26 sm:py-30 lg:py-34">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
              Editorial Showcase
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,4.1rem)] leading-[1.02] tracking-[-0.03em] text-[#0A2247]">
              THE ART OF PORCELAIN VENEERS
            </h2>
            <p className="mt-7 text-[1.05rem] leading-8 text-[#5b6e8b] sm:text-[1.12rem] sm:leading-9">
              A complete editorial study of porcelain veneer layering, presented as a luxury educational exhibition piece.
            </p>
          </div>

          <div className="mt-16 mb-4">
            <button
              type="button"
              onClick={() => {
                resetZoom()
                setIsOpen(true)
              }}
              className="group mx-auto block w-[88%] max-w-[1400px] overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,#071937_0%,#041126_100%)] p-4 shadow-[0_18px_48px_rgba(10,34,71,0.14)] transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_26px_58px_rgba(10,34,71,0.18)] sm:p-5"
              aria-label="Open porcelain veneers artwork in fullscreen"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px] bg-[#06132c]">
                <Image
                  src="/images/veneers-layering.png"
                  alt="The Art of Porcelain Veneers editorial artwork"
                  fill
                  priority
                  sizes="(max-width: 1536px) 88vw, 1400px"
                  className="object-contain object-center"
                />
              </div>
            </button>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-[120] bg-[#010611]/86 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full w-full items-center justify-center p-4 sm:p-6" onClick={(event) => event.stopPropagation()}>
          <div className="relative h-[92vh] w-[min(96vw,1800px)] rounded-[24px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,#06142d_0%,#030c1c_100%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-5">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#051024]">
              <div
                className="relative h-full w-full transition-transform duration-250 ease-out"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              >
                <Image
                  src="/images/veneers-layering.png"
                  alt="The Art of Porcelain Veneers editorial artwork fullscreen"
                  fill
                  sizes="96vw"
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div className="absolute right-5 top-5 flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/16"
                aria-label="Zoom out"
              >
                -
              </button>
              <button
                type="button"
                onClick={resetZoom}
                className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/16"
                aria-label="Reset zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/16"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/16"
                aria-label="Close fullscreen artwork"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
