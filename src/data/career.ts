interface Experience {
  role: string
  enteprise: string
  technologies: string[]
  description: string
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
    description: 'Develop new features and maintain existing applications.',
    location: 'Remote, Brazil',
    finishedAt: 'Present',
    startedAt: 'Jun 2023',
    site: 'https://www.concatech.com.br/',
  },
]

export { career }
