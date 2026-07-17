import type { SkillGroup } from './types'

// ---------------------------------------------------------------------------
// Skill groups — the `id` selects the icon in Skills.tsx; edit lists freely.
// ---------------------------------------------------------------------------

export const skillGroups: SkillGroup[] = [
  {
    id: 'cad',
    title: 'CAD & Simulation',
    skills: [
      'SolidWorks',
      'AutoCAD',
      'OnShape',
      'nTop',
      'Static FEA',
      'Surface Modeling',
      'GD&T',
      'DFM / DFA',
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Data',
    skills: [
      'C++',
      'Python',
      'MATLAB / Simulink',
      'RTOS',
      'Git',
      'Ladder Logic (Siemens TIA Portal)',
      'Excel Data Analysis',
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Prototyping',
    skills: [
      'FDM 3D Printing',
      'Milling',
      'Sheet Metal',
      'Arduino',
      'DC Motors & Actuation',
      'Press-Fit Design',
    ],
  },
  {
    id: 'lab',
    title: 'Lab & Research',
    skills: [
      'Additive Manufacturing (Polymer & Metal)',
      'Parametric Modeling',
      'Root Cause Analysis',
      'Preventative Maintenance',
      'BOM Management',
      'CMMS Integration',
    ],
  },
  {
    id: 'leadership',
    title: 'Communication & Leadership',
    skills: [
      'Technical Documentation',
      'Engineering Drawings',
      'Design Reviews',
      'Founding Team Member (WAC)',
      'Live Teaching Demonstrations',
      'Cross-Functional Collaboration',
    ],
  },
]
