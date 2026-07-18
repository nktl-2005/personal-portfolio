# Nicholas Lee — Engineering Portfolio

A minimal, case-study-driven engineering portfolio. **React 19 + TypeScript + Vite 7 + Tailwind CSS v4**, deployed to **GitHub Pages** with real per-project routes (`/projects/<slug>/`).

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
- **Projects**: [src/data/projects.ts](src/data/projects.ts) — one object per project, following the structure in [src/data/types.ts](src/data/types.ts): metadata (year, role, team, duration, tools) plus a short **Why → What → How** body (`why` string; `what` = a lead paragraph + a `build` list of concrete evidence; `how` = a list of challenge/decision/tradeoff blocks).
- **Placeholders**: text in `[square brackets]` (e.g. `[Add measured result]`) renders as a visibly-unfinished chip. Replace placeholders with real information as it becomes available — never invent details.

## Adding a new project

1. Add an entry to the `projects` array in `src/data/projects.ts` (copy an existing object as a template). The `slug` becomes the URL: `/projects/<slug>/`.
2. Pick a `figure` (built-in illustration) or provide a real `image` (see below).
3. Set `featured: true` if it should appear in "Selected work" on the home page.
4. Add the new URL to [public/sitemap.xml](public/sitemap.xml).

Category filters on the Projects page appear automatically for any category with at least two projects.

## Adding photos

All images live in [public/images/](public/images/) — see the README there for
the exact filenames each slot expects. The rule everywhere: **a slot shows a
dashed placeholder with its target path until you add that file, then the image
appears automatically** on the next deploy (no code change needed).

Three kinds of image slot:

1. **Project galleries** — each project detail page has a 4-image "Gallery"
   section. Add files like `public/images/solar-car-ballast-box-1.webp`. To
   change what a slot expects, edit the `gallery` array on that project in
   [src/data/projects.ts](src/data/projects.ts) (`src`, `alt`, optional `caption`).
2. **About photo** — add `public/images/portrait.webp`.
3. **Project hero image** (optional) — to replace a project's built-in line
   illustration at the top of its page, set `image: 'images/ballast.webp'` and
   `imageAlt` on that project. This also replaces the illustration in the
   project cards.

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
