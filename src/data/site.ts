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
    // Short framing line — used on the home About preview and the top of the
    // About page. The project pages already cover the engineering; this is the rest.
    blurb:
      'Engineering is most of what’s on this site — but it isn’t all of what I do. Here’s a quick look at the rest.',

    // Life outside engineering. Fill each category with your real activities;
    // text in [square brackets] renders as a visible "replace me" chip until you do.
    life: [
      {
        label: 'Engineering Society',
        items: ['[Add your EngSoc involvement — committees, events, or a rep / exec role]'],
      },
      {
        label: 'Intramural sports',
        items: ['[Add the sports you play and the team or league]'],
      },
      {
        label: 'Student organizations',
        items: ['[Add clubs or communities you’re part of beyond your design teams]'],
      },
      {
        label: 'Leadership & community',
        items: ['[Add volunteering, mentorship, outreach, or leadership roles]'],
      },
      {
        label: 'Interests & hobbies',
        items: ['[Add personal interests and hobbies — what you do to unplug]'],
      },
    ],
  },
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
] as const
