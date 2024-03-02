'use client'

import { createContext, PropsWithChildren, useState } from 'react'

interface DrawerContextTypes {
  isOpen: boolean
  toggleMenu: () => void
}

export const drawerContext = createContext({} as DrawerContextTypes)

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <drawerContext.Provider
      value={{
        isOpen,
        toggleMenu,
      }}
    >
      {children}
    </drawerContext.Provider>
  )
}
