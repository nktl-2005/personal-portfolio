import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import type { GalleryItem } from '../data/types'
import CaseSection from '../components/CaseSection'
import ImageSlot from '../components/ImageSlot'
import ProjectFigure from '../components/ProjectFigure'
import RichText from '../components/RichText'
import Reveal from '../components/Reveal'
import TiltFrame from '../components/TiltFrame'
import NotFound from './NotFound'
import { usePageMeta } from '../lib/usePageMeta'
import { usePrefersReducedMotion } from '../lib/motion'

const VIDEO_RE = /\.(mp4|webm)$/i

/**
 * Project case study, laid out as an inverted pyramid (MIT MechE Comm Lab):
 * outcome first, then skills, then motivation, then optional technical
 * details behind a disclosure. A reviewer who reads only the first screen
 * should still get the point.
 */
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
            <Link
              to="/projects"
              className="arrow-link inline-flex min-h-11 items-center gap-2 py-2 text-sm text-ink-soft hover:text-ink"
            >
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
            <RichText text={project.summary} />
          </p>
          {project.status && (
            <p className="mt-5 inline-flex items-center gap-2 border border-line px-3 py-1.5 text-sm text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {project.status}
            </p>
          )}
        </Reveal>

        <Reveal delay={100}>
          <TiltFrame maxTilt={1.75} className="mt-10">
            <div className="overflow-hidden border border-line">
              <HeroMedia project={project} />
            </div>
          </TiltFrame>
        </Reveal>

        {/* Metadata strip */}
        <Reveal delay={150}>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            <div>
              <dt className="meta-label">Year</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{project.year}</dd>
            </div>
            <div className="sm:col-span-3">
              <dt className="meta-label">Tools &amp; methods</dt>
              <dd className="mt-2 font-mono text-[0.8125rem] leading-relaxed text-ink">
                {project.tools.join('  ·  ')}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      {/* -------------------------------------------------- 01 Outcome -- */}
      <CaseSection number="01" title="Outcome">
        <div className="max-w-[68ch] space-y-5">
          <Paragraphs text={project.outcome} lead />
        </div>
        {project.outcomeMedia && <MediaRow items={project.outcomeMedia} />}
      </CaseSection>

      {/* --------------------------------------------------- 02 Skills -- */}
      <CaseSection number="02" title="What I did">
        <ul className="max-w-[68ch] divide-y divide-line border-y border-line">
          {project.skills.map((item) => (
            <li key={item} className="flex gap-3 py-3 leading-relaxed text-ink-soft">
              <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      </CaseSection>

      {/* ----------------------------------------------- 03 Motivation -- */}
      <CaseSection number="03" title="Why this project">
        <div className="max-w-[68ch] space-y-5">
          <Paragraphs text={project.motivation} />
        </div>
        {project.motivationMedia && <MediaRow items={project.motivationMedia} />}
      </CaseSection>

      {/* -------------------------------------------------- 04 Details -- */}
      {project.details && project.details.length > 0 && (
        <CaseSection number="04" title="Technical details">
          <details className="group">
            <summary className="flex min-h-11 max-w-[68ch] cursor-pointer list-none items-center gap-3 text-ink-soft transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
              <span
                className="font-mono text-xs transition-transform group-open:rotate-90"
                aria-hidden="true"
              >
                ▸
              </span>
              <span className="text-sm">
                Setup, method, and full results — {project.details.length} sections
              </span>
            </summary>
            <div className="mt-8 space-y-12">
              {project.details.map((item) => (
                <DetailBlock
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  media={item.media}
                />
              ))}
            </div>
          </details>
        </CaseSection>
      )}

      {/* -------------------------------------------- Project navigation -- */}
      <nav
        aria-label="Project navigation"
        className="grid gap-px border-t border-line py-10 sm:grid-cols-3"
      >
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
          <Link
            to="/projects"
            className="u-link inline-flex min-h-11 items-center py-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
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

/** Hero image, or a silent looping video when `image` points at .mp4/.webm. */
function HeroMedia({ project }: { project: (typeof projects)[number] }) {
  const reduceMotion = usePrefersReducedMotion()
  const base = import.meta.env.BASE_URL
  const { image, imagePoster, imageAlt, title, figure } = project

  if (!image) return <ProjectFigure id={figure} className="aspect-[16/9]" />

  const isVideo = VIDEO_RE.test(image)
  // Under reduced motion, show the still instead of animating.
  if (isVideo && !(reduceMotion && imagePoster)) {
    return (
      <video
        src={base + image}
        poster={imagePoster ? base + imagePoster : undefined}
        aria-label={imageAlt ?? title}
        autoPlay
        loop
        muted
        playsInline
        className="block aspect-[16/9] w-full bg-surface object-cover"
      />
    )
  }
  return (
    <img
      src={base + (isVideo && imagePoster ? imagePoster : image)}
      alt={imageAlt ?? title}
      className="block aspect-[16/9] w-full bg-surface object-cover"
    />
  )
}

/** Renders a string or an array of strings as paragraphs. */
function Paragraphs({ text, lead = false }: { text: string | string[]; lead?: boolean }) {
  const paragraphs = Array.isArray(text) ? text : [text]
  return (
    <>
      {paragraphs.map((p, i) => (
        <p
          key={p.slice(0, 40)}
          className={
            lead && i === 0
              ? 'text-lg leading-relaxed text-ink'
              : 'leading-relaxed text-ink-soft'
          }
        >
          <RichText text={p} />
        </p>
      ))}
    </>
  )
}

function DetailBlock({ title, body, media }: { title: string; body: string | string[]; media?: GalleryItem[] }) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <h3 className="font-display font-semibold tracking-tight text-ink">{title}</h3>
      <div className="mt-2 max-w-[68ch] space-y-3">
        <Paragraphs text={body} />
      </div>
      {media && <MediaRow items={media} />}
    </div>
  )
}

/**
 * Section figures: one renders full width, two or more render in a
 * two-column grid (stacking on mobile). Captions come from the data.
 */
function MediaRow({ items }: { items: GalleryItem[] }) {
  return (
    <div className={`mt-6 grid grid-cols-1 gap-5 ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((m) => (
        <ImageSlot
          key={m.src}
          src={m.src}
          alt={m.alt}
          caption={m.caption}
          fit={m.fit}
          poster={m.poster}
        />
      ))}
    </div>
  )
}
