import { Heading } from '@/components/ui/heading'

import { Projects } from './_components/projects'
import { TechnologiesCount } from './_components/technologies-count'

export default function Page() {
  return (
    <div>
      <div className="mb-8">
        <Heading>Projects</Heading>
        <p className="leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloribus reiciendis molestias eveniet ut nisi ratione eligendi, quis
          quisquam delectus, cum ea. Natus doloribus laboriosam cum fugiat
          officia reprehenderit commodi!
        </p>
      </div>

      <TechnologiesCount />

      <Projects />
    </div>
  )
}
