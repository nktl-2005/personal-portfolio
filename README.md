# Nicholas Lee — Engineering Portfolio

An engineering portfolio. **React 19 + TypeScript + Vite 7 + Tailwind CSS v4**, deployed to **GitHub Pages** with real per-project routes (`/projects/<slug>/`).

Live: **https://nktl-2005.github.io/personal-portfolio/**

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:5173/personal-portfolio/
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
├── data/
│   ├── site.ts          # Name, descriptor, intro, about copy, contact links
│   ├── projects.ts      # ALL project case studies (the main content file)
│   └── types.ts         # Typed shape of a project case study
├── pages/               # Home, Projects (index), ProjectDetail, About, NotFound
├── components/          # Nav, Footer, ProjectPreview, ProjectFigure (built-in
│                        # illustrations), HeroScene, TiltFrame, Reveal, RichText,
│                        # CaseSection, SpecTable
├── lib/                 # usePageMeta (SEO), motion (reduced-motion/pointer hooks)
└── index.css            # Design tokens + global styles (Tailwind v4 theme)
public/
├── 404.html             # GitHub Pages SPA redirect (deep links + refresh)
├── sitemap.xml          # Update when adding/removing projects
└── favicon.svg
```

## Editing content

- **Site copy** (hero, about, links): [src/data/site.ts](src/data/site.ts)
- **Projects**: `src/data/projects.ts` — one object per project, following the
  structure in `src/data/types.ts`.

Each project page follows the [MIT MechE Comm Lab portfolio
guide](https://mitcommlab.mit.edu/meche/commkit/portfolio/): an inverted
pyramid that front-loads what matters, because a reviewer gives each page
30-60 seconds.

| Field | Section | What goes in it |
| --- | --- | --- |
| `title` | page heading | Impactful — convey meaning, not a course code |
| `summary` | line under the title, and the cards | One sentence |
| `outcome` | **01 Outcome** | What it is, how it performed, what it means. 1-2 short paragraphs — this is the part that actually gets read |
| `skills` | **02 What I did** | Bullets led by strong verbs (designed, machined, analyzed) |
| `motivation` | **03 Why this project** | The objective, why it matters, the constraints. Keep it short |
| `details` | **04 Technical details** | Renders **collapsed**. Everything a curious reader might want — put the depth here, not above |

`outcome` and `motivation` take a string or an array of strings (one per
paragraph). `outcomeMedia`, `motivationMedia`, and each `details` block's
`media` attach figures to the section they illustrate.

**Rule of thumb:** if sections 01-03 run past ~500 words, move something into
`details`.

## Adding a new project

1. Add an entry to the `projects` array in `src/data/projects.ts` (copy an existing object as a template). The `slug` becomes the URL: `/projects/<slug>/`.
2. Pick a `figure` (built-in illustration) or provide a real `image` — a photo,
   a render, or an `.mp4` that plays silently on loop (set `imagePoster` too,
   since cards and reduced-motion visitors use the still).
3. Set `featured: true` if it should appear in "Selected work" on the home page.
4. Add the new URL to [public/sitemap.xml](public/sitemap.xml).

Category filters on the Projects page appear automatically for any category with at least two projects.

## Adding photos

All images live in [public/images/](public/images/) — see the README there for
the exact filenames each slot expects. The rule everywhere: **a slot shows a
dashed placeholder with its target path until you add that file, then the image
appears automatically** on the next deploy (no code change needed).

Four kinds of image slot:

1. **Inline section figures (preferred)** — attach photos with captions directly
   to the section they illustrate, so readers see evidence next to the text
   (see the pneumatic piston project for the pattern). Add a `media` array to a
   `how` block, to `what`, or to `results` in
   [src/data/projects.ts](src/data/projects.ts):
   `media: [{ src: 'images/…png', alt: '…', caption: 'One-line takeaway.', fit: 'contain' }]`
   — one item renders full width, two render side by side; `fit: 'contain'` is
   for tall renders that would otherwise crop.
2. **Project galleries** — a "Gallery" section at the bottom of a project page,
   from that project's `gallery` array. Good overflow for extra shots that
   don't belong to a specific section.
3. **About photo** — add `public/images/portrait.jpg`.
4. **Project hero image** — to replace a project's built-in line illustration
   at the top of its page, set `image: 'images/….png'` and `imageAlt` on that
   project. This also replaces the illustration in the project cards.

Caption tip (from the MIT MechE portfolio guide): write captions as one-line
takeaways that say what the reader should notice — "Redesigned plate — slotted
holes mate to the existing bracket arm" — not just what the object is.

Export as **WebP** (or JPG) around 1600 px wide; keep filenames lowercase with
no spaces.

## Deploying to GitHub Pages

Deployment is automatic: pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages (repo **Settings → Pages → Source: GitHub Actions**).

```bash
git add -A
git commit -m "Update projects"
git push
```

Manual alternative: `npm run deploy` (publishes `dist/` to a `gh-pages` branch).

**Routing note:** the site uses real paths (not hash routing). `public/404.html` + the small script in `index.html` implement the standard GitHub Pages SPA redirect, so direct navigation and refresh work on `/projects/<slug>/`. If you rename the repository, update `base` in [vite.config.ts](vite.config.ts), `site.url` in `src/data/site.ts`, and `sitemap.xml`.
