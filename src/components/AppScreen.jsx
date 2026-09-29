import { forwardRef } from 'react'
import clsx from 'clsx'

function ShareIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 16V4m0 0L8 8m4-4 4 4M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20s-7-4.35-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 4.65-7 9-7 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex items-center justify-between px-4 pt-4 text-ink-muted">
        <HeartIcon className="h-5 w-5 flex-none" />
        <div className="text-[0.625rem] tracking-[0.3em] uppercase">
          Invitación
        </div>
        <ShareIcon className="h-5 w-5 flex-none" />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-ink">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="font-display text-3xl text-ink">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="mt-1 text-sm text-ink-muted">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-paper', className)}
    >
      {children}
    </div>
  )
})
