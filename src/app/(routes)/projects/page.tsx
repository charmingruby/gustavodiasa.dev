import { Heading } from '@/components/ui/heading'

import { Projects } from './_components/projects'
import { TechnologiesCount } from './_components/technologies-count'

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <Heading>Projects</Heading>
        <p className="leading-relaxed text-muted-foreground">
          Here are some of my recent projects. Explore this variety and discover
          the results of my development work.
        </p>
      </div>

      <TechnologiesCount />

      <Projects />
    </div>
  )
}
