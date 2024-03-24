interface Link {
  name: string
  url: string
}

export interface Project {
  name: string
  description: string
  githubUrl: string
  links: Link[]
  technologies: string[]
  building?: boolean
}

const projects: Project[] = [
  {
    name: 'Apperize',
    description: 'Software House landing page.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Consulmagno & Assis',
    description: 'Institutional website freelance for a law firm.',
    githubUrl: 'https://github.com/charmingruby/consulmagno-e-assis',
    links: [{ name: 'Website', url: 'https://www.consulmagnoeassis.com.br/' }],
    technologies: ['Next', 'React', 'Tailwind', 'TypeScript', 'GraphQL'],
  },
  {
    name: 'Share It',
    description:
      'Forum API that uses concepts of Domain Driven Design and Clean Architecture.',
    githubUrl: 'https://github.com/charmingruby/share-it',
    links: [],
    technologies: [
      'Node',
      'Nest',
      'Cloudflare',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'API',
      'Vitest',
      'Prisma',
    ],
  },
  {
    name: 'Upl',
    description: 'Group upload sharing application.',
    githubUrl: 'https://github.com/charmingruby/upl',
    links: [],
    technologies: ['Golang', 'Cloudflare', 'PostgreSQL', 'API'],
  },
  {
    name: 'Invarc',
    description: 'Group upload sharing application.',
    githubUrl: 'https://github.com/charmingruby/invarc',
    links: [],
    technologies: ['Elixir', 'Phoenix', 'PostgreSQL', 'API'],
  },
  {
    name: 'MVPlease',
    description: 'Consistent and scalable MVP boilerplate.',
    githubUrl: 'https://github.com/charmingruby/mvplease',
    links: [],
    technologies: ['Golang', 'Cloudflare', 'PostgreSQL', 'API'],
  },
  {
    name: 'Flowdes',
    description:
      'Service to transform dense workflows into significant tiny nodes.',
    githubUrl: 'https://github.com/charmingruby/flowdes',
    links: [],
    technologies: ['Golang', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'API'],
  },
  {
    name: 'Clize',
    description:
      'CLI for internal project team assignments quick communication.',
    githubUrl: 'https://github.com/charmingruby/clize',
    links: [],
    technologies: ['Golang', 'Redis', 'API', 'CLI'],
  },
  {
    name: 'Backpago',
    description: 'Files upload service.',
    githubUrl: 'https://github.com/charmingruby/backpago',
    links: [],
    technologies: ['Golang', 'AWS', 'RabbitMQ', 'PostgreSQL', 'API', 'CLI'],
  },
  {
    name: 'Lider Instituto',
    description: 'Institutional website freelance for a dentists institute.',
    githubUrl: 'https://github.com/charmingruby/lider-instituto',
    links: [{ name: 'Website', url: 'https://www.liderinstituto.com.br/' }],
    technologies: ['Next', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Quasar',
    description: 'Barber shop scheduling MVP.',
    githubUrl: 'https://github.com/charmingruby/quasar',
    links: [],
    technologies: [
      'Next',
      'React',
      'Tailwind',
      'Prisma',
      'SQLite',
      'TypeScript',
      'API',
    ],
  },
  {
    name: 'Pitaya Theme',
    description: 'Cozy VSCode theme to programm with.',
    githubUrl: 'https://github.com/charmingruby/pitaya',
    links: [],
    technologies: ['VSCode Theme'],
  },
  {
    name: 'Trinket Gym',
    description: 'Gym pass service.',
    githubUrl: 'https://github.com/charmingruby/trinket-gym-api',
    links: [],
    technologies: [
      'Node',
      'Prisma',
      'Vitest',
      'TypeScript',
      'Fastify',
      'PostgreSQL',
      'API',
    ],
  },
  {
    name: 'Ping',
    description: 'Notification service.',
    githubUrl: 'https://github.com/charmingruby/ping-api',
    links: [],
    technologies: ['Node', 'Nest', 'Prisma', 'TypeScript', 'PostgreSQL', 'API'],
  },
]

const pinnedProjects = projects.slice(0, 4)

export { projects, pinnedProjects }
