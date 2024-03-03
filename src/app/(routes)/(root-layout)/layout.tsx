import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

import { Drawer } from './_components/drawer'
import { Nav } from './_components/nav'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />
      <Drawer />
      <MaxWidthWrapper className="mt-24 md:mt-32">{children}</MaxWidthWrapper>
    </div>
  )
}
