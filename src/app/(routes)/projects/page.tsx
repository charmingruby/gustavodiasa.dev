import { Projects } from '@/components/layouts/projects/projects'
import { TechnologiesCount } from '@/components/layouts/projects/technologies-count'
import { Heading } from '@/components/ui/heading'

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
