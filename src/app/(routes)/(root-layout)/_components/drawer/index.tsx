'use client'

import { useContext } from 'react'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { drawerContext } from '@/context/drawer-context'

import { NavItem } from '../nav-item'

export function Drawer() {
  const { isOpen } = useContext(drawerContext)

  return (
    <MaxWidthWrapper
      className={`${isOpen ? 'z-50 opacity-100' : '-z-10 opacity-0'} fixed top-[4.5rem] w-full transition-opacity`}
    >
      <nav className="rounded-md border bg-gradient-to-tr from-zinc-900/50 via-zinc-900/10 to-zinc-900/20 p-4 shadow-xl backdrop-blur-md">
        <NavItem name="About" url="about" isMobile />
        <NavItem name="Career" url="career" isMobile />
        <NavItem name="Skills" url="skills" isMobile />
        <NavItem name="Projects" url="projects" isMobile />
        <NavItem name="Get in touch" url="contact" featured isMobile />
      </nav>
    </MaxWidthWrapper>
  )
}
