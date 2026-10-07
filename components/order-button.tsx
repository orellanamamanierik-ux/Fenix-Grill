'use client'

import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'

export function OrderButton() {
  const { setOpen } = useCart()

  return (
    <Button
      variant="outline"
      onClick={() => setOpen(true)}
      className="h-12 rounded-full border-foreground/20 bg-transparent px-7 text-base font-semibold hover:bg-foreground/5"
    >
      <ShoppingBag className="size-4" />
      Hacer pedido
    </Button>
  )
}
