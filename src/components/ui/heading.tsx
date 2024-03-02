import { Play } from 'lucide-react'
import { PropsWithChildren } from 'react'

export function Heading({ children }: PropsWithChildren) {
  return (
    <div className="mb-8 flex items-center gap-2">
      <Play className="h-5 w-5" />
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  )
}
