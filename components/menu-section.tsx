'use client'

import { useState } from 'react'
import { Categories } from '@/components/categories'
import { ProductCard } from '@/components/product-card'
import { SectionHeading } from '@/components/section-heading'
import { categories, products, type CategoryId } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export function MenuSection() {
  const [selected, setSelected] = useState<CategoryId | 'todos'>('todos')

  function handleSelect(id: CategoryId | 'todos') {
    setSelected(id)
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const visibleProducts = selected === 'todos' ? products : products.filter((p) => p.category === selected)

  const filters: { id: CategoryId | 'todos'; name: string }[] = [
    { id: 'todos', name: 'Todos' },
    ...categories.map((c) => ({ id: c.id, name: c.name })),
  ]

  return (
    <>
      <Categories selected={selected} onSelect={handleSelect} />

      <section id="menu" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="Carta" title="Nuestro menú" />

          <div
            role="tablist"
            aria-label="Filtrar por categoría"
            className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
          >
            {filters.map((filter) => {
              const active = selected === filter.id
              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(filter.id)}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground',
                  )}
                >
                  {filter.name}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
