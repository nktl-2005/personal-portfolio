export type ProjectLinkType = 'github' | 'paper' | 'demo' | 'presentation'

export interface ProjectLink {
  type: ProjectLinkType
  label: string
  href: string
}

export interface Project {
  title: string
  affiliation: string
  period: string
  problem: string
  approach: string
  impact: string
  tools: string[]
  links: ProjectLink[]
}

export type ExperienceType = 'Internship' | 'Research' | 'Design Team' | 'Leadership'

export interface ExperienceItem {
  role: string
  organization: string
  location: string
  period: string
  type: ExperienceType
  highlights: string[]
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface ResearchInterest {
  title: string
  description: string
}

export interface Publication {
  title: string
  venue: string
  year: string
  authors: string
  type: 'Publication' | 'Poster' | 'Presentation'
  href?: string
}
