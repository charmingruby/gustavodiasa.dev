import { PropsWithChildren } from 'react'

import { Header } from '@/components/layouts/projects/header'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <MaxWidthWrapper>
      <Header />
      <main>{children}</main>
    </MaxWidthWrapper>
  )
}
