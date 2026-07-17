import { BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering that survives contact with reality"
      tone="muted"
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Bio */}
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <div className="mt-8">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-slate-900">
                <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Areas of Focus
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {profile.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Snapshot cards */}
        <Reveal delay={150}>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-xl bg-blue-50 p-2.5">
                  <GraduationCap className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">Education</h3>
              </div>
              <p className="font-medium text-slate-800">{profile.education.degree}</p>
              <p className="text-sm text-slate-600">{profile.education.school}</p>
              <p className="mt-1 text-sm text-slate-500">
                {profile.education.period} · {profile.education.gpa}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-xl bg-blue-50 p-2.5">
                  <Briefcase className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">Currently</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Mechanical Designer — Midnight Sun Solar Car Team</li>
                <li>Undergraduate Research Assistant — MSAM Lab</li>
                <li>Founding Member — Waterloo Automation Collective</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-xl bg-blue-50 p-2.5">
                  <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-slate-900">Key Coursework</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {profile.education.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
