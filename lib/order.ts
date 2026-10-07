import { siteConfig } from '@/lib/site-config'
import type { Product } from '@/lib/menu-data'

export type CartItem = {
  product: Product
  quantity: number
}

export type OrderDetails = {
  name?: string
  delivery?: 'retiro' | 'envio'
  address?: string
  notes?: string
}

const priceFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: 'currency',
  currency: siteConfig.currency,
  maximumFractionDigits: 0,
})

export function formatPrice(value: number) {
  return priceFormatter.format(value)
}

export function getCartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildOrderMessage(items: CartItem[], details: OrderDetails = {}) {
  if (items.length === 0) {
    return `¡Hola ${siteConfig.name}! Quiero hacer un pedido.`
  }

  const lines = items.map(
    (item) =>
      `• ${item.quantity} x ${item.product.name} — ${formatPrice(item.product.price * item.quantity)}`,
  )

  const extra: string[] = []
  if (details.name?.trim()) extra.push(`Nombre: ${details.name.trim()}`)
  if (details.delivery) {
    extra.push(`Entrega: ${details.delivery === 'envio' ? 'Envío a domicilio' : 'Retiro en el local'}`)
  }
  if (details.delivery === 'envio' && details.address?.trim()) {
    extra.push(`Dirección: ${details.address.trim()}`)
  }
  if (details.notes?.trim()) extra.push(`Aclaraciones: ${details.notes.trim()}`)

  return [
    `¡Hola ${siteConfig.name}! Quiero hacer este pedido:`,
    '',
    ...lines,
    '',
    `*Total: ${formatPrice(getCartTotal(items))}*`,
    ...(extra.length ? ['', ...extra] : []),
  ].join('\n')
}
