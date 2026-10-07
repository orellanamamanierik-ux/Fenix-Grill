'use client'

import { useState } from 'react'
import { Menu, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { FlameLogo } from '@/components/brand-icons'
import { useCart } from '@/components/cart-provider'
import { navLinks, siteConfig } from '@/lib/site-config'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6"
      >
        <a href="#inicio" className="flex items-center gap-2">
          <FlameLogo className="size-8" />
          <span className="font-display text-2xl tracking-wide uppercase">
            Fenix <span className="text-primary">Grill</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-lg"
            className="relative rounded-full"
            onClick={() => setOpen(true)}
            aria-label={`Abrir carrito, ${totalItems} productos`}
          >
            <ShoppingBag className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>

          <Button
            nativeButton={false}
            render={<a href="#menu" />}
            className="hidden h-10 rounded-full px-5 font-semibold md:inline-flex"
          >
            Ver menú
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-lg" className="rounded-full md:hidden" aria-label="Abrir menú" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background data-[side=right]:w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-display text-2xl tracking-wide uppercase">
                  <FlameLogo className="size-7" />
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-4">
                <Button
                  nativeButton={false}
                  render={<a href="#menu" onClick={() => setMobileOpen(false)} />}
                  className="h-12 w-full rounded-full text-base font-semibold"
                >
                  Ver menú
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
