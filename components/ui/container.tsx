import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 sm:px-8 lg:px-10', className)} {...props}>
      {children}
    </div>
  )
}
