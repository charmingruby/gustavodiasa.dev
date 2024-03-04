import { ProjectCard } from '@/components/project-card'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((props) => (
        <ProjectCard key={props.name} {...props} />
      ))}
    </div>
  )
}
