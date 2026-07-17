import { Github, Linkedin, Mail } from 'lucide-react'
import { navSections, profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-900">
              {profile.name.split(' ')[0]}
              <span className="text-blue-600"> {profile.name.split(' ')[1]}</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {profile.title} · {profile.university}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  )
}
