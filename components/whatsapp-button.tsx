'use client'

import { MessageCircle } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { buildOrderMessage, buildWhatsAppUrl } from '@/lib/order'

export function WhatsAppButton() {
  const { items } = useCart()

  return (
    <a
      href={buildWhatsAppUrl(buildOrderMessage(items))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer un pedido por WhatsApp"
      className="group fixed right-4 bottom-4 z-30 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-black shadow-xl shadow-black/40 transition-all hover:scale-105 md:right-6 md:bottom-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
      />
      <MessageCircle className="size-6" />
      <span className="hidden pr-1 text-sm font-semibold md:inline">Pedí por WhatsApp</span>
    </a>
  )
}
