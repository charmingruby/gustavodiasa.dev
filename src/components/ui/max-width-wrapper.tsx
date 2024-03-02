import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto w-full max-w-3xl px-6', className)}>
      {children}
    </div>
  )
}
