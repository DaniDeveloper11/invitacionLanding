import { useId } from 'react'

import { AppDemo } from '@/components/AppDemo'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { site } from '@/config/site'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#e4dcd0"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a87c3f" />
            <stop offset="1" stopColor="#a87c3f" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#e4dcd0"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a87c3f" />
            <stop offset="1" stopColor="#a87c3f" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12S18 17.5 12 17.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

const datos = [
  ['$1,600', 'Precio de arranque'],
  ['3 días', 'Y está lista'],
  ['$0', 'Costo por invitado'],
]

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-28 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-gold" />
              <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
                Bodas · XV años · Eventos
              </p>
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.04] font-medium tracking-tight text-pretty text-ink sm:text-6xl lg:text-[4.75rem]">
              Una invitación hecha{' '}
              <span className="text-wine italic">solo</span> para su evento
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              No es una plantilla con su nombre encima. Se diseña desde cero con
              sus colores, su tipografía y su concepto, y le llega a cada
              invitado por WhatsApp con un solo enlace.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={site.whatsapp} color="wine">
                Pedir mi propuesta
              </Button>
              <Button href={site.ejemplo} variant="outline" color="ink">
                <EyeIcon className="h-5 w-5 flex-none" />
                <span className="ml-2.5">Ver una invitación de ejemplo</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-12 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[660px] mask-[linear-gradient(to_bottom,white_91%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:mask-[linear-gradient(to_bottom,white_60%,transparent)] lg:px-0 lg:pt-10">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative mt-12 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <dl className="grid max-w-xl grid-cols-1 border-t border-rule sm:grid-cols-3">
              {datos.map(([valor, label], index) => (
                <div
                  key={label}
                  className={
                    index === 2
                      ? 'py-5 sm:pl-7'
                      : 'border-b border-rule py-5 sm:border-r sm:border-b-0 sm:pr-6' +
                        (index === 1 ? ' sm:pl-7' : '')
                  }
                >
                  <dt className="font-display text-3xl text-ink">{valor}</dt>
                  <dd className="mt-1 text-xs tracking-[0.1em] text-ink-muted uppercase">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </div>
  )
}
