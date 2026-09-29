'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { site } from '@/config/site'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(props) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 text-ink-soft"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between border-b border-rule py-7">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Inicio">
              <Logo />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center stroke-ink p-2 hover:bg-rule/40 hover:stroke-ink-soft focus:not-data-focus:outline-hidden active:stroke-ink"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-ink/30 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top border-b border-rule bg-cream px-6 pt-32 pb-8 shadow-2xl shadow-ink/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#paquetes">
                              Paquetes
                            </MobileNavLink>
                            <MobileNavLink href="/#secciones">
                              Secciones
                            </MobileNavLink>
                            <MobileNavLink href="/#como-funciona">
                              Cómo funciona
                            </MobileNavLink>
                            <MobileNavLink href="/#preguntas">
                              Preguntas
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button
                              href={site.ejemplo}
                              variant="outline"
                              color="ink"
                            >
                              Ver un ejemplo
                            </Button>
                            <Button href={site.whatsapp} color="wine">
                              Pedir mi propuesta
                            </Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Button href={site.ejemplo} variant="outline" color="ink">
                Ver un ejemplo
              </Button>
              <Button href={site.whatsapp} color="wine">
                Pedir mi propuesta
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
