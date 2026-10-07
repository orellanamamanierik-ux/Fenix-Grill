// Catálogo de productos de Fenix Grill.
// Para agregar, quitar o cambiar precios, editá solamente este archivo.

export type CategoryId = 'hamburguesas' | 'pizzas' | 'papas' | 'panchos' | 'refrescos'

export type Category = {
  id: CategoryId
  name: string
  description: string
  image: string
}

export type Product = {
  id: string
  category: CategoryId
  name: string
  description: string
  price: number
  image: string
  tag?: string
}

export const categories: Category[] = [
  {
    id: 'hamburguesas',
    name: 'Hamburguesas',
    description: 'Carne a la plancha',
    image: '/images/burger-clasica.png',
  },
  { id: 'pizzas', name: 'Pizzas', description: 'Recién horneadas', image: '/images/pizza-queso.png' },
  { id: 'papas', name: 'Cono de papas', description: 'Crocantes', image: '/images/cono-papas.png' },
  { id: 'panchos', name: 'Panchos', description: 'Clásicos y especiales', image: '/images/pancho-clasico.png' },
  { id: 'refrescos', name: 'Refrescos', description: 'Bien fríos', image: '/images/gaseosas.png' },
]

export const products: Product[] = [
  {
    id: 'burger-clasica',
    category: 'hamburguesas',
    name: 'Hamburguesa Clásica',
    description: 'Medallón de carne, cheddar, lechuga, tomate y cebolla en pan de sésamo.',
    price: 6500,
    image: '/images/burger-clasica.png',
  },
  {
    id: 'burger-bacon',
    category: 'hamburguesas',
    name: 'Hamburguesa Bacon',
    description: 'Doble cheddar, panceta crocante y cebolla caramelizada en pan brioche.',
    price: 7800,
    image: '/images/burger-bacon.png',
    tag: 'Más pedida',
  },
  {
    id: 'burger-especial',
    category: 'hamburguesas',
    name: 'Hamburguesa Especial Fenix',
    description: 'Triple carne, huevo, panceta, cheddar, jalapeños y salsa de la casa.',
    price: 9500,
    image: '/images/burger-especial.png',
    tag: 'Especial',
  },
  {
    id: 'pizza-queso',
    category: 'pizzas',
    name: 'Pizza de Queso',
    description: 'Muzzarella abundante, salsa de tomate, orégano y aceitunas.',
    price: 8000,
    image: '/images/pizza-queso.png',
  },
  {
    id: 'pizza-especial',
    category: 'pizzas',
    name: 'Pizza Especial',
    description: 'Muzzarella, jamón cocido, morrones asados y aceitunas.',
    price: 9800,
    image: '/images/pizza-especial.png',
  },
  {
    id: 'cono-papas',
    category: 'papas',
    name: 'Cono de Papas',
    description: 'Papas fritas doradas y crocantes con sal. Ideal para acompañar.',
    price: 3500,
    image: '/images/cono-papas.png',
  },
  {
    id: 'salchi-cono',
    category: 'papas',
    name: 'Salchi Cono',
    description: 'Papas fritas con salchichas, salsa cheddar y ketchup.',
    price: 4800,
    image: '/images/salchi-cono.png',
    tag: 'Nuevo',
  },
  {
    id: 'pancho-clasico',
    category: 'panchos',
    name: 'Pancho Clásico',
    description: 'Salchicha en pan suave con mostaza, mayonesa y papas pay.',
    price: 2500,
    image: '/images/pancho-clasico.png',
  },
  {
    id: 'pancho-especial',
    category: 'panchos',
    name: 'Pancho Especial',
    description: 'Con cheddar fundido, panceta y cebolla caramelizada.',
    price: 3800,
    image: '/images/pancho-especial.png',
  },
  {
    id: 'gaseosas',
    category: 'refrescos',
    name: 'Gaseosas',
    description: 'Cola, naranja o lima-limón. Lata de 354 ml bien fría.',
    price: 1800,
    image: '/images/gaseosas.png',
  },
  {
    id: 'bebidas',
    category: 'refrescos',
    name: 'Bebidas',
    description: 'Agua mineral, jugo de naranja o limonada.',
    price: 1500,
    image: '/images/bebidas.png',
  },
]
