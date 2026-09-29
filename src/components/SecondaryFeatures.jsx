import { Container } from '@/components/Container'
import { site } from '@/config/site'

const secciones = [
  'Itinerario del evento',
  'Mesa de regalos',
  'Hoteles cercanos',
  'Padrinos y damas',
  'Nuestra historia',
  'Preguntas frecuentes',
  'Fotos de referencia del dress code',
  'Varias ubicaciones',
  'Los invitados sugieren canciones',
  'Muro de felicitaciones',
  'Apertura tipo sobre',
  'Video de portada',
]

export function SecondaryFeatures() {
  return (
    <section
      id="secciones"
      aria-labelledby="secciones-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="lg:flex lg:gap-20">
          <div className="lg:w-96 lg:flex-none">
            <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
              Secciones
            </p>
            <h2
              id="secciones-title"
              className="mt-4 font-display text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl"
            >
              Se arma con las que usted quiera
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Escoja las que su evento necesite. Si quiere algo que no está en
              la lista, se puede hacer:{' '}
              <a
                href={site.whatsapp}
                className="text-wine underline underline-offset-4 hover:text-wine-dark"
              >
                dígame qué tiene en mente
              </a>{' '}
              y le paso el precio.
            </p>
          </div>

          <ol className="mt-12 grid flex-auto grid-cols-1 gap-x-16 lg:mt-0 lg:grid-cols-2">
            {secciones.map((seccion, index) => (
              <li
                key={seccion}
                className="flex items-baseline gap-5 border-b border-rule py-4"
              >
                <span className="w-7 flex-none font-display text-lg text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-ink">{seccion}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
