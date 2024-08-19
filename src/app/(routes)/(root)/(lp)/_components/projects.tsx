import { ProjectCard } from '@/components/project-card'
import { pinnedProjects } from '@/data/projects'

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {pinnedProjects.map((props) => (
        <ProjectCard key={props.name} {...props} />
      ))}
    </div>
  )
}
