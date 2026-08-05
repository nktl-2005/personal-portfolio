# Images

Drop your photos, CAD renders, plots, and diagrams here. Anything in this
folder is served at `/<filename>` on the live site.

**How it works:** every image slot on the site already points at a filename
below. Until the file exists, the slot shows a dashed placeholder with the
exact path to add. The moment you add the file (same name) and redeploy, the
image appears — no code change needed.

## Format tips

- Use **WebP** (best) or **JPG**. Aim for ~1600 px on the long edge.
- **Animations:** name the file `.mp4` and a slot renders it as a silent,
  looping video instead of an image. Add a matching `-poster.jpg` still and set
  `poster:` on the slot — it covers the load and is shown instead of the video
  for visitors who prefer reduced motion. Encode with
  `ffmpeg -i in.gif -vf "fps=15,scale=820:-2" -c:v libx264 -crf 26 -pix_fmt yuv420p out.mp4`.
- Keep filenames **exactly** as listed below (lowercase, no spaces).
- Landscape (4:3) works best for project galleries; portrait (4:5) for the About photo.

## Filenames the site is looking for

**About page portrait**
- `portrait.webp`

**Electronic nose CFD** (all present — figures live inline with their sections,
so each one is referenced by name in `projects.ts`):
- `enose-hero.png` — page hero (the real-data place map)
- `enose-u-channel-geometry.png`, `enose-arc-parameterisation.png` — geometry setup
- `enose-comsol-parameters.png`, `enose-u-channel-probe.png` — model setup
- `enose-reynolds-vs-theta.png`, `enose-vorticity-vs-theta.png` — Study 1 flow
- `enose-concentration-vs-time.png`, `enose-auc-vs-theta.png` — Study 1 detection
- `enose-conc-range-vs-pi.png`, `enose-auc-vs-pi.png` — Study 2 velocity
- `enose-place-map.png` — Study 3 selectivity
- `enose-ct-segmentation.png` — Study 4 bio-inspired
- `enose-transport-theta20.mp4`, `enose-transport-theta180.mp4`,
  `enose-velocity-pi-compare.mp4`, `enose-transport-methane-decane.mp4`
  (each with a matching `-poster.jpg`)

**Project galleries** (4 per project — add any or all):
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
