import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectPreview from '../components/ProjectPreview'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../lib/usePageMeta'

/** Filters are derived from the data: only categories with >= 2 projects. */
function useFilters() {
  return useMemo(() => {
    const counts = new Map<string, number>()
    for (const p of projects) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
    return [...counts.entries()].filter(([, n]) => n >= 2).map(([category]) => category)
  }, [])
}

export default function Projects() {
  usePageMeta('Projects', 'Engineering case studies: mechanical design, sensing and simulation, and product development projects by Nicholas Lee.')
  const filters = useFilters()
  const [active, setActive] = useState<string | null>(null)
  const visible = active ? projects.filter((p) => p.category === active) : projects

  return (
    <div className="mx-auto max-w-[1160px] px-6">
      <header className="py-14 md:py-20">
        <Reveal>
          <p className="meta-label">Projects</p>
          <h1 className="mt-4 max-w-[24ch] font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight text-ink">
            Case studies, from problem to measured result
          </h1>
          <p className="mt-5 max-w-[56ch] leading-relaxed text-ink-soft">
            Each project is written the way the work actually went: the problem, the constraints,
            the decisions, and what the design achieved.
          </p>
        </Reveal>

        {filters.length >= 2 && (
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              <FilterChip label="All" active={active === null} onClick={() => setActive(null)} />
              {filters.map((f) => (
                <FilterChip key={f} label={f} active={active === f} onClick={() => setActive(f)} />
              ))}
            </div>
          </Reveal>
        )}
      </header>

      <div className="space-y-14 border-t border-line pt-14 pb-20 md:space-y-20 md:pt-16 md:pb-28">
        <h2 className="sr-only">All projects</h2>
        {visible.map((project) => (
          <Reveal key={project.slug}>
            <ProjectPreview project={project} size="md" />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 border px-4 text-sm transition-colors ${
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink'
      }`}
    >
      {label}
    </button>
  )
}
