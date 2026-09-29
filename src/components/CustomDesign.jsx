import { Container } from '@/components/Container'

export function CustomDesign() {
  return (
    <section
      id="diseno"
      aria-labelledby="diseno-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="border-b border-rule pb-16 lg:flex lg:gap-20">
          <div className="lg:w-52 lg:flex-none">
            <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
              A la medida
            </p>
            <span
              aria-hidden="true"
              className="mt-4 hidden h-px w-14 bg-gold lg:block"
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <h2
              id="diseno-title"
              className="max-w-3xl font-display text-4xl leading-[1.04] font-medium tracking-tight text-pretty text-ink sm:text-5xl lg:text-6xl"
            >
              No uso plantillas. Cada invitación se diseña{' '}
              <span className="text-wine italic">para ese evento</span>.
            </h2>
            <div className="mt-9 grid max-w-4xl grid-cols-1 gap-8 text-lg leading-relaxed text-ink-soft sm:grid-cols-2 sm:gap-14">
              <p>
                Eso significa que su invitación puede seguir la decoración real
                del salón, el mood board que ya trae, o la paleta que eligió
                para las flores. Si tiene fotos de su sesión, la portada y la
                galería se arman con ellas.
              </p>
              <p>
                El diseño a la medida no es un extra que se cobra aparte: va
                incluido en los tres paquetes, del más sencillo al más completo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
