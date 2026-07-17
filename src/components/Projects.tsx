import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="From CAD model to manufactured part"
      subtitle="A selection of design, research, and prototyping work — each framed by the problem it solves, the technical approach, and the measured result."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
