'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { Container } from '@/components/Container'
import { site } from '@/config/site'

const faqs = [
  {
    question: '¿Por qué cuesta más que las de $500 que veo en redes?',
    answer:
      'Esas son plantillas: le cambian el nombre y la fecha a un diseño que ya usaron cuarenta veces. La suya se diseña desde cero con sus colores, su tipografía y su concepto. Si quiere, se las comparo lado a lado.',
  },
  {
    question: '¿Y si no me gusta el diseño?',
    answer:
      'Su paquete incluye entre 1 y 3 rondas de cambios según el que elija. Primero ve la propuesta completa, ahí ajustamos lo que quiera, y hasta que usted la apruebe se publica.',
  },
  {
    question: 'Mis invitados mayores no usan WhatsApp, ¿cómo le hacen?',
    answer:
      'Abre en cualquier teléfono con solo el enlace, no hay que instalar nada. Y las confirmaciones que le lleguen por teléfono usted las captura a mano, para que toda la lista quede en un solo lugar.',
  },
  {
    question: '¿Cuánto tiempo antes tengo que pedirla?',
    answer:
      'Lo ideal son tres semanas antes de la fecha en que quiere empezar a repartirla. Si va con menos tiempo se puede entregar en 48 horas con un cargo del 50%.',
  },
  {
    question: '¿Cómo recibo las confirmaciones?',
    answer:
      'En la Sencilla le llegan por WhatsApp, una por una. En la Completa la gente confirma dentro de la invitación y la lista se llena sola: entra cuando quiera y ahí está quién va y cuántos son, lista para entregársela al salón.',
  },
  {
    question: '¿Cuánto tiempo estará en línea?',
    answer:
      'De 4 a 12 meses según el paquete. Después puede renovarla por $450 al año, o quedarse con la copia del sitio que se le entrega al cerrar.',
  },
]

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Faqs() {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-title"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="lg:flex lg:gap-20">
          <div className="lg:w-80 lg:flex-none">
            <p className="text-xs font-bold tracking-[0.26em] text-gold-dark uppercase">
              Preguntas
            </p>
            <h2
              id="preguntas-title"
              className="mt-4 font-display text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl"
            >
              Lo que casi siempre me preguntan
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Si quiere preguntar algo más,{' '}
              <a
                href={site.whatsapp}
                className="text-wine underline underline-offset-4 hover:text-wine-dark"
              >
                escríbame por WhatsApp
              </a>
              .
            </p>
          </div>
          <ul
            role="list"
            className="mt-12 flex-auto divide-y divide-rule border-t border-rule lg:mt-0"
          >
            {faqs.map((faq) => (
              <li key={faq.question}>
                <Disclosure as="div" className="py-6">
                  <DisclosureButton className="group flex w-full items-start justify-between gap-6 text-left">
                    <h3 className="text-xl/8 font-medium text-ink">
                      {faq.question}
                    </h3>
                    <span className="mt-1 font-display text-2xl leading-none text-gold transition-colors group-data-open:text-wine">
                      <PlusIcon className="h-6 w-6 transition-transform group-data-open:rotate-45" />
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-4 max-w-2xl pr-8 text-base leading-relaxed text-ink-soft">
                    {faq.answer}
                  </DisclosurePanel>
                </Disclosure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
