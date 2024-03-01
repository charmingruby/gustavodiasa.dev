import { PropsWithChildren } from 'react'
import { Nav } from './_components/nav'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full items-center">
      <Nav />
      <MaxWidthWrapper className="mt-16">{children}</MaxWidthWrapper>
    </div>
  )
}
