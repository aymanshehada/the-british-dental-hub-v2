import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  eyebrowClassName?: string
  eyebrowLine?: 'single' | 'double'
  eyebrowLineClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  eyebrowClassName = '',
  eyebrowLine = 'single',
  eyebrowLineClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <p
        className={cn(
          'eyebrow',
          align === 'center' ? 'justify-center' : 'justify-start',
          'mx-auto inline-flex',
          eyebrowClassName,
        )}
      >
        <span className={cn('h-px w-10 bg-primary', eyebrowLineClassName)} />
        {eyebrow}
        {eyebrowLine === 'double' ? (
          <span className={cn('h-px w-10 bg-primary', eyebrowLineClassName)} />
        ) : null}
      </p>
      <h2 className={cn('section-title mt-5', align === 'center' ? 'mx-auto' : '', titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-6 max-w-3xl text-lg font-light leading-8 text-slate-200/90 sm:text-xl',
            align === 'center' ? 'mx-auto' : '',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
