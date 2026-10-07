import { MessageCircle } from 'lucide-react'
import { FlameLogo, InstagramIcon } from '@/components/brand-icons'
import { buildOrderMessage, buildWhatsAppUrl } from '@/lib/order'
import { navLinks, siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t border-border bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex flex-col gap-3">
          <a href="#inicio" className="flex items-center gap-2">
            <FlameLogo className="size-8" />
            <span className="font-display text-2xl tracking-wide uppercase">
              Fenix <span className="text-primary">Grill</span>
            </span>
          </a>
          <p className="text-muted-foreground">{siteConfig.slogan}</p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Fenix Grill"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={buildWhatsAppUrl(buildOrderMessage([]))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Fenix Grill"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.address.street}, {siteConfig.address.city}
        </p>
      </div>
    </footer>
  )
}
