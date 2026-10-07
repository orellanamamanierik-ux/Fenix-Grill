import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OrderButton } from '@/components/order-button'
import { siteConfig } from '@/lib/site-config'
import { products } from '@/lib/menu-data'
import { formatPrice } from '@/lib/order'

const lowestBurgerPrice = Math.min(
  ...products.filter((product) => product.category === 'hamburguesas').map((product) => product.price),
)

export function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 md:grid-cols-2 md:px-6 md:pt-16 md:pb-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin className="size-3.5" />
            Villa Celina, Buenos Aires
          </span>

          <h1 className="font-display text-5xl leading-[0.95] text-balance uppercase sm:text-6xl lg:text-7xl">
            El sabor que te{' '}
            <span className="bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
              prende fuego
            </span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
            Hamburguesas, pizzas, papas, panchos y mucho más. Todo el sabor de {siteConfig.name} en Villa Celina.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#menu" />}
              className="h-12 rounded-full px-7 text-base font-semibold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Ver menú
            </Button>
            <OrderButton />
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>Comida rica, abundante y hecha al momento</span>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-[2rem] bg-gradient-to-tr from-destructive/40 via-primary/30 to-accent/20 blur-2xl"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-2xl">
            <Image
              src="/images/hero-burger.png"
              alt="Hamburguesa doble con cheddar y panceta acompañada de papas fritas"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur md:-left-6">
            <p className="text-xs text-muted-foreground">Hamburguesas desde</p>
            <p className="font-display text-2xl text-primary">{formatPrice(lowestBurgerPrice)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
