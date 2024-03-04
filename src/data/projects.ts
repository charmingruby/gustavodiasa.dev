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
}

const projects: Project[] = [
  {
    name: 'Apperize',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Consulmagno & Assis',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'Tailwind', 'TypeScript', 'GraphQL'],
  },
  {
    name: 'Share It',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
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
    name: 'Clize',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Golang', 'Redis', 'API', 'CLI'],
  },
  {
    name: 'Upl',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Golang', 'Cloudflare', 'Kafka', 'PostgreSQL', 'API'],
  },
  {
    name: 'Backpago',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Golang', 'AWS', 'RabbitMQ', 'PostgreSQL', 'API', 'CLI'],
  },
  {
    name: 'Nigiri',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Node', 'TypeScript', 'Elysia', 'Bun', 'Drizzle', 'API'],
  },
  {
    name: 'Lider Instituto',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Quasar',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
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
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['VSCode Theme'],
  },
  {
    name: 'Trinket Gym',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
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
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Node', 'Nest', 'Prisma', 'TypeScript', 'PostgreSQL', 'API'],
  },
]

const pinnedProjects = projects.slice(0, 4)

export { projects, pinnedProjects }
