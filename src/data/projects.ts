interface Link {
  name: string
  url: string
}

interface Project {
  name: string
  description: string
  githubUrl: string
  links: Link[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: 'Apperize',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'Tailwind'],
  },
  {
    name: 'Consulmagno & Assis Advocacia',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'Tailwind'],
  },
  {
    name: 'Share It',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'Tailwind'],
  },
  {
    name: 'Clize',
    description:
      'Software House Platform aiming to create custom applications that fits with the customers necessities.',
    githubUrl: 'https://github.com/charmingruby/apperize',
    links: [{ name: 'Website', url: 'https://www.apperize.com.br' }],
    technologies: ['Next', 'React', 'Tailwind'],
  },
]
