import { useState } from 'react'
import RichText from './RichText'

interface ImageSlotProps {
  /** Path under /public, e.g. "images/ballast-1.webp". */
  src: string
  /** Describes the image — shown as guidance while empty, used as alt text once added. */
  alt: string
  /** Optional caption shown under the image. */
  caption?: string
  /** Tailwind aspect-ratio class. */
  aspect?: string
}

/**
 * An image with a built-in "drop a file here" placeholder.
 *
 * Until a file exists at /public/<src>, the slot shows the exact path to add.
 * Once you add the file and redeploy, the image appears automatically — no
 * code change needed. (A missing file makes one harmless 404 request until
 * you add it; nothing is shown broken.)
 */
export default function ImageSlot({ src, alt, caption, aspect = 'aspect-[4/3]' }: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false)
  const url = import.meta.env.BASE_URL + src

  return (
    <figure>
      {/* Placeholder and image are both always mounted (stable structure) so
          the image is never remounted/re-fetched when it finishes loading. */}
      <div
        className={`relative w-full overflow-hidden border ${aspect} ${
          loaded ? 'border-line' : 'border-dashed border-line-strong'
        } bg-surface`}
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center ${
            loaded ? 'hidden' : ''
          }`}
          role="img"
          aria-label={`Image placeholder — add ${alt} at public/${src}`}
        >
          <span className="meta-label" aria-hidden="true">
            Add image
          </span>
          <span className="text-sm text-ink-soft" aria-hidden="true">
            {alt}
          </span>
          <code className="font-mono text-[0.7rem] break-all text-ink-faint" aria-hidden="true">
            public/{src}
          </code>
        </div>
        <img
          src={url}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm leading-relaxed text-ink-faint">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  )
}
