// ---------------------------------------------------------------------------
// Site-wide content. Edit this file to change the hero, about copy, and
// contact links. Project content lives in projects.ts.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Nicholas Lee',
  /** One-line professional descriptor under the name in the hero */
  descriptor:
    'Mechatronics engineering student designing sensing, fluid, and electromechanical systems.',
  /** Short hero introduction (1–2 sentences) */
  intro:
    'I work where CAD meets the shop floor and the lab bench — currently running nasal-airflow CFD for an adaptive electronic nose at Harvard, after seasons of solar car structures, production-line fixes, and a student-built injection molder.',

  email: 'n9lee@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/nicholaslee---/',
  github: 'https://github.com/nktl-2005',
  /** File lives in /public — replace it to update the resume everywhere it's linked */
  resumeFile: 'Nicholas_Lee_Resume.pdf',

  /** Base URL of the deployed site (used for sitemap/canonical metadata) */
  url: 'https://nktl-2005.github.io/personal-portfolio/',

  about: {
    now: 'I am a Mechatronics Engineering student at the University of Waterloo (BASc 2023–2028, Dean’s Honours), currently a research intern in the Aizenberg Lab at Harvard University, where I run COMSOL CFD studies of nasal-cavity airflow and build Python pipelines that turn large simulation datasets into comparable metrics for an adaptive electronic nose.',
    interests:
      'The common thread in my work is physical systems that have to sense or move something real: airflow and mass transport around sensors, structures that carry impact loads, mechanisms that survive production lines. I gravitate to problems where the constraint set is physical — a weight budget, a syrup-covered piston, a lead time measured in weeks — and the answer has to be manufactured, not just modeled.',
    approach:
      'I like to parameterize early and iterate fast: parametric CAD so a family of designs changes in minutes, simulation to kill weak concepts before they reach a printer or a mill, and design-for-manufacturing decisions made at the sketch stage rather than after the first failed build. Then I validate against reality — FEA against load cases, sensors against reference instruments, prototypes against the people who use them.',
    teams:
      'Alongside research, I design vehicle structures and fixtures for the Midnight Sun Solar Car Team and I am a founding member of the Waterloo Automation Collective, where I own the clamping subsystem of the university’s first desktop injection molder.',
  },
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
] as const
