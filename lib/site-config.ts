// Datos de contacto y configuración general del local.
// Modificá estos valores para actualizar toda la página.

export const siteConfig = {
  name: 'Fenix Grill',
  slogan: 'El sabor que te prende fuego.',

  // Número de WhatsApp en formato internacional, sin "+", espacios ni guiones.
  // Ejemplo Argentina: 54 9 11 1234-5678 -> "5491112345678"
  whatsappNumber: '5491112345678',
  whatsappDisplay: '+54 9 11 1234-5678',

  instagramUser: 'fenixgrill',
  instagramUrl: 'https://instagram.com/fenixgrill',

  address: {
    street: 'C. 1 de Mayo & Sta. Fe',
    city: 'Villa Celina, Buenos Aires, Argentina',
    mapsQuery: 'Calle 1 de Mayo y Santa Fe, Villa Celina, Buenos Aires, Argentina',
  },

  hours: [
    { days: 'Martes a Jueves', time: '19:00 a 00:00' },
    { days: 'Viernes y Sábado', time: '19:00 a 02:00' },
    { days: 'Domingo', time: '19:00 a 00:00' },
    { days: 'Lunes', time: 'Cerrado' },
  ],

  currency: 'ARS',
  locale: 'es-AR',
} as const

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
] as const
