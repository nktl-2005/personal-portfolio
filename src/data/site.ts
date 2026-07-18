// ---------------------------------------------------------------------------
// Site-wide content. Edit this file to change the hero, about copy, and
// contact links. Project content lives in projects.ts.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Nicholas Lee',
  /** One-line professional descriptor under the name in the hero */
  descriptor:
    'Research Intern at Harvard.  Junior Mechatronics engineering student at the University of Waterloo.',
  /** Short hero introduction (1–2 sentences) */
  intro:
    'Welcome to my site! I am passionate about designing and building electromechanical systems that sense, actuate, and move.',

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
      'Learn more about me :)',

    // Life outside engineering. Fill each category with your real activities;
    // text in [square brackets] renders as a visible "replace me" chip until you do.
    life: [
      {
        label: 'Engineering Society',
        items: ['LinkedIn Headshot events for engineering students', 'Puppies on Campus for mental health relief', 'Job Fair for engineering students'],
      },
      {
        label: 'Intramural sports',
        items: ['Basketball', 'Soccer', 'Volleyball', 'Flag Football'],
      },
      {
        label: 'Design Teams & Clubs',
        items: ['Midnight Sun Solar Car Team', 'Waterloo Automation Collective', 'UW Cooking Club'],
      },
      {
        label: 'Leadership & community',
        items: ['Engineering Orientation Leader'],
      },
      {
        label: 'Interests & hobbies',
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
