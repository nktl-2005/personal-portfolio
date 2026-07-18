import { Link } from 'react-router-dom'
import type { Project } from '../data/types'
import ProjectFigure from './ProjectFigure'
import TiltFrame from './TiltFrame'

interface ProjectPreviewProps {
  project: Project
  /** Put the visual on the right (editorial alternation on the home page) */
  flip?: boolean
  /** lg = home "selected work", md = projects index */
  size?: 'lg' | 'md'
}

/**
 * Editorial project preview: one visual, title, one-sentence summary,
 * category, year, and a single "More details" action. The whole block
 * is one link.
 */
export default function ProjectPreview({ project, flip = false, size = 'lg' }: ProjectPreviewProps) {
  const visual = (
    <TiltFrame maxTilt={size === 'lg' ? 3 : 2.25}>
      <div className="overflow-hidden border border-line transition-colors duration-300 group-hover:border-line-strong">
        <div className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]">
          {project.image ? (
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={project.imageAlt ?? project.title}
              loading="lazy"
              className="block aspect-[4/3] w-full bg-surface object-cover"
            />
          ) : (
            <ProjectFigure id={project.figure} className="aspect-[4/3]" />
          )}
        </div>
      </div>
    </TiltFrame>
  )

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10"
      aria-label={`${project.title} — more details`}
    >
      <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>{visual}</div>

      <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <p className="meta-label">
          {project.category} · {project.year}
        </p>
        <h3
          className={`mt-3 font-display font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent ${
            size === 'lg' ? 'text-[clamp(1.5rem,3vw,2.125rem)]' : 'text-[clamp(1.25rem,2.2vw,1.625rem)]'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-[46ch] leading-relaxed text-ink-soft">{project.summary}</p>
        <span className="arrow-link mt-5 inline-flex items-center gap-2 py-2 text-sm font-medium text-accent">
          More details
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
