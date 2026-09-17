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
  // project 1
  /*
  {
    slug: 'electronic-nose-cfd',
    title: 'Influence of Geometry on Sensor Detection for an Adaptive Electronic Nose',
    summary:
      'This project is a subsystem of an adaptive electronic nose. I investigated how nasal channel geometry affects sensor detection through CFD simulations and benchtop experiments. The parametric campaign showed that geometry is a real detection lever, but a conditional one: it acts only when the sniff is matched to the channel, and compound identity is carried by the signal’s timing rather than by sensor position.',
    category: 'Simulation & Analysis',
    status: 'Simulation campaign complete. Benchtop validation ongoing.',
    year: '2026',
    featured: true,
    tools: [
      'COMSOL Multiphysics',
      'Python (Pandas, NumPy, Matplotlib)',
      'CFD',
      'Mass transport modelling',
      'ITK-SNAP',
      'MeshLab / Meshmixer',
    ],
    figure: 'enose',
    image: 'images/enose-transport-methane-decane.mp4',
    imagePoster: 'images/enose-transport-methane-decane-poster.jpg',
    imageAlt: 'Simulated transport of methane and decane through identical channels, side by side',
    outcome: [
      '**Geometry is a conditional lever.** Across a 247-case grid (19 bend angles × 13 stroke ratios), bending the channel matters only when the sniff stroke roughly matches the channel length (stroke ratio Λs ≈ 0.8–3.5). Inside that band a full U-bend delivers up to 31% more odorant exposure and a 42% higher peak signal than a straight channel. Below the band, bending is a penalty of up to 69%; above it, the sensor saturates and shape stops mattering.',
      '**One number sets the regime.** Reaching the same stroke ratio with a fast short sniff or a slow long one produces near-identical detection, agreeing within about 11% everywhere the two sweeps can be cleanly compared. The stroke ratio, not velocity or duration separately, is the design variable.',
      '**The effect is geometry, not an artifact.** Local probe velocity rises 19% across the sweep and correlates with every detection metric at r > 0.98, which is exactly what a sampling artifact would look like. A time-rescaling test ruled that out: all 19 waveforms collapse onto one curve with a residual of 0.33% of range, and the fitted front sweep rate matches an independent traverse check within 1%.',
      '**Repeated sniffing spends the effect rather than accumulating it.** Over a four-sniff bout, each successive sniff shifts the geometry-sensitive band toward shorter strokes and shrinks it; by the fourth sniff the single-sniff optimum has reversed sign, and the best whole-bout gain is 5.5% against 31% for one matched sniff. The stroke ratio should therefore be matched to the bout, not to a single sniff.',
      '**The early place map did not survive scrutiny, and that is a finding.** Judged with distribution-level statistics over 10 compounds and 100 probe positions, every compound shares one optimal sensor location just inside the inlet, and what separates species is the rise and washout of the transient waveform, not where the signal peaks. Curvature shifts that separability by at most 11% end to end, so a single well-placed sensor reading timing is robust to geometry. The heaviest alkanes (C8–C10) remain near the noise floor, a limit any scheme built on this mechanism inherits.',
    ],
    outcomeMedia: [
      {
        src: 'images/enose-theta-lambda-map.png',
        alt: 'Four-panel map of the bend-angle effect on exposure across stroke ratios, showing penalty, benefit and null regimes',
        caption: 'The campaign in one map: bending the channel hurts exposure at short strokes (blue), helps near matched strokes (red), and vanishes once the sensor saturates. The sign flips at a stroke ratio of about 0.8.',
        fit: 'contain',
      },
      {
        src: 'images/enose-selectivity-vs-position.png',
        alt: 'Species separability along the channel for four bend angles, peaking at the first probe inside the inlet',
        caption: 'Where to put the sensor: species separability peaks at the first probe inside the inlet at every bend angle tested, so the placement rule survives geometry changes.',
        fit: 'contain',
      },
    ],
    skills: [
      'Built a parametric COMSOL model of a nasal-inspired channel, driven by transient sniff waveforms rather than a steady flow',
      'Designed and ran six parametric studies under matched conditions: 700+ transient cases covering 19 bend angles, 13 stroke ratios, 9 sniff durations, four-sniff trains, and 10 hydrocarbons',
      'Automated the analysis in Python (Pandas, NumPy, Matplotlib), turning 200K+ rows of raw exports into 11 sensitivity and selectivity metrics, 80+ figures, and 16 tables in one scripted step',
      'Stress-tested the headline result with a velocity-collapse falsification test, and cross-validated the stroke-ratio scaling through independent velocity and duration sweeps',
      'Ran control cases to separate geometry-driven effects from the compounds’ own transport properties',
      'Segmented CT-scanned animal airways in ITK-SNAP and repaired the meshes into watertight STLs as test geometries for benchtop validation',
      'Presented the work to the lab’s computational subgroup',
    ],
    motivation:
      'Electronic noses usually buy selectivity with chemistry: one more compound to detect means one more sensor tuned to it. A biological nose does it differently. Air is routed through a cavity whose bony turbinates control how long odorant molecules linger near the receptors, so the anatomy is doing part of the sensing. The Aizenberg Lab is building an adaptive electronic nose, and my project tested whether that principle transfers to hardware. Concentrations inside a nasal cavity cannot be measured in place, so the question starts as a simulation problem.',
    motivationMedia: [
      {
        src: 'images/enose-u-channel-geometry.png',
        alt: 'The U-channel at bend angles of 0, 90 and 180 degrees with the sensor probe marked',
        caption: 'The cavity reduced to one variable: bend angle θ opens the channel from straight to a full U while width and total flow path stay fixed, so any change in signal can only come from shape.',
        fit: 'contain',
      },
    ],
    details: [
      {
        title: 'How the model was set up',
        body: [
          'The channel is two straight legs joined by an arc, with bend angle θ as the only free variable. The arc radius is derived from θ so that arc length, width, and total flow path stay constant as the bend opens. Dimensions are scaled to a human nasal cavity: 15 mm wide, 100 mm total flow length, 45 mm out of plane.',
          'The sniff protocol depends on the study: a single 2 s inhalation stroke for the main sweeps, four-stroke trains with 2 s strokes and 2 s pauses for the accumulation study, and stacked inhale-and-hold cycles in the earliest runs. Walls are semi-permeable (mass-transfer coefficient 1×10⁻¹⁰ m/s) so analyte is absorbed the way an olfactory epithelium would absorb it, and the sensor is an ideal point probe. I used a k-ε RANS closure to keep run times manageable across sweeps this size; peak Reynolds numbers stay around 17–21, so the flow itself is laminar.',
        ],
        media: [
          {
            src: 'images/enose-arc-parameterisation.png',
            alt: 'Sketch deriving the arc radius from the bend angle and arc length',
            caption: 'Deriving arc radius from θ is what holds arc length constant, so the sweep isolates shape rather than path length.',
            fit: 'contain',
          },
          {
            src: 'images/enose-comsol-parameters.png',
            alt: 'COMSOL parameter table listing channel dimensions, bend angle, inlet velocity and analyte properties',
            caption: 'Every quantity is a named parameter, so a sweep is a parameter list rather than 19 hand-built models.',
            fit: 'contain',
          },
          {
            src: 'images/enose-u-channel-probe.png',
            alt: 'Annotated U-channel showing inlet, outlet, bend angle and the fixed sensor probe location',
            caption: 'The probe sits at the same physical point on the arc in every geometry, so the comparison is like for like.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Watching the transport',
        body: 'These two runs share the same physics, the same inlet condition, and the same analyte. The only difference between them is how far the channel is bent.',
        media: [
          {
            src: 'images/enose-transport-theta20.mp4',
            poster: 'images/enose-transport-theta20-poster.jpg',
            alt: 'Simulated methane transport through a near-straight channel over one sniff cycle',
            caption: 'θ = 20°, near-straight.',
            fit: 'contain',
          },
          {
            src: 'images/enose-transport-theta180.mp4',
            poster: 'images/enose-transport-theta180-poster.jpg',
            alt: 'Simulated methane transport through a full U-bend over one sniff cycle',
            caption: 'θ = 180°, a full U. Visibly more swirl; at this operating point, almost the same signal at the probe.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'One operating point nearly hid the effect',
        body: 'The first sweep held one velocity and one sniff period and varied only θ. The flow responded strongly: peak Reynolds number rose from 17.1 to 20.8 and peak vorticity from essentially zero to 1.4 s⁻¹, both near-linearly (R² = 0.97 and 0.98). Detection barely moved: the 19 concentration traces nearly overlap and total exposure varied by about 4% with no trend. Read alone, that says shape does not matter. The full grid says something more specific: this operating point, integrated over a multi-sniff record, sits where the geometry effect is weakest, and a single matched sniff behaves very differently.',
        media: [
          {
            src: 'images/enose-reynolds-vs-theta.png',
            alt: 'Plot of peak Reynolds number against bend angle with a linear fit',
            caption: 'Peak Reynolds number rises near-linearly with bend angle (R² = 0.97).',
            fit: 'contain',
          },
          {
            src: 'images/enose-vorticity-vs-theta.png',
            alt: 'Plot of peak vorticity magnitude against bend angle with a linear fit',
            caption: 'Peak vorticity follows the same trend (R² = 0.98). Sharper bends drive stronger swirl.',
            fit: 'contain',
          },
          {
            src: 'images/enose-concentration-vs-time.png',
            alt: 'Concentration at the sensor over time for all bend angles, nearly overlapping',
            caption: 'Nineteen bend angles, nearly one curve, at the original operating point. The full grid shows where this stops being true.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Geometry acts as a band-pass filter',
        body: 'Repeating all 19 geometries across 13 stroke ratios, log-spaced from 0.1 to 100, turned that flat early result into the map at the top of the page, and the map has three regimes. When the stroke is too short (Λs below about 0.6) the odorant packet never reaches the probe convectively, so bending only adds path: exposure at a full U falls 36 to 69% below straight. When the stroke roughly matches the channel (Λs of about 0.8 to 3.5) the sign flips: a full U gains 31% exposure and 42% peak signal, and the front even arrives slightly earlier. When the stroke overruns the channel (Λs above about 10) the probe saturates and every geometry reads the same to within 1%. The crossover sits at Λs ≈ 0.8, stroke length equal to channel length, which points at the mechanism: geometry matters when delivery is marginal. The practical consequence is that quoting a curvature effect without stating the stroke ratio is meaningless.',
      },
      {
        title: 'Two checks that could have killed the result',
        body: [
          'Is the stroke ratio really the variable? The same Λs can be reached with a fast short sniff or a slow long one, and those are different flows: Reynolds number scales with one, diffusion time with the other. I reran the sweep along a fixed-velocity duration arm and compared it against the fixed-duration velocity arm. The two arms collapse onto one curve per bend angle, agreeing within about 11% everywhere the comparison is cleanly resolvable, so Λs is the controlling number to first order.',
          'Is the curvature effect just the probe sampling a faster streamline? Local probe velocity rises 19% across the sweep and correlates with every metric at r > 0.98, which is exactly what an artifact would look like. Velocity acts on a signal as a time scale, so the right test is whether the 19 waveforms collapse under a time rescaling. They do, to a residual of 0.33% of range, and the fitted front sweep rate matches a fit-free traverse check within 1% while the local-velocity null hypothesis misses it badly. The effect is transport through the geometry, not probe placement.',
        ],
        media: [
          {
            src: 'images/enose-lambda-collapse.png',
            alt: 'Detection metrics against stroke ratio for the velocity sweep and the duration sweep, landing on the same curves',
            caption: 'Two ways of reaching the same stroke ratio, a velocity sweep and a duration sweep, land on the same response curves.',
            fit: 'contain',
          },
          {
            src: 'images/enose-velocity-collapse.png',
            alt: 'Raw waveforms for all bend angles, the same waveforms collapsed onto one curve, and the fitted sweep rate against the velocity null hypothesis',
            caption: 'The artifact check: 19 raw waveforms (left) collapse onto one curve (right, residual 0.33% of range) under a rescaling set by channel traverse, not by local probe velocity.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Repeated sniffing spends the advantage',
        body: 'Real sniffing is a bout, not a single stroke, so the full grid was rerun under four 2 s dosing strokes separated by 2 s pauses. The first sniff reproduces the single-sniff map almost exactly, as it must, since it has no memory of the protocol. From the second stroke on, tracer left behind by earlier strokes pre-loads the channel, so each sniff needs less stroke to finish the delivery, and the band where bending helps slides toward shorter strokes, roughly as the single-sniff band divided by the number of sniffs. By the fourth stroke the original optimum has reversed sign: the curved channels spent their advantage early and sit closer to saturation. Integrated over the whole bout, the best gain is 5.5% at θ = 160°, against 31% for one matched sniff. For the e-nose that sets the rule of matching the stroke ratio to the bout; for biology it is a transport-level argument for why sniff rate and count should co-tune with airway geometry.',
        media: [
          {
            src: 'images/enose-sniff-accumulation.png',
            alt: 'Heatmaps of the geometry effect on the first stroke, the last dosing stroke, and the change across the sniff train',
            caption: 'The geometry effect over a four-sniff bout: the benefit band (red) sits at matched strokes on sniff 1, slides to shorter strokes by sniff 4, and the sniff-1 optimum turns into a penalty.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'From place map to waveform',
        body: [
          'The early place map read as if each compound peaked at its own position along the channel. Held to distribution-level statistics, Jensen–Shannon distance between area-normalized signals across all 10 alkanes and 100 centerline probes, it does not survive: the spatial centroids of C1 through C10 sit on top of one another, and only the distribution widths order by carbon number, a broadening effect rather than a position code. Keeping that negative result visible matters, because it redirects the design.',
          'Where the species signature does live is timing. Every compound shares one optimal sensor position just inside the inlet, where the diffusive rise and washout edges of the dose pulse differ most between light and heavy species, and that optimum does not move with curvature. The separability is real but small, a mean pairwise distance of about 0.02 on a 0 to 1 scale, and curvature trims it by about 11% from straight to a full U. Adjacent heavy pairs like nonane and decane sit near the noise floor, so any claimed discrimination there would need noise modelling first. The design implication stands: one sensor at the inlet, reading the full transient.',
        ],
        media: [
          {
            src: 'images/enose-waveforms-optimal-probe.png',
            alt: 'Area-normalized waveforms for all ten alkanes at the optimal probe, for straight and fully bent channels',
            caption: 'All ten alkanes at the optimal probe. The species signature hides in the rise and washout edges, which is why distribution-level metrics, not the eye, had to judge separability.',
            fit: 'contain',
          },
          {
            src: 'images/enose-spatial-centroid-width.png',
            alt: 'Spatial centroid and width over time for all ten alkanes, at straight and fully bent geometries',
            caption: 'Spatial centroids for C1 to C10 overlap (top) while distribution widths order by carbon number (bottom): compounds separate by spread, not by position, and the bend barely changes either.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Moving to real anatomy',
        body: 'A smooth channel is a deliberate abstraction; real nasal cavities are dense with turbinate structure, which is where a geometry-driven effect should actually show up if there is one. I segmented CT-scanned animal skulls in ITK-SNAP to extract the airway volume and cleaned the meshes into watertight STLs to serve as test geometries. The metrics carry over unchanged, so artificial and biological geometries can be compared directly.',
        media: [
          {
            src: 'images/enose-ct-segmentation.png',
            alt: 'Rat skull CT scan in ITK-SNAP with the nasal airway volume segmented in red',
            caption: 'Rat skull CT segmented in ITK-SNAP. The red volume becomes both the CFD domain and the printed test part.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Where it lands',
        body: 'The campaign closes with three design rules for the e-nose. Operate in the matched band: choose the sniff stroke so Λs lands between roughly 0.8 and 3.5, and match it to the bout length when sniffing repeatedly. Place the sensor just inside the inlet and read the whole transient, since timing, not position, carries compound identity in a smooth channel. Treat geometry as a sensitivity lever rather than a selectivity lever until the channel has internal structure. Whether turbinate-scale anatomy changes that last verdict is the open question the benchtop rig and the CT-derived geometries are built to answer.',
      },
    ],
  },
  */
  {
    slug: 'solar-car-ballast-box',
    title: 'Midnight Sun Solar Car Ballast Box',
    summary:
      'Aluminum sheet-metal ballast box for Midnight Sun Solar Car Team (MS16), owned from first sketch through manufacture, sized from hand calculations, cut 20% lighter with a slot pattern, and now on the competition vehicle.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    tools: [
      'SolidWorks (sheet metal)',
      'SolidWorks Simulation (design verification)',
      'DFM/DFA principles',
      'Waterjet cutting',
      'Aluminum sheet-metal construction',
    ],
    figure: 'ballast',
    image: 'images/ballast-box-hero.png',
    imageAlt: 'SolidWorks model of the aluminum sheet-metal ballast box',
    outcome: [
      'Full design-to-manufacture ownership: a hand-calc-sized, 20% lighter sheet-metal enclosure that ended up on the competition vehicle.',
      'I owned the ballast box from first sheet-metal sketch through manufacture, and the finished assembly ended up on the competition vehicle. I designed it in SolidWorks as an aluminum sheet-metal enclosure to DFM/DFA principles, sized the interior from hand calculations, optimized the geometry for waterjet cutting, and cut enclosure weight by 20% from the initial design with a pattern of slots, comparing mass properties in SolidWorks before and after.',
    ],
    outcomeMedia: [
      {
        src: 'images/ballast-box-fitted.jpg',
        alt: 'The manufactured ballast box mounted in the competition vehicle chassis',
        caption: 'The manufactured box, mounted in the competition vehicle chassis.',
        fit: 'contain',
      },
      {
        src: 'images/ballast-box-chassis-cad.png',
        alt: 'CAD of the ballast box packaged into its confined space in the vehicle chassis',
        caption: 'The box packaged into its confined space in the chassis CAD, the envelope the design had to fit.',
        fit: 'contain',
      },
    ],
    skills: [
      'Aluminum sheet-metal enclosure built with SolidWorks sheet-metal features, geometry optimized for waterjet cutting',
      'Ballast payload of minimum 20 kg of steel shot, packaged into a confined space on the chassis',
      'Interior volume sized by hand calculation from steel-shot density, with a 1.5 volumetric factor of safety',
      'Enclosure weight cut 20% from the initial design with a pattern of slots, comparing mass properties in SolidWorks before and after',
      'Braking load case checked in SolidWorks Simulation: a 10g load on the front face, with peak von Mises stress below the aluminum yield strength',
      'Mounting tabs with weld nuts for easy assembly onto the car',
      'Owned from design through manufacture; the manufactured box is on the competition vehicle',
    ],
    motivation: "Midnight Sun's competition solar car must carry a minimum of 20 kg of steel-shot ballast, held secure and structurally intact through every driving load case. The shifting mass loads the enclosure hardest when the car turns and brakes. The ballast is mandated mass, but the enclosure around it is pure overhead, so its weight was worth driving down without compromising retention, all within a confined space on the chassis.",
    details: [
      {
        title: 'Sizing the box from first principles',
        body: [
          'The interior volume came from hand calculations rather than guesswork. Steel shot has a density of 290 lb/ft³ (4,645 kg/m³), so the required 20 kg of ballast, set by a 60 kg reference driver, occupies 4.31 L. Applying a 1.5 factor of safety on volume set the minimum capacity at 6.46 L.',
          'From that target I sized the interior at 180 × 350 × 150 mm, which holds 9.45 L and clears the minimum comfortably. Those dimensions drove the sheet-metal flat pattern the walls were cut from.',
        ],
        media: [
          {
            src: 'images/ballast-box-calcs.png',
            alt: 'Hand calculations sizing the ballast box volume from steel-shot density, required mass, and a 1.5 factor of safety',
            caption: 'The sizing calcs: shot density to required volume for 20 kg, then a 1.5 volumetric factor of safety to set the minimum box capacity.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Cutting weight with a slot pattern',
        body: 'The ballast is mandated mass, but the enclosure around it is pure overhead worth minimizing. I cut enclosure weight by 20% from the initial design with a pattern of slots in the walls and faces, comparing mass properties in SolidWorks before and after each revision while keeping the enclosure closed enough to retain the loose steel shot.',
      },
      {
        title: 'Designed for manufacturability and assembly',
        body: 'Aluminum sheet metal gave a closed enclosure for loose steel shot and a part the team could actually fabricate. Across many design iterations I used SolidWorks sheet-metal features to keep every geometry change formable, and optimized the geometry for waterjet cutting. Mounting tabs with weld nuts were designed in so the box assembles onto the car easily.',
      },
      {
        title: 'Verifying the braking load case',
        body: 'Simulation did not drive the design; the geometry came from hand calculations and sheet-metal constraints. I used SolidWorks Simulation as a final check on the worst load case, hard braking, where the steel shot slams against the front face of the box. Applying a 10g load to the front face kept peak von Mises stress below the yield strength of the aluminum, verifying the design as sized.',
        media: [
          {
            src: 'images/ballast-box-fea-braking.png',
            alt: 'SolidWorks Simulation von Mises stress plot of the ballast box under a 10g braking load on the front face',
            caption: 'The braking check in SolidWorks Simulation: a 10g load applied to the front face, with peak von Mises stress below the aluminum yield strength.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'From CAD to the competition vehicle',
        body: 'I carried the box through the full design-to-manufacture cycle: requirements (holding the required ballast volume inside a confined space on the chassis), sheet-metal design, and manufacturing. The finished assembly ended up on the competition vehicle.',
      },
    ],
  },
  {
    slug: 'vehicle-fixtures',
    title: 'Midnight Sun Solar Car Projects: Stencils and Camera Mount',
    summary: "Two solar car assembly fixtures: surface-modeled wheel-cover stencils that follow the aerobody's curvature, and tool-free press-fit camera mounts that replaced the bolted-in mounts of previous years.",
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    tools: [
      'Surface modeling',
      'Datum-referenced fixturing',
      'FDM 3D printing',
      'Press-fit design',
      'Rapid prototyping',
    ],
    figure: 'fixtures',
    image: 'images/fixtures-stencil-cad.png',
    imageAlt: 'CAD render of the wheel-cover cutting stencil seated on the aerobody around the wheel cutout',
    outcome: [
      'Surface-modeled stencils registered to vehicle datums standardized wheel-cover alignment; tool-free press-fit mounts made the rear-view camera quick to install and easy to access, replacing the bolted-in mounts of previous years.',
      "I treated both as fixture problems. I surface-modeled wheel-cover cutting stencils to follow the curvature of the dynamic aerobody, datumed to the ribs of the car, and designed a tool-free press-fit camera mount system for FDM 3D printing. Installation accuracy improved, and the camera now installs and comes out by hand instead of being bolted in, keeping it accessible for maintenance.",
    ],
    skills: [
      'Wheel-cover cutting stencils designed with surface modeling to follow the curvature of the dynamic aerobody',
      'Stencils datumed to the ribs of the car for accurate cut location, ensuring a proper cutout for the wheel cover',
      'Top part angled 45° for easier cutting; stencil design approved',
      'Tool-free press-fit camera mount system designed for FDM 3D printing, replacing the bolted-in mounts of previous years',
      'Mounts press-fit onto the inner edge of the rear windshield frame, sized about 2 mm under the edge for grip',
      'Press-fit dimensions converged over 5 PLA print iterations',
    ],
    motivation: 'Solar car assembly was losing time to two small parts. Wheel covers went on with recurring alignment and installation errors, and the rear-view camera was bolted into the vehicle, making every install and removal slow and leaving the camera hard to access. Both are cheap parts; the cost was in the process around them: rework from misaligned covers, and tools and time spent every time the camera came on or off.',
    details: [
      {
        title: 'Following the curvature of the aerobody',
        body: 'The wheel cover sits on the vehicle’s dynamic aerobody, a compound-curved surface that a flat template cannot sit flush against. I designed the stencils using surface modeling, working from the aerobody’s own geometry so the stencil follows its curvature and the cutout lands exactly where the wheel cover needs it. The top part is angled 45° to make the cut itself easier to run.',
      },
      {
        title: 'Registering cuts to vehicle datums',
        body: 'The failure mode was alignment error at installation. I datumed the stencils to the ribs of the car, features that already control the vehicle’s geometry. That makes cut position a property of the tool, not the installer, so the cut lands consistently on every install. The stencil design was approved for use on the vehicle.',
      },
      {
        title: 'Press-fit mounts designed for FDM',
        body: 'Press-fit retention keeps installation simple and pairs well with fast iteration, since a printed prototype gives immediate pass/fail on fit. But FDM does not hold CAD-nominal dimensions, so I converged the interference physically: print, check, adjust, reprint. Because each cycle takes hours, that tuning was affordable and same-day. The mounts grip the inner edge of the rear windshield frame, sized about 2 mm under the edge, and the fit converged after 5 iterations.',
      },
      {
        title: 'Press-fit instead of bolts',
        body: 'In previous years the camera was bolted into the vehicle, so every install or removal meant tools and fasteners, and the camera stayed hard to get at. The press-fit mount replaces that: it presses onto the inner edge of the rear windshield frame by hand, and the camera comes out the same way, staying accessible for inspection or replacement. The tradeoff is that retention now depends on the interference fit alone, which is why the fit was converged across print iterations. The mounts are printed in PLA.',
        media: [
          {
            src: 'images/fixtures-camera-mount-cad.png',
            alt: 'CAD render of the teal press-fit camera mount seated on the rear canopy of the solar car',
            caption: 'The camera mount (teal) positioned on the rear canopy CAD. The apparent interference is an artifact of the canopy model: the canopy manufactured in April came out larger than the CAD, so on the real car the mount grips the inner edge of the rear windshield frame, with the fit converged over print iterations against the vehicle itself.',
            fit: 'contain',
          },
        ],
      },
    ],
  },
  {
    slug: 'injection-molder',
    title: 'WAC-A-MOLD Injection Molder — Clamping Subsystem',
    summary: 'Clamping subsystem for the WAC-A-MOLD injection molder: parametrized clamping-unit linkages in Onshape and SolidWorks, now in the machining stages.',
    category: 'Product Development',
    year: '2026',
    featured: true,
    tools: [
      'Onshape',
      'SolidWorks',
      'Parametric CAD (variable-driven models)',
      'Linkage design',
      'Milling',
    ],
    figure: 'molder',
    image: 'images/molder-clamping-unit.png',
    imageAlt: 'SolidWorks model of the full clamping unit: platens, tie bars, lead screw, and toggle linkages',
    outcome: [
      'Parametrized clamping-unit linkages carried from concept through CAD to early prototyping; the links are now in the machining stages for the WAC-A-MOLD injection molder.',
      "I lead the clamping subsystem from concept through CAD development to early prototyping. I parametrized the clamping-unit linkages as fully variable-driven models in Onshape and SolidWorks, which accelerated iteration and centralized configuration management for the team. The links are now being machined on a mill. The machine is early-stage; performance numbers will follow prototype testing.",
    ],
    skills: [
      'Clamping-unit linkages parametrized as variable-driven models in Onshape and SolidWorks (my subsystem ownership)',
      'Links being machined on a mill to carry the design into physical prototypes',
      'Shared parametric workspace for centralized CAD and configuration management across the team',
    ],
    motivation: 'Students at the university lacked accessible injection molding, and WAC-A-MOLD is being built to change that. As one of the core founding members of the Waterloo Automation Collective, a design team started with a group of 10 students, I own the clamping subsystem: the mechanism that closes the mold and holds it shut against injection pressure, which had to be designed while the rest of the machine was still taking shape.',
    details: [
      {
        title: 'Designing against moving requirements',
        body: 'In an early-stage machine, loads, interfaces, and envelope are all provisional. I parametrized the linkages as fully variable-driven geometry so each change is an edit and a regenerate rather than a remodel. That let the design absorb churn cheaply and kept the whole team on one current model. Parametric structure costs more upfront modeling before it pays off.',
      },
      {
        title: 'Linkage-based clamping architecture',
        body: 'The clamp must generate and hold closing force against injection pressure, which drove a mechanical-linkage approach.',
        media: [
          {
            src: 'images/molder-clamping-unit.png',
            alt: 'Full clamping unit assembly with platens, tie bars, lead screw, and toggle linkages',
            caption: 'The full clamping unit. The lead screw drives the moving platen along the tie bars, and the toggle linkages hold the mold shut against injection pressure.',
            fit: 'contain',
          },
          {
            src: 'images/molder-linkages.png',
            alt: 'Close-up of the toggle linkages on the moving platen',
            caption: 'The linkages on the moving platen, my subsystem. Every link is a variable-driven parametric model.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Machining the first links',
        body: 'The links are being machined on a mill to take the parametric CAD into physical hardware the team can evaluate, rather than models alone. Making the parts ourselves keeps manufacturability concrete: geometry that is trivial to model still has to be fixtured and cut.',
      },
    ],
  },
  // Hidden for now: not strong enough to feature. Uncomment to restore.
  /*
  {
    slug: 'educational-gearboxes',
    title: 'Two-Stage Educational Gearboxes',
    summary: 'Parametric, 3D-printed two-stage gearboxes with DC-motor actuation, built as live demonstration hardware for undergraduate lectures.',
    category: 'Product Development',
    year: '2026',
    featured: false,
    tools: [
      'SolidWorks (parametric CAD)',
      'nTop',
      'FDM 3D printing',
      'Lattice infill design',
      'DC motors',
    ],
    figure: 'gearbox',
    outcome: [
      'Multiple motor-driven gearbox demonstrators now run reliably in undergraduate lectures; parametric CAD reduced gear design cycle time.',
      'Over the Jan–Apr 2026 term I designed and prototyped multiple motor-driven two-stage gearboxes as live lecture hardware. I built the CAD as fully parametric SolidWorks models (including a parametrically modeled helical gear), iterated the FDM-printed components until the assemblies ran reliably, designed the housing in nTop with internal lattice infill, and integrated DC motors for automated actuation.',
    ],
    skills: [
      'Parametric SolidWorks models incl. a parametrically modeled helical gear',
      'Two-stage gear trains with components optimized for FDM 3D printing',
      'Gearbox housing designed in nTop with internal lattice infill, minimizing material while preserving structural strength',
      'DC-motor drive providing automated gear actuation for live demos',
      'Multiple gearbox variants delivered for undergraduate lectures',
    ],
    motivation: "The University of Waterloo's MSAM Lab needed two-stage gearbox demonstrators for undergraduate lectures: physical assemblies that operate reliably and actuate on their own in front of a class. The work had to fit a single four-month term, and every component was FDM 3D printed, a process that constrains how parts must be designed before they run reliably.",
    details: [
      {
        title: 'Parametric CAD for a term of variants',
        body: 'The term required multiple variants and repeated print-driven revisions, so I made the geometry regenerate from parameters, the helical gear especially. Each change became a parameter edit and a regenerate instead of a remodel, which reduced gear design cycle time; the cost is front-loaded modeling effort before it pays back across variants.',
      },
      {
        title: 'Making FDM assemblies run reliably',
        body: 'The printed gearboxes were not reliable as first designed. I iterated the components against real prints, changing print orientations and tuning shaft and bore fits, until assembled gearboxes operated consistently. The parametric models kept that print-and-revise loop cheap.',
      },
      {
        title: 'A lattice-infill housing designed in nTop',
        body: 'While the gears and shafts stayed in SolidWorks, I designed the housing in nTop with internal lattice infill structures, minimizing material use while preserving structural strength. The housing printed in PLA on the same FDM process as the rest of the assembly, bringing a design technique common in metal additive manufacturing into hardware the lab can print in-house.',
      },
    ],
  },
  */
  {
    slug: 'pneumatic-piston-assembly',
    title: 'Pneumatic Piston Mounting Assembly Redesign',
    summary:
      'Redesigned a production-line piston mount so a replacement component from a different vendor could drop into existing equipment and stop failing from syrup contamination.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    tools: [
      'SolidWorks',
      'Reverse engineering',
      '2D manufacturing drawings',
      'Vendor component integration',
    ],
    figure: 'piston',
    image: 'images/pneumatic-piston-full-assembly.png',
    imageAlt: 'SolidWorks model of the full piston mounting assembly: plate, cover, and piston',
    outcome: [
      'A pneumatic piston that rejects underfilled cans was mistiming its kickouts: syrup splash built sugar residue on the exposed rod and delayed its actuation, forcing a maintenance cleanup every month. I redesigned the mounting plate and added a protective cover so a replacement piston from a different vendor could be installed in the existing equipment while shielding the rod from the splash that caused the problem in the first place.',
      'I delivered the SolidWorks models and a complete fabrication package (dimensioned drawings, datum-based hole locations, tolerances, and thread callouts) before the end of my internship. The parts were not fabricated while I was there, so I was not able to do a physical fit check.',
    ],
    outcomeMedia: [
      {
        src: 'images/pneumatic-piston-plate.png',
        alt: 'SolidWorks model of the redesigned mounting plate',
        caption: 'Redesigned plate: the new piston’s mounting pattern plus the original airline holes, so the assembly drops into the existing equipment.',
        fit: 'contain',
      },
      {
        src: 'images/pneumatic-piston-cover.png',
        alt: 'SolidWorks model of the protective cover',
        caption: 'Protective cover, shaped around the assembly and fastened to side holes in the plate. It keeps syrup off the rod without blocking maintenance access.',
      },
    ],
    skills: [
      'Reverse-engineered the original plate and cover, measuring hole locations, mating features, and the available installation envelope',
      'Redesigned the mounting plate in SolidWorks to accept the replacement piston’s hole pattern while preserving the original airline connections',
      'Designed a protective cover shaped around the assembly, with side-mounted fasteners that keep maintenance access open',
      'Resolved three mechanical interfaces on one plate: countersunk piston fasteners, slotted bracket mounts for position adjustment, and tapped holes for the cover',
      'Produced dimensioned 2D fabrication drawings with datum-based hole locations, tolerances, slot geometry, and thread and countersink callouts',
    ],
    motivation:
      'A pneumatic piston rejected cans at a specific point on the can production line, kicking out underfilled or knocked-over cans. The piston rod was exposed to syrup splash, so sugar residue accumulated on it and delayed its actuation, causing mistimed kickouts and a monthly maintenance cleanup. A replacement piston had been sourced from another vendor, but its dimensions did not match the original assembly, and swapping the component alone would have left it exposed to the same contamination. I was asked to redesign the mounting plate and a protective cover so the replacement could be integrated while addressing the recurring syrup buildup.',
    details: [
      {
        title: 'Adapting the mounting plate',
        body: 'I measured the critical geometry of the original mounting plate and cover (hole locations, mating features, and the available installation envelope) and recreated the plate exactly in SolidWorks to establish what had to change. The replacement piston had a different mounting hole arrangement, so the original plate could not be reused directly. I measured the new piston’s interface and combined it with the original plate’s airline holes, which let the replacement component be installed without broader modifications to the surrounding equipment.',
      },
      {
        title: 'Protecting the piston from contamination',
        body: 'Adapting the plate solved the compatibility problem but not the recurring cause of delayed actuation, so I designed a protective cover shaped around the redesigned assembly to shield the piston from direct syrup splash. I added side holes on the plate for the cover to fasten to, which keeps installation and maintenance access open while protecting the rod from the splash that affected the original mechanism.',
      },
      {
        title: 'Designing for fabrication and assembly',
        body: [
          'The plate supports three distinct mechanical interfaces. Countersunk fasteners secure the piston while keeping the heads flush. Slotted mounting holes connect the plate to the conveyor’s existing bracket arm, allowing the piston position to be adjusted before the connection is tightened. Separate fasteners pass through the cover into tapped holes in the plate, clamping the cover against the assembly.',
          'I defined the countersunk and tapped features using SolidWorks Hole Wizard and documented their thread and countersink specifications in the fabrication drawings, along with datum-based hole locations, critical dimensions, tolerances, slot geometry, materials, and manufacturing callouts.',
        ],
        media: [
          {
            src: 'images/pneumatic-piston-plate-drawing.png',
            alt: 'Fabrication drawing of the mounting plate',
            caption: 'Plate drawing: datum-based hole locations, slot geometry, and thread callouts.',
          },
          {
            src: 'images/pneumatic-piston-cover-drawing.png',
            alt: 'Fabrication drawing of the protective cover',
            caption: 'Cover drawing: critical dimensions and manufacturing callouts for the shop.',
          },
        ],
      },
    ],
  },
]
