// ---------------------------------------------------------------------------
// Central profile data — edit this file to update contact info, links, and
// the copy used across the Hero, About, Resume, and Contact sections.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Nicholas Lee',
  initials: 'NL',
  title: 'Mechatronics Engineering Student',
  university: 'University of Waterloo',
  location: 'Waterloo, ON',
  email: 'n9lee@uwaterloo.ca',

  // TODO: replace with your real profile URLs before deploying.
  github: 'https://github.com/nktl-2005',
  linkedin: 'https://www.linkedin.com/in/nicholaslee---/',

  // File lives in /public — replace it with a newer PDF to update the site.
  resumeFile: 'Nicholas_Lee_Resume.pdf',

  availability: 'Open to co-op & internship opportunities',

  tagline:
    'I design manufacturable hardware — from solar car structures and additive-manufactured gear systems to production-line fixes that cut downtime.',

  bio: [
    'I am a Mechatronics Engineering student at the University of Waterloo (BASc 2028, GPA 3.85, Dean’s Honours) who likes working where CAD meets the shop floor. My favourite projects start with a messy physical constraint — a weight budget, a syrup-covered piston, a weeks-long lead time — and end with hardware that survives contact with reality.',
    'Right now I split my time between the Midnight Sun Solar Car Team, where I design sheet-metal and 3D-printed vehicle components, the Multi-Scale Additive Manufacturing (MSAM) Lab, where I build parametric gearbox models for research and teaching, and the Waterloo Automation Collective, where I am a founding member developing the university’s first desktop injection molder.',
  ],

  focusAreas: [
    'Mechanical design for manufacturing (DFM/DFA, GD&T)',
    'Additive manufacturing — FDM and metal AM workflows',
    'FEA-driven lightweight structural design',
    'Mechatronic integration — motors, sensors, embedded C++',
  ],

  education: {
    degree: 'BASc, Mechatronics Engineering',
    school: 'University of Waterloo',
    period: 'Sept 2023 – May 2028',
    gpa: '3.85 GPA · Dean’s Honours',
    coursework: [
      'Mechanics of Deformable Solids',
      'Thermodynamics and Heat Transfer',
      'Design and Dynamics of Machines',
    ],
  },
}

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const
