import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  /** Alternate background for visual rhythm between sections */
  tone?: 'default' | 'muted'
}

/** Shared section shell: consistent spacing, header hierarchy, and reveal. */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${tone === 'muted' ? 'bg-white' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <header className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
            )}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
