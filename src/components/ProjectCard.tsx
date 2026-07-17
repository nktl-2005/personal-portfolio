import {
  ExternalLink,
  FileText,
  Github,
  Lightbulb,
  Presentation,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import type { Project, ProjectLinkType } from '../data/types'
import Tag from './Tag'

const linkIcons: Record<ProjectLinkType, typeof Github> = {
  github: Github,
  paper: FileText,
  demo: ExternalLink,
  presentation: Presentation,
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <header className="mb-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
            {project.affiliation}
          </p>
          {project.period && (
            <p className="shrink-0 text-xs text-slate-500">{project.period}</p>
          )}
        </div>
        <h3 className="mt-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
          {project.title}
        </h3>
      </header>

      <div className="flex-1 space-y-4 text-sm leading-relaxed text-slate-600">
        <div>
          <h4 className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-900 uppercase">
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
            Problem
          </h4>
          <p>{project.problem}</p>
        </div>
        <div>
          <h4 className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-900 uppercase">
            <Wrench className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
            Approach
          </h4>
          <p>{project.approach}</p>
        </div>
        <div>
          <h4 className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-900 uppercase">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            Impact
          </h4>
          <p>{project.impact}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Tag key={tool} label={tool} />
        ))}
      </div>

      {project.links.length > 0 && (
        <footer className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
          {project.links.map((link) => {
            const Icon = linkIcons[link.type]
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('#') ? undefined : '_blank'}
                rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </footer>
      )}
    </article>
  )
}
