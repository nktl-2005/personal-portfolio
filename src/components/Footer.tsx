import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-faint">
            © {new Date().getFullYear()}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <li>
            <a href={`mailto:${site.email}`} className="u-link inline-block py-2 text-ink-soft hover:text-ink">
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link inline-block py-2 text-ink-soft hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link inline-block py-2 text-ink-soft hover:text-ink"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
