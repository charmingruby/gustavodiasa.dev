import { PropsWithChildren } from 'react'

import { Drawer } from '@/components/layouts/root/drawer'
import { Nav } from '@/components/layouts/root/nav'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

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
