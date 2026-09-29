import { Container } from '@/components/Container'

const condiciones = [
  {
    name: 'Pago',
    description:
      '50% para apartar la fecha y 50% antes de publicar. Transferencia o depósito.',
  },
  {
    name: 'Cambios',
    description: 'Los que incluya su paquete. Cada ronda adicional, $350.',
  },
  {
    name: 'Tiempo de entrega',
    description:
      'Empieza a contar desde que recibo el material completo, no desde el anticipo.',
  },
  {
    name: 'Cancelación',
    description:
      'Anticipo completo de vuelta si todavía no empiezo. Ya iniciado el diseño, no hay devolución.',
  },
]

export function Conditions() {
  return (
    <section
      id="condiciones"
      aria-labelledby="condiciones-title"
      className="pb-20 sm:pb-28"
    >
      <Container>
        <h2 id="condiciones-title" className="sr-only">
          Condiciones
        </h2>
        <dl className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {condiciones.map((condicion) => (
            <div key={condicion.name}>
              <dt className="text-[0.6875rem] font-bold tracking-[0.2em] text-gold-dark uppercase">
                {condicion.name}
              </dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {condicion.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
