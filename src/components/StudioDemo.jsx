import { AppScreen } from '@/components/AppScreen'

const itinerario = [
  ['5:00 pm', 'Ceremonia'],
  ['7:00 pm', 'Recepción'],
]

function CameraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8.5h3l1.2-2h7.6L17 8.5h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.3" />
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

export function StudioDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="flex flex-col">
          <div className="relative overflow-hidden border-b border-rule-soft bg-paper px-7 pt-8 pb-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-gold/30"
            />

            {/* Marca de agua del estudio sobre la portada. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 right-6 flex items-center gap-1.5 text-ink/25"
            >
              <CameraIcon className="h-4 w-4" />
              <span className="text-[0.5625rem] font-bold tracking-[0.2em] uppercase">
                [Su estudio]
              </span>
            </div>

            <div className="relative text-center">
              <div className="text-[0.625rem] font-bold tracking-[0.3em] text-gold-dark uppercase">
                Nos casamos
              </div>
              <div className="mt-4 font-script text-[3.25rem] leading-[1] text-ink">
                Sofía
              </div>
              <div className="-my-1 font-script text-2xl text-gold">y</div>
              <div className="font-script text-[3.25rem] leading-[1] text-ink">
                Emilio
              </div>
              <div className="mt-5 text-xs tracking-[0.14em] text-ink-soft uppercase">
                Sábado 9 de mayo · 2026
              </div>
              <div className="mt-1 text-xs tracking-[0.14em] text-ink-muted uppercase">
                Hacienda El Carmen
              </div>
            </div>
          </div>

          {/* La firma del estudio, donde iría la mía. */}
          <div className="flex items-center gap-3 border-b border-rule-soft bg-cream px-6 py-4">
            <CameraIcon className="h-7 w-7 flex-none text-gold" />
            <div>
              <div className="text-[0.5625rem] font-bold tracking-[0.22em] text-gold-dark uppercase">
                Fotografía e invitación
              </div>
              <div className="font-display text-lg leading-tight text-ink">
                [Su estudio]
              </div>
            </div>
          </div>

          <div className="space-y-5 px-6 py-5">
            <div className="divide-y divide-rule-soft text-sm">
              {itinerario.map(([hora, evento]) => (
                <div key={hora} className="flex gap-4 py-2">
                  <div className="w-16 flex-none font-display text-base text-gold">
                    {hora}
                  </div>
                  <div className="text-ink">{evento}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="flex aspect-[3/4] items-center justify-center bg-cream text-rule"
                >
                  <PhotoIcon className="h-5 w-5" />
                </div>
              ))}
            </div>

            <div className="bg-wine px-4 py-3 text-center text-sm font-bold tracking-wide text-cream">
              Confirmar asistencia
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
