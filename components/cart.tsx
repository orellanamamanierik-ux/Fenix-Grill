'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useCart } from '@/components/cart-provider'
import { buildOrderMessage, buildWhatsAppUrl, formatPrice, type OrderDetails } from '@/lib/order'
import { cn } from '@/lib/utils'

export function Cart() {
  const { items, total, totalItems, isOpen, setOpen, updateQuantity, removeItem } = useCart()
  const [step, setStep] = useState<'cart' | 'checkout'>('cart')
  const [details, setDetails] = useState<OrderDetails>({ delivery: 'retiro' })

  function handleOpenChange(open: boolean) {
    setOpen(open)
    if (!open) setStep('cart')
  }

  const whatsappUrl = buildWhatsAppUrl(buildOrderMessage(items, details))

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="gap-0 bg-background data-[side=right]:w-full data-[side=right]:sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="font-display text-2xl tracking-wide uppercase">
            {step === 'cart' ? 'Tu pedido' : 'Confirmar pedido'}
          </SheetTitle>
          <SheetDescription>
            {totalItems === 0
              ? 'Todavía no agregaste productos.'
              : `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en el carrito`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShoppingBag className="size-7" />
            </div>
            <p className="text-muted-foreground">Elegí lo que más te guste del menú y armá tu pedido.</p>
            <Button
              nativeButton={false}
              render={<a href="#menu" onClick={() => handleOpenChange(false)} />}
              className="h-11 rounded-full px-6 font-semibold"
            >
              Ver menú
            </Button>
          </div>
        ) : step === 'cart' ? (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 py-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={product.image || '/placeholder.svg'} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-semibold">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{formatPrice(product.price)} c/u</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Eliminar ${product.name}`}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="rounded-full"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          aria-label={`Quitar una unidad de ${product.name}`}
                        >
                          <Minus />
                        </Button>
                        <span className="w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                          {quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="rounded-full"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          aria-label={`Agregar una unidad de ${product.name}`}
                        >
                          <Plus />
                        </Button>
                      </div>
                      <p className="font-semibold tabular-nums">
                        <span className="sr-only">Subtotal: </span>
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <SheetFooter className="border-t border-border bg-card/50">
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-display text-3xl text-primary">{formatPrice(total)}</span>
              </div>
              <Button onClick={() => setStep('checkout')} className="h-12 w-full rounded-full text-base font-semibold">
                Realizar pedido
              </Button>
            </SheetFooter>
          </>
        ) : (
          <>
            <form
              className="flex flex-1 flex-col gap-5 overflow-y-auto p-4"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
              }}
              id="checkout-form"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep('cart')}
                className="self-start text-muted-foreground"
              >
                <ArrowLeft />
                Volver al carrito
              </Button>

              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="mb-3 text-sm font-semibold">Resumen</p>
                <ul className="flex flex-col gap-1.5 text-sm">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex justify-between gap-3">
                      <span className="text-muted-foreground">
                        {quantity} x {product.name}
                      </span>
                      <span className="tabular-nums">{formatPrice(product.price * quantity)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex justify-between border-t border-border pt-3 font-semibold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>

              <Field label="Tu nombre" htmlFor="order-name">
                <input
                  id="order-name"
                  value={details.name ?? ''}
                  onChange={(e) => setDetails((d) => ({ ...d, name: e.target.value }))}
                  placeholder="Ej: Juan"
                  autoComplete="name"
                  className={inputClass}
                />
              </Field>

              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 text-sm font-medium">¿Cómo lo querés?</legend>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { value: 'retiro', label: 'Retiro en el local' },
                      { value: 'envio', label: 'Envío a domicilio' },
                    ] as const
                  ).map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-medium transition-colors has-focus-visible:ring-2 has-focus-visible:ring-ring',
                        details.delivery === option.value
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border text-muted-foreground hover:border-primary/50',
                      )}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={option.value}
                        checked={details.delivery === option.value}
                        onChange={() => setDetails((d) => ({ ...d, delivery: option.value }))}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {details.delivery === 'envio' && (
                <Field label="Dirección de entrega" htmlFor="order-address">
                  <input
                    id="order-address"
                    value={details.address ?? ''}
                    onChange={(e) => setDetails((d) => ({ ...d, address: e.target.value }))}
                    placeholder="Calle, número y entre calles"
                    autoComplete="street-address"
                    required
                    className={inputClass}
                  />
                </Field>
              )}

              <Field label="Aclaraciones (opcional)" htmlFor="order-notes">
                <textarea
                  id="order-notes"
                  value={details.notes ?? ''}
                  onChange={(e) => setDetails((d) => ({ ...d, notes: e.target.value }))}
                  placeholder="Ej: sin cebolla, pago en efectivo"
                  rows={3}
                  className={cn(inputClass, 'h-auto resize-none py-2')}
                />
              </Field>
            </form>
            <SheetFooter className="border-t border-border bg-card/50">
              <Button
                type="submit"
                form="checkout-form"
                className="h-12 w-full rounded-full bg-[#25D366] text-base font-semibold text-black hover:bg-[#25D366]/90"
              >
                <MessageCircle className="size-5" />
                Continuar por WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Te vamos a abrir WhatsApp con tu pedido listo para enviar.
              </p>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

const inputClass =
  'h-11 w-full rounded-xl border border-input bg-card px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30'

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
