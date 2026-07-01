import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  align?: 'left' | 'center'
  className?: string
  lineClassName?: string
  line?: 'single' | 'double'
}

export function Eyebrow({
  children,
  align = 'center',
  className,
  lineClassName,
  line = 'single',
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        'eyebrow mx-auto inline-flex',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
      {...props}
    >
      <span className={cn('h-px w-10 bg-primary', lineClassName)} />
      {children}
      {line === 'double' ? (
        <span className={cn('h-px w-10 bg-primary', lineClassName)} />
      ) : null}
    </p>
  )
}
