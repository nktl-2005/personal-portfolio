import type { Project } from './types'

// ---------------------------------------------------------------------------
// Featured projects — each card on the Projects grid comes from this array.
// Replace the placeholder "#" links with real GitHub / paper / demo URLs.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    title: 'Solar Car Ballast Box',
    affiliation: 'Midnight Sun Solar Car Team',
    period: '2025 – Present',
    problem:
      'The competition vehicle must carry a minimum of 20 kg of steel-shot ballast that stays secure under driving load cases — including emergency-braking impact — without blowing the chassis weight budget.',
    approach:
      'Designed an aluminum sheet-metal enclosure in SolidWorks using DFM/A principles, then ran static FEA across driving load cases to iteratively thin and reshape the geometry while holding safety margins.',
    impact:
      'Achieved a 20% weight reduction with structural integrity maintained; the design is validated for manufacturing and is being integrated into the competition vehicle chassis.',
    tools: ['SolidWorks', 'Sheet Metal', 'Static FEA', 'DFM/A'],
    links: [
      { type: 'demo', label: 'Build Photos', href: '#' },
      { type: 'presentation', label: 'Design Review', href: '#' },
    ],
  },
  {
    title: 'Two-Stage Educational Gearboxes',
    affiliation: 'MSAM Lab · University of Waterloo',
    period: '2026 – Present',
    problem:
      'Undergraduate lectures needed motorized gearbox demonstrations that are robust enough for live teaching, cheap to produce, and fast to redesign as course content evolves.',
    approach:
      'Built parametric helical-gear and gearbox models in SolidWorks for rapid iteration, optimized components for FDM 3D printing, introduced metal additive manufacturing techniques for the housing using nTop, and integrated DC motors for automated actuation.',
    impact:
      'Cut the gear design cycle time, delivered reliably operating gearbox assemblies, and enabled live motorized demonstrations in undergraduate lectures.',
    tools: ['SolidWorks', 'nTop', 'FDM 3D Printing', 'DC Motors'],
    links: [
      { type: 'paper', label: 'Lab Overview', href: '#' },
      { type: 'demo', label: 'Demo Video', href: '#' },
    ],
  },
  {
    title: 'Pneumatic Piston Mounting Assembly',
    affiliation: 'Refresco Beverages',
    period: '2025',
    problem:
      'Syrup buildup on a production-line pneumatic piston caused mistimed can kickouts, frequent failures, and recurring unplanned downtime.',
    approach:
      'Reverse-engineered the assembly in SolidWorks, redesigned the mounting plate to accept a more durable replacement piston from another vendor, and added a protective cover to block syrup splash — documented with full technical drawings.',
    impact:
      'Extended the expected service life of the assembly by 200%, significantly reducing maintenance frequency and line downtime.',
    tools: ['SolidWorks', 'Technical Drawings', 'Reverse Engineering'],
    links: [{ type: 'presentation', label: 'Case Study', href: '#' }],
  },
  {
    title: 'WAC-A-MOLD Desktop Injection Molder',
    affiliation: 'Waterloo Automation Collective',
    period: '2026 – Present',
    problem:
      'Students have no accessible way to prototype injection-molded parts on campus — the Waterloo Automation Collective set out to build the university’s first desktop injection molder.',
    approach:
      'As a founding member, drove early-stage design and prototyping of key subsystems: parametrically modeled the clamping-unit linkages in SolidWorks/OnShape for fast iteration and machined the links on a mill.',
    impact:
      'Established the clamping-unit architecture and centralized parametric CAD management, accelerating design iteration across the team.',
    tools: ['OnShape', 'SolidWorks', 'Milling', 'Parametric Design'],
    links: [
      { type: 'github', label: 'Team CAD', href: '#' },
      { type: 'demo', label: 'Prototype', href: '#' },
    ],
  },
  {
    title: 'Rapid-Turnaround Vehicle Fixtures',
    affiliation: 'Midnight Sun Solar Car Team',
    period: '2025 – Present',
    problem:
      'Wheel cover installation suffered from alignment errors, and camera mounts carried multi-week lead times that stalled vehicle integration.',
    approach:
      'Modeled wheel-cover cutting stencils referenced to vehicle datum features for repeatable alignment, and designed a press-fit camera mount system engineered specifically for FDM 3D printing.',
    impact:
      'Improved wheel cover assembly accuracy, reduced installation errors, and cut component lead time from weeks to hours.',
    tools: ['SolidWorks', '3D Printing', 'GD&T', 'Press-Fit Design'],
    links: [{ type: 'demo', label: 'Photos', href: '#' }],
  },
  {
    title: 'Arduino Path-Following RoboCar',
    affiliation: 'Personal Project',
    period: '', // TODO: add the year this project was completed

    problem:
      'Build a robot that can autonomously navigate a figure-eight course and climb an inclined ramp using only low-cost light sensors.',
    approach:
      'Programmed the control logic in C++ (Arduino IDE), using light-sensor distance logic to track the line and manage speed through curves and the ramp transition.',
    impact:
      'Achieved stable, repeatable navigation through the full figure-eight path and inclined ramp.',
    tools: ['C++', 'Arduino', 'Light Sensors', 'Control Logic'],
    links: [{ type: 'github', label: 'Source Code', href: '#' }],
  },
]
