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
  body: string | string[]
  /** Figures shown inline right after this block's text (1 = full width, 2 = side by side). */
  media?: GalleryItem[]
}

/** One figure in a project — an image, or an .mp4/.webm animation. */
export interface GalleryItem {
  /** Path under /public, e.g. "images/ballast-1.webp" or "images/clip.mp4". */
  src: string
  /** What the image shows — guidance while the slot is empty, alt text once added. */
  alt: string
  /** Optional caption shown under the image. */
  caption?: string
  /**
   * How the image fills its 4:3 frame. 'cover' (default) crops to fill;
   * use 'contain' for tall/portrait renders so the whole part stays visible.
   */
  fit?: 'cover' | 'contain'
  /**
   * Still frame for a video `src` (.mp4/.webm). Shown while the video loads,
   * and shown *instead* of it when the visitor prefers reduced motion.
   */
  poster?: string
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
    /** Figures shown inline after the list (1 = full width, 2 = side by side). */
    media?: GalleryItem[]
  }
  /** How — the main engineering challenges, decisions, and tradeoffs. */
  how: HowItem[]
  /**
   * Optional overrides for the case-study section headings, per project.
   * Defaults: why "Why", what "What" (list "What I built"), how "How".
   * Example (pneumatic piston): Problem → Design requirements → Design solution.
   */
  sectionTitles?: {
    why?: string
    what?: string
    /** Heading shown above the `what.build` list */
    whatList?: string
    how?: string
  }
  /**
   * Optional Results section rendered after How — use it when a project has
   * an honest outcome story to tell (delivered items + status paragraphs).
   */
  results?: {
    /** Paragraphs — what was delivered, what was validated, what remains. */
    body: string[]
    /** Optional list of concrete deliverables. */
    delivered?: string[]
    /** Figures shown inline after the paragraphs (1 = full width, 2 = side by side). */
    media?: GalleryItem[]
  }
  /**
   * Optional image gallery shown on the project detail page. Each slot shows
   * its target path until you drop the file into /public and redeploy.
   */
  gallery?: GalleryItem[]
}
