import Image from 'next/image'
import { Flame, Heart, UtensilsCrossed } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  { icon: Flame, title: 'A la plancha', text: 'Todo hecho al momento.' },
  { icon: UtensilsCrossed, title: 'Abundante', text: 'Porciones que llenan.' },
  { icon: Heart, title: 'Del barrio', text: 'Orgullo de Villa Celina.' },
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 border-y border-border/60 bg-card/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-2xl md:order-first">
          <Image
            src="/images/about.png"
            alt="Medallones de carne cocinándose en la plancha de Fenix Grill"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Nosotros"
            title="Sobre Fenix Grill"
            description="Somos Fenix Grill, un lugar de Villa Celina donde podés disfrutar hamburguesas, pizzas, papas, panchos y bebidas. Nuestro objetivo es ofrecer comida rica, abundante y con mucho sabor."
          />

          <ul className="grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-4">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
