type IconProps = React.SVGProps<SVGSVGElement>

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function FlameLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="fenix-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.62 0.22 27)" />
          <stop offset="55%" stopColor="oklch(0.7 0.19 45)" />
          <stop offset="100%" stopColor="oklch(0.86 0.17 88)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#fenix-flame)"
        d="M12 2c.6 3.2-1.2 5-2.8 6.8C7.6 10.6 6 12.4 6 15.2 6 18.9 8.7 22 12 22s6-3.1 6-6.8c0-2.4-1-4.1-2.2-5.6-.3 1.6-1.1 2.8-2.3 3.4.6-3.6-.3-7.6-1.5-11Z"
      />
    </svg>
  )
}
