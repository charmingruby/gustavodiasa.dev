import { StaticImageData } from 'next/image'

import awsIcon from '@/assets/technologies/aws.svg'
import dockerIcon from '@/assets/technologies/docker.svg'
import elixirIcon from '@/assets/technologies/elixir.svg'
import goIcon from '@/assets/technologies/go.svg'
import gqlIcon from '@/assets/technologies/graphql.svg'
import grpcIcon from '@/assets/technologies/grpc.svg'
import kubernetesIcon from '@/assets/technologies/kubernetes.svg'
import mongodbIcon from '@/assets/technologies/mongodb.svg'
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
import typescriptIcon from '@/assets/technologies/typescript.svg'

interface Technology {
  alt: string
  url: StaticImageData
}

export const skills: Technology[] = [
  {
    alt: 'Go',
    url: goIcon,
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
    alt: 'Typescript',
    url: typescriptIcon,
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
    alt: 'Elixir',
    url: elixirIcon,
  },
  {
    alt: 'Phoenix',
    url: phoenixIcon,
  },
  {
    alt: 'Python',
    url: pythonIcon,
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
    alt: 'Mongo',
    url: mongodbIcon,
  },
  {
    alt: 'gRPC',
    url: grpcIcon,
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
  {
    alt: 'Kubernetes',
    url: kubernetesIcon,
  },
  {
    alt: 'AWS',
    url: awsIcon,
  },
]
