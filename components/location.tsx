import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'

const query = encodeURIComponent(siteConfig.address.mapsQuery)
const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`

export function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-center md:gap-12">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Ubicación" title="Encontranos" />
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MapPin className="size-5" />
              </div>
              <address className="not-italic">
                <p className="text-lg font-semibold">{siteConfig.address.street}</p>
                <p className="text-muted-foreground">{siteConfig.address.city}</p>
              </address>
            </div>
            <Button
              nativeButton={false}
              render={<a href={directionsUrl} target="_blank" rel="noopener noreferrer" />}
              className="h-12 w-full rounded-full px-7 text-base font-semibold sm:w-auto sm:self-start"
            >
              <Navigation className="size-4" />
              Cómo llegar
            </Button>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-2xl md:aspect-[16/11]">
            <iframe
              title={`Mapa de ${siteConfig.name}`}
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0 grayscale-[0.4] invert-[0.9] hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
