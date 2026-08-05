import { useState } from 'react'
import RichText from './RichText'
import { usePrefersReducedMotion } from '../lib/motion'

interface ImageSlotProps {
  /** Path under /public, e.g. "images/ballast-1.webp" or "images/clip.mp4". */
  src: string
  /** Describes the media — shown as guidance while empty, used as alt text once added. */
  alt: string
  /** Optional caption shown under the media. */
  caption?: string
  /** Tailwind aspect-ratio class. */
  aspect?: string
  /** 'cover' (default) crops to fill the frame; 'contain' shows the whole image. */
  fit?: 'cover' | 'contain'
  /** Still frame shown before a video loads (and instead of it under reduced motion). */
  poster?: string
}

const VIDEO_RE = /\.(mp4|webm)$/i

/**
 * A figure with a built-in "drop a file here" placeholder.
 *
 * Until a file exists at /public/<src>, the slot shows the exact path to add.
 * Once you add the file and redeploy, it appears automatically — no code
 * change needed. (A missing file makes one harmless 404 request until you add
 * it; nothing is shown broken.)
 *
 * If `src` ends in .mp4 or .webm it renders as a silent, looping, autoplaying
 * video — the web-friendly way to show a simulation animation. Supply a
 * `poster` still: it covers the load and is shown *instead of* the video when
 * the visitor prefers reduced motion.
 */
export default function ImageSlot({
  src,
  alt,
  caption,
  aspect = 'aspect-[4/3]',
  fit = 'cover',
  poster,
}: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false)
  const reduceMotion = usePrefersReducedMotion()
  const base = import.meta.env.BASE_URL
  const isVideo = VIDEO_RE.test(src)
  // Under reduced motion, fall back to the still frame rather than animating.
  const showVideo = isVideo && !(reduceMotion && poster)
  const url = base + (isVideo && !showVideo && poster ? poster : src)
  const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover'
  const mediaClass = `absolute inset-0 h-full w-full ${objectFit} transition-opacity duration-300 ${
    loaded ? 'opacity-100' : 'opacity-0'
  }`

  return (
    <figure>
      {/* Placeholder and media are both always mounted (stable structure) so
          the media is never remounted/re-fetched when it finishes loading. */}
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
          aria-label={`Media placeholder — add ${alt} at public/${src}`}
        >
          <span className="meta-label" aria-hidden="true">
            Add {isVideo ? 'video' : 'image'}
          </span>
          <span className="text-sm text-ink-soft" aria-hidden="true">
            {alt}
          </span>
          <code className="font-mono text-[0.7rem] break-all text-ink-faint" aria-hidden="true">
            public/{src}
          </code>
        </div>
        {showVideo ? (
          <video
            key={url}
            src={url}
            poster={poster ? base + poster : undefined}
            aria-label={alt}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setLoaded(true)}
            onError={() => setLoaded(false)}
            className={mediaClass}
          />
        ) : (
          <img
            src={url}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
            className={mediaClass}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm leading-relaxed text-ink-faint">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  )
}
