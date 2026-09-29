// Datos que cambian de un negocio a otro. Ajuste estos valores y el sitio
// completo se actualiza.
export const site = {
  brand: 'Invitaciones',
  ciudad: 'Etzatlán',
  whatsapp:
    'https://wa.me/523314857062?text=Hola%2C%20quiero%20una%20invitaci%C3%B3n%20digital.%20Mi%20evento%20es%20el%3A',
  // Enlace a una invitación de muestra.
  ejemplo: '#ejemplo',
  // WhatsApp con el mensaje de foto estudios, para la página de revendedores.
  whatsappEstudios:
    'https://wa.me/523314857062?text=Hola%2C%20tengo%20un%20foto%20estudio%20y%20quiero%20los%20precios%20de%20revendedor.',
  // Folleto del programa, en public/.
  folleto: '/folleto-revendedores.pdf',
  // Dominio definitivo. Debe ser absoluto y con https: WhatsApp y Facebook no
  // leen rutas relativas al generar la vista previa. En Cloudflare Pages se
  // define la variable de entorno NEXT_PUBLIC_SITE_URL con el dominio real.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://invitaciones.example.mx',
  // Lo que se ve al pegar el enlace en un chat.
  compartir: {
    titulo: 'Invitaciones digitales a la medida para bodas y XV',
    descripcion:
      'Diseñada desde cero con sus colores. Confirmaciones en lista, sin costo por invitado. Desde $1,600 y lista en 3 días.',
  },
}

// Campos de Open Graph que toda página debe repetir. Next no hereda el bloque
// `openGraph` del layout cuando una página define el suyo: lo reemplaza
// completo. Sin esto, /revendedores se comparte en WhatsApp sin imagen.
export const ogBase = {
  type: 'website',
  locale: 'es_MX',
  siteName: site.brand,
  images: [
    {
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: site.compartir.titulo,
    },
  ],
}
