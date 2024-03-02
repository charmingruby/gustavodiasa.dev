'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

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
    <MaxWidthWrapper className={`fixed bottom-3 flex justify-end`}>
      <Button
        className={`${progressWidth === 0 ? 'hidden' : 'flex'}`}
        size="icon"
      >
        <a href="#">
          <ChevronUp />
        </a>
      </Button>
    </MaxWidthWrapper>
  )
}
