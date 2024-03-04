import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

import { Drawer } from './_components/drawer'
import { Nav } from './_components/nav'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col ">
      <Nav />
      <Drawer />
      <MaxWidthWrapper className="mt-24 flex w-full flex-col  md:mt-32">
        {children}
      </MaxWidthWrapper>
    </div>
  )
}
