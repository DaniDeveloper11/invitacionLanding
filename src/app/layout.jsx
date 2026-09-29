import { Cormorant_Garamond, Great_Vibes, Karla } from 'next/font/google'
import clsx from 'clsx'

import { site } from '@/config/site'
import '@/styles/tailwind.css'

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
})

// Turbopack sólo acepta una combinación peso/estilo por llamada, así que la
// itálica se carga aparte y se aplica desde tailwind.css.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
  variable: '--font-cormorant',
})

const cormorantItalic = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  style: 'italic',
  variable: '--font-cormorant-italic',
})

// Caligrafía sólo para los nombres de la invitación de muestra.
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-great-vibes',
})

const titulo = `Invitaciones digitales a la medida para bodas y XV | ${site.ciudad}`
const descripcion =
  'Invitaciones digitales diseñadas desde cero para su evento. Confirmaciones en lista, sin costo por invitado. Desde $1,600 y lista en 3 días.'

export const metadata = {
  // Necesario para que og:image y canonical salgan como URL absolutas.
  metadataBase: new URL(site.url),
  title: {
    template: `%s - ${site.brand}`,
    default: titulo,
  },
  description: descripcion,
  alternates: {
    canonical: '/',
  },
  // Lo que arma la tarjeta al pegar el enlace en WhatsApp, Facebook e
  // Instagram: todos leen Open Graph.
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    siteName: site.brand,
    title: site.compartir.titulo,
    description: site.compartir.descripcion,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.compartir.titulo,
    description: site.compartir.descripcion,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={clsx(
        'bg-cream antialiased',
        karla.variable,
        cormorant.variable,
        cormorantItalic.variable,
        greatVibes.variable,
      )}
    >
      <body>{children}</body>
    </html>
  )
}
