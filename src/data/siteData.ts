import type { HeroData, AboutData, ContactLink, NavLink } from '../types'
// Note: We import concrete types to ensure TS compatibility without pulling runtime values.

// HERO DATA
export const HERO_DATA: HeroData = {
  tag: 'Full Stack Engineer',
  name: 'Eduardo Kusznieryk',
  title: '.NET · React · Python · University Lecturer',
  description:
    "I build production-grade web systems and teach what I know. Full stack engineer with real deployment experience, academic research in TinyML and a deep love for well-designed systems.",
  stats: [
    { value: '3+', label: 'Yrs Teaching' },
    { value: '8', label: 'Subjects' },
    { value: '8.64', label: 'GPA' }
  ]
}

// ABOUT DATA
export const ABOUT_DATA: AboutData = {
  paragraphs: [
    "I'm a Full Stack Engineer and university lecturer based in La Plata, Argentina. I hold a degree Analista Programador Universitario from UNLP with a GPA of 8.64, and I'm currently completing my Licenciatura en Sistemas thesis.",
    "My professional work spans production systems in .NET C#, backend APIs in Python/Flask with real data requirements, and frontend development in React / Next.js with a focus on usability.",
    "Since 2023 I've been a teaching assistant at the Faculty of Informatics, UNLP, covering topics from database architecture and NoSQL systems to Deep Learning — convolutional, recurrent, and generative neural networks.",
    "I'm a genuine advocate for open source and lifelong learning. I break things to understand them, then teach what I find."
  ],
  facts: [
    { label: 'Location', value: 'La Plata, Buenos Aires' },
    { label: 'Education', value: 'UNLP — Lic. en Sistemas' },
    { label: 'English', value: 'B2 — Platzi English Academy' },
    { label: 'Research', value: 'TinyML / AI Embebida · LIDI' }
  ],
}

// CONTACT LINKS
export const CONTACT_LINKS: ContactLink[] = [
  { href: 'mailto:contact@ekusz.com', icon: 'email', label: 'Email' },
  { href: 'https://github.com/kusznieryk', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/kusznieryk/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'tel:+5492214884401', icon: 'phone', label: 'Phone' }
]

// NAV LINKS
export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

// FOOTER DATA
export const FOOTER_DATA = {
  copyright: '© 2026 Eduardo Kusznieryk · La Plata, Argentina',
  links: [
    { href: 'https://github.com/kusznieryk', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/kusznieryk/', label: 'LinkedIn' },
    { href: 'https://ekusz.com', label: 'ekusz.com' }
  ]
}
