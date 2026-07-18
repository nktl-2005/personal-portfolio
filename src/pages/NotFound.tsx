import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for does not exist.')

  return (
    <div className="mx-auto flex max-w-[1160px] flex-col items-start px-6 py-24 md:py-36">
      <p className="meta-label">Error 404</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-[44ch] leading-relaxed text-ink-soft">
        The address may have changed, or the page never existed. Everything worth seeing is one
        level up.
      </p>
      <Link
        to="/"
        className="arrow-link mt-8 inline-flex min-h-11 items-center gap-2.5 bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
      >
        Back to home
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
