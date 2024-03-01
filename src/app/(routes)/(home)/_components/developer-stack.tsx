import Image, { StaticImageData } from 'next/image'

// dev stack
import nestIcon from '@/assets/technologies/nest.svg'
import goIcon from '@/assets/technologies/go.svg'
import nodeIcon from '@/assets/technologies/node.svg'
import reactIcon from '@/assets/technologies/react.svg'
import nextIcon from '@/assets/technologies/next.svg'
import elixirIcon from '@/assets/technologies/elixir.svg'

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
        <Image src={url} alt={alt} key={alt} className="w-8 h-8" />
      ))}
    </div>
  )
}
