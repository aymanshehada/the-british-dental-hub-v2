import { type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface PremiumCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export function PremiumCard({
  children,
  className,
  hover = true,
  style,
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        'card-premium',
        hover && 'card-premium-hover',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
