# Images

Drop your photos, CAD renders, plots, and diagrams here. Anything in this
folder is served at `/<filename>` on the live site.

**How it works:** every image slot on the site already points at a filename
below. Until the file exists, the slot shows a dashed placeholder with the
exact path to add. The moment you add the file (same name) and redeploy, the
image appears — no code change needed.

## Format tips

- Use **WebP** (best) or **JPG**. Aim for ~1600 px on the long edge.
- Keep filenames **exactly** as listed below (lowercase, no spaces).
- Landscape (4:3) works best for project galleries; portrait (4:5) for the About photo.

## Filenames the site is looking for

**About page portrait**
- `portrait.webp`

**Project galleries** (4 per project — add any or all):
- `electronic-nose-cfd-1.webp` … `-4.webp`
- `solar-car-ballast-box-1.webp` … `-4.webp`
- `vehicle-fixtures-1.webp` … `-4.webp`
- `desktop-injection-molder-1.webp` … `-4.webp`
- `educational-gearboxes-1.webp` … `-4.webp`
- `pneumatic-piston-assembly-1.webp` … `-4.webp`
- `arduino-robocar-1.webp` … `-4.webp`

## Want to change what a slot expects?

Edit `src/data/projects.ts` — each project has a `gallery` array. Change a
slot's `src` to any filename you like, tweak its `alt` (description), or add a
`caption`. To use a real image as the big hero at the top of a project page
instead of the built-in illustration, set `image` and `imageAlt` on that
project (see the main README).
