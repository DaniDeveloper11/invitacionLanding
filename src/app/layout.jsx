import clsx from 'clsx'

import { site } from '@/config/site'
import '@/styles/tailwind.css'

// Las fuentes se piden desde el navegador con un <link>, no con next/font:
// next/font las descarga durante el build y el servidor de despliegue no
// siempre puede salir a fonts.gstatic.com, lo que rompe `next build`.
const FUENTES =
  'https://fonts.googleapis.com/css2' +
  '?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500' +
  '&family=Great+Vibes' +
  '&family=Karla:wght@400;500;700' +
  '&display=swap'

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
    <html lang="es" className={clsx('bg-cream antialiased')}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FUENTES} />
      </head>
      <body>{children}</body>
    </html>
  )
}
