import { projects } from '@/data/projects'

interface TechnologyCount {
  name: string
  count: number
}

export function TechnologiesCount() {
  function generateCount() {
    const technologyCountArray: TechnologyCount[] = []

    for (const project of projects) {
      for (const technology of project.technologies) {
        if (technology) {
          const existingTech = technologyCountArray.find(
            (item) => item.name === technology,
          )
          if (existingTech) {
            existingTech.count++
          } else {
            technologyCountArray.push({ name: technology, count: 1 })
          }
        }
      }
    }

    return technologyCountArray
  }

  const techsCount = generateCount()
  const sortedTechsCount = techsCount.sort((a, b) => b.count - a.count)

  return (
    <div className="flex flex-wrap gap-2">
      {sortedTechsCount.map(({ count, name }) => (
        <div key={name} className="flex items-center gap-1 rounded-md border">
          <div className="rounded-l-md bg-foreground p-1 text-sm font-bold text-background">
            {count + 'x'}
          </div>
          <span className="px-2 py-1">{name}</span>
        </div>
      ))}
    </div>
  )
}
