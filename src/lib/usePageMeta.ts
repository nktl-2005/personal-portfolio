import { useEffect } from 'react'
import { site } from '../data/site'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Per-route document title + description + Open Graph metadata.
 * Pass `enabled: false` when another component (e.g. a nested NotFound)
 * should own the metadata instead.
 */
export function usePageMeta(title: string, description: string, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} | Engineering Portfolio`
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
  }, [title, description, enabled])
}
