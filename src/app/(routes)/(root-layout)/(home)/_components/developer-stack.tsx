import Image from 'next/image'

import elixirIcon from '@/assets/technologies/elixir.svg'
import goIcon from '@/assets/technologies/go.svg'
// dev stack
import nestIcon from '@/assets/technologies/nest.svg'
import nextIcon from '@/assets/technologies/next.svg'
import nodeIcon from '@/assets/technologies/node.svg'
import reactIcon from '@/assets/technologies/react.svg'

interface Technology {
  alt: string
  url: unknown
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
    alt: 'Next Icon',
    url: nextIcon,
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
