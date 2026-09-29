import clsx from 'clsx'

import { Container } from '@/components/Container'

const pasos = [
  {
    name: 'Apartamos su fecha',
    description:
      'Elige paquete y con el 50% de anticipo su lugar queda reservado en el calendario.',
  },
  {
    name: 'Me manda el material',
    description:
      'Fotos, textos y datos del evento. Desde que llega completo empieza a correr el tiempo de entrega.',
  },
  {
    name: 'La revisa completa',
    description:
      'Recibe un enlace privado con la invitación terminada y me manda todos sus comentarios juntos.',
  },
  {
    name: 'Se publica',
    description:
      'Liquida el resto, publico el sitio y le entrego el enlace definitivo listo para compartir.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
          Cómo funciona
        </p>
        <h2 id="como-funciona-title" className="sr-only">
          Cómo funciona
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {pasos.map((paso, index) => (
            <li key={paso.name}>
              <div
                className={clsx(
                  'font-display text-6xl leading-none',
                  index === pasos.length - 1 ? 'text-wine' : 'text-numeral',
                )}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">{paso.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                {paso.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
