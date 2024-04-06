import dockerIcon from '@/assets/technologies/docker.svg'
import elixirIcon from '@/assets/technologies/elixir.svg'
import fastapiIcon from '@/assets/technologies/fastapi.svg'
import goIcon from '@/assets/technologies/go.svg'
import gqlIcon from '@/assets/technologies/graphql.svg'
import mysqlIcon from '@/assets/technologies/mysql.svg'
import nestIcon from '@/assets/technologies/nest.svg'
import nextIcon from '@/assets/technologies/next.svg'
import nodeIcon from '@/assets/technologies/node.svg'
import phoenixIcon from '@/assets/technologies/phoenix.svg'
import postgresIcon from '@/assets/technologies/postgresql.svg'
import pythonIcon from '@/assets/technologies/python.svg'
import rabbitMqIcon from '@/assets/technologies/rabbitmq.svg'
import reactIcon from '@/assets/technologies/react.svg'
import redisIcon from '@/assets/technologies/redis.svg'
import tailwindIcon from '@/assets/technologies/tailwindcss.svg'
import typescriptIcon from '@/assets/technologies/typescript.svg'

interface Technology {
  alt: string
  url: unknown
}

export const skills: Technology[] = [
  {
    alt: 'Golang',
    url: goIcon,
  },
  {
    alt: 'Elixir',
    url: elixirIcon,
  },
  {
    alt: 'Phoenix',
    url: phoenixIcon,
  },
  {
    alt: 'Typescript',
    url: typescriptIcon,
  },
  {
    alt: 'Node',
    url: nodeIcon,
  },
  {
    alt: 'Nest',
    url: nestIcon,
  },
  {
    alt: 'Python',
    url: pythonIcon,
  },
  {
    alt: 'Fast API',
    url: fastapiIcon,
  },
  {
    alt: 'React',
    url: reactIcon,
  },
  {
    alt: 'Next',
    url: nextIcon,
  },
  {
    alt: 'PostgreSQL',
    url: postgresIcon,
  },
  {
    alt: 'Redis',
    url: redisIcon,
  },
  {
    alt: 'MySQL',
    url: mysqlIcon,
  },
  {
    alt: 'Tailwind',
    url: tailwindIcon,
  },
  {
    alt: 'GraphQL',
    url: gqlIcon,
  },
  {
    alt: 'Docker',
    url: dockerIcon,
  },
  {
    alt: 'RabbitMQ',
    url: rabbitMqIcon,
  },
]
