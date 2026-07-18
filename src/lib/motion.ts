import { useSyncExternalStore } from 'react'

function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (notify) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', notify)
      return () => mql.removeEventListener('change', notify)
    },
    () => window.matchMedia(query).matches,
  )
}

/** True when the user prefers reduced motion — gate every animation on this. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

/**
 * True only for mouse-like input on hover-capable screens. Cursor-driven
 * effects (tilt, parallax) must be disabled when this is false.
 */
export function useFinePointer(): boolean {
  return useMediaQuery('(hover: hover) and (pointer: fine)')
}
