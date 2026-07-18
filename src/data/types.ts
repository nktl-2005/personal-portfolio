export type FigureId =
  | 'enose'
  | 'ballast'
  | 'fixtures'
  | 'molder'
  | 'gearbox'
  | 'piston'
  | 'robocar'

/** One engineering challenge / decision / tradeoff in the "How" section. */
export interface HowItem {
  title: string
  body: string
}

/** One image in a project's gallery. */
export interface GalleryItem {
  /** Path under /public, e.g. "images/ballast-1.webp". */
  src: string
  /** What the image shows — guidance while the slot is empty, alt text once added. */
  alt: string
  /** Optional caption shown under the image. */
  caption?: string
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

  // --- Metadata strip (kept from the original case-study format) ---
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

  // --- Why / What / How case study ---
  /** Why — the problem, who it affects, and why it is worth solving. */
  why: string
  /** What — what I built, led by concrete technical evidence. */
  what: {
    /** Short lead paragraph. */
    lead: string
    /** Concrete deliverables / evidence, shown as a scannable list. */
    build: string[]
  }
  /** How — the main engineering challenges, decisions, and tradeoffs. */
  how: HowItem[]
  /**
   * Optional image gallery shown on the project detail page. Each slot shows
   * its target path until you drop the file into /public and redeploy.
   */
  gallery?: GalleryItem[]
}
