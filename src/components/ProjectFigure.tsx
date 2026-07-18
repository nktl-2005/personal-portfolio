import { useId } from 'react'
import type { FigureId } from '../data/types'

/**
 * Built-in technical illustrations, drawn as thin-line engineering sketches
 * on graph paper. They stand in for project photography until real CAD
 * renders / photos are added via the `image` field in projects.ts.
 * Deliberately stylized — these are design elements, not real drawings.
 */

const LABELS: Record<FigureId, string> = {
  enose: 'Stylized line illustration: airflow streamlines through a nasal-cavity profile (placeholder for CFD imagery)',
  ballast: 'Stylized line illustration: isometric sheet-metal enclosure with exploded lid (placeholder for CAD render)',
  fixtures: 'Stylized line illustration: wheel cover with stencil arc and bracket fixture (placeholder for build photos)',
  molder: 'Stylized line illustration: toggle-clamp linkage and platens of an injection molder (placeholder for CAD render)',
  gearbox: 'Stylized line illustration: meshing gear pair with pitch circles (placeholder for gearbox photos)',
  piston: 'Stylized line illustration: pneumatic cylinder cross-section with mounting plate (placeholder for assembly photos)',
  robocar: 'Stylized line illustration: robot chassis on a figure-eight course (placeholder for project photos)',
}

interface ProjectFigureProps {
  id: FigureId
  className?: string
}

export default function ProjectFigure({ id, className = '' }: ProjectFigureProps) {
  const uid = useId()
  const grid = `grid-${uid}`
  const gridMajor = `gridm-${uid}`

  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={LABELS[id]}
      className={`block h-auto w-full bg-surface ${className}`}
    >
      <defs>
        <pattern id={grid} width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" fill="none" stroke="var(--color-line)" strokeWidth="1" />
        </pattern>
        <pattern id={gridMajor} width="125" height="125" patternUnits="userSpaceOnUse">
          <path d="M125 0H0V125" fill="none" stroke="var(--color-line-strong)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Graph paper extends past the 4:3 viewBox so wider crops (e.g. the
          16:9 project hero) show continuous grid instead of blank gutters.
          The surrounding wrapper draws the frame border. */}
      <rect x="-140" width="1080" height="600" fill={`url(#${grid})`} />
      <rect x="-140" width="1080" height="600" fill={`url(#${gridMajor})`} opacity="0.55" />

      <g stroke="var(--color-ink)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {id === 'ballast' && <Ballast />}
        {id === 'gearbox' && <Gearbox />}
        {id === 'piston' && <Piston />}
        {id === 'molder' && <Molder />}
        {id === 'fixtures' && <Fixtures />}
        {id === 'enose' && <Enose />}
        {id === 'robocar' && <Robocar />}
      </g>
    </svg>
  )
}

/* Shared decoration: dimension line with arrowheads (no invented numbers) */
function Dim({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const head = (x: number, y: number, dir: number) => {
    const s = 9
    return `M${x},${y} l${Math.cos(a + (dir > 0 ? 0.42 : Math.PI - 0.42)) * s},${Math.sin(a + (dir > 0 ? 0.42 : Math.PI - 0.42)) * s} M${x},${y} l${Math.cos(a - (dir > 0 ? 0.42 : Math.PI - 0.42) * -1) * 0},0`
  }
  return (
    <g stroke="var(--color-ink-faint)" strokeWidth="1">
      <path d={`M${x1},${y1} L${x2},${y2}`} />
      <path d={head(x1, y1, 1)} />
      <path
        d={`M${x2},${y2} l${Math.cos(a + Math.PI - 0.42) * 9},${Math.sin(a + Math.PI - 0.42) * 9} M${x2},${y2} l${Math.cos(a + Math.PI + 0.42) * 9},${Math.sin(a + Math.PI + 0.42) * 9}`}
      />
    </g>
  )
}

function Ballast() {
  return (
    <>
      {/* Isometric open box */}
      <path d="M400,440 L625,310 L452,210 L227,340 Z" />
      <path d="M400,440 L400,320 L625,190 L625,310 Z" />
      <path d="M400,320 L227,220 L227,340 L400,440" />
      <path d="M227,220 L452,90 L625,190" />
      {/* Inner rim (open top) */}
      <path d="M413,315 L607,203 L448,111 L253,223 Z" strokeWidth="1" strokeDasharray="5 5" />
      {/* Exploded lid above */}
      <g stroke="var(--color-accent)">
        <path d="M258,150 L452,38 L610,129 L416,241 Z" />
        <path d="M258,150 L258,138 L452,26 L610,117 L610,129" strokeWidth="1" />
      </g>
      {/* Projection leaders */}
      <path d="M258,160 L240,228 M610,140 L622,182" strokeWidth="1" strokeDasharray="3 6" stroke="var(--color-ink-faint)" />
      {/* Dimension lines */}
      <Dim x1={420} y1={462} x2={645} y2={332} />
      <Dim x1={655} y1={192} x2={655} y2={306} />
    </>
  )
}

function Gearbox() {
  const teeth = (cx: number, cy: number, r: number, n: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i * 2 * Math.PI) / n
      const x1 = cx + Math.cos(a) * r
      const y1 = cy + Math.sin(a) * r
      const x2 = cx + Math.cos(a) * (r + 14)
      const y2 = cy + Math.sin(a) * (r + 14)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.25" />
    })
  return (
    <>
      {/* Large gear */}
      <circle cx="330" cy="320" r="112" />
      <circle cx="330" cy="320" r="126" strokeWidth="1" strokeDasharray="4 6" stroke="var(--color-ink-faint)" />
      {teeth(330, 320, 112, 26)}
      <circle cx="330" cy="320" r="26" />
      <path d="M321,294 h18 v-10 h-18 Z" strokeWidth="1.25" />
      {/* Small gear (accent) */}
      <g stroke="var(--color-accent)">
        <circle cx="516" cy="320" r="62" />
        {teeth(516, 320, 62, 16)}
        <circle cx="516" cy="320" r="18" />
      </g>
      <circle cx="516" cy="320" r="74" strokeWidth="1" strokeDasharray="4 6" stroke="var(--color-ink-faint)" />
      {/* Shaft centerline */}
      <path d="M180,320 H680" strokeWidth="1" strokeDasharray="14 5 3 5" stroke="var(--color-ink-faint)" />
      <path d="M330,190 V450 M516,230 V410" strokeWidth="1" strokeDasharray="14 5 3 5" stroke="var(--color-ink-faint)" />
    </>
  )
}

function Piston() {
  return (
    <>
      {/* Mounting plate with hatching */}
      <rect x="238" y="205" width="44" height="190" />
      {Array.from({ length: 7 }, (_, i) => (
        <line key={i} x1={238} y1={225 + i * 25} x2={282} y2={205 + i * 25} strokeWidth="1" stroke="var(--color-ink-faint)" />
      ))}
      <circle cx="260" cy="228" r="7" strokeWidth="1.25" />
      <circle cx="260" cy="372" r="7" strokeWidth="1.25" />
      {/* Cylinder body */}
      <rect x="282" y="248" width="230" height="104" />
      <rect x="282" y="260" width="230" height="80" strokeWidth="1" stroke="var(--color-ink-faint)" />
      {/* Piston head + rod */}
      <rect x="410" y="262" width="22" height="76" strokeWidth="1.25" />
      <path d="M432,292 H640 M432,308 H640" />
      <path d="M640,284 v32" />
      {/* Protective cover (accent, dashed) */}
      <path d="M270,190 H560 q10,0 10,10 V240" stroke="var(--color-accent)" strokeDasharray="7 6" />
      {/* Centerline */}
      <path d="M200,300 H700" strokeWidth="1" strokeDasharray="14 5 3 5" stroke="var(--color-ink-faint)" />
      <Dim x1={282} y1={420} x2={512} y2={420} />
    </>
  )
}

function Molder() {
  return (
    <>
      {/* Guide rails */}
      <path d="M290,232 H700 M290,368 H700" strokeWidth="1.25" />
      {/* Fixed platen + mold half */}
      <rect x="300" y="212" width="52" height="176" />
      <rect x="352" y="268" width="34" height="64" />
      {/* Moving platen + mold half */}
      <rect x="420" y="212" width="52" height="176" />
      <rect x="386" y="268" width="34" height="64" />
      {/* Parting line (accent) */}
      <path d="M386,250 V350" stroke="var(--color-accent)" strokeDasharray="6 5" />
      {/* Rear support */}
      <rect x="655" y="228" width="34" height="144" />
      {/* Toggle links with pivots */}
      <path d="M655,300 L560,258 L472,300 M655,300 L560,342 L472,300" />
      <circle cx="655" cy="300" r="7" fill="var(--color-surface)" />
      <circle cx="560" cy="258" r="7" fill="var(--color-surface)" />
      <circle cx="560" cy="342" r="7" fill="var(--color-surface)" />
      <circle cx="472" cy="300" r="7" fill="var(--color-surface)" />
      {/* Motion arrow */}
      <path d="M472,178 h-96 m0,0 l14,-8 m-14,8 l14,8" strokeWidth="1.25" stroke="var(--color-ink-faint)" />
      <Dim x1={300} y1={430} x2={689} y2={430} />
    </>
  )
}

function Fixtures() {
  return (
    <>
      {/* Wheel cover with centerlines */}
      <circle cx="330" cy="320" r="132" />
      <circle cx="330" cy="320" r="96" strokeWidth="1" stroke="var(--color-ink-faint)" />
      <circle cx="330" cy="320" r="14" />
      <path d="M330,160 V480 M170,320 H490" strokeWidth="1" strokeDasharray="14 5 3 5" stroke="var(--color-ink-faint)" />
      {/* Stencil arc (accent) */}
      <path d="M244,214 A136,136 0 0 1 452,282" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="10 7" />
      {/* Datum flags */}
      <path d="M330,160 l-12,-22 h24 Z M170,320 l-22,-12 v24 Z" strokeWidth="1.25" />
      {/* Press-fit camera bracket */}
      <path d="M545,250 H665 V296 H600 V400 H545 Z" />
      <circle cx="628" cy="273" r="9" strokeWidth="1.25" />
      <circle cx="572" cy="372" r="9" strokeWidth="1.25" />
      <path d="M600,296 V250" strokeWidth="1" strokeDasharray="5 5" stroke="var(--color-ink-faint)" />
      <Dim x1={545} y1={428} x2={665} y2={428} />
    </>
  )
}

function Enose() {
  return (
    <>
      {/* Facial profile */}
      <path d="M330,96 C300,140 296,190 305,236 C310,262 322,278 334,296 C344,310 346,322 336,330 L312,332 C306,338 308,348 314,352 C308,358 310,368 318,372 C312,378 316,392 330,394 C338,420 330,446 352,462 C376,478 412,472 440,486" />
      {/* Nasal cavity channel (dashed) */}
      <path d="M336,318 C380,300 420,268 448,232 C466,208 490,196 516,200" strokeWidth="1" strokeDasharray="6 6" stroke="var(--color-ink-faint)" />
      <path d="M340,330 C392,320 444,292 478,254 C498,232 522,222 548,228" strokeWidth="1" strokeDasharray="6 6" stroke="var(--color-ink-faint)" />
      {/* Streamlines entering the nostril */}
      <path d="M170,430 C230,410 280,380 322,338 C368,296 408,262 452,238" strokeWidth="1.25" />
      <path d="M150,392 C215,378 268,350 312,314 C356,278 402,248 450,230" strokeWidth="1.25" />
      <g stroke="var(--color-accent)" strokeWidth="2">
        <path d="M190,466 C252,442 300,408 334,360 C372,308 424,272 484,252 C516,242 550,240 580,246" />
        <path d="M580,246 l-16,-9 m16,9 l-18,5" />
      </g>
      {/* Sampling plane ticks */}
      <path d="M452,180 V300 M520,176 V286" strokeWidth="1" strokeDasharray="3 7" stroke="var(--color-ink-faint)" />
    </>
  )
}

function Robocar() {
  return (
    <>
      {/* Figure-eight course (accent) */}
      <g stroke="var(--color-accent)" strokeWidth="1.75" strokeDasharray="11 8">
        <circle cx="400" cy="222" r="94" />
        <circle cx="400" cy="410" r="94" />
      </g>
      {/* Direction arrows on course */}
      <path d="M494,232 l-8,-15 m8,15 l-16,3 M306,400 l8,15 m-8,-15 l16,-3" strokeWidth="1.25" stroke="var(--color-accent)" />
      {/* Chassis (top view) rotated on the lower loop */}
      <g transform="rotate(-24 306 428)">
        <rect x="266" y="386" width="80" height="112" rx="8" />
        <rect x="252" y="392" width="14" height="34" />
        <rect x="252" y="458" width="14" height="34" />
        <rect x="346" y="392" width="14" height="34" />
        <rect x="346" y="458" width="14" height="34" />
        {/* Sensor pair at the nose */}
        <circle cx="290" cy="398" r="6" strokeWidth="1.25" />
        <circle cx="322" cy="398" r="6" strokeWidth="1.25" />
      </g>
      {/* Inclined ramp, side elevation */}
      <path d="M560,470 L700,470 L700,414 Z" />
      <path d="M560,470 L700,414" strokeWidth="1" strokeDasharray="4 5" stroke="var(--color-ink-faint)" transform="translate(0,-10)" />
    </>
  )
}
