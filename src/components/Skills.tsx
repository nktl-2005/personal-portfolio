import { Box, CircuitBoard, Code2, FlaskConical, Users } from 'lucide-react'
import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import Section from './Section'

const groupIcons: Record<string, typeof Box> = {
  cad: Box,
  programming: Code2,
  hardware: CircuitBoard,
  lab: FlaskConical,
  leadership: Users,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolbox that spans design, code, and the shop floor"
      subtitle="Grouped by how the work actually gets done — from CAD and simulation through prototyping, research, and communication."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[group.id] ?? Box
          return (
            <Reveal key={group.id} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-xl bg-blue-50 p-2.5">
                    <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-slate-900">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
