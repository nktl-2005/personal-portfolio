import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import CaseSection from '../components/CaseSection'
import ImageSlot from '../components/ImageSlot'
import ProjectFigure from '../components/ProjectFigure'
import RichText from '../components/RichText'
import Reveal from '../components/Reveal'
import TiltFrame from '../components/TiltFrame'
import NotFound from './NotFound'
import { usePageMeta } from '../lib/usePageMeta'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? projects[index] : undefined

  // When the slug is unknown, NotFound renders and owns the page metadata.
  usePageMeta(project?.title ?? '', project?.summary ?? '', !!project)

  if (!project) return <NotFound />

  const prev = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined

  return (
    <article className="mx-auto max-w-[1160px] px-6">
      {/* ------------------------------------------------------ Hero ---- */}
      <header className="py-12 md:py-16">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <Link to="/projects" className="arrow-link inline-flex min-h-11 items-center gap-2 py-2 text-sm text-ink-soft hover:text-ink">
              <span className="arrow rotate-180" aria-hidden="true">
                →
              </span>
              All projects
            </Link>
          </nav>
          <p className="meta-label mt-6">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-[26ch] font-display text-[clamp(1.875rem,4.5vw,3rem)] leading-tight font-semibold tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
            <RichText text={project.outcome} />
          </p>
        </Reveal>

        <Reveal delay={100}>
          <TiltFrame maxTilt={1.75} className="mt-10">
            <div className="overflow-hidden border border-line">
              {project.image ? (
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.imageAlt ?? project.title}
                  className="block aspect-[16/9] w-full bg-surface object-cover"
                />
              ) : (
                <ProjectFigure id={project.figure} className="aspect-[16/9]" />
              )}
            </div>
          </TiltFrame>
        </Reveal>

        {/* Metadata strip */}
        <Reveal delay={150}>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Role" value={project.role} />
            <MetaItem label="Team" value={project.team} />
            <MetaItem label="Duration" value={project.duration} />
            <div className="col-span-2 sm:col-span-4">
              <dt className="meta-label">Tools & methods</dt>
              <dd className="mt-2 font-mono text-[0.8125rem] leading-relaxed text-ink">
                {project.tools.join('  ·  ')}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      {/* --------------------------------------------------- Why / What / How -- */}
      <CaseSection number="01" title="Why">
        <p className="max-w-[68ch] text-lg leading-relaxed text-ink-soft">
          <RichText text={project.why} />
        </p>
      </CaseSection>

      <CaseSection number="02" title="What">
        <div className="max-w-[68ch] space-y-8">
          <p className="leading-relaxed text-ink-soft">
            <RichText text={project.what.lead} />
          </p>
          <div>
            <h3 className="meta-label">What I built</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {project.what.build.map((item) => (
                <li key={item} className="flex gap-3 py-3 leading-relaxed text-ink-soft">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseSection>

      <CaseSection number="03" title="How">
        <div className="max-w-[68ch] space-y-8">
          {project.how.map((item) => (
            <div key={item.title} className="border-l-2 border-accent pl-5">
              <h3 className="font-display font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                <RichText text={item.body} />
              </p>
            </div>
          ))}
        </div>
      </CaseSection>

      {project.gallery && project.gallery.length > 0 && (
        <CaseSection number="04" title="Gallery">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <ImageSlot key={img.src} src={img.src} alt={img.alt} caption={img.caption} />
            ))}
          </div>
        </CaseSection>
      )}

      {/* -------------------------------------------- Project navigation -- */}
      <nav aria-label="Project navigation" className="grid gap-px border-t border-line py-10 sm:grid-cols-3">
        <div className="sm:pr-6">
          {prev && (
            <Link to={`/projects/${prev.slug}`} className="group block min-h-11 py-2">
              <span className="meta-label">
                <span aria-hidden="true">← </span>
                Previous
              </span>
              <span className="u-link mt-1 block w-fit font-display font-medium text-ink group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          )}
        </div>
        <div className="flex items-center sm:justify-center">
          <Link to="/projects" className="u-link inline-flex min-h-11 items-center py-2 text-sm font-medium text-ink-soft hover:text-ink">
            Back to all projects
          </Link>
        </div>
        <div className="sm:pl-6 sm:text-right">
          {next && (
            <Link to={`/projects/${next.slug}`} className="group block min-h-11 py-2">
              <span className="meta-label">
                Next
                <span aria-hidden="true"> →</span>
              </span>
              <span className="u-link mt-1 block w-fit font-display font-medium text-ink group-hover:text-accent sm:ml-auto">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="meta-label">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink">
        <RichText text={value} />
      </dd>
    </div>
  )
}
