import { useRef } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../lib/motion'

/**
 * Hero visual: a layered engineering-sketch composition. Three SVG layers sit
 * at different depths and shift slightly against each other as the cursor
 * moves — parallax only for fine pointers, and never under reduced motion.
 * Touch devices and reduced-motion users see the same static composition.
 */
export default function HeroScene() {
  const root = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const finePointer = useFinePointer()
  const reducedMotion = usePrefersReducedMotion()
  const active = finePointer && !reducedMotion

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!active || !root.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      root.current?.style.setProperty('--hx', px.toFixed(3))
      root.current?.style.setProperty('--hy', py.toFixed(3))
    })
  }

  const onLeave = () => {
    cancelAnimationFrame(frame.current)
    root.current?.style.setProperty('--hx', '0')
    root.current?.style.setProperty('--hy', '0')
  }

  const layer = (depth: number): React.CSSProperties => ({
    transform: `translate3d(calc(var(--hx, 0) * ${depth}px), calc(var(--hy, 0) * ${depth}px), 0)`,
    transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: active ? 'transform' : undefined,
  })

  return (
    <div
      ref={root}
      onPointerMove={active ? onMove : undefined}
      onPointerLeave={active ? onLeave : undefined}
      className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface"
      role="img"
      aria-label="Layered engineering sketch: an isometric sheet-metal enclosure, meshing gears, and an airflow streamline on graph paper"
    >
      {/* Depth 1 — graph paper + isometric enclosure */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" style={layer(-8)} aria-hidden="true">
        <defs>
          <pattern id="hero-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25 0H0V25" fill="none" stroke="var(--color-line)" strokeWidth="1" />
          </pattern>
          <pattern id="hero-grid-major" width="125" height="125" patternUnits="userSpaceOnUse">
            <path d="M125 0H0V125" fill="none" stroke="var(--color-line-strong)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#hero-grid)" />
        <rect width="800" height="600" fill="url(#hero-grid-major)" opacity="0.5" />
        <g fill="none" stroke="var(--color-ink-faint)" strokeWidth="1.25" strokeLinejoin="round">
          <path d="M430,470 L655,340 L482,240 L257,370 Z" />
          <path d="M430,470 L430,350 L655,220 L655,340 Z" />
          <path d="M430,350 L257,250 L257,370 L430,470" />
          <path d="M257,250 L482,120 L655,220" />
          <path d="M443,345 L637,233 L478,141 L283,253 Z" strokeWidth="1" strokeDasharray="5 5" />
        </g>
      </svg>

      {/* Depth 2 — meshing gears */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" style={layer(7)} aria-hidden="true">
        <g fill="none" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="222" cy="170" r="74" />
          <circle cx="222" cy="170" r="20" />
          {Array.from({ length: 18 }, (_, i) => {
            const a = (i * 2 * Math.PI) / 18
            return (
              <line
                key={i}
                x1={222 + Math.cos(a) * 74}
                y1={170 + Math.sin(a) * 74}
                x2={222 + Math.cos(a) * 86}
                y2={170 + Math.sin(a) * 86}
                strokeWidth="1.25"
              />
            )
          })}
          <circle cx="345" cy="212" r="44" />
          <circle cx="345" cy="212" r="13" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 2 * Math.PI) / 12 + 0.26
            return (
              <line
                key={i}
                x1={345 + Math.cos(a) * 44}
                y1={212 + Math.sin(a) * 44}
                x2={345 + Math.cos(a) * 54}
                y2={212 + Math.sin(a) * 54}
                strokeWidth="1.25"
              />
            )
          })}
          <path d="M120,170 H460" strokeWidth="1" strokeDasharray="14 5 3 5" stroke="var(--color-ink-faint)" />
        </g>
      </svg>

      {/* Depth 3 — accent streamline + dimension marks */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" style={layer(16)} aria-hidden="true">
        <g fill="none" strokeLinecap="round">
          <path
            d="M96,520 C210,500 300,470 380,414 C470,350 570,320 692,332"
            stroke="var(--color-accent)"
            strokeWidth="2"
          />
          <path d="M692,332 l-17,-8 m17,8 l-19,6" stroke="var(--color-accent)" strokeWidth="2" />
          <path
            d="M96,552 C214,534 312,502 396,442"
            stroke="var(--color-accent)"
            strokeWidth="1.25"
            strokeDasharray="2 8"
          />
          <g stroke="var(--color-ink-faint)" strokeWidth="1">
            <path d="M680,120 v90 M736,120 v90 M680,132 h56" />
            <path d="M680,132 l8,-5 v10 Z M736,132 l-8,-5 v10 Z" fill="var(--color-ink-faint)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
