import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu after navigating
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `u-link inline-flex min-h-11 items-center py-2 text-sm ${isActive ? 'text-ink font-medium' : 'text-ink-soft hover:text-ink'}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav aria-label="Primary" className="mx-auto max-w-[1160px] px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center font-display text-[0.9375rem] font-semibold tracking-tight text-ink"
          >
            {site.name}
            <span aria-hidden="true" className="ml-1.5 text-accent">
              /
            </span>
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle (44px target) */}
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-ink sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 5.5h16M2 10h16M2 14.5h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu — inside the nav landmark */}
        {open && (
          <ul id="mobile-menu" className="border-t border-line py-3 sm:hidden">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 text-base ${isActive ? 'font-medium text-ink' : 'text-ink-soft'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
