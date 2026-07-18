import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { site } from '../data/site'
import HeroScene from '../components/HeroScene'
import ProjectPreview from '../components/ProjectPreview'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta('', site.descriptor)
  const featured = projects.filter((p) => p.featured)
  const resumeUrl = `${import.meta.env.BASE_URL}${site.resumeFile}`

  return (
    <div className="mx-auto max-w-[1160px] px-6">
      {/* ---------------------------------------------------------- Hero -- */}
      <section className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <Reveal>
          <div>
            <p className="meta-label">Mechatronics Engineering · University of Waterloo</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.02] font-semibold tracking-tight text-ink">
              {site.name}
            </h1>
            <p className="mt-5 max-w-[34ch] font-display text-[clamp(1.125rem,2.4vw,1.5rem)] leading-snug font-medium text-ink">
              {site.descriptor}
            </p>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-soft">{site.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/projects"
                className="arrow-link inline-flex min-h-11 items-center gap-2.5 bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                View Projects
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
              >
                Resume
              </a>
              <Link to="/about" className="u-link inline-flex min-h-11 items-center py-2 text-sm font-medium text-ink">
                About Me
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <HeroScene />
        </Reveal>
      </section>

      {/* ------------------------------------------------- Selected work -- */}
      <section className="border-t border-line py-16 md:py-24" aria-labelledby="selected-work">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4 md:mb-16">
            <div>
              <p className="meta-label">Selected work</p>
              <h2 id="selected-work" className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-ink">
                Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="arrow-link hidden min-h-11 shrink-0 items-center gap-2 py-2 text-sm font-medium text-ink sm:inline-flex"
            >
              All projects
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {featured.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectPreview project={project} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 sm:hidden">
            <Link to="/projects" className="arrow-link inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium text-ink">
              All projects
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ----------------------------------------------- About preview -- */}
      <section className="border-t border-line py-16 md:py-24" aria-labelledby="about-preview">
        <Reveal>
          <div className="max-w-[62ch]">
            <p className="meta-label">About</p>
            <h2 id="about-preview" className="sr-only">
              About Nicholas Lee
            </h2>
            <p className="mt-4 font-display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug font-medium tracking-tight text-ink">
              {site.about.blurb}
            </p>
            <Link
              to="/about"
              className="arrow-link mt-7 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium text-accent"
            >
              More about me
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
