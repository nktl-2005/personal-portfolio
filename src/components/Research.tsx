import { FileText, FlaskConical, Microscope } from 'lucide-react'
import { affiliation, interests, methods, publications } from '../data/research'
import Reveal from './Reveal'
import Section from './Section'
import Tag from './Tag'

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Additive manufacturing, from lab to lecture hall"
      subtitle="Undergraduate research at the intersection of parametric design, 3D printing, and hands-on engineering education."
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Affiliation */}
        <Reveal className="lg:col-span-1">
          <div className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-7 shadow-sm">
            <span className="mb-4 inline-flex w-fit rounded-xl bg-white p-3 shadow-sm">
              <Microscope className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-bold text-slate-900">{affiliation.lab}</h3>
            <p className="mt-1 text-sm font-medium text-blue-700">{affiliation.institution}</p>
            <p className="mt-1 text-sm text-slate-500">
              {affiliation.role} · {affiliation.period}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {affiliation.description}
            </p>
            <div className="mt-auto pt-6">
              <h4 className="mb-3 text-xs font-semibold tracking-wide text-slate-900 uppercase">
                Methods & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {methods.map((method) => (
                  <Tag key={method} label={method} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interests + publications */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((interest) => (
                <div
                  key={interest.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <FlaskConical className="h-4.5 w-4.5 text-blue-600" aria-hidden="true" />
                    <h3 className="font-semibold text-slate-900">{interest.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">
                  Publications, Posters & Presentations
                </h3>
              </div>
              {publications.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center">
                  <p className="text-sm font-medium text-slate-600">
                    Publications and conference posters will be listed here.
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Research contributions from the MSAM Lab are currently in progress — check
                    back soon.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {publications.map((pub) => (
                    <li key={pub.title} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-slate-900">
                            {pub.href ? (
                              <a
                                href={pub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-blue-700"
                              >
                                {pub.title}
                              </a>
                            ) : (
                              pub.title
                            )}
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">
                            {pub.authors} · {pub.venue} · {pub.year}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                          {pub.type}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
