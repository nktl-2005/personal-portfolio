export type FigureId =
  | 'enose'
  | 'ballast'
  | 'fixtures'
  | 'molder'
  | 'gearbox'
  | 'piston'
  | 'robocar'

/** One figure in a project — an image, or an .mp4/.webm animation. */
export interface GalleryItem {
  /** Path under /public, e.g. "images/ballast-1.webp" or "images/clip.mp4". */
  src: string
  /** What the figure shows — guidance while the slot is empty, alt text once added. */
  alt: string
  /** One-line takeaway: what the reader should notice, not what the object is. */
  caption?: string
  /**
   * How the figure fills its 4:3 frame. 'cover' (default) crops to fill;
   * use 'contain' for plots and tall renders that must stay whole.
   */
  fit?: 'cover' | 'contain'
  /**
   * Still frame for a video `src`. Shown while the video loads, and shown
   * *instead* of it when the visitor prefers reduced motion.
   */
  poster?: string
}

/** One block inside the collapsed "Technical details" section. */
export interface DetailItem {
  title: string
  /** A string, or an array of strings for multiple paragraphs. */
  body: string | string[]
  /** Figures shown after this block (1 = full width, 2+ = two-column grid). */
  media?: GalleryItem[]
}

/**
 * A project case study.
 *
 * The page follows the MIT MechE Comm Lab portfolio structure — an inverted
 * pyramid that front-loads what matters, because a reviewer gives each page
 * 30–60 seconds:
 *
 *   title  →  outcome  →  skills  →  motivation  →  technical details
 *
 * Keep `outcome`, `skills`, and `motivation` short; that is the part that
 * actually gets read. Everything a curious reader might want goes in
 * `details`, which renders collapsed.
 */
export interface Project {
  /** URL segment: /projects/<slug>/ */
  slug: string
  /** Impactful title — convey meaning to a broad audience, not a course code. */
  title: string
  /** One sentence, used on the cards and under the page title. */
  summary: string
  /** Display category; filters are derived from categories with >= 2 projects */
  category: string
  year: string
  /** Shown in the "Selected work" section on the home page */
  featured: boolean
  tools: string[]

  /** Built-in technical illustration used when no real image is provided */
  figure: FigureId
  /**
   * Optional real hero (path under /public). An image, or an .mp4/.webm that
   * plays silently on loop. When set, it replaces the illustration in previews
   * and at the top of the project page.
   */
  image?: string
  imageAlt?: string
  /** Still frame for a video hero — also the preview-card image. */
  imagePoster?: string

  // --- Inverted pyramid ------------------------------------------------
  /** 1. Outcome — what it is, how it performed, why it matters, what I did. */
  outcome: string | string[]
  outcomeMedia?: GalleryItem[]
  /** 2. Experience, learning & skills — what I did, led by strong verbs. */
  skills: string[]
  /** 3. Motivation — the objective, why it matters, and the constraints. */
  motivation: string | string[]
  motivationMedia?: GalleryItem[]
  /** 4. Technical details — collapsed by default; for the curious reader. */
  details?: DetailItem[]
}
