import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wide transition-colors',
  outline:
    'inline-flex items-center justify-center border px-[calc(--spacing(8)-1px)] py-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    wine: 'bg-wine text-cream hover:bg-wine-dark active:bg-wine-dark active:text-cream/80',
    cream:
      'bg-cream text-ink hover:bg-paper active:bg-paper active:text-ink/70',
    ink: 'bg-ink text-cream hover:bg-ink-raised active:bg-ink active:text-cream/80',
  },
  outline: {
    ink: 'border-ink text-ink hover:bg-ink hover:text-cream active:bg-ink active:text-cream/80',
    cream: 'border-cream/40 text-cream hover:border-cream active:text-cream/80',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'wine'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
