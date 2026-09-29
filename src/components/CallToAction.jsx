import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { site } from '@/config/site'

export function CallToAction() {
  return (
    <section id="contacto" className="bg-wine py-20 sm:py-24">
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl leading-none font-medium text-cream sm:text-6xl">
              ¿Qué fecha es?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-soft">
              Mándeme la fecha, el tipo de evento y el estilo que tiene en
              mente. Le regreso ejemplos parecidos a lo que busca y la
              propuesta, sin compromiso.
            </p>
          </div>
          <div className="mt-10 flex lg:mt-0 lg:flex-none">
            <Button href={site.whatsapp} color="cream">
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
