// ---------------------------------------------------------------------------
// Project case studies — every project page, preview, and filter is generated
// from this file. See README.md ("Adding a new project") for the workflow.
//
// Each project follows a short Why / What / How structure:
//   why   — the problem, who it affects, and why it is worth solving
//   what  — what was built (a short lead + a list of concrete evidence)
//   how   — the main engineering challenges, decisions, and tradeoffs
//
// Ground rules for editing:
//   - Text in [square brackets] renders as a visible "replace me" placeholder.
//     Fill placeholders with real information; never leave invented details.
//   - `figure` picks one of the built-in line illustrations (see
//     components/ProjectFigure.tsx). To use a real photo or CAD render
//     instead, drop the file in /public/images and set `image` (+ imageAlt).
//   - `featured: true` puts the project in "Selected work" on the home page.
//   - Filters on the Projects page are derived automatically from categories
//     with at least two projects.
// ---------------------------------------------------------------------------

import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'electronic-nose-cfd',
    title: 'Separating Odors by Sensor Position, Not Sensor Chemistry',
    summary:
      'Parametric CFD across 19 channel geometries, 6 flow speeds, and 10 hydrocarbons, testing whether the shape of a channel can do part of a chemical sensor’s job.',
    category: 'Simulation & Analysis',
    year: '2026',
    featured: true,
    outcome:
      'Bend angle moves the flow strongly and the sensor signal by only ~4%, ruling out shape as a sensitivity lever — but the lightest alkanes peak at measurably different positions along the channel, pointing at sensor placement rather than sensor chemistry.',
    role: 'Research Intern — computational subgroup',
    team: 'Aizenberg Lab, Harvard University (Cambridge, MA)',
    duration: 'May 2026 – Present',
    tools: [
      'COMSOL Multiphysics',
      'Python (Pandas, NumPy, Matplotlib)',
      'CFD (k-ε turbulence)',
      'Dilute-species mass transport',
      'ITK-SNAP',
      'FDM 3D printing',
    ],
    figure: 'enose',
    image: 'images/enose-hero.png',
    imageAlt:
      'Signal linger time along the channel centreline for methane through decane, and the resulting place map of peak position against carbon number',
    sectionTitles: {
      why: 'Problem',
      what: 'Approach',
      whatList: 'What I built',
      how: 'Studies',
    },
    why: 'The Aizenberg Lab is developing a universal adaptive electronic nose — a sensor system meant to identify odors across changing conditions. Almost every electronic nose gets its selectivity from chemistry: to detect one more compound, add one more sensor tuned to it. That does not scale, and it is not how a biological nose works. In an animal nose the air is routed through a cavity whose bony turbinate structures govern how long odorant molecules linger near the olfactory receptors, so the anatomy is doing part of the sensing. My project asked whether that principle transfers to hardware: can the shape of the channel in front of a sensor do enough of the work that the same sensor array distinguishes more compounds? Airflow and odorant concentration inside a nasal cavity cannot practically be measured in place, which makes this a simulation problem first.',
    what: {
      lead:
        'I built a parametric CFD study in COMSOL that treats channel shape as the independent variable and the sensor signal as the output, together with a Python pipeline that reduces every transient run to the same set of comparable metrics. Rather than simulate one realistic nose, I stripped the geometry down to a single U-shaped channel with one free parameter — the bend angle θ — so that any change in the signal could be attributed to shape alone. Three sweeps build on each other, and a fourth study is now moving the same workflow onto CT-scanned animal airways.',
      build: [
        'Parametric 2D U-channel in COMSOL — bend angle θ swept 0°–180° in 10° increments with channel width, arc length, and total flow path held constant',
        'Coupled k-ε RANS flow and dilute-species transport, driven by a transient inhale–hold–exhale sniff cycle rather than a steady flow',
        'Three parametric sweeps: bend angle (19 geometries), inlet velocity (6 speeds × 19 geometries), and analyte (10 alkanes, methane → decane, initial results)',
        'Flow metrics (peak Reynolds number, peak vorticity magnitude) and detection metrics (peak concentration, concentration AUC, residence time τ₁₀%, signal linger time) extracted at a fixed sensor probe',
        'Python post-processing (Pandas, NumPy, Matplotlib) that turns raw COMSOL transient exports into metric tables and comparison plots for every study automatically',
        'A 100-point centreline probe array and place-map analysis locating where along the channel each compound peaks',
        'CT-scanned animal skulls segmented in ITK-SNAP and cleaned into printable STL airway models for benchtop validation',
      ],
    },
    how: [
      {
        title: 'Reducing a nose to one parameter',
        body: 'A real nasal cavity has too many coupled features to attribute an effect to any one of them. I collapsed it to a U-shaped channel described by two straight legs (L₁, L₂) joined by an arc (S), with bend angle θ as the only free variable — the arc radius is derived from θ so that arc length, channel width, and total flow path stay constant as the bend opens and closes. Overall dimensions were scaled to a human nasal cavity: 15 mm wide, 100 mm total flow length, 45 mm out-of-plane. The cost of that simplification is realism, since a smooth 2D bend has none of the turbinate structure that makes a real nose interesting. What it buys is a clean causal claim: if the signal changes, θ is the only thing that changed.',
        media: [
          {
            src: 'images/enose-u-channel-geometry.png',
            alt: 'The U-channel at bend angles of 0, 90 and 180 degrees with the sensor probe marked',
            caption: 'Bend angle θ is the only variable — legs, width, and total flow path are held constant while the channel opens from straight (0°) to a full U (180°). The sensor probe sits at the same point on the arc in every geometry.',
            fit: 'contain',
          },
          {
            src: 'images/enose-arc-parameterisation.png',
            alt: 'Sketch deriving the arc radius from the bend angle and arc length',
            caption: 'Deriving arc radius from θ — this is what holds arc length constant, so the sweep isolates shape rather than path length.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Simulating a sniff, not a steady flow',
        body: [
          'Detection is a transient event, so a steady-state solve would have answered the wrong question. I drove the model with a stacked breathing cycle: 2 s inhale with flow and analyte on, 4 s hold with the flow off so the plume diffuses, repeated for three cycles to build signal cycle over cycle, then a 15 s clean flush with air only to simulate the exhale. That cycle is what makes recovery-time metrics meaningful at all.',
          'I used a k-ε RANS closure rather than k-ω to keep run times manageable across a sweep this size, accepting weaker near-wall resolution as the tradeoff — peak Reynolds numbers here stay around 17–21, so the flow itself is firmly laminar. The walls are semi-permeable (mass-transfer coefficient 1×10⁻¹⁰ m/s) so analyte can be absorbed the way an olfactory epithelium would rather than perfectly reflected. The sensor is modelled as an ideal point probe, which means these results describe what reaches the sensor, not what a real transducer would report.',
        ],
        media: [
          {
            src: 'images/enose-comsol-parameters.png',
            alt: 'COMSOL parameter table listing channel dimensions, bend angle, inlet velocity and analyte properties',
            caption: 'Every geometric and physical quantity is a named COMSOL parameter, so a sweep is a parameter list rather than 19 hand-built models.',
            fit: 'contain',
          },
          {
            src: 'images/enose-u-channel-probe.png',
            alt: 'Annotated U-channel showing inlet, outlet, bend angle and the fixed sensor probe location',
            caption: 'Inlet, outlet, and a fixed probe on the arc — the same physical sensor location in every geometry, so the comparison is like for like.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Study 1 — bend angle strongly changes the flow',
        body: 'Sweeping θ from 0° to 180° produced a clean, near-linear rise in both flow metrics: peak Reynolds number went from 17.1 to 20.8 (0.023 per degree, R² = 0.97) and peak vorticity magnitude from essentially zero to 1.4 s⁻¹ (0.0081 s⁻¹ per degree, R² = 0.98). Sharper bends drive stronger swirl, exactly as expected. If mixing near the sensor were what governed detection, this is where an improvement in signal should have come from.',
        media: [
          {
            src: 'images/enose-transport-theta20.mp4',
            poster: 'images/enose-transport-theta20-poster.jpg',
            alt: 'Simulated methane transport through a near-straight channel over one sniff cycle',
            caption: 'θ = 20°, near-straight — methane transport through the sniff cycle.',
            fit: 'contain',
          },
          {
            src: 'images/enose-transport-theta180.mp4',
            poster: 'images/enose-transport-theta180-poster.jpg',
            alt: 'Simulated methane transport through a full U-bend over one sniff cycle',
            caption: 'θ = 180°, full U — same physics and same inlet condition; only the bend differs.',
            fit: 'contain',
          },
          {
            src: 'images/enose-reynolds-vs-theta.png',
            alt: 'Plot of peak Reynolds number against bend angle with a linear fit',
            caption: 'Peak Reynolds number rises near-linearly with bend angle (R² = 0.97).',
            fit: 'contain',
          },
          {
            src: 'images/enose-vorticity-vs-theta.png',
            alt: 'Plot of peak vorticity magnitude against bend angle with a linear fit',
            caption: 'Peak vorticity follows the same trend (R² = 0.98) — sharper bends, stronger swirl.',
            fit: 'contain',
          },
        ],
      },
      {
        title: '…but the sensor barely notices',
        body: 'The detection metrics did not follow. Concentration-versus-time traces for all 19 geometries lie almost on top of one another, and total analyte exposure (concentration AUC) varies by roughly 4% across the entire sweep with no meaningful trend (R² = 0.34). Peak signal and residence time are equally flat. So a swing that more than doubles the swirl at the sensor buys about 4% in what the sensor actually sees — "more mixing" is not a design lever for sensitivity in this regime. That negative result was the most useful thing the sweep produced, and it redirected the project: if geometry cannot make a signal bigger, the question becomes whether it can make signals distinguishable.',
        media: [
          {
            src: 'images/enose-concentration-vs-time.png',
            alt: 'Concentration at the sensor probe over time for all bend angles, overlapping almost exactly',
            caption: 'Nineteen bend angles, nearly overlapping — essentially the same amount of methane reaches the probe regardless of shape. The three steps are the stacked sniff cycles; the drop after 18 s is the flush.',
            fit: 'contain',
          },
          {
            src: 'images/enose-auc-vs-theta.png',
            alt: 'Plot of concentration area under the curve against bend angle, showing a flat trend',
            caption: 'Total exposure is flat within ~4% across the full sweep (R² = 0.34).',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Study 2 — does sniffing harder change the answer?',
        body: [
          'A single inlet velocity is a single operating point, so I repeated all 19 geometries at six inlet speeds from 2.5 to 15 cm/s and collapsed the sweep onto a dimensionless group Π = U_in·T_sniff / L — the number of channel lengths flushed per sniff, and the reciprocal of the Strouhal number. Π < 1 means the channel cannot clear itself within one sniff; Π > 1 means it more than clears.',
          'Velocity amplified geometry’s effect on the flow, as expected. On detection it did the opposite: the spread in peak concentration across all bend angles fell from 1.67 µmol/m³ at Π = 0.5 to 0.32 at Π = 3.0 — a downward trend, though not a monotonic one across only six points. Sniffing faster flushes the whole channel within a single cycle, so the bend has less chance to matter. Whatever influence geometry has on the signal is therefore largest at low Π, which implies a geometry-based nose would need to sniff slowly.',
        ],
        media: [
          {
            src: 'images/enose-velocity-pi-compare.mp4',
            poster: 'images/enose-velocity-pi-compare-poster.jpg',
            alt: 'Side-by-side simulated transport at low and high dimensionless number',
            caption: 'Π = 0.5 against Π = 3 in the same geometry — at high Π the channel is flushed within one sniff.',
            fit: 'contain',
          },
          {
            src: 'images/enose-conc-range-vs-pi.png',
            alt: 'Plot of peak-concentration spread across bend angles against the dimensionless number',
            caption: 'The spread in peak concentration across all bend angles trends down as Π rises: faster flow leaves less room for geometry to influence the signal.',
            fit: 'contain',
          },
          {
            src: 'images/enose-auc-vs-pi.png',
            alt: 'Plot of concentration AUC against the dimensionless number with the bend-angle range shaded',
            caption: 'Total exposure climbs steeply with Π and begins to saturate above Π ≈ 2. The shaded band is the full 0–180° bend-angle range — thin at every speed, which is the same story as Study 1 seen from another angle.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Study 3 — from one compound to ten',
        body: [
          'If geometry cannot amplify a signal, it may still sort one. Molecular weight rises down the alkane series while diffusivity and vapour pressure fall, so I simulated the full C₁–C₁₀ set — methane through decane, an 8.9× range in molecular weight and about four orders of magnitude in vapour pressure — under one geometry and one low inlet speed (2.5 cm/s), with a longer sniff than the earlier studies used (4 s inhale, 4 s hold, 10 s exhale).',
          'Instead of one sensor I sampled 100 probe points along the channel centreline, computed a detection metric at every point, and located x*, the position where that metric is largest, for each compound. Plotting x* against carbon number produces a place map — the same trick the cochlea uses to encode pitch by position rather than by growing a separately tuned receptor for every frequency. Using signal linger time (the time the signal stays above 50% of its local peak), methane peaks at x*/L = 0.38 and decane at 0.28.',
        ],
        media: [
          {
            src: 'images/enose-transport-methane-decane.mp4',
            poster: 'images/enose-transport-methane-decane-poster.jpg',
            alt: 'Side-by-side simulated transport of methane and decane through the same channel',
            caption: 'Methane and decane through identical geometry — the heavier compound does not travel the same way.',
            fit: 'contain',
          },
          {
            src: 'images/enose-place-map.png',
            alt: 'Signal linger time along the centreline for each alkane, and peak position against carbon number, at 180 degrees',
            caption: 'Signal linger time along the centreline at θ = 180°. Peak position shifts from x*/L = 0.38 for methane to 0.28 for decane.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Reading the place map honestly',
        body: [
          'Two checks decide how much this result is worth. The first is whether the bend produces it: running the same analysis at θ = 0° gives x*(C1) = 0.37 and x*(C10) = 0.28, against 0.38 and 0.28 at θ = 180°. The separation is essentially unchanged by a full U-bend, so it comes from the compounds’ own transport properties rather than from channel shape — position encodes identity, but bend angle is not the knob that sets it.',
          'The second is where the separation lives. The map is steep across the light end and then saturates: C1 through roughly C3 occupy distinguishable positions, while C4–C10 all sit inside a band about 0.03 x*/L wide. And it is metric-dependent — repeating the analysis with concentration AUC instead of linger time returns a flat map at x*/L = 0.10 for all ten compounds. The usable claim is narrower than "ten compounds, ten positions": one detection metric separates the first few alkanes by position, which is enough to justify testing probe placement and real anatomy, and not enough to claim a working discrimination scheme.',
        ],
        media: [
          {
            src: 'images/enose-place-map-theta0.png',
            alt: 'The same place map computed at a bend angle of zero degrees, nearly identical to the 180 degree case',
            caption: 'Same analysis at θ = 0°: x*(C1) = 0.37, x*(C10) = 0.28 — a full U-bend barely moves it, so the separation is not geometry-driven.',
            fit: 'contain',
          },
          {
            src: 'images/enose-place-map-auc.png',
            alt: 'Place map computed with concentration AUC, flat at 0.10 for every compound',
            caption: 'Swap linger time for concentration AUC and the map goes flat at x*/L = 0.10 for all ten compounds — the effect depends on which metric the sensor reports.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Study 4 — taking the workflow to real anatomy (in progress)',
        body: 'The smooth U-channel is a deliberate abstraction; real nasal cavities are dense with turbinate structure that should produce far stronger separation. I have been segmenting CT-scanned animal skulls in ITK-SNAP to extract the airway volume, cleaning the resulting meshes into watertight STLs, and 3D printing them as physical test geometries for benchtop validation of the simulated results. The metrics carry over unchanged, so artificial and biological geometries can be compared directly.',
        media: [
          {
            src: 'images/enose-ct-segmentation.png',
            alt: 'Rat skull CT scan in ITK-SNAP with the nasal airway volume segmented in red',
            caption: 'Rat skull CT segmented in ITK-SNAP — the red volume is the extracted nasal airway, which becomes both the CFD domain and the printed test part.',
            fit: 'contain',
          },
        ],
      },
    ],
    results: {
      delivered: [
        'Parametric COMSOL model of the U-channel coupling flow and species transport under a transient sniff cycle',
        'Two completed parametric sweeps (bend angle, inlet velocity) and initial results from a third (10-compound analyte sweep)',
        'Python post-processing pipeline that reduces raw transient exports to flow and detection metrics and regenerates every plot on demand',
        'Place-map analysis over a 100-point centreline probe array, cross-checked at two bend angles and two detection metrics',
        'Segmented CT airway geometries and 3D-printed test parts for benchtop validation',
        'Results presented to the Aizenberg Lab computational subgroup (July 2026)',
      ],
      body: [
        'The sensitivity studies returned a clear negative. Doubling the swirl at the sensor by bending the channel from straight to a full U changes total analyte exposure by about 4%, and sniffing faster suppresses even that. "Shape the flow to boost the signal" is closed off as a design direction — worth establishing before anyone builds hardware around it.',
        'The selectivity study is the more promising thread, with a narrower claim than it first appears. Position along the channel does encode compound identity: methane’s signal-linger-time peak sits at x*/L = 0.38 and decane’s at 0.28. But the separation is nearly identical at θ = 0° and θ = 180°, so it comes from the compounds’ transport properties rather than from the bend; it saturates after about C3; and it does not appear at all in the concentration-AUC metric. What that supports is a direction — discriminate by where the sensor sits rather than what it is made of — not a working scheme.',
        'The work is ongoing. Next steps are extending the place-map analysis across probe locations and detection metrics, running CFD on the segmented animal airways, and comparing artificial against biological geometries on the same metrics — real turbinate structure is where a geometry-driven effect, if there is one, should actually show up.',
      ],
    },
  },
  {
    slug: 'solar-car-ballast-box',
    title: 'Midnight Sun Solar Car Ballast Box',
    summary:
      'Aluminum sheet-metal ballast box for Midnight Sun Solar Car Team (MS16), FEA-optimized to cut 20% of its weight while meeting various load cases.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    outcome:
      'Static FEA-driven optimization cut enclosure weight 20% with structural integrity intact; the assembly is manufactured and entering the chassis.',
    role: 'Mechanical Designer',
    team: 'Midnight Sun Solar Car Team, University of Waterloo',
    duration: 'Sept 2025 – Present',
    tools: [
      'SolidWorks (sheet metal)',
      'Static FEA',
      'DFM/DFA principles',
      'Aluminum sheet-metal construction',
    ],
    figure: 'ballast',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/solar-car-ballast-box-1.webp', alt: 'SolidWorks model of the enclosure' },
      { src: 'images/solar-car-ballast-box-2.webp', alt: 'Static FEA stress result' },
      { src: 'images/solar-car-ballast-box-3.webp', alt: 'Manufactured sheet-metal assembly' },
      { src: 'images/solar-car-ballast-box-4.webp', alt: 'Chassis integration or mounting' },
    ],
    why: "Midnight Sun's competition solar car must carry a minimum of 20 kg of steel-shot ballast, held secure and structurally intact through every driving load case — including emergency-braking impact. The ballast is mandated mass, but the enclosure around it is pure overhead, so its weight was worth driving down without compromising retention under those loads.",
    what: {
      lead: 'I designed the ballast box as an aluminum sheet-metal enclosure in SolidWorks to DFM/DFA principles and optimized its geometry with static FEA. The final design is 20% lighter with structural integrity maintained; it has passed manufacturing validation, a physical assembly has been built, and it is being integrated into the chassis.',
      build: [
        'Aluminum sheet-metal enclosure — SolidWorks sheet-metal design, geometry FEA-optimized [Add alloy, gauge, bend details]',
        'Ballast payload — minimum 20 kg of steel shot',
        'Static FEA model run under driving load cases incl. emergency-braking impact',
        'Manufactured physical assembly (chassis integration in progress)',
        '[Add closure / shot-retention method and chassis mounting interface]',
      ],
    },
    how: [
      {
        title: 'Strength vs. weight, resolved with FEA',
        body: 'Emergency-braking loads on 20+ kg of steel shot demand stiffness, while the enclosure’s own mass is overhead worth minimizing. Rather than conservatively over-build, I iterated the geometry against static FEA — material stayed on the load paths and came out where analysis showed margin — converging on a 20% weight reduction with integrity maintained. [Add load-case magnitudes and resulting factor of safety.]',
      },
      {
        title: 'Sheet metal as the construction method',
        body: 'Aluminum sheet metal gave a closed enclosure for loose steel shot and a part the team could actually fabricate, with DFM/DFA applied from the first feature. The tradeoff is that every FEA-driven geometry change had to stay formable and assemblable rather than arbitrary — which is also why the optimized design still passed manufacturing validation.',
      },
      {
        title: 'A dynamic event in a static study',
        body: 'The emergency-braking impact is a dynamic load represented within a static analysis. [Add how the impact was represented as a static load case, and the physical verification planned to close the loop once the box is mounted in the chassis.]',
      },
    ],
  },
  {
    slug: 'vehicle-fixtures',
    title: 'Rapid-Turnaround Solar Car Assembly Fixtures',
    summary:
      'Two solar car assembly fixtures: datum-referenced wheel-cover stencils and FDM press-fit camera mounts with hours, not weeks, of lead time.',
    category: 'Mechanical Design',
    year: '2025',
    featured: false,
    outcome:
      'Stencils referenced to vehicle datums cut wheel-cover installation errors; FDM press-fit mounts cut camera-mount lead time from weeks to hours.',
    role: 'Mechanical Designer',
    team: 'Midnight Sun Solar Car Team',
    duration: 'Sept 2025 – Present',
    tools: [
      'CAD modeling ([Add software])',
      'FDM 3D printing',
      'Press-fit design',
      'Datum-referenced fixturing',
      'Rapid prototyping',
    ],
    figure: 'fixtures',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/vehicle-fixtures-1.webp', alt: 'Wheel-cover cutting stencil (CAD)' },
      { src: 'images/vehicle-fixtures-2.webp', alt: 'Stencil registered on the vehicle' },
      { src: 'images/vehicle-fixtures-3.webp', alt: 'Press-fit camera mount (CAD)' },
      { src: 'images/vehicle-fixtures-4.webp', alt: 'Printed mount installed' },
    ],
    why: 'Solar car assembly was losing time to two small parts. Wheel covers went on with recurring alignment and installation errors, and camera mounts carried lead times of weeks. Both are cheap parts — the cost was in the process around them: rework from misaligned covers, and vehicle integration stalled waiting on mounts.',
    what: {
      lead: "I treated both as fixture problems built for fast turnaround. I modeled wheel-cover cutting stencils referenced to the vehicle's datum features, and designed a press-fit camera mount system for FDM 3D printing. Installation accuracy improved and camera-mount lead time dropped from weeks to hours.",
      build: [
        'Wheel-cover cutting stencils modeled off vehicle datum features',
        'Press-fit camera mount system designed for FDM 3D printing',
        'FDM prototype series used to converge the press-fit dimensions',
        '[Add stencil fabrication method and mount mating interface / interference values]',
      ],
    },
    how: [
      {
        title: 'Registering cuts to vehicle datums',
        body: 'The failure mode was alignment error at installation. Referencing the stencil to the datum features that already control the vehicle’s geometry makes cut position a property of the tool, not the installer, so the cut lands consistently on every install. The stencil is only as accurate as its registration to those datums. [Add the datum features used.]',
      },
      {
        title: 'Press-fit mounts designed for FDM',
        body: 'Press-fit retention keeps installation simple and pairs well with fast iteration — a printed prototype gives immediate pass/fail on fit. But FDM does not hold CAD-nominal dimensions, so I converged the interference physically: print, check, adjust, reprint. Because each cycle takes hours, that tuning was affordable and same-day. [Add designed interference values and iteration count.]',
      },
      {
        title: 'Collapsing lead time with in-house printing',
        body: 'Lead time was the binding constraint — weeks per mount. Designing for FDM from the outset turns a design file into an installed part in hours and keeps revisions in the team’s hands, at the cost of constraining the design to what the process can hold dimensionally. [Add material / strength tradeoffs versus the previous mounts.]',
      },
    ],
  },
  {
    slug: 'desktop-injection-molder',
    title: 'WAC-A-MOLD Desktop Injection Molder — Clamping Subsystem',
    summary:
      "Clamping subsystem for the university's first desktop injection molder — parametric linkages in Onshape, links machined on a mill.",
    category: 'Product Development',
    year: '2026',
    featured: true,
    outcome:
      "Delivered parametric linkage CAD and milled prototype links for the clamp of the university's first desktop injection molder (in progress).",
    role: 'Mechanical Team Member (founding member); owner of the clamping subsystem',
    team: 'Waterloo Automation Collective',
    duration: 'Jan 2026 – Present',
    tools: ['Onshape', 'Parametric CAD (variable-driven models)', 'Linkage design', 'Milling'],
    figure: 'molder',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/desktop-injection-molder-1.webp', alt: 'Clamping linkage CAD (Onshape)' },
      { src: 'images/desktop-injection-molder-2.webp', alt: 'Milled link parts' },
      { src: 'images/desktop-injection-molder-3.webp', alt: 'Clamp assembly or prototype' },
      { src: 'images/desktop-injection-molder-4.webp', alt: 'Full machine bring-up' },
    ],
    why: 'Students at the university lacked accessible injection molding; WAC-A-MOLD will be the first desktop injection molder on campus. As a founding member of the Waterloo Automation Collective I own the clamping subsystem — the mechanism that closes the mold and holds it shut against injection pressure — which had to be designed while the rest of the machine was still taking shape.',
    what: {
      lead: "I drove the clamp's early-stage design and prototyping. I developed the clamping linkages in Onshape as fully parametric, variable-driven models — which accelerated iteration and centralized CAD management for the team — and machined the links on a mill to carry the design into hardware. The machine is early-stage; performance numbers will follow prototype testing.",
      build: [
        'Clamping linkage — parametrically driven Onshape model (my subsystem ownership)',
        'Machined links — milled prototype hardware [Add material and stock]',
        'Shared Onshape workspace — centralized CAD management for the team',
        '[Add actuation, platen, and mold-interface hardware]',
      ],
    },
    how: [
      {
        title: 'Designing against moving requirements',
        body: 'In an early-stage machine, loads, interfaces, and envelope are all provisional. I modeled the linkages as fully parametric, variable-driven geometry so each change is an edit and a regenerate rather than a remodel — which let the design absorb churn cheaply and kept the whole team on one current model. Parametric structure costs more upfront modeling before it pays off.',
      },
      {
        title: 'Linkage-based clamping architecture',
        body: 'The clamp must generate and hold closing force against injection pressure on a desktop-scale machine, which drove a mechanical-linkage approach. [Add the specific rationale — force amplification, packaging, cost — behind the linkage choice, and the tradeoffs versus other clamp architectures.]',
      },
      {
        title: 'Machining the first links',
        body: 'I milled the links to take the parametric CAD into physical hardware the team could evaluate, rather than models alone. Making the parts myself made manufacturability concrete — geometry trivial to model still has to be fixtured and cut. [Add per-revision fabrication-time tradeoffs.]',
      },
    ],
  },
  {
    slug: 'educational-gearboxes',
    title: 'Two-Stage Educational Gearboxes',
    summary:
      'Parametric, 3D-printed two-stage gearboxes with DC-motor actuation, built as live demonstration hardware for undergraduate lectures.',
    category: 'Product Development',
    year: '2026',
    featured: false,
    outcome:
      'Multiple motor-driven gearbox demonstrators now run reliably in undergraduate lectures; parametric CAD reduced gear design cycle time.',
    role: 'Undergraduate Research Assistant',
    team: 'Multi-Scale Additive Manufacturing (MSAM) Lab, University of Waterloo',
    duration: 'Jan – Apr 2026 (4-month term)',
    tools: [
      'SolidWorks (parametric CAD)',
      'nTop',
      'FDM 3D printing',
      'Metal additive manufacturing',
      'DC motors',
    ],
    figure: 'gearbox',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/educational-gearboxes-1.webp', alt: 'Parametric gearbox CAD' },
      { src: 'images/educational-gearboxes-2.webp', alt: 'Parametrically modeled helical gear' },
      { src: 'images/educational-gearboxes-3.webp', alt: 'FDM-printed gearbox assembly' },
      { src: 'images/educational-gearboxes-4.webp', alt: 'nTop metal-AM housing' },
    ],
    why: "The University of Waterloo's MSAM Lab needed two-stage gearbox demonstrators for undergraduate lectures: physical assemblies that operate reliably and actuate on their own in front of a class. The work had to fit a single four-month term, and every component was FDM 3D printed — a process that constrains how parts must be designed before they run reliably.",
    what: {
      lead: 'Over the Jan–Apr 2026 term I designed and prototyped multiple motor-driven two-stage gearboxes as live lecture hardware. I built the CAD as fully parametric SolidWorks models (including a parametrically modeled helical gear), iterated the FDM-printed components until the assemblies ran reliably, introduced metal AM techniques into the housing via nTop, and integrated DC motors for automated actuation.',
      build: [
        'Parametric SolidWorks models incl. a parametrically modeled helical gear',
        'Two-stage gear trains with components optimized for FDM 3D printing',
        'Gearbox housing incorporating metal additive manufacturing techniques, designed in nTop',
        'DC-motor drive providing automated gear actuation for live demos',
        'Multiple gearbox variants delivered for undergraduate lectures [Add exact count]',
      ],
    },
    how: [
      {
        title: 'Parametric CAD for a term of variants',
        body: 'The term required multiple variants and repeated print-driven revisions, so I made the geometry — the helical gear especially — regenerate from parameters. Each change became a parameter edit and a regenerate instead of a remodel, which reduced gear design cycle time; the cost is front-loaded modeling effort before it pays back across variants.',
      },
      {
        title: 'Making FDM assemblies run reliably',
        body: 'The printed gearboxes were not reliable as first designed. I iterated the components against real prints — [Add specific DFM changes: clearances, tooth profiles, print orientations] — until assembled gearboxes operated consistently. The parametric models kept that print-and-revise loop cheap.',
      },
      {
        title: 'Two additive processes in one assembly',
        body: 'While the components stayed FDM, I introduced metal AM techniques into the housing, designing it in nTop — a fit for a multi-scale additive manufacturing lab and a way to put two additive processes in one teaching assembly. [Add the nTop workflow, the metal AM process/material, and cost/lead-time tradeoffs versus an FDM housing.]',
      },
    ],
  },
  {
    slug: 'pneumatic-piston-assembly',
    title: 'Pneumatic Piston Mounting Assembly Redesign',
    summary:
      'Redesigned a production-line pneumatic piston mounting assembly to integrate a replacement component and protect it from syrup contamination.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    outcome:
      'Redesigned a production-line pneumatic piston mounting assembly to integrate a replacement component and protect it from syrup contamination.',
    role: 'Engineering Intern',
    team: 'Refresco Beverages — production/maintenance/engineering team, Mississauga ON',
    duration: 'July 2025, during internship',
    tools: [
      'SolidWorks',
      'Reverse engineering',
      '2D manufacturing drawings',
      'Vendor component integration',
    ],
    figure: 'piston',
    // Hero + preview-card image (replaces the built-in line illustration).
    image: 'images/pneumatic-piston-full-assembly.png',
    imageAlt: 'SolidWorks model of the full piston mounting assembly — plate, cover, and piston',
    // Section headings for this project follow problem → requirements →
    // solution → results (the Results section is the optional `results` field).
    sectionTitles: {
      why: 'Problem',
      what: 'Design requirements',
      whatList: 'The redesign needed to',
      how: 'Design solution',
    },
    // Figures live inline with the sections they illustrate — see the `media`
    // fields on the how/results blocks below.
    why: 'A pneumatic piston rejected cans at a specific point on the can production line, kicking out underfilled or knocked over cans. The piston rod was exposed to syrup splash, so sugar residue accumulated on it and delayed its actuation. This led to mistimed can kickouts resulting in necessary maintenance cleanup once a month. A replacement piston was sourced from another vendor, but its dimensions did not match the original assembly, and swapping the component alone would leave it exposed to the same contamination that affected the original. So, I was asked to redesign the mounting plate and a protective cover so the replacement piston could be integrated while addressing the recurring syrup-buildup problem.',
    what: {
      lead: 'Integrating a different vendor’s piston into a running production line meant working with fixed constraints on every side. I had to consider the existing machine interface, ease of installation and maintenance, the new component’s geometry, and the operating environment.',
      build: [
        'Preserve the existing machine interface, the mounting points, and the airline connection',
        'Integrate the replacement piston while maintaining its required position and alignment so that can kickouts remain accurate',
        'Shield the piston from direct syrup splash using a cover and maintain access for maintenance and cleaning',
      ],
    },
    how: [
      {
        title: 'Adapting the mounting plate',
        body: 'I measured the critical geometry of the original mounting plate and cover: hole locations, mating features, and the available installation envelope. I recreated the exact plate in SolidWorks to establish what changes needed to be made. Since the replacement piston had a different mounting hole arrangement, the original plate could not be reused directly, so I measured the new piston’s mounting interface and incorporated the necessary holes from the original plate for the airlines. That let the replacement component be incorporated without broader modifications to the surrounding equipment.',
        media: [
          {
            src: 'images/pneumatic-piston-plate.png',
            alt: 'SolidWorks model of the redesigned mounting plate',
            caption: 'Redesigned plate — the new piston’s mounting pattern plus the original airline holes, so the assembly drops into the existing equipment.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Protecting the piston from contamination with a cover',
        body: 'Adapting the mounting plate addressed the compatibility problem but not the recurring cause of delayed actuation. So, I designed a protective cover to shield the piston from direct syrup splash, shaped around the redesigned assembly. I accounted for installation and maintenance access by adding side holes on the plate for the cover to attach to. This protects the piston rod from syrup splashes that affected the original mechanism. ',
        media: [
          {
            src: 'images/pneumatic-piston-cover.png',
            alt: 'SolidWorks model of the protective cover',
            caption: 'Protective cover, shaped around the assembly — it attaches to side holes in the plate and shields the piston rod from syrup splash.',
          },
        ],
      },
      {
        title: 'Designing for fabrication and assembly',
        body: [
          'I designed the mounting plate to support three distinct mechanical interfaces. Countersunk fasteners secured the piston to the plate while keeping the heads flush. The plate connected to the conveyor’s existing bracket arm through slotted mounting holes, allowing the piston position to be adjusted before the connection was tightened. Separate fasteners passed through the cover and threaded into tapped holes in the plate, clamping the cover securely against the assembly.',
          'I defined the countersunk and tapped features using SolidWorks Hole Wizard and documented their thread and countersink specifications in the fabrication drawings. I produced detailed 2D drawings for the plate and cover, including datum-based hole locations, critical dimensions, tolerances, slot geometry, materials, and manufacturing callouts.',
        ],
        media: [
          {
            src: 'images/pneumatic-piston-plate-drawing.png',
            alt: 'Fabrication drawing of the mounting plate',
            caption: 'Plate drawing — datum-based hole locations, slot geometry, and thread callouts.',
          },
          {
            src: 'images/pneumatic-piston-cover-drawing.png',
            alt: 'Fabrication drawing of the protective cover',
            caption: 'Cover drawing — critical dimensions and manufacturing callouts for the shop.',
          },
        ],
      },
    ],
    results: {
      delivered: [
        'SolidWorks parts and assembly model of the redesigned mounting arrangement',
        'Redesigned mounting plate integrating the vendor-replacement piston',
        'Protective syrup-splash cover',
        'Fabrication package — geometry, dimensions, hole locations, thread and countersink specifications',
      ],
      body: [
        'I completed the CAD models and technical drawings before the end of my internship. The components were not fabricated or installed before I completed my internship, so I was unable to perform a physical fit check validation or evaluate the design further.',
        'The delivered design addressed both the replacement piston’s mounting incompatibility and the recurring syrup buildup issue.',
      ],
    },
  },
  // {
  //   slug: 'arduino-robocar',
  //   title: 'Autonomous Line-Following Robot Car',
  //   summary:
  //     'A C++/Arduino robot car that follows a line with light sensors — stable through a figure-eight course and up an inclined ramp.',
  //   category: 'Mechatronics',
  //   year: '[Add year]',
  //   featured: false,
  //   outcome:
  //     'The car navigated a figure-eight course and climbed an inclined ramp autonomously, tracking the line with light-sensor distance logic.',
  //   role: 'Sole builder and programmer (personal project)',
  //   team: 'None — personal project',
  //   duration: '[Add duration] ([Add year])',
  //   tools: ['C++', 'Arduino IDE', 'Light sensors', 'Distance-logic line tracking'],
  //   figure: 'robocar',
  //   // Drop files at /public/images/… to fill these slots (see README).
  //   gallery: [
  //     { src: 'images/arduino-robocar-1.webp', alt: 'The assembled car' },
  //     { src: 'images/arduino-robocar-2.webp', alt: 'Light-sensor array / underside' },
  //     { src: 'images/arduino-robocar-3.webp', alt: 'Figure-eight run' },
  //     { src: 'images/arduino-robocar-4.webp', alt: 'Ramp climb' },
  //   ],
  //   why: 'A personal project to make a robot car follow a line fully autonomously and prove it on two courses that expose unstable tracking: a figure-eight — which bends in both directions and crosses itself — and an inclined ramp that adds grade on top of tracking.',
  //   what: {
  //     lead: 'I built and programmed the car solo. The control software is C++ in the Arduino IDE and steers from light-sensor distance logic with no manual control. It achieved stable navigation on both courses — completing the full figure-eight and climbing the ramp while holding the line.',
  //     build: [
  //       'Wheeled car platform with light sensors for path detection [Add chassis, motors, driver]',
  //       'C++ control program (Arduino IDE) implementing light-sensor distance logic',
  //       'Arduino board running the program [Add board model]',
  //       'Validation runs on a figure-eight course and an inclined ramp',
  //     ],
  //   },
  //   how: [
  //     {
  //       title: 'Light sensors + distance logic for tracking',
  //       body: 'A simple sensing input suited a solo build, with the distance logic in software carrying the rest of the work — reading the sensors and deciding the steering corrections that keep the car on the line. Tracking quality is bounded by what the sensors report; anything that degrades the readings degrades the tracking. [Add how readings map to steering — thresholds/gains, loop timing.]',
  //     },
  //     {
  //       title: 'Holding the line through the figure-eight',
  //       body: 'The figure-eight is the hard tracking test: curvature reverses and the path crosses itself, so the logic has to stay stable through changing turns and take the correct branch at the intersection. The car completed it autonomously. [Add what failed on early attempts and what changed.]',
  //     },
  //     {
  //       title: 'Adding grade with the ramp',
  //       body: 'The ramp moved the test off flat ground, checking that tracking and drive both hold on an incline; the car climbed it with stable line tracking. [Add ramp angle and any changes needed for the climb.]',
  //     },
  //   ],
  // },
]
