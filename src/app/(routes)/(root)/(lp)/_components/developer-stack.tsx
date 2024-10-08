import Image, { StaticImageData } from 'next/image'

import elixirIcon from '@/assets/technologies/elixir.svg'
import goIcon from '@/assets/technologies/go.svg'
import nestIcon from '@/assets/technologies/nest.svg'
import nodeIcon from '@/assets/technologies/node.svg'
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
  {
    alt: 'Elixir Icon',
    url: elixirIcon,
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
