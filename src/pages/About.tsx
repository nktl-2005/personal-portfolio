import { site } from '../data/site'
import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import { usePageMeta } from '../lib/usePageMeta'

export default function About() {
  usePageMeta('About', 'About Nicholas Lee — Mechatronics Engineering student at the University of Waterloo, currently a research intern in the Aizenberg Lab at Harvard University.')

  return (
    <div className="mx-auto max-w-[1160px] px-6">
      <header className="py-14 md:py-20">
        <Reveal>
          <p className="meta-label">About</p>
          <h1 className="mt-4 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight text-ink">
            Physical systems, built to be manufactured
          </h1>
        </Reveal>
      </header>

      <div className="grid gap-12 border-t border-line py-14 md:py-16 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-10 lg:col-span-7">
          <Reveal>
            <AboutBlock label="Now" text={site.about.now} />
          </Reveal>
          <Reveal>
            <AboutBlock label="What I work on" text={site.about.interests} />
          </Reveal>
          <Reveal>
            <AboutBlock label="How I work" text={site.about.approach} />
          </Reveal>
          <Reveal>
            <AboutBlock label="Teams" text={site.about.teams} />
          </Reveal>

          <Reveal>
            <div className="border-t border-line pt-8">
              <p className="text-sm leading-relaxed text-ink-soft">
                The work itself is the best introduction — every project on this site is written as
                a full case study. For everything else:{' '}
                <a href={`mailto:${site.email}`} className="u-link font-medium text-accent">
                  {site.email}
                </a>{' '}
                or{' '}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link font-medium text-accent"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>

        {/* Portrait / workshop image slot */}
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <figure>
              {/*
                Drop a real photo at public/images/portrait.webp and replace
                this placeholder frame with:
                <img src={`${import.meta.env.BASE_URL}images/portrait.webp`}
                     alt="Nicholas Lee in the shop" ... />
              */}
              <div
                className="flex aspect-[4/5] w-full items-center justify-center border border-line bg-surface"
                role="img"
                aria-label="Placeholder frame for a photograph"
              >
                <p className="px-8 text-center text-sm text-ink-faint">
                  <RichText text="[Add a professional photo or workshop image]" />
                </p>
              </div>
              <figcaption className="meta-label mt-3">
                Waterloo, ON · currently Cambridge, MA
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

function AboutBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h2 className="meta-label">{label}</h2>
      <p className="mt-3 max-w-[62ch] leading-relaxed text-ink-soft">{text}</p>
    </div>
  )
}
