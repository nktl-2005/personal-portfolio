export type FigureId =
  | 'enose'
  | 'methane'
  | 'ballast'
  | 'fixtures'
  | 'molder'
  | 'gearbox'
  | 'piston'
  | 'robocar'

export interface SpecRow {
  parameter: string
  value: string
}

export interface ProcessStep {
  title: string
  body: string
}

export interface Decision {
  title: string
  alternatives: string
  chosen: string
  reasoning: string
  tradeoffs: string
}

export interface ResultRow {
  metric: string
  value: string
  note?: string
}

export interface Project {
  /** URL segment: /projects/<slug>/ */
  slug: string
  title: string
  /** One sentence for previews (index + home) */
  summary: string
  /** Display category; filters are derived from categories with >= 2 projects */
  category: string
  year: string
  /** Shown in the "Selected work" section on the home page */
  featured: boolean
  /** One-sentence outcome under the project-page title */
  outcome: string
  role: string
  team: string
  duration: string
  tools: string[]
  /** Built-in technical illustration used when no real image is provided */
  figure: FigureId
  /**
   * Optional real image (path under /public, e.g. "images/ballast.webp").
   * When set, it replaces the illustration in previews and the project hero.
   */
  image?: string
  imageAlt?: string
  overview: string
  problem: {
    statement: string
    limitations: string
    requirements: string
    difficulty: string
  }
  specs: SpecRow[]
  process: ProcessStep[]
  decisions: Decision[]
  solution: {
    description: string
    components: string[]
    operation: string
  }
  results: ResultRow[]
  reflection: {
    worked: string
    didnt: string
    learned: string
    next: string
  }
}
