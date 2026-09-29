import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { StudioDemo } from '@/components/StudioDemo'
import { site } from '@/config/site'

export const metadata = {
  title: 'Programa de revendedores para foto estudios',
  description:
    'Venda la invitación digital con su marca y quédese con hasta el 44% de margen. Precios de mayoreo, extras y condiciones para foto estudios.',
  openGraph: {
    title: 'Programa de revendedores para foto estudios',
    description:
      'Venda la invitación digital con su marca y quédese con hasta el 44% de margen.',
    url: '/revendedores',
  },
}

const paquetes = [
  {
    name: 'Sencilla',
    paga: '$900',
    vende: '$1,600',
    gana: '$700',
  },
  {
    name: 'Completa',
    label: 'La que más se vende',
    paga: '$2,200',
    vende: '$3,800',
    gana: '$1,600',
    destacada: true,
  },
  {
    name: 'Premium',
    paga: '$3,360',
    vende: '$6,000',
    gana: '$2,640',
  },
]

const pasos = [
  {
    name: 'Cierra la venta',
    description: 'Usted cierra con su cliente y me manda el material.',
  },
  {
    name: 'Yo diseño y programo',
    description: 'Desde cero, con los colores y el concepto del evento.',
  },
  {
    name: 'Usted la presenta',
    description: 'Revisa, se la muestra a su cliente y cobra.',
  },
  {
    name: 'Se publica',
    description: 'Publico el sitio y usted me paga el mayorista.',
  },
]

const comparativo = [
  ['Diseño a la medida', 'Sí', 'Sí', 'Sí'],
  ['Secciones', '4', 'Ilimitadas', 'Las que pida'],
  ['Fotos en galería', '6', '12', 'Sin límite'],
  ['Música de fondo', '—', 'Sí', 'Sí'],
  ['Mapa', 'Enlace', 'En la página', 'Varias sedes'],
  ['Confirmaciones', 'Por WhatsApp', 'Lista automática', 'Pase por invitado'],
  ['Dirección web', 'Subdominio', 'Subdominio', 'Dominio propio'],
  ['Cambios incluidos', '1', '2', '3'],
  ['Entrega', '3 días', '5 a 7 días', '10 a 14 días'],
  ['En línea por', '4 meses', '6 meses', '12 meses'],
]

const extras = [
  ['Pase personalizado por invitado', '$700', '$1,250'],
  ['Panel con el conteo de confirmados', '$500', '$900'],
  ['Galería del evento en el mismo enlace', '$500', '$900'],
  ['Dominio propio', '$450', '$800'],
  ['Video invitación para Instagram', '$600', '$1,100'],
  ['Recordatorio automático a los confirmados', '$400', '$700'],
  ['Versión en inglés', '$600', '$1,100'],
  ['Entrega en 48 horas', '+50% del paquete', 'A su criterio'],
]

const argumentos = [
  {
    publico: 'A su cliente',
    puntos: [
      [
        'Cuesta menos que imprimir.',
        '150 impresas y repartidas pasan de $6,000. La digital llega a 300 personas sin costo por invitado.',
      ],
      [
        'Si cambia algo, se corrige.',
        'Cambió la hora o el lugar: se edita y todos ven la versión nueva. Lo impreso ya se repartió.',
      ],
      [
        'Sabe quién va.',
        'Las confirmaciones llegan en lista, no en ochenta conversaciones de WhatsApp.',
      ],
    ],
  },
  {
    publico: 'A usted',
    puntos: [
      [
        'Sube el ticket en la misma junta.',
        'Ya está cerrando el paquete de fotos; la invitación se ofrece ahí mismo.',
      ],
      [
        'Usa fotos que ya cobró.',
        'La sesión de compromiso alimenta la portada y la galería.',
      ],
      [
        'Su marca circula entre 200 invitados.',
        'Gente que justo está viendo un evento bien hecho.',
      ],
    ],
  },
]

const condiciones = [
  [
    'Pago',
    '50% al mandar el material, 50% antes de publicar. Transferencia o depósito.',
  ],
  ['Sin mi marca', 'Siempre. El pie de página puede llevar la de su estudio.'],
  [
    'Cancelación',
    'Anticipo completo de vuelta si aún no empiezo. Ya iniciada, no hay devolución.',
  ],
  ['Se le entrega copia', 'Del sitio, al cerrar cada proyecto.'],
]

const material = [
  'Fecha, hora y dirección exacta',
  'Nombres como deben aparecer',
  'Una foto de portada y de 6 a 15 para la galería',
  'Los textos ya revisados',
  'El WhatsApp donde quieren recibir las confirmaciones',
  'La canción, si lleva música',
]

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4v11m0 0-4-4m4 4 4-4M5 18h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SectionTitle({ kicker, children, className }) {
  return (
    <div className={className}>
      <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
        {kicker}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
        {children}
      </h2>
    </div>
  )
}

export default function Revendedores() {
  return (
    <>
      <section className="overflow-hidden py-20 sm:py-24">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-gold" />
                <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
                  Programa de revendedores · Foto estudios
                </p>
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.04] font-medium tracking-tight text-pretty text-ink sm:text-6xl lg:text-[4.5rem]">
                Usted la vende. Yo la hago. Se queda con{' '}
                <span className="text-wine italic">hasta el 44% de margen</span>
                .
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Cada invitación se diseña desde cero para ese evento: sus
                colores, su tipografía, su concepto. No uso plantillas. Sale sin
                mi marca — el pie de página puede llevar la de su estudio.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={site.whatsappEstudios} color="wine">
                  Pedir precios de estudio
                </Button>
                <Button
                  href={site.folleto}
                  variant="outline"
                  color="ink"
                  download
                  target="_blank"
                  rel="noopener"
                >
                  <DownloadIcon className="h-5 w-5 flex-none" />
                  <span className="ml-2.5">Descargar folleto (PDF)</span>
                </Button>
              </div>
              <p className="mt-10 max-w-lg border-t border-rule pt-6 text-sm leading-relaxed text-ink-muted lg:mt-12">
                Así la ve su cliente: con el nombre de su estudio en la portada
                y en la firma. La mía no aparece en ningún lado.
              </p>
            </div>

            <div className="relative mt-14 lg:col-span-5 lg:mt-0 xl:col-span-6">
              <div className="-mx-4 h-[520px] mask-[linear-gradient(to_bottom,white_88%,transparent)] px-9 sm:mx-0 lg:h-[560px] lg:px-0">
                <PhoneFrame className="mx-auto max-w-[340px]">
                  <StudioDemo />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="Precios">
            Lo que usted paga
            <br />y lo que gana
          </SectionTitle>
          {/* En celular la tabla se vuelve tres tarjetas apiladas. */}
          <ul role="list" className="mt-10 space-y-6 md:hidden">
            {paquetes.map((paquete) => (
              <li
                key={paquete.name}
                className={clsx(
                  'p-6',
                  paquete.destacada
                    ? 'border border-wine bg-paper'
                    : 'border border-rule',
                )}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xs font-bold tracking-[0.22em] text-ink-muted uppercase">
                    {paquete.name}
                  </h3>
                  {paquete.label && (
                    <span className="bg-wine px-2 py-1 text-[0.625rem] font-bold tracking-[0.14em] text-cream uppercase">
                      {paquete.label}
                    </span>
                  )}
                </div>
                <dl className="mt-5 divide-y divide-rule-soft">
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="text-sm text-ink-muted">Usted paga</dt>
                    <dd className="font-display text-2xl text-ink-soft">
                      {paquete.paga}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="text-sm text-ink-muted">Vende en</dt>
                    <dd className="font-display text-2xl text-ink-soft">
                      {paquete.vende}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="text-sm font-bold tracking-wide text-gold-dark uppercase">
                      Gana
                    </dt>
                    <dd className="font-display text-4xl text-wine">
                      {paquete.gana}
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden overflow-x-auto md:block">
            <table className="w-full min-w-xl border-collapse text-left">
              <thead>
                <tr className="border-b border-rule">
                  <th className="pb-3 text-xs font-normal tracking-[0.16em] text-ink-muted uppercase">
                    Paquete
                  </th>
                  <th className="pb-3 text-right text-xs font-normal tracking-[0.16em] text-ink-muted uppercase">
                    Usted paga
                  </th>
                  <th className="pb-3 text-right text-xs font-normal tracking-[0.16em] text-ink-muted uppercase">
                    Vende en
                  </th>
                  <th className="pb-3 text-right text-xs font-bold tracking-[0.16em] text-gold-dark uppercase">
                    Gana
                  </th>
                </tr>
              </thead>
              <tbody>
                {paquetes.map((paquete) => (
                  <tr
                    key={paquete.name}
                    className={clsx(
                      'border-b border-rule',
                      paquete.destacada && 'bg-paper',
                    )}
                  >
                    <td className="py-5 text-xl text-ink">
                      <span className="flex flex-wrap items-baseline gap-3">
                        {paquete.name}
                        {paquete.label && (
                          <span className="bg-wine px-2 py-1 text-[0.625rem] font-bold tracking-[0.14em] text-cream uppercase">
                            {paquete.label}
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="py-5 text-right font-display text-3xl text-ink-soft">
                      {paquete.paga}
                    </td>
                    <td className="py-5 text-right font-display text-3xl text-ink-soft">
                      {paquete.vende}
                    </td>
                    <td
                      className={clsx(
                        'py-5 text-right font-display text-wine',
                        paquete.destacada ? 'text-4xl' : 'text-3xl',
                      )}
                    >
                      {paquete.gana}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink-muted">
            Pesos mexicanos, IVA incluido. El precio de venta lo decide usted;
            el sugerido es sólo referencia.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
            Cómo funciona
          </p>
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

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="Qué incluye cada una">
            El comparativo completo
          </SectionTitle>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-xl border-collapse text-left">
              <thead>
                <tr className="border-b border-rule">
                  <th className="pb-3" />
                  {['Sencilla', 'Completa', 'Premium'].map((name) => (
                    <th
                      key={name}
                      className="pb-3 text-center text-xs font-normal tracking-[0.16em] text-ink-muted uppercase"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparativo.map(([fila, ...valores]) => (
                  <tr key={fila} className="border-b border-rule-soft">
                    <td className="py-3 text-[0.9375rem] text-ink-soft">
                      {fila}
                    </td>
                    {valores.map((valor, index) => (
                      <td
                        key={index}
                        className="py-3 text-center text-[0.9375rem] text-ink"
                      >
                        {valor}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-ink-muted">
            Las tres incluyen cuenta regresiva, galería, dress code, ubicación,
            vista previa al compartir en WhatsApp y diseño pensado para el
            celular.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="Extras">
            Los que más se venden, una vez que el cliente ya dijo sí
          </SectionTitle>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-16 lg:grid-cols-2"
          >
            {extras.map(([nombre, paga, vende]) => (
              <li
                key={nombre}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-4"
              >
                <span className="text-[1.0625rem] text-ink">{nombre}</span>
                <span className="flex-none text-sm text-ink-muted">
                  {paga} <span className="px-1">→</span>{' '}
                  <span className="font-display text-xl text-wine">
                    {vende}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="Cómo venderla">Los argumentos</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {argumentos.map((bloque) => (
              <div key={bloque.publico}>
                <p className="text-[0.6875rem] font-bold tracking-[0.2em] text-gold-dark uppercase">
                  {bloque.publico}
                </p>
                <ul role="list" className="mt-5 space-y-5">
                  {bloque.puntos.map(([titulo, texto]) => (
                    <li
                      key={titulo}
                      className="border-b border-rule-soft pb-5 text-[0.9375rem] leading-relaxed text-ink-soft"
                    >
                      <strong className="font-bold text-ink">{titulo}</strong>{' '}
                      {texto}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-wine p-8 sm:p-10">
            <h3 className="font-display text-3xl font-medium text-wine">
              El cierre más fácil
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
              Métala en el paquete de fotografía como cortesía, con el costo ya
              absorbido en el precio total. El cliente siente que ganó algo y
              usted no negocia el extra por separado.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 border-t border-rule pt-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
                Condiciones
              </p>
              <dl className="mt-6 space-y-5">
                {condiciones.map(([nombre, texto]) => (
                  <div key={nombre}>
                    <dt className="text-[0.6875rem] font-bold tracking-[0.2em] text-ink uppercase">
                      {nombre}
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {texto}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
                Para cada invitación necesito
              </p>
              <ul role="list" className="mt-6">
                {material.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule-soft py-3 text-[0.9375rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-wine py-20 sm:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl leading-none font-medium text-cream sm:text-6xl">
                ¿Cuántas bodas cubre al año?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream-soft">
                Dígame el número y le paso la lista de precios de estudio, las
                condiciones de marca y los tiempos de entrega.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 lg:mt-0 lg:flex-none">
              <Button href={site.whatsappEstudios} color="cream">
                Escribir por WhatsApp
              </Button>
              <Button
                href={site.folleto}
                variant="outline"
                color="cream"
                download
                target="_blank"
                rel="noopener"
              >
                <DownloadIcon className="h-5 w-5 flex-none" />
                <span className="ml-2.5">Descargar folleto</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
