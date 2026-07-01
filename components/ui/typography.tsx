import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export function Heading({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn('section-title text-white', className)} {...props}>
      {children}
    </h2>
  )
}

export function Text({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-[0.95rem] font-light leading-7 text-slate-200/90', className)} {...props}>
      {children}
    </p>
  )
}
