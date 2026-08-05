// ---------------------------------------------------------------------------
// Site-wide content. Edit this file to change the hero, about copy, and
// contact links. Project content lives in projects.ts.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Nicholas Lee',
  /** One-line professional descriptor under the name in the hero */
  descriptor:
    'Research Intern @ Harvard.  Junior Mechatronics engineering student @ the University of Waterloo.',
  /** Short hero introduction (1–2 sentences) */
  intro:
    'Welcome to my site! I enjoy combining mechanical design, electronics, programming, and data-driven thinking to develop practical, user-focused solutions.',

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
      'personal life and interersts',

    // Life outside engineering. Fill each category with your real activities;
    // text in [square brackets] renders as a visible "replace me" chip until you do.
    life: [
      {
        label: 'Intramural Sports',
        items: ['Basketball', 'Soccer', 'Volleyball', 'Flag Football'],
      },
      {
        label: 'Engineering Society',
        items: ['LinkedIn Headshot events for engineering students', 'Puppies on Campus for mental health relief', 'Job Fair for engineering students'],
      },
      {
        label: 'Design Teams & Clubs',
        items: ['Midnight Sun Solar Car Team', 'Waterloo Automation Collective', 'UW Cooking Club'],
      },
      {
        label: 'Leadership & Community',
        items: ['Engineering Orientation Leader'],
      },
      {
        label: 'Interests & Hobbies',
        items: ['Sports, fitness, cars, and cooking'],
      },
    ],
  },
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
] as const
