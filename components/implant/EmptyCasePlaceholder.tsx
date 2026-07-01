import { Sparkles } from 'lucide-react'

export function EmptyCasePlaceholder() {
  return (
    <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[30px] border border-primary/20 bg-[linear-gradient(135deg,rgba(255,209,110,0.10),transparent_60%),rgba(7,21,44,0.95)] px-8 py-8 text-left shadow-[0_20px_70px_rgba(0,0,0,0.16)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-primary/20 bg-primary/10 text-primary">
          <Sparkles className="size-8" strokeWidth={1.4} />
        </div>
        <div className="rounded-full border border-primary/20 bg-[#07152C]/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary">
          Coming Soon
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white">
          Verified clinical cases will be featured here
        </h3>
        <p className="mt-4 max-w-md text-sm font-light leading-7 text-slate-300/85">
          Our team is preparing consented documentation and refined before-and-after storytelling so future patient outcomes can be shared with the same discretion as the treatment itself.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-300/80">
          Consented Photography
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-300/80">
          Clinical Review
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-300/80">
          Verified Outcomes
        </span>
      </div>
    </div>
  )
}
