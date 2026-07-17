import type { ExperienceItem } from './types'

// ---------------------------------------------------------------------------
// Experience timeline — rendered top-to-bottom in this order (most recent first).
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    role: 'Undergraduate Research Assistant',
    organization: 'Multi-Scale Additive Manufacturing (MSAM) Lab',
    location: 'Waterloo, ON',
    period: 'Jan 2026 – Present',
    type: 'Research',
    highlights: [
      'Decreased gear design cycle time through the development of parametric CAD models in SolidWorks.',
      'Ensured reliable operation of educational gearbox assemblies by iteratively designing components optimized for FDM 3D printing.',
      'Integrated DC motors into gearbox systems to enable automated actuation for hands-on educational demonstrations.',
    ],
  },
  {
    role: 'Mechanical Team Member — Founding Member',
    organization: 'Waterloo Automation Collective',
    location: 'Waterloo, ON',
    period: 'Jan 2026 – Present',
    type: 'Leadership',
    highlights: [
      'Pioneered the development of the university’s first desktop injection molder, driving early-stage design and prototyping of key subsystems.',
      'Accelerated design iteration speed and centralized CAD management by developing parametrically driven clamping linkages in OnShape.',
    ],
  },
  {
    role: 'Mechanical Designer',
    organization: 'Midnight Sun Solar Car Team',
    location: 'Waterloo, ON',
    period: 'Sept 2025 – Present',
    type: 'Design Team',
    highlights: [
      'Reduced component weight by 20% while maintaining structural integrity by designing an aluminum sheet-metal ballast box using DFM/A principles and static FEA.',
      'Improved wheel cover assembly accuracy and reduced installation errors by modeling cutting stencils referenced to vehicle datum features.',
      'Accelerated component lead time from weeks to hours by designing and prototyping a press-fit camera mount system for 3D printing.',
    ],
  },
  {
    role: 'Engineering Intern',
    organization: 'Refresco Beverages',
    location: 'Mississauga, ON',
    period: 'Jan 2025 – Aug 2025',
    type: 'Internship',
    highlights: [
      'Reduced bottle fill errors by 50% by performing root cause analysis on production datasets in Excel to identify and mitigate filling-level variances.',
      'Extended the expected service life of a pneumatic piston assembly by 200% by reverse-engineering components in SolidWorks to mitigate sugar buildup.',
      'Reduced unplanned downtime by creating comprehensive technical documentation and BOMs for integration into the CMMS.',
      'Resolved spatial conflicts for a production-line reformat by drafting precise platform locations in AutoCAD.',
    ],
  },
]
