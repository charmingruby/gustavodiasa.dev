import Link from 'next/link'
import { useContext } from 'react'

import { Button } from '@/components/ui/button'
import { drawerContext } from '@/context/drawer-context'

interface NavItemProps {
  name: string
  url: string
  featured?: boolean
  isMobile?: boolean
}

export function NavItem({
  name,
  url,
  featured = false,
  isMobile = false,
}: NavItemProps) {
  const { toggleMenu } = useContext(drawerContext)

  return (
    <Link prefetch={false} href={`#${url}`}>
      <Button
        variant={featured ? 'default' : 'ghost'}
        className="w-full"
        onClick={isMobile ? toggleMenu : () => {}}
      >
        {name}
      </Button>
    </Link>
  )
}
