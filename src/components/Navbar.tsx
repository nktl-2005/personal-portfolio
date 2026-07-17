import { useEffect, useState } from 'react'
import { FileDown, Menu, X } from 'lucide-react'
import { navSections, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navSections.map((s) => s.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const resumeUrl = import.meta.env.BASE_URL + profile.resumeFile

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            {profile.name.split(' ')[0]}
            <span className="text-blue-600"> {profile.name.split(' ')[1]}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === s.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={resumeUrl}
            download
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow md:inline-flex"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200/70 bg-white/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active === s.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
