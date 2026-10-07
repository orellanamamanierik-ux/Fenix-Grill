import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{eyebrow}</span>
      <h2 className="font-display text-4xl leading-none text-balance uppercase md:text-5xl">{title}</h2>
      {description && <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">{description}</p>}
    </div>
  )
}
