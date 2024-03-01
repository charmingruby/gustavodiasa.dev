import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn('max-w-3xl mx-auto w-full', className)}>{children}</div>
  )
}
