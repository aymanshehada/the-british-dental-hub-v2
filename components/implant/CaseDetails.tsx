import { ArrowRight } from 'lucide-react'
import { PremiumButton } from '@/components/ui/premium-button'

interface CaseDetailsProps {
  treatment: string
  duration: string
  technique: string
  status: string
  summary: string
}

export function CaseDetails({
  treatment,
  duration,
  technique,
  status,
  summary,
}: CaseDetailsProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[rgba(7,21,44,0.95)] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-primary/80">
        Clinical Details
      </p>
      <p className="mt-5 text-lg font-semibold text-white">{summary}</p>
      <dl className="mt-6 space-y-4 text-sm text-slate-300/85">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <dt className="font-medium text-slate-400">Treatment</dt>
          <dd className="text-right text-white">{treatment}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <dt className="font-medium text-slate-400">Treatment Duration</dt>
          <dd className="text-right text-white">{duration}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <dt className="font-medium text-slate-400">Technique</dt>
          <dd className="text-right text-white">{technique}</dd>
        </div>
        <div className="flex items-center justify-between pb-2">
          <dt className="font-medium text-slate-400">Status</dt>
          <dd className="text-right text-white">{status}</dd>
        </div>
      </dl>
      <div className="mt-8">
        <PremiumButton href="/#contact" variant="secondary" className="w-full justify-center" iconRight={<ArrowRight className="size-4" />}>
          Book Consultation
        </PremiumButton>
      </div>
    </div>
  )
}
