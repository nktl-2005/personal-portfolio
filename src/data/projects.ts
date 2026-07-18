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
    title: 'CFD Study of Nasal-Cavity Geometries for a Universal Adaptive Electronic Nose',
    summary:
      'CFD simulations across nasal-cavity geometries to quantify how anatomy shapes airflow, mass transport, and odor detection.',
    category: 'Sensing & Simulation',
    year: '2026',
    featured: true,
    outcome:
      'Built a reproducible COMSOL-to-Python pipeline linking nasal anatomy to airflow and mass-transfer metrics; study ongoing.',
    role: 'Research Intern',
    team: 'Aizenberg Lab, Harvard University (Cambridge, MA)',
    duration: 'May 2026 - Present',
    tools: ['COMSOL Multiphysics', 'Python', 'Pandas', 'NumPy', 'Matplotlib'],
    figure: 'enose',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/electronic-nose-cfd-1.webp', alt: 'Airflow streamlines from a COMSOL run' },
      { src: 'images/electronic-nose-cfd-2.webp', alt: 'Nasal-cavity geometry or mesh' },
      { src: 'images/electronic-nose-cfd-3.webp', alt: 'Mass-transfer / concentration field' },
      { src: 'images/electronic-nose-cfd-4.webp', alt: 'Matplotlib cross-geometry comparison plot' },
    ],
    why: 'The Aizenberg Lab is developing a universal adaptive electronic nose — a sensor system meant to detect and discriminate odors across varied conditions. In a biological nose, cavity anatomy governs how air and odorant molecules reach the olfactory receptors, and that anatomy varies between individuals, so no single geometry represents the design space. For the artificial nose to generalize, the lab needed to understand how geometry drives airflow and mass transport — quantities that are impractical to measure directly inside physical anatomy.',
    what: {
      lead: 'I built a reproducible COMSOL-to-Python workflow that simulates coupled airflow and odorant mass transport across multiple nasal-cavity geometries and reduces each run to comparable metrics. The study is ongoing; [Add current headline finding].',
      build: [
        'Coupled airflow + mass-transport CFD models in COMSOL Multiphysics',
        'A set of multiple nasal-cavity geometries analyzed under identical physics',
        'Automated Python (Pandas, NumPy) pipeline extracting airflow and mass-transfer metrics from raw field output',
        'Matplotlib visualizations comparing metrics across geometries',
        '[Add: mapping from CFD metrics to electronic-nose design parameters]',
      ],
    },
    how: [
      {
        title: 'Coupling airflow with odorant transport',
        body: 'Odor detection depends on both how air flows through the cavity and how odorant molecules are carried within that flow, so I modeled the two as coupled physics rather than flow alone — the interaction is exactly what a flow-only model would miss. The tradeoff is heavier computation per run. [Add observed runtime or convergence tradeoffs.]',
      },
      {
        title: 'Reducing large datasets reproducibly',
        body: 'Each run produces large field datasets that must collapse to a few comparable metrics. I scripted the extraction in Python up front instead of post-processing by hand, which made every cross-geometry comparison reproducible and let the analysis scale as geometries were added — at the cost of building the pipeline before any result could be compared.',
      },
      {
        title: 'Generalizing across anatomy, not one case',
        body: 'A universal nose must generalize across anatomy, so I simulated multiple geometries under identical physics to isolate the effect of geometry itself rather than optimizing around a single representative cavity. That means more simulations and more data to manage, but it is the only way to capture the anatomical variation the device has to handle.',
      },
    ],
  },
  {
    slug: 'solar-car-ballast-box',
    title: 'Solar Car Ballast Box',
    summary:
      'Aluminum sheet-metal ballast enclosure for a competition solar car, FEA-optimized to cut 20% of its weight while meeting braking load cases.',
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
      'Redesigned a syrup-fouled pneumatic piston mount on a beverage line, extending expected service life by 200%.',
    category: 'Mechanical Design',
    year: '2025',
    featured: true,
    outcome:
      "The redesign extended the assembly's expected service life by 200%, significantly reducing maintenance frequency and line downtime.",
    role: 'Engineering Intern',
    team: 'Refresco Beverages — maintenance/engineering, Mississauga ON',
    duration: '2025 (within Jan–Aug 2025 internship)',
    tools: ['SolidWorks', 'Reverse engineering', 'Technical drawings', 'Vendor component integration'],
    figure: 'piston',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/pneumatic-piston-assembly-1.webp', alt: 'Reverse-engineered SolidWorks model' },
      { src: 'images/pneumatic-piston-assembly-2.webp', alt: 'Redesigned mounting plate' },
      { src: 'images/pneumatic-piston-assembly-3.webp', alt: 'Protective splash cover' },
      { src: 'images/pneumatic-piston-assembly-4.webp', alt: 'Technical drawing sheet' },
    ],
    why: "On Refresco's Mississauga beverage line, syrup and sugar buildup on a pneumatic piston caused mistimed can kickouts and frequent failures — each one a maintenance intervention and line downtime. The mechanism sat directly in the path of syrup splash, so the environment itself, not just the worn part, was the problem to design against.",
    what: {
      lead: "During my internship I redesigned the piston's mounting assembly. I reverse-engineered the existing components in SolidWorks, redesigned the mounting plate to integrate a replacement piston from a different vendor, designed a protective cover to block syrup splash, and documented the redesign in technical drawings. The redesign extended the assembly's expected service life by 200%, significantly cutting maintenance frequency and downtime.",
      build: [
        'Reverse-engineered SolidWorks model of the original assembly',
        'Adapted mounting plate — redesigned to integrate the replacement vendor piston [Add vendor and model]',
        'Protective splash cover — blocks syrup from reaching the mechanism [Add material]',
        'Technical drawing package for the redesigned parts',
      ],
    },
    how: [
      {
        title: 'Rebuilding the assembly in CAD first',
        body: 'Nothing could be designed until the existing hardware was captured, so I reverse-engineered the components in SolidWorks. The as-built model became the common reference every deliverable depended on — the adapted plate had to mate with it, the cover to fit around it, the drawings to describe it — at the cost of capture time before redesign could start. [Add measurement and verification approach.]',
      },
      {
        title: "Adapting the plate to another vendor's piston",
        body: 'The replacement piston came from a different vendor with its own mounting interface, so the original plate could not accept it. I redesigned the plate around the new piston so it took over the kickout function inside the existing assembly — which makes the plate a custom part tied to that interface. [Add the specific interface changes and how fit was verified.]',
      },
      {
        title: 'Attacking the root cause, not the symptom',
        body: 'Replacing the piston alone would leave it exposed to the same syrup splash that failed the original. I added a protective cover to cut off the contamination path — an extra part to fabricate and install, but it targets the buildup that caused the mistimed kickouts rather than treating the wear after the fact. [Add maintenance-access considerations.]',
      },
    ],
  },
  {
    slug: 'arduino-robocar',
    title: 'Autonomous Line-Following Robot Car',
    summary:
      'A C++/Arduino robot car that follows a line with light sensors — stable through a figure-eight course and up an inclined ramp.',
    category: 'Mechatronics',
    year: '[Add year]',
    featured: false,
    outcome:
      'The car navigated a figure-eight course and climbed an inclined ramp autonomously, tracking the line with light-sensor distance logic.',
    role: 'Sole builder and programmer (personal project)',
    team: 'None — personal project',
    duration: '[Add duration] ([Add year])',
    tools: ['C++', 'Arduino IDE', 'Light sensors', 'Distance-logic line tracking'],
    figure: 'robocar',
    // Drop files at /public/images/… to fill these slots (see README).
    gallery: [
      { src: 'images/arduino-robocar-1.webp', alt: 'The assembled car' },
      { src: 'images/arduino-robocar-2.webp', alt: 'Light-sensor array / underside' },
      { src: 'images/arduino-robocar-3.webp', alt: 'Figure-eight run' },
      { src: 'images/arduino-robocar-4.webp', alt: 'Ramp climb' },
    ],
    why: 'A personal project to make a robot car follow a line fully autonomously and prove it on two courses that expose unstable tracking: a figure-eight — which bends in both directions and crosses itself — and an inclined ramp that adds grade on top of tracking.',
    what: {
      lead: 'I built and programmed the car solo. The control software is C++ in the Arduino IDE and steers from light-sensor distance logic with no manual control. It achieved stable navigation on both courses — completing the full figure-eight and climbing the ramp while holding the line.',
      build: [
        'Wheeled car platform with light sensors for path detection [Add chassis, motors, driver]',
        'C++ control program (Arduino IDE) implementing light-sensor distance logic',
        'Arduino board running the program [Add board model]',
        'Validation runs on a figure-eight course and an inclined ramp',
      ],
    },
    how: [
      {
        title: 'Light sensors + distance logic for tracking',
        body: 'A simple sensing input suited a solo build, with the distance logic in software carrying the rest of the work — reading the sensors and deciding the steering corrections that keep the car on the line. Tracking quality is bounded by what the sensors report; anything that degrades the readings degrades the tracking. [Add how readings map to steering — thresholds/gains, loop timing.]',
      },
      {
        title: 'Holding the line through the figure-eight',
        body: 'The figure-eight is the hard tracking test: curvature reverses and the path crosses itself, so the logic has to stay stable through changing turns and take the correct branch at the intersection. The car completed it autonomously. [Add what failed on early attempts and what changed.]',
      },
      {
        title: 'Adding grade with the ramp',
        body: 'The ramp moved the test off flat ground, checking that tracking and drive both hold on an incline; the car climbed it with stable line tracking. [Add ramp angle and any changes needed for the climb.]',
      },
    ],
  },
]
