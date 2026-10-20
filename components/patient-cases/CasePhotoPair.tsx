import Image from "next/image"

type PairImage = { src: string; width: number; height: number; alt: string; badge: string }

// A matched before/after pair. Stacks on mobile so each photograph stays
// legible; side by side from md up. Source order is before, then after, so RTL
// layouts place "before" on the right automatically.
export function CasePhotoPair({
  before,
  after,
  ratio,
}: {
  before: PairImage
  after: PairImage
  ratio: string
}) {
  return (
    <div className="grid gap-1 md:grid-cols-2">
      {[before, after].map((image) => (
        <div key={image.src} className="relative">
          <span className="absolute start-3 top-3 z-10 rounded-[4px] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#183668] rtl:tracking-normal">
            {image.badge}
          </span>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 570px, 100vw"
            className={`${ratio} w-full object-cover`}
          />
        </div>
      ))}
    </div>
  )
}
