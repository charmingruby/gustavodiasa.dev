import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

import { Header } from './_components/header'

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <MaxWidthWrapper>
      <Header />
      <main>{children}</main>
    </MaxWidthWrapper>
  )
}
