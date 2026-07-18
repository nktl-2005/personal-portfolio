import { useRef, type ReactNode } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../lib/motion'

interface TiltFrameProps {
  children: ReactNode
  className?: string
  /** Maximum tilt in degrees (kept small on purpose) */
  maxTilt?: number
}

/**
 * Subtle 3D perspective tilt that follows the cursor.
 * Active only for fine pointers on hover-capable devices, and disabled
 * entirely under prefers-reduced-motion; touch devices get a static frame.
 */
export default function TiltFrame({ children, className = '', maxTilt = 3 }: TiltFrameProps) {
  const inner = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const finePointer = useFinePointer()
  const reducedMotion = usePrefersReducedMotion()
  const active = finePointer && !reducedMotion

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!active || !inner.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      if (!inner.current) return
      inner.current.style.transform = `rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg)`
    })
  }

  const onLeave = () => {
    cancelAnimationFrame(frame.current)
    if (inner.current) inner.current.style.transform = ''
  }

  return (
    <div
      className={className}
      style={active ? { perspective: '1200px' } : undefined}
      onPointerMove={active ? onMove : undefined}
      onPointerLeave={active ? onLeave : undefined}
    >
      <div
        ref={inner}
        style={
          active
            ? { transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  )
}
