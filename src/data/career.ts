interface Experience {
  role: string
  enteprise: string
  description: string
  technologies: string[]
  site: string
  location: string
  startedAt: string
  finishedAt: string
}

const career: Experience[] = [
  {
    role: 'Mid-Level Full Stack Developer',
    enteprise: 'BrandMonitor',
    description:
      'Designed and implemented web scraping processors, standardized architectural models, and contributed to asynchronous microservices development, while mentoring the team.',
    technologies: [
      'Go',
      'Nest',
      'Node',
      'React',
      'TypeScript',
      'MongoDB',
      'RabbitMQ',
      'GCP',
    ],
    location: 'Remote, Brazil',
    finishedAt: 'Present',
    startedAt: 'Jul 2024',
    site: 'https://www.branddi.com/',
  },
  {
    role: 'Jr. Backend Developer',
    enteprise: 'Concatech',
    description:
      'Developed, maintained, tested, and shipped production APIs for customers systems. Also collaborated with internal microservices development and tooling build.',
    technologies: ['Go', 'Elixir', 'Phoenix', 'Postgres', 'Tests'],
    location: 'Remote, Brazil',
    finishedAt: 'Jul 2024',
    startedAt: 'Nov 2023',
    site: 'https://www.concatech.com.br/',
  },
  {
    role: 'Founder and Full Stack Developer',
    enteprise: 'Apperize',
    description:
      'Built, styled, and shipped high-quality websites, APIs, systems, and digital experiences for a diverse array of projects for clients. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    technologies: [
      'Go',
      'TypeScript',
      'React',
      'Next',
      'Node',
      'Nest',
      'GraphQL',
      'Postgres',
    ],
    location: 'Remote, Brazil',
    finishedAt: 'Jul 2024',
    startedAt: 'Jun 2023',
    site: 'https://www.concatech.com.br/',
  },
  {
    enteprise: 'UFJF',
    role: 'Professional Training',
    description:
      'Build a teleconsultation application for remote medical care of patients with no financial conditions.',
    site: 'https://www2.ufjf.br/ufjf/',
    finishedAt: 'Apr 2023',
    startedAt: 'Dec 2022',
    technologies: ['Node', 'React', 'React Native', 'Postgres'],
    location: 'Juiz de Fora - MG, Brazil',
  },
  {
    enteprise: 'UFJF',
    role: 'Professional Training',
    description:
      'Maintained a project that analyzes developers skills by the commits on Github.',
    site: 'https://www2.ufjf.br/ufjf/',
    finishedAt: 'Apr 2023',
    startedAt: 'Feb 2023',
    technologies: ['Java', 'Git', 'GitHub'],
    location: 'Juiz de Fora - MG, Brazil',
  },
]

export { career }
