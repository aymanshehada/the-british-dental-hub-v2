import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type MouseEventHandler, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type PremiumButtonVariant = 'primary' | 'secondary' | 'outline'

interface BasePremiumButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  disabled?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  variant?: PremiumButtonVariant
  type?: 'button' | 'submit' | 'reset'
}

type PremiumButtonProps = BasePremiumButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'disabled' | 'onClick' | 'type'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href' | 'onClick'>

const variantStyles: Record<PremiumButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground border border-transparent shadow-sm shadow-slate-950/10 hover:bg-primary/90',
  secondary:
    'bg-[#07152C] text-primary border border-primary/20 hover:border-primary/40 hover:bg-slate-950/90',
  outline:
    'bg-transparent text-primary border border-primary/20 hover:bg-primary/10',
}

export function PremiumButton({
  children,
  className,
  href,
  onClick,
  disabled = false,
  iconLeft,
  iconRight,
  variant = 'primary',
  type = 'button',
  ...props
}: PremiumButtonProps) {
  const sharedClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-[20px] border px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition duration-200 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    variantStyles[variant],
    disabled && 'pointer-events-none opacity-60',
    !disabled && 'hover:-translate-y-0.5',
    className,
  )

  const content = (
    <>
      {iconLeft ? <span className="inline-flex items-center">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="inline-flex items-center">{iconRight}</span> : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        aria-disabled={disabled}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={sharedClasses}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}
