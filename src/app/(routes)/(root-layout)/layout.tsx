import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

import { Nav } from './_components/nav'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />
      <MaxWidthWrapper className="mt-32">{children}</MaxWidthWrapper>
    </div>
  )
}
