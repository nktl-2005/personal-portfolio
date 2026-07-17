import type { Publication, ResearchInterest } from './types'

// ---------------------------------------------------------------------------
// Research section content. `publications` is intentionally empty for now —
// the UI renders a graceful placeholder. Add entries as they are published:
//
//   {
//     title: 'Parametric Design of FDM-Optimized Gear Systems',
//     venue: 'Conference / Journal Name',
//     year: '2026',
//     authors: 'N. Lee, et al.',
//     type: 'Poster',
//     href: 'https://doi.org/...',
//   }
// ---------------------------------------------------------------------------

export const affiliation = {
  lab: 'Multi-Scale Additive Manufacturing (MSAM) Lab',
  institution: 'University of Waterloo',
  role: 'Undergraduate Research Assistant',
  period: 'Jan 2026 – Present',
  description:
    'Developing parametric gearbox systems that bridge additive manufacturing research and undergraduate teaching — from FDM-optimized components to metal AM housings designed in nTop.',
}

export const interests: ResearchInterest[] = [
  {
    title: 'Additive Manufacturing',
    description:
      'Design for FDM and metal AM — exploiting the geometric freedom of 3D printing while respecting its process constraints.',
  },
  {
    title: 'Parametric Design Automation',
    description:
      'Fully parametric CAD models that shorten design cycle times for entire families of mechanical components.',
  },
  {
    title: 'Lightweight Structural Design',
    description:
      'FEA-driven geometry optimization that removes material without sacrificing stiffness or safety margins.',
  },
  {
    title: 'Mechatronic Integration',
    description:
      'Combining motors, sensors, and embedded control with mechanical systems to build demonstrable, actuated hardware.',
  },
]

export const methods = [
  'SolidWorks (parametric modeling)',
  'nTop (implicit modeling for metal AM)',
  'FDM 3D printing',
  'Static FEA',
  'DC motor integration',
  'Design for Additive Manufacturing',
]

export const publications: Publication[] = []
