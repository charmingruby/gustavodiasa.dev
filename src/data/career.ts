interface Experience {
  role: string
  enteprise: string
  technologies: string[]
  site: string
  location: string
  startedAt: string
  finishedAt: string
}

const career: Experience[] = [
  {
    role: 'Junior Backend Developer',
    enteprise: 'Concatech',
    technologies: ['Elixir', 'Phoenix', 'Postgres', 'Tests'],
    location: 'Remote, Brazil',
    finishedAt: 'Present',
    startedAt: 'Nov 2023',
    site: 'https://www.concatech.com.br/',
  },
  {
    role: 'Founder and Full Stack Developer',
    enteprise: 'Apperize',
    technologies: [
      'Golang',
      'TypeScript',
      'React',
      'Next',
      'Node',
      'Nest',
      'GraphQL',
      'Postgres',
    ],
    location: 'Remote, Brazil',
    finishedAt: 'Present',
    startedAt: 'Jun 2023',
    site: 'https://www.concatech.com.br/',
  },
  {
    enteprise: 'UFJF',
    role: 'Professional Training',
    site: 'https://www2.ufjf.br/ufjf/',
    finishedAt: 'Apr 2023',
    startedAt: 'Dec 2022',
    technologies: ['Node', 'React', 'React Native', 'Postgres'],
    location: 'Juiz de Fora - MG, Brazil',
  },
  {
    enteprise: 'UFJF',
    role: 'Professional Training',
    site: 'https://www2.ufjf.br/ufjf/',
    finishedAt: 'Apr 2023',
    startedAt: 'Feb 2023',
    technologies: ['Java'],
    location: 'Juiz de Fora - MG, Brazil',
  },
]

export { career }
