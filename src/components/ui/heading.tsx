import { PropsWithChildren } from 'react'

export function Heading({ children }: PropsWithChildren) {
  return <h2 className="mb-8 text-2xl font-semibold">{children}</h2>
}
