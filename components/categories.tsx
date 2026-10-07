import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { categories, type CategoryId } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export function Categories({
  selected,
  onSelect,
}: {
  selected: CategoryId | 'todos'
  onSelect: (id: CategoryId) => void
}) {
  return (
    <section aria-labelledby="categorias-titulo" className="border-y border-border/60 bg-card/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div id="categorias-titulo">
          <SectionHeading eyebrow="Categorías" title="¿Qué tenés ganas de comer?" />
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {categories.map((category) => {
            const active = selected === category.id
            return (
              <li key={category.id} className="last:col-span-2 sm:last:col-span-1">
                <button
                  onClick={() => onSelect(category.id)}
                  aria-pressed={active}
                  className={cn(
                    'group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 sm:aspect-square',
                    active ? 'border-primary ring-2 ring-primary/40' : 'border-border hover:border-primary/50',
                  )}
                >
                  <Image
                    src={category.image || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                  />
                  <span className="relative flex flex-col p-4">
                    <span className="font-display text-xl tracking-wide text-white uppercase md:text-2xl">
                      {category.name}
                    </span>
                    <span className="text-xs text-white/70">{category.description}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
