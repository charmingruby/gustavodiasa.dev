import { Play } from 'lucide-react'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface HeadingProps {
  children: ReactNode
  className?: string
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <div className={cn('mb-8 flex items-center gap-2', className)}>
      <Play className="h-4 w-4" />
      <h2 className="text-2xl font-bold md:text-3xl">{children}</h2>
    </div>
  )
}
