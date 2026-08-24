import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  as?: keyof HTMLElementTagNameMap
}

export function SectionWrapper({
  children,
  className,
  as: Component = 'section',
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      className={cn('relative overflow-hidden border-t border-brand-border bg-white py-24 sm:py-28 lg:py-32', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
