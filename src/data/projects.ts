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
  {
    slug: 'electronic-nose-cfd',
    title: 'Influence of Geometry on Sensor Detection for an Adaptive Electronic Nose',
    summary:
      'This project is a subsystem of an adaptive electronic nose. I am investigating how nasal channel geometry affects sensor detection through CFD simulations and benchtop experiments. With this research, we can bias the e-nose toward a specific scent by adjusting the channel geometry rather than the sensor hardware.',
    category: 'Simulation & Analysis',
    year: '2026',
    featured: true,
    tools: [
      'COMSOL Multiphysics',
      'Python (Pandas, NumPy, Matplotlib)',
      'CFD',
      'Mass transport modelling',
      'ITK-SNAP',
      'FDM 3D printing',
    ],
    figure: 'enose',
    image: 'images/enose-transport-methane-decane.mp4',
    imagePoster: 'images/enose-transport-methane-decane-poster.jpg',
    imageAlt: 'Simulated transport of methane and decane through identical channels, side by side',
    outcome: [
      '**Shape does not amplify the signal.** Sweeping the channel angle from straight to a full U at fixed velocity and sniff period more than doubles vorticity at the sensor and tracks Reynolds number near-linearly, but peak concentration and linger time shift by only about 4%. The flow responds strongly to shape while the sensor barely does. This was a negative result, and it redirected the project halfway through.',
      '**Shape does separate compounds.** Probing 100 centerline points across 10 compounds, geometry pulls their signals apart spatially. Methane peaks at 38% of the channel length and decane at 28%, and a 180° bend separates them further than a straight channel does. Where a sensor sits encodes what it is smelling, and the effect is strongest for the lightest compounds.',
      '**The null result is bounded.** A coupled velocity and angle sweep shows the slope of the angle effect rising with velocity, so shape may become a usable lever in flow regimes above those tested.',
      '**Impact.** This redirects the lab from sensor chemistry toward sensor placement, and it supplies the flow-conditioning stage that shapes air before it reaches the sensor in the adaptive electronic nose we are building.',
      '**Status.** Preliminary. The next steps are a log-spaced velocity sweep and varied sniff periods, to locate where the angle effect becomes usable.',
    ],
    outcomeMedia: [
      {
        src: 'images/enose-auc-vs-theta.png',
        alt: 'Total odorant exposure at the sensor plotted against bend angle, showing a flat trend',
        caption: 'The negative result. Total odorant reaching the sensor is flat within about 4% across all 19 bend angles.',
        fit: 'contain',
      },
      {
        src: 'images/enose-place-map.png',
        alt: 'Signal peak position along the channel for each alkane, and the resulting place map',
        caption: 'The useful one. Each compound’s signal peaks at a different point along the channel, from 38% of its length for methane down to 28% for decane.',
        fit: 'contain',
      },
    ],
    skills: [
      'Built a parametric COMSOL model of a nasal-inspired channel, driven by a transient inhale–hold–exhale sniff cycle rather than a steady flow',
      'Designed and ran three parametric sweeps under matched conditions, covering 19 bend angles, 6 inlet speeds, and 10 hydrocarbons',
      'Automated the analysis in Python (Pandas, NumPy, Matplotlib), turning raw transient exports into metrics and plots for every run',
      'Recognised that the sensitivity result was a dead end and redirected the study toward telling compounds apart',
      'Ran the control case that showed the discrimination effect is independent of bend angle, before reporting it',
      'Segmented CT-scanned animal airways in ITK-SNAP and 3D printed them as test geometries for benchtop validation',
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
          'The sniff is three stacked cycles of a 2 s inhale and a 4 s hold, followed by a 15 s flush. Walls are semi-permeable (mass-transfer coefficient 1×10⁻¹⁰ m/s) so analyte is absorbed the way an olfactory epithelium would absorb it, and the sensor is an ideal point probe. I used a k-ε RANS closure to keep run times manageable across a sweep this size; peak Reynolds numbers stay around 17–21, so the flow itself is laminar.',
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
            caption: 'θ = 180°, a full U. Visibly more swirl, and almost the same signal at the probe.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Bend angle: strong on flow, flat on detection',
        body: 'Sweeping θ from 0° to 180° raised peak Reynolds number from 17.1 to 20.8 and peak vorticity from essentially zero to 1.4 s⁻¹, both near-linearly (R² = 0.97 and 0.98). The detection metrics did not follow. Concentration traces for all 19 geometries nearly overlap, total exposure varies by about 4% with no trend (R² = 0.34), and peak signal and residence time are equally flat. A swing that more than doubles the swirl at the sensor buys roughly 4% in what the sensor sees.',
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
            caption: 'Nineteen bend angles, nearly one curve. The three steps are the stacked sniff cycles; the drop after 18 s is the flush.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Sniffing harder erases what little is left',
        body: 'One inlet velocity is one operating point, so I repeated all 19 geometries at six speeds from 2.5 to 15 cm/s and collapsed the sweep onto Π = U_in·T_sniff / L, the number of channel lengths flushed per sniff. Faster sniffing amplified geometry’s effect on the flow and suppressed it on detection: the spread in peak concentration across all bend angles trended down from 1.67 to 0.32 µmol/m³ as Π rose from 0.5 to 3.0. Once the channel clears within a single sniff, the bend has less chance to matter, so whatever influence geometry has is largest at low Π.',
        media: [
          {
            src: 'images/enose-velocity-pi-compare.mp4',
            poster: 'images/enose-velocity-pi-compare-poster.jpg',
            alt: 'Side-by-side simulated transport at low and high dimensionless number',
            caption: 'Π = 0.5 against Π = 3. At high Π the channel is flushed within a single sniff.',
            fit: 'contain',
          },
          {
            src: 'images/enose-conc-range-vs-pi.png',
            alt: 'Plot of peak-concentration spread across bend angles against the dimensionless number',
            caption: 'The spread across all bend angles trends down as Π rises, because faster flow leaves less room for geometry to matter.',
            fit: 'contain',
          },
          {
            src: 'images/enose-auc-vs-pi.png',
            alt: 'Plot of concentration AUC against the dimensionless number with the bend-angle range shaded',
            caption: 'Total exposure climbs with Π and saturates above Π ≈ 2. The shaded band is the full 0 to 180° range, which stays thin at every speed.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'The place map, and what it does not show',
        body: [
          'Molecular weight rises down the alkane series while diffusivity and vapour pressure fall, so I ran the full C₁–C₁₀ set under one geometry and one low inlet speed. Instead of a single sensor I sampled 100 points along the centreline and located x*, the position where signal linger time peaks, for each compound. Plotting x* against carbon number gives a place map, the same trick the cochlea uses to encode pitch by position rather than by tuning a separate receptor to every frequency.',
          'Two checks bound the claim. The bend helps but only marginally: a full U spreads methane and decane across 0.10 of the channel length against 0.09 for a straight channel, which is one probe spacing on a 100-point grid, so most of the separation comes from the compounds’ own transport properties. The effect is also metric-dependent, since repeating the analysis with concentration AUC returns a flat map for all ten compounds. And the map is steep only across the light end, with C1 to about C3 separating clearly while C4 through C10 sit inside a band roughly 0.03 x*/L wide. That is enough to justify testing probe placement and real anatomy, and not enough to claim a working discrimination scheme.',
        ],
        media: [
          {
            src: 'images/enose-place-map-theta0.png',
            alt: 'The same place map computed at a bend angle of zero degrees, nearly identical to the 180 degree case',
            caption: 'The same analysis at θ = 0°. A full U-bend widens the C1 to C10 spread only from 0.09 to 0.10 of the channel length, so most of the separation is not geometry-driven.',
            fit: 'contain',
          },
          {
            src: 'images/enose-place-map-auc.png',
            alt: 'Place map computed with concentration AUC, flat for every compound',
            caption: 'Swap linger time for concentration AUC and the map goes flat, so the effect depends on which metric the sensor reports.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Moving to real anatomy',
        body: 'A smooth channel is a deliberate abstraction; real nasal cavities are dense with turbinate structure, which is where a geometry-driven effect should actually show up if there is one. I have been segmenting CT-scanned animal skulls in ITK-SNAP to extract the airway volume, cleaning the meshes into watertight STLs, and 3D printing them as physical test geometries. The metrics carry over unchanged, so artificial and biological geometries can be compared directly.',
        media: [
          {
            src: 'images/enose-ct-segmentation.png',
            alt: 'Rat skull CT scan in ITK-SNAP with the nasal airway volume segmented in red',
            caption: 'Rat skull CT segmented in ITK-SNAP. The red volume becomes both the CFD domain and the printed test part.',
            fit: 'contain',
          },
        ],
      },
    ],
  },
  {
    slug: 'solar-car-ballast-box',
    title: 'Midnight Sun Solar Car Ballast Box',
    summary:
      'Aluminum sheet-metal ballast box for Midnight Sun Solar Car Team (MS16), owned from first sketch through manufacture, FEA-verified against turning and braking loads, and now on the competition vehicle.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    tools: [
      'SolidWorks (sheet metal)',
      'Static FEA',
      'DFM/DFA principles',
      'Waterjet cutting',
      'Aluminum sheet-metal construction',
    ],
    figure: 'ballast',
    image: 'images/ballast-box-hero.png',
    imageAlt: 'SolidWorks model of the aluminum sheet-metal ballast box alongside its static FEA von Mises stress results',
    outcome: [
      'Full design-to-manufacture ownership: an FEA-verified, 20% lighter sheet-metal enclosure that ended up on the competition vehicle.',
      'I owned the ballast box from first sheet-metal sketch through manufacture, and the finished assembly ended up on the competition vehicle. I designed it in SolidWorks as an aluminum sheet-metal enclosure to DFM/DFA principles, optimized the geometry for waterjet cutting, and ran static FEA to verify the ballast would not break the box under turning and braking. The final design is 20% lighter with structural integrity maintained.',
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
      'Static FEA under turning and braking load cases to verify the shifting ballast would not break the box',
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
        title: 'Strength vs. weight, resolved with FEA',
        body: 'Turning and braking throw 20+ kg of steel shot against the enclosure walls, while the enclosure’s own mass is overhead worth minimizing. Rather than conservatively over-build, I iterated the geometry against static FEA, keeping material on the load paths and removing it where analysis showed margin. The iterations converged on a 20% weight reduction while verifying the ballast would not break the box in either load case.',
        media: [
          {
            src: 'images/ballast-box-fea.png',
            alt: 'Static FEA von Mises stress plot of the ballast box',
            caption: 'Static von Mises stress results. Peak stress of about 34 MPa stays below the 55 MPa yield strength.',
            fit: 'contain',
          },
        ],
      },
      {
        title: 'Designed for manufacturability and assembly',
        body: 'Aluminum sheet metal gave a closed enclosure for loose steel shot and a part the team could actually fabricate. Across many design iterations I used SolidWorks sheet-metal features to keep every FEA-driven geometry change formable, and optimized the geometry for waterjet cutting. Mounting tabs with weld nuts were designed in so the box assembles onto the car easily.',
      },
      {
        title: 'From CAD to the competition vehicle',
        body: 'I carried the box through the full design-to-manufacture cycle: requirements (holding the required ballast volume inside a confined space on the chassis), sheet-metal design, FEA verification, and manufacturing. The finished assembly ended up on the competition vehicle.',
      },
    ],
  },
  {
    slug: 'vehicle-fixtures',
    title: 'Rapid-Turnaround Solar Car Assembly Fixtures',
    summary: "Two solar car assembly fixtures: surface-modeled wheel-cover stencils that follow the aerobody's curvature, and FDM press-fit camera mounts with hours, not weeks, of lead time.",
    category: 'Mechanical Design',
    year: '2025',
    featured: false,
    tools: [
      'Surface modeling',
      'Datum-referenced fixturing',
      'FDM 3D printing',
      'Press-fit design',
      'Rapid prototyping',
    ],
    figure: 'fixtures',
    outcome: [
      'Surface-modeled stencils registered to vehicle datums standardized wheel-cover alignment; FDM press-fit mounts cut camera-mount lead time from weeks to hours.',
      "I treated both as fixture problems built for fast turnaround. I surface-modeled wheel-cover cutting stencils to follow the curvature of the dynamic aerobody, datumed to the ribs of the car, and designed a press-fit camera mount system for FDM 3D printing. Installation accuracy improved and camera-mount lead time dropped from weeks to hours.",
    ],
    skills: [
      'Wheel-cover cutting stencils designed with surface modeling to follow the curvature of the dynamic aerobody',
      'Stencils datumed to the ribs of the car for accurate cut location, ensuring a proper cutout for the wheel cover',
      'Top part angled 45° for easier cutting; stencil design approved',
      'Press-fit camera mount system designed for FDM 3D printing',
      'FDM prototype series used to converge the press-fit dimensions',
      '[Add mount mating interface / interference values]',
    ],
    motivation: 'Solar car assembly was losing time to two small parts. Wheel covers went on with recurring alignment and installation errors, and camera mounts carried lead times of weeks. Both are cheap parts; the cost was in the process around them: rework from misaligned covers, and vehicle integration stalled waiting on mounts.',
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
        body: 'Press-fit retention keeps installation simple and pairs well with fast iteration, since a printed prototype gives immediate pass/fail on fit. But FDM does not hold CAD-nominal dimensions, so I converged the interference physically: print, check, adjust, reprint. Because each cycle takes hours, that tuning was affordable and same-day. [Add designed interference values and iteration count.]',
      },
      {
        title: 'Collapsing lead time with in-house printing',
        body: 'Lead time was the binding constraint, at weeks per mount. Designing for FDM from the outset turns a design file into an installed part in hours and keeps revisions in the team’s hands, at the cost of constraining the design to what the process can hold dimensionally. [Add material / strength tradeoffs versus the previous mounts.]',
      },
    ],
  },
  {
    slug: 'desktop-injection-molder',
    title: 'WAC-A-MOLD Desktop Injection Molder — Clamping Subsystem',
    summary: "Clamping subsystem for the university's first desktop injection molder: parametrized clamping-unit linkages in Onshape and SolidWorks, now in the machining stages.",
    category: 'Product Development',
    year: '2026',
    featured: true,
    tools: [
      'Onshape',
      'SolidWorks',
      'Parametric CAD (variable-driven models)',
      'Linkage design',
      'FEA',
      'Milling',
    ],
    figure: 'molder',
    outcome: [
      "Parametrized clamping-unit linkages carried from concept through CAD to early prototyping; the links are now in the machining stages for the university's first desktop injection molder.",
      "I lead the clamping subsystem from concept through CAD development to early prototyping. I parametrized the clamping-unit linkages as fully variable-driven models in Onshape and SolidWorks, which accelerated iteration and centralized configuration management for the team. The links are now being machined on a mill. The machine is early-stage; performance numbers will follow prototype testing.",
    ],
    skills: [
      'Clamping-unit linkages parametrized as variable-driven models in Onshape and SolidWorks (my subsystem ownership)',
      'FEA performed on the links as they are designed, before geometry is committed to hardware',
      'Links being machined on a mill to carry the design into physical prototypes',
      'Shared parametric workspace for centralized CAD and configuration management across the team',
    ],
    motivation: 'Students at the university lacked accessible injection molding; WAC-A-MOLD will be the first desktop injection molder on campus. As one of the core founding members of the Waterloo Automation Collective, a design team started with a group of 10 students, I own the clamping subsystem: the mechanism that closes the mold and holds it shut against injection pressure, which had to be designed while the rest of the machine was still taking shape.',
    details: [
      {
        title: 'Designing against moving requirements',
        body: 'In an early-stage machine, loads, interfaces, and envelope are all provisional. I parametrized the linkages as fully variable-driven geometry so each change is an edit and a regenerate rather than a remodel. That let the design absorb churn cheaply and kept the whole team on one current model. Parametric structure costs more upfront modeling before it pays off.',
      },
      {
        title: 'Linkage-based clamping architecture',
        body: 'The clamp must generate and hold closing force against injection pressure on a desktop-scale machine, which drove a mechanical-linkage approach. Each link gets FEA as it is designed, so the geometry coming out of the parametric model is checked against load before it is committed to machining.',
      },
      {
        title: 'Machining the first links',
        body: 'The links are being machined on a mill to take the parametric CAD into physical hardware the team can evaluate, rather than models alone. Making the parts ourselves keeps manufacturability concrete: geometry that is trivial to model still has to be fixtured and cut.',
      },
    ],
  },
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
      'Metal additive manufacturing',
      'DC motors',
    ],
    figure: 'gearbox',
    outcome: [
      'Multiple motor-driven gearbox demonstrators now run reliably in undergraduate lectures; parametric CAD reduced gear design cycle time.',
      'Over the Jan–Apr 2026 term I designed and prototyped multiple motor-driven two-stage gearboxes as live lecture hardware. I built the CAD as fully parametric SolidWorks models (including a parametrically modeled helical gear), iterated the FDM-printed components until the assemblies ran reliably, introduced metal AM techniques into the housing via nTop, and integrated DC motors for automated actuation.',
    ],
    skills: [
      'Parametric SolidWorks models incl. a parametrically modeled helical gear',
      'Two-stage gear trains with components optimized for FDM 3D printing',
      'Gearbox housing incorporating metal additive manufacturing techniques, designed in nTop',
      'DC-motor drive providing automated gear actuation for live demos',
      'Multiple gearbox variants delivered for undergraduate lectures [Add exact count]',
    ],
    motivation: "The University of Waterloo's MSAM Lab needed two-stage gearbox demonstrators for undergraduate lectures: physical assemblies that operate reliably and actuate on their own in front of a class. The work had to fit a single four-month term, and every component was FDM 3D printed, a process that constrains how parts must be designed before they run reliably.",
    details: [
      {
        title: 'Parametric CAD for a term of variants',
        body: 'The term required multiple variants and repeated print-driven revisions, so I made the geometry regenerate from parameters, the helical gear especially. Each change became a parameter edit and a regenerate instead of a remodel, which reduced gear design cycle time; the cost is front-loaded modeling effort before it pays back across variants.',
      },
      {
        title: 'Making FDM assemblies run reliably',
        body: 'The printed gearboxes were not reliable as first designed. I iterated the components against real prints ([Add specific DFM changes: clearances, tooth profiles, print orientations]) until assembled gearboxes operated consistently. The parametric models kept that print-and-revise loop cheap.',
      },
      {
        title: 'Two additive processes in one assembly',
        body: 'While the components stayed FDM, I introduced metal AM techniques into the housing, designing it in nTop, a fit for a multi-scale additive manufacturing lab and a way to put two additive processes in one teaching assembly. [Add the nTop workflow, the metal AM process/material, and cost/lead-time tradeoffs versus an FDM housing.]',
      },
    ],
  },
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
