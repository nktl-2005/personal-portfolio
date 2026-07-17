import { Briefcase, FlaskConical, Rocket, Users } from 'lucide-react'
import { experience } from '../data/experience'
import type { ExperienceType } from '../data/types'
import Reveal from './Reveal'
import Section from './Section'

const typeStyles: Record<ExperienceType, { badge: string; icon: typeof Briefcase }> = {
  Internship: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: Briefcase },
  Research: { badge: 'bg-violet-50 text-violet-700 border-violet-200', icon: FlaskConical },
  'Design Team': { badge: 'bg-blue-50 text-blue-700 border-blue-200', icon: Rocket },
  Leadership: { badge: 'bg-amber-50 text-amber-700 border-amber-200', icon: Users },
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships, research, and student teams"
      subtitle="A timeline of the roles where the engineering happened — production floors, research labs, and competition bays."
      tone="muted"
    >
      <ol className="relative ml-3 space-y-10 border-l-2 border-slate-200 md:ml-6">
        {experience.map((item, i) => {
          const { badge, icon: Icon } = typeStyles[item.type]
          return (
            <li key={`${item.role}-${item.organization}`} className="relative pl-8 md:pl-12">
              {/* Timeline node */}
              <span
                className="absolute top-1 -left-[1.3125rem] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-sm"
                aria-hidden="true"
              >
                <Icon className="h-4 w-4 text-white" />
              </span>

              <Reveal delay={i * 75}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md md:p-7">
                  <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badge}`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="font-medium text-blue-700">{item.organization}</p>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {item.location} · {item.period}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 40)}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                      >
                        <span
                          className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
