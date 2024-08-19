'use client'

import { Menu, X } from 'lucide-react'
import { useContext } from 'react'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { drawerContext } from '@/context/drawer-context'
import { name } from '@/data/profile'

import { NavItem } from '../nav-item'

export function Nav() {
  const { isOpen, toggleMenu } = useContext(drawerContext)

  return (
    <MaxWidthWrapper className="fixed top-2 z-50">
      <header className="flex h-14 items-center justify-between rounded-md border bg-gradient-to-tr from-zinc-900/50 via-zinc-900/10 to-zinc-900/20 pl-4 pr-2 shadow-xl backdrop-blur-md">
        <div>
          <strong className="">{name}</strong>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <NavItem name="About" url="about" />
          <NavItem name="Career" url="career" />
          <NavItem name="Skills" url="skills" />
          <NavItem name="Projects" url="projects" />
          <NavItem name="Get in touch" url="contact" featured />
        </nav>

        <Button size="icon" className="flex md:hidden" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </header>
    </MaxWidthWrapper>
  )
}
