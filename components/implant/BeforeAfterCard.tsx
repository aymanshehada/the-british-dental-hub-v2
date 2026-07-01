"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { EmptyCasePlaceholder } from '@/components/implant/EmptyCasePlaceholder'

interface BeforeAfterCardProps {
  title: string
  beforeImage?: string
  afterImage?: string
  altPrefix?: string
}

export function BeforeAfterCard({ title, beforeImage, afterImage, altPrefix = 'Clinical case' }: BeforeAfterCardProps) {
  const [beforeError, setBeforeError] = useState(false)
  const [afterError, setAfterError] = useState(false)
  const hasMedia = Boolean(beforeImage && afterImage) && !beforeError && !afterError

  useEffect(() => {
    setBeforeError(false)
    setAfterError(false)
  }, [beforeImage, afterImage])

  return (
    <div className="rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.95)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
          Before & After
        </span>
      </div>

      {hasMedia ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07152C]/80">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={beforeImage as string}
                alt={`${altPrefix} before treatment`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 32vw"
                className="object-cover"
                priority={false}
                loading="lazy"
                onError={() => setBeforeError(true)}
              />
            </div>
            <div className="bg-[#07152C]/90 px-4 py-3 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Before
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07152C]/80">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={afterImage as string}
                alt={`${altPrefix} after treatment`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 32vw"
                className="object-cover"
                priority={false}
                loading="lazy"
                onError={() => setAfterError(true)}
              />
            </div>
            <div className="bg-[#07152C]/90 px-4 py-3 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              After
            </div>
          </div>
        </div>
      ) : (
        <EmptyCasePlaceholder />
      )}
    </div>
  )
}
