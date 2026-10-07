import { Clock, MapPin, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { buildWhatsAppUrl, buildOrderMessage } from '@/lib/order'
import { siteConfig } from '@/lib/site-config'

export function Contact() {
  const cards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: siteConfig.whatsappDisplay,
      href: buildWhatsAppUrl(buildOrderMessage([])),
    },
    {
      icon: InstagramIcon,
      title: 'Instagram',
      value: `@${siteConfig.instagramUser}`,
      href: siteConfig.instagramUrl,
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: `${siteConfig.address.street}, Villa Celina`,
      href: '#ubicacion',
    },
  ]

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border/60 bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="Hacé tu pedido, consultanos lo que necesites o seguinos en redes."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cards.map(({ icon: Icon, title, value, href }) => {
              const external = href.startsWith('http')
              return (
                <li key={title}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">{title}</span>
                      <span className="block font-semibold">{value}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Clock className="size-5" />
              </span>
              <h3 className="font-semibold">Horarios</h3>
            </div>
            <dl className="flex flex-col divide-y divide-border text-sm">
              {siteConfig.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted-foreground">{row.days}</dt>
                  <dd className={row.time === 'Cerrado' ? 'text-destructive' : 'font-medium'}>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
