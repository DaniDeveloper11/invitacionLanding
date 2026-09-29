'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

const MotionAppScreenHeader = motion.create(AppScreen.Header)
const MotionAppScreenBody = motion.create(AppScreen.Body)

const features = [
  {
    dato: '$6,000',
    name: 'Lo que cuesta imprimir',
    description:
      '150 invitaciones impresas y repartidas pasan de esa cifra, y ahí todavía no va el tiempo de andarlas entregando. La digital llega a 300 personas sin costo por invitado.',
    screen: CostScreen,
  },
  {
    dato: 'Se corrige',
    name: 'Cambió la hora o el lugar',
    description:
      'Se edita y todos ven la versión nueva en el mismo enlace, al instante. Lo impreso ya se repartió.',
    screen: EditScreen,
  },
  {
    dato: 'Sabe quién va',
    name: 'Confirmaciones en lista',
    description:
      'Las respuestas llegan ordenadas en una sola lista, no repartidas en ochenta conversaciones de WhatsApp.',
    screen: RsvpScreen,
  },
]

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function CostScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Impresas vs. digital</AppScreen.Title>
        <AppScreen.Subtitle>
          150 invitados, <span className="text-ink">mismo evento</span>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="text-[0.625rem] font-bold tracking-[0.22em] text-gold-dark uppercase">
            Impresas
          </div>
          <div className="mt-2 divide-y divide-rule-soft text-sm">
            {[
              ['150 invitaciones', '$4,500'],
              ['Sobres y rotulado', '$900'],
              ['Gasolina y entregas', '$600'],
            ].map(([label, valor]) => (
              <div key={label} className="flex justify-between py-2">
                <div className="text-ink-muted">{label}</div>
                <div className="font-medium text-ink">{valor}</div>
              </div>
            ))}
            <div className="flex justify-between py-2">
              <div className="font-bold text-ink">Total</div>
              <div className="font-bold text-ink">$6,000</div>
            </div>
          </div>
          <div className="mt-6 text-[0.625rem] font-bold tracking-[0.22em] text-gold-dark uppercase">
            Digital
          </div>
          <div className="mt-2 divide-y divide-rule-soft text-sm">
            {[
              ['Invitación completa', '$1,600'],
              ['Costo por invitado', '$0'],
              ['Alcance', '300 personas'],
            ].map(([label, valor]) => (
              <div key={label} className="flex justify-between py-2">
                <div className="text-ink-muted">{label}</div>
                <div className="font-medium text-ink">{valor}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-wine px-3 py-2 text-center text-sm font-bold tracking-wide text-cream">
            Se ahorra $4,400
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-muted">
            Sin contar los tres sábados que se iban en repartirlas.
          </p>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function EditScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Editar el evento</AppScreen.Title>
        <AppScreen.Subtitle>
          El enlace <span className="text-ink">no cambia</span>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              {
                label: 'Hora de la ceremonia',
                value: '7:00 pm',
                antes: '5:00 pm',
              },
              {
                label: 'Lugar',
                value: 'Salón Los Encinos',
                antes: 'Jardín Santa Lucía',
              },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-ink-muted">{field.label}</div>
                <div className="mt-2 border-b border-rule pb-2 text-sm text-ink">
                  {field.value}
                </div>
                <div className="mt-1 text-xs text-ink-muted line-through">
                  {field.antes}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-wine px-3 py-2 text-center text-sm font-bold tracking-wide text-cream">
            Guardar cambios
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Los 150 invitados ven la versión nueva al abrir el mismo enlace.
          </p>
          <div className="mt-4 border-t border-rule-soft pt-3 text-xs text-ink-muted">
            <div className="flex justify-between py-1">
              <span>Enlace</span>
              <span className="text-ink">anayluis.mx</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Última edición</span>
              <span className="text-ink">hace 3 minutos</span>
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function RsvpScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Confirmados</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-ink">118</span> de 150 lugares
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="grid grid-cols-3 border-b border-rule text-center">
          {[
            ['118', 'confirmados'],
            ['24', 'sin responder'],
            ['8', 'no asisten'],
          ].map(([valor, label]) => (
            <div key={label} className="px-2 py-4">
              <div className="font-display text-2xl leading-none text-ink tabular-nums">
                {valor}
              </div>
              <div className="mt-1 text-[0.625rem] tracking-[0.1em] text-ink-muted uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-b border-rule-soft px-4 py-2.5">
          <div className="text-[0.625rem] font-bold tracking-[0.22em] text-gold-dark uppercase">
            Lista para el salón
          </div>
          <div className="text-xs text-ink-muted">Descargar</div>
        </div>
        <div className="divide-y divide-rule-soft">
          {[
            ['Familia Treviño', '4 lugares', 'Sí asisten'],
            ['Familia Robles', '2 lugares', 'Sí asisten'],
            ['Mariana Cárdenas', '1 lugar', 'Sí asiste'],
            ['Familia Garza Ruiz', '5 lugares', 'Sí asisten'],
            ['Jorge Villalobos', '2 lugares', 'No asiste'],
            ['Familia Peña', '3 lugares', 'Sí asisten'],
            ['Tía Lucha', '2 lugares', 'Capturado a mano'],
            ['Familia Ibarra', '4 lugares', 'Sin responder'],
          ].map(([nombre, lugares, estado]) => (
            <div key={nombre} className="flex items-center gap-4 px-4 py-3">
              <div className="flex-auto">
                <div className="text-sm text-ink">{nombre}</div>
                <div className="text-xs/5 text-ink-muted">{lugares}</div>
              </div>
              <div
                className={clsx(
                  'flex-none text-xs/5',
                  estado.startsWith('Sí') ? 'text-wine' : 'text-ink-muted',
                )}
              >
                {estado}
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  // eslint-disable-next-line react-hooks/refs
  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative transition-colors hover:bg-white/5"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-ink-raised"
                initial={{ borderRadius: 0 }}
              />
            )}
            <div className="relative z-10 p-8">
              <div className="font-display text-4xl leading-none text-gold">
                {feature.dato}
              </div>
              <h3 className="mt-4 text-lg font-bold text-cream">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-cream-muted">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#6E2639" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <TabPanels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory scrollbar-none -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden bg-ink-raised px-5 py-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#6E2639"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-ink/95 p-6 backdrop-blur-sm sm:p-10">
                <div className="font-display text-3xl leading-none text-gold">
                  {feature.dato}
                </div>
                <h3 className="mt-2 text-sm font-bold text-cream sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-cream-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-cream0',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="por-que-digital"
      aria-label="Por qué una invitación digital"
      className="bg-ink py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-14 bg-gold" />
            <p className="text-xs font-bold tracking-[0.26em] text-gold uppercase">
              Por qué digital
            </p>
          </div>
          <h2 className="mt-6 font-display text-5xl leading-tight font-medium tracking-tight text-cream">
            Cuesta menos y sirve más
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-muted">
            Lo mismo que hace una invitación impresa, más lo que el papel no
            puede: corregirse después de repartida y llevarle la cuenta de quién
            va.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
