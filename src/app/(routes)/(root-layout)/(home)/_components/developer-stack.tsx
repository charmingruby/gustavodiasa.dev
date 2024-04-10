import Image, { StaticImageData } from 'next/image'

import elixirIcon from '@/assets/technologies/elixir.svg'
import goIcon from '@/assets/technologies/go.svg'
// dev stack
import nestIcon from '@/assets/technologies/nest.svg'
import nodeIcon from '@/assets/technologies/node.svg'
import phoenixIcon from '@/assets/technologies/phoenix.svg'
import reactIcon from '@/assets/technologies/react.svg'

interface Technology {
  alt: string
  url: StaticImageData
}

const stack: Technology[] = [
  {
    alt: 'Go Icon',
    url: goIcon,
  },
  {
    alt: 'Elixir Icon',
    url: elixirIcon,
  },
  {
    alt: 'Phoenix Icon',
    url: phoenixIcon,
  },
  {
    alt: 'Node Icon',
    url: nodeIcon,
  },
  {
    alt: 'Nest icon',
    url: nestIcon,
  },
  {
    alt: 'React Icon',
    url: reactIcon,
  },
]

export function DeveloperStack() {
  return (
    <div className="flex items-center gap-4">
      {stack.map(({ alt, url }) => (
        <Image
          src={url}
          alt={alt}
          key={alt}
          className="h-8 w-8"
          draggable={false}
        />
      ))}
    </div>
  )
}
