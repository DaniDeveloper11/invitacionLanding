import { Container } from '@/components/Container'

const extras = [
  {
    name: 'Pase personalizado por invitado',
    price: '$1,250',
    description:
      'Cada familia recibe su propio enlace con su nombre y el número de lugares que le tocan.',
  },
  {
    name: 'Panel con el conteo de confirmados',
    price: '$900',
    description:
      'Entra cuando quiera y ve cuántos van, quién falta y la lista completa para el salón.',
  },
  {
    name: 'Galería del evento en el mismo enlace',
    price: '$900',
    description:
      'Después de la fiesta, las fotos se suben al mismo sitio que ya todos tienen guardado.',
  },
  {
    name: 'Dominio propio',
    price: '$800',
    description: 'Su enlace con sus nombres, en lugar de un subdominio.',
  },
  {
    name: 'Video invitación para Instagram',
    price: '$1,100',
    description: 'Versión vertical de 15 segundos para historias y reels.',
  },
  {
    name: 'Recordatorio automático a los confirmados',
    price: '$700',
    description:
      'Un mensaje unos días antes con hora, dirección y dress code, sin que usted escriba nada.',
  },
  {
    name: 'Versión en inglés',
    price: '$1,100',
    description:
      'La misma invitación en los dos idiomas, con un botón para cambiar.',
  },
  {
    name: 'Entrega en 48 horas',
    price: '+50%',
    description: 'Cuando la fecha ya está encima y no hay margen de espera.',
  },
]

export function Extras() {
  return (
    <section
      id="extras"
      aria-labelledby="extras-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="border-b border-rule pb-8 md:flex md:items-end md:justify-between md:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
              Extras
            </p>
            <h2
              id="extras-title"
              className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl"
            >
              Se agregan a cualquiera
              <br />
              de los tres paquetes
            </h2>
          </div>
          <p className="mt-6 text-sm tracking-wide text-ink-muted md:mt-0 md:pb-2">
            Pesos mexicanos, IVA incluido
          </p>
        </div>

        <ul role="list" className="grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          {extras.map((extra) => (
            <li
              key={extra.name}
              className="flex items-baseline gap-6 border-b border-rule py-5"
            >
              <div className="flex-auto">
                <h3 className="text-lg text-ink">{extra.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {extra.description}
                </p>
              </div>
              <p className="flex-none font-display text-2xl text-wine tabular-nums">
                {extra.price}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
