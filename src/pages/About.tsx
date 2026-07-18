import { site } from '../data/site'
import ImageSlot from '../components/ImageSlot'
import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import { usePageMeta } from '../lib/usePageMeta'

export default function About() {
  usePageMeta(
    'About',
    'Beyond the projects — the activities, teams, and interests of Nicholas Lee outside of engineering at the University of Waterloo.',
  )

  return (
    <div className="mx-auto max-w-[1160px] px-6">
      <header className="py-14 md:py-20">
        <Reveal>
          <p className="meta-label">About</p>
          <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight text-ink">
            Beyond the projects
          </h1>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-ink-soft">
            {site.about.blurb}
          </p>
        </Reveal>
      </header>

      <div className="grid gap-12 border-t border-line py-14 md:py-16 lg:grid-cols-12 lg:gap-16">
        {/* Life outside engineering — condensed, category by category */}
        <div className="lg:col-span-7">
          <dl className="divide-y divide-line border-y border-line">
            {site.about.life.map((group, i) => (
              <Reveal
                key={group.label}
                delay={i * 60}
                className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <dt className="font-display font-semibold tracking-tight text-ink">
                  {group.label}
                </dt>
                <dd>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <p className="mt-8 text-sm leading-relaxed text-ink-faint">
              Say hi:{' '}
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
          </Reveal>
        </div>

        {/* Portrait / candid photo slot — drop the file at public/images/portrait.webp */}
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <ImageSlot
              src="images/portrait.webp"
              alt="a candid or portrait photo"
              aspect="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </div>
    </div>
  )
}
