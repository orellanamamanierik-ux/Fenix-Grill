'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'
import type { Product } from '@/lib/menu-data'
import { formatPrice } from '@/lib/order'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  function handleAdd() {
    addItem(product)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-tight font-bold">{product.name}</h3>
          <p className="shrink-0 font-display text-xl text-primary">{formatPrice(product.price)}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <Button
          onClick={handleAdd}
          className="mt-auto h-11 w-full rounded-full text-sm font-semibold"
          aria-live="polite"
        >
          {justAdded ? (
            <>
              <Check className="size-4" />
              ¡Agregado!
            </>
          ) : (
            <>
              <Plus className="size-4" />
              Agregar al pedido
            </>
          )}
        </Button>
      </div>
    </article>
  )
}
