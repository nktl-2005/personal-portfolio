import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently in the middle band of
 * the viewport. `ids` should be a stable (module-level) array.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const inBand = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id)
          else inBand.delete(entry.target.id)
        }
        // First tracked section in the band, or none (e.g. back at the hero)
        setActive(ids.find((id) => inBand.has(id)) ?? '')
      },
      // Trigger when a section crosses the upper-middle band of the viewport
      { rootMargin: '-30% 0px -60% 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
