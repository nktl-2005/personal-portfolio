# Nicholas Lee — Engineering Portfolio

A personal engineering portfolio built with **React + TypeScript + Tailwind CSS v4 + Vite**, deployable to **GitHub Pages**. Single-page layout with anchor navigation (GitHub Pages-safe — no client-side router needed).

## Quick Start

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

> The site is served under the repository base path (see below), so the dev
> server opens at `http://localhost:5173/personal-portfolio/`.

## Editing Content

All copy lives in `src/data/` — no component changes needed for routine updates:

| File | Contains |
| --- | --- |
| `src/data/profile.ts` | Name, tagline, bio, education, links, availability, nav sections |
| `src/data/projects.ts` | Featured project cards (problem / approach / impact / tools / links) |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/skills.ts` | Skill groups and chips |
| `src/data/research.ts` | Lab affiliation, interests, methods, publications |

Other assets:

- **Resume PDF**: replace `public/Nicholas_Lee_Resume.pdf` (keep the filename, or update `resumeFile` in `profile.ts`).
- **Headshot**: drop an image in `public/` and swap the placeholder block in `src/components/Hero.tsx` (a commented `<img>` snippet is provided there).
- **Links**: the GitHub/LinkedIn URLs in `profile.ts` and the per-project links in `projects.ts` are placeholders (`#`) — replace them with real URLs.

## Deploying to GitHub Pages

### 0. One-time setup

1. Create a GitHub repository (e.g. `personal-portfolio`).
2. If you pick a different repo name, update `base` in [vite.config.ts](vite.config.ts) to `"/<your-repo-name>/"`.

### Option A — GitHub Actions (recommended)

1. Push this project to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. The included workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and deploys on every push to `main`.

Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option B — gh-pages branch

```bash
npm run deploy    # builds, then pushes dist/ to a gh-pages branch
```

Then in the repo: **Settings → Pages → Source → Deploy from a branch → `gh-pages`**.

## Project Structure

```
src/
├── data/          # All editable content (typed)
├── hooks/         # useActiveSection (nav scroll-spy)
├── components/    # Navbar, Hero, About, Projects, Research,
│                  # Skills, Experience, Resume, Contact, Footer
│                  # + shared: Section, Reveal, Tag, ProjectCard
├── App.tsx
├── main.tsx
└── index.css      # Tailwind v4 theme + global styles
```

## Tech Notes

- **Tailwind CSS v4** via `@tailwindcss/vite` — theme configured in `src/index.css` (no `tailwind.config.js`).
- **Animations**: `Reveal` component uses `IntersectionObserver` for fade-up on scroll and respects `prefers-reduced-motion`.
- **Assets**: referenced via `import.meta.env.BASE_URL` so they resolve correctly under the GitHub Pages base path.
- **Contact form**: no backend — it composes a `mailto:` draft in the visitor's email client.
