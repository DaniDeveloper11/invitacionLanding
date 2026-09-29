import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import { site } from '@/config/site'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.7 13.64L3 21l4.5-1.24A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-1.4-.8-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1L10.8 9c-.6 0-1.8-.1-1.8.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-10 lg:flex-row lg:items-center lg:py-16">
          <div>
            <p className="font-display text-2xl tracking-[0.14em] text-ink uppercase">
              {site.brand}
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Invitaciones digitales a la medida en {site.ciudad}
            </p>
            <nav className="mt-10 flex flex-wrap items-center gap-8">
              <NavLinks />
              <Link
                href="/revendedores"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Para foto estudios
              </Link>
            </nav>
          </div>
          <div className="group relative flex items-center gap-6 self-stretch border border-rule p-6 transition-colors hover:border-ink sm:self-auto lg:w-80">
            <WhatsAppIcon className="h-9 w-9 flex-none text-wine" />
            <div>
              <p className="text-base font-bold text-ink">
                <Link href={site.whatsapp}>
                  <span className="absolute inset-0" />
                  Escribir por WhatsApp
                </Link>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Mándeme la fecha y el tipo de evento y le paso la propuesta.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 border-t border-rule pt-8 pb-12 md:flex-row-reverse md:items-center md:justify-between md:pt-6">
          <Button href={site.whatsapp} color="wine" className="flex-none">
            Pedir mi propuesta
          </Button>
          <p className="text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} {site.brand}. Precios en pesos
            mexicanos, IVA incluido.
          </p>
        </div>
      </Container>
    </footer>
  )
}
