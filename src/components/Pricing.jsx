import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { site } from '@/config/site'

const plans = [
  {
    name: 'Sencilla',
    featured: false,
    price: 'Desde $1,600',
    description: 'Lista en 3 días · 4 meses en línea',
    features: [
      '6 secciones',
      'Galería de 6 fotos',
      'Enlace a la ubicación',
      'Confirmaciones por WhatsApp',
      '1 ronda de cambios',
    ],
  },
  {
    name: 'Completa',
    featured: true,
    label: 'La más elegida',
    price: '$3,800',
    description: 'Lista en 5 a 7 días · 6 meses en línea',
    features: [
      'Secciones ilimitadas',
      'Galería de 12 fotos',
      'Música de fondo',
      'Mapa dentro de la página',
      'Lista automática de confirmados',
      '2 rondas de cambios',
    ],
  },
  {
    name: 'Premium',
    featured: false,
    price: 'Desde $6,000',
    description: 'Lista en 10 a 14 días · 12 meses en línea',
    features: [
      'Las secciones que pida',
      'Galería sin límite',
      'Pase personalizado por invitado',
      'Varias sedes en el mapa',
      'Dominio propio',
      '3 rondas de cambios',
    ],
  },
]

function Plan({ name, label, price, description, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col p-8',
        featured
          ? 'order-first bg-wine text-cream lg:order-0'
          : 'border border-rule bg-paper',
      )}
    >
      <h3 className="flex items-center justify-between gap-4">
        <span
          className={clsx(
            'text-xs font-bold tracking-[0.22em] uppercase',
            featured ? 'text-cream-soft' : 'text-ink-muted',
          )}
        >
          {name}
        </span>
        {label && (
          <span className="bg-cream px-3 py-1 text-[0.625rem] font-bold tracking-[0.16em] text-ink uppercase">
            {label}
          </span>
        )}
      </h3>
      <p
        className={clsx(
          'mt-5 font-display text-5xl leading-none',
          featured ? 'text-cream' : 'text-ink',
        )}
      >
        {price}
      </p>
      <p
        className={clsx(
          'mt-4 border-b pb-6 text-sm',
          featured
            ? 'border-cream/25 text-cream-soft'
            : 'border-rule-soft text-ink-muted',
        )}
      >
        {description}
      </p>
      <div className="mt-6 flex-auto">
        <ul
          role="list"
          className={clsx(
            'space-y-3 text-[0.9375rem]',
            featured ? 'text-cream-soft' : 'text-ink-soft',
          )}
        >
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <Button
        href={site.whatsapp}
        color={featured ? 'cream' : 'ink'}
        variant={featured ? 'solid' : 'outline'}
        className="mt-8 w-full"
        aria-label={`Pedir propuesta del paquete ${name}`}
      >
        Pedir esta
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="paquetes"
      aria-labelledby="paquetes-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="border-b border-rule pb-8 md:flex md:items-end md:justify-between md:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
              Tres formas de hacerla
            </p>
            <h2
              id="paquetes-title"
              className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl"
            >
              Elija hasta dónde
              <br />
              quiere llegar
            </h2>
          </div>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:mt-0">
            Precios en pesos mexicanos, IVA incluido. Las tres incluyen cuenta
            regresiva, galería, dress code, ubicación, vista previa al compartir
            en WhatsApp y diseño pensado para el celular.
          </p>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-1 items-start gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm text-ink-muted">
          Si su evento necesita cuatro secciones más de las que trae la
          Sencilla, le conviene la Completa: sale más barato que ir sumándolas.
        </p>
      </Container>
    </section>
  )
}
