import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface CaseSectionProps {
  number: string
  title: string
  children: ReactNode
}

/** Numbered section shell used by every project case study. */
export default function CaseSection({ number, title, children }: CaseSectionProps) {
  return (
    <section className="border-t border-line py-12 md:py-16">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <h2 className="flex items-baseline gap-3 md:block">
              <span className="meta-label block" aria-hidden="true">
                {number}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink md:mt-2 md:block md:text-xl">
                {title}
              </span>
            </h2>
          </div>
          <div className="md:col-span-9 lg:col-span-8">{children}</div>
        </div>
      </Reveal>
    </section>
  )
}
