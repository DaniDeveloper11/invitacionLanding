import { AppScreen } from '@/components/AppScreen'

const cuenta = [
  ['48', 'días'],
  ['06', 'hrs'],
  ['21', 'min'],
  ['09', 'seg'],
]

const itinerario = [
  ['4:30 pm', 'Recepción de invitados'],
  ['5:00 pm', 'Ceremonia religiosa'],
  ['7:00 pm', 'Cena y brindis'],
  ['9:00 pm', 'Baile'],
]

// Ramo de esquina dibujado a línea: tres tallos con hojas y dos flores de
// cinco pétalos. Se usa espejeado en la esquina opuesta.
// Rama de laurel al estilo grabado: tallo y hojas pareadas, sin flores.
// Se usa espejeada a los dos lados de la portada para que quede simétrica.
function FloralDivider({ children }) {
  // Sin texto es un solo filete; con texto, dos filetes que lo enmarcan.
  if (!children) {
    return <span aria-hidden="true" className="block h-px w-16 bg-gold/50" />
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <span aria-hidden="true" className="h-px w-12 bg-gold/50" />
      <span className="text-[0.625rem] font-bold tracking-[0.28em] text-gold-dark uppercase">
        {children}
      </span>
      <span aria-hidden="true" className="h-px w-12 bg-gold/50" />
    </div>
  )
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6-5.686 6-10a6 6 0 1 0-12 0c0 4.314 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="1.75" fill="currentColor" />
    </svg>
  )
}

function PhotoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 17.5 9 12l4 4 2.5-2.5L20 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function GiftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8ZM3.5 8h17v3h-17V8ZM12 8v12M12 8c-1-3-5.5-3.5-5.5-1S10.5 8 12 8Zm0 0c1-3 5.5-3.5 5.5-1S13.5 8 12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MusicIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18V6l10-2v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="6.5"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="16.5"
        cy="16"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function Divider({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-auto bg-rule-soft" />
      <span className="text-[0.5625rem] font-bold tracking-[0.24em] text-gold-dark uppercase">
        {children}
      </span>
      <span aria-hidden="true" className="h-px flex-auto bg-rule-soft" />
    </div>
  )
}

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="flex flex-col">
          <div className="relative overflow-hidden border-b border-rule-soft bg-paper px-7 pt-8 pb-9 sm:pt-11 sm:pb-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-gold/30"
            />

            <div className="relative text-center">
              <div className="text-[0.625rem] font-bold tracking-[0.3em] text-gold-dark uppercase">
                Nos casamos
              </div>

              <div className="mt-4 font-script text-[3.5rem] leading-[1] text-ink sm:mt-5 sm:text-[4.25rem]">
                Ana
              </div>
              <div className="-my-1 font-script text-3xl text-gold">y</div>
              <div className="font-script text-[3.5rem] leading-[1] text-ink sm:text-[4.25rem]">
                Luis
              </div>

              <div className="mt-5 flex justify-center">
                <FloralDivider />
              </div>
              <div className="mt-4 text-xs tracking-[0.14em] text-ink-soft uppercase">
                Sábado 14 de febrero · 2026
              </div>
              <div className="mt-1 text-xs tracking-[0.14em] text-ink-muted uppercase">
                Jardín Santa Lucía
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-b border-rule-soft bg-cream px-5 py-5 sm:py-6">
            <div className="relative text-center">
              <FloralDivider>Faltan</FloralDivider>
              <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
                {cuenta.map(([valor, unidad]) => (
                  <div
                    key={unidad}
                    className="border border-gold/40 bg-paper px-1 py-3"
                  >
                    <div className="font-display text-[2rem] leading-none text-wine tabular-nums">
                      {valor}
                    </div>
                    <div className="mt-1.5 text-[0.5625rem] tracking-[0.14em] text-ink-muted uppercase">
                      {unidad}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[0.625rem] tracking-[0.1em] text-ink-muted">
                para el gran día
              </div>
            </div>
          </div>

          <div className="space-y-6 px-6 py-6">
            <div>
              <Divider>Itinerario</Divider>
              <div className="mt-3 divide-y divide-rule-soft text-sm">
                {itinerario.map(([hora, evento]) => (
                  <div key={hora} className="flex gap-4 py-2">
                    <div className="w-16 flex-none font-display text-base text-gold">
                      {hora}
                    </div>
                    <div className="text-ink">{evento}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Divider>Galería</Divider>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="flex aspect-[3/4] items-center justify-center bg-cream text-rule"
                  >
                    <PhotoIcon className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-[0.625rem] tracking-wide text-ink-muted">
                [AQUÍ VAN LAS FOTOS DE SU SESIÓN]
              </p>
            </div>

            <div>
              <Divider>Dress code</Divider>
              <div className="mt-3 flex items-center justify-between text-sm">
                <div className="text-ink">Formal · Etiqueta rigurosa</div>
                <div className="flex gap-1.5">
                  <span className="h-5 w-5 bg-ink" />
                  <span className="h-5 w-5 bg-wine" />
                  <span className="h-5 w-5 bg-gold" />
                </div>
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Se pide evitar el blanco y el marfil.
              </p>
            </div>

            <div>
              <Divider>Dónde</Divider>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 flex-none text-gold" />
                  <div>
                    <div className="text-ink">Parroquia de San José</div>
                    <div className="text-xs text-ink-muted">
                      Hidalgo 210, Centro · Ver mapa
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 flex-none text-gold" />
                  <div>
                    <div className="text-ink">Jardín Santa Lucía</div>
                    <div className="text-xs text-ink-muted">
                      Camino al Vergel km 4 · Ver mapa
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 border border-rule px-3 py-2.5">
                <GiftIcon className="h-4 w-4 flex-none text-gold" />
                <div className="flex-auto text-sm text-ink">
                  Mesa de regalos
                </div>
                <div className="text-xs text-ink-muted">2 tiendas</div>
              </div>
              <div className="flex items-center gap-3 border border-rule px-3 py-2.5">
                <MusicIcon className="h-4 w-4 flex-none text-gold" />
                <div className="flex-auto text-sm text-ink">
                  Sugiera una canción
                </div>
                <div className="text-xs text-ink-muted">31 pedidas</div>
              </div>
            </div>

            <div>
              <div className="bg-wine px-4 py-3 text-center text-sm font-bold tracking-wide text-cream">
                Confirmar asistencia
              </div>
              <p className="mt-3 text-center text-xs text-ink-muted">
                Le apartamos 2 lugares · Confirme antes del 20 de enero
              </p>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
