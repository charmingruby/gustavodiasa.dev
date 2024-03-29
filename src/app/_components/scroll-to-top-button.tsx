'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function ScrollToTopButton() {
  const [progressWidth, setProgressWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY

      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100

      setProgressWidth(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Button
      className={`${progressWidth === 0 ? 'hidden' : 'flex'} fixed bottom-4 right-4`}
      size="icon"
    >
      <a href="#">
        <ChevronUp />
      </a>
    </Button>
  )
}
