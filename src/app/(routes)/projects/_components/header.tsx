import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="my-8">
      <Button
        variant="ghost"
        className="text-muted-foreground hover:text-foreground"
      >
        <Link prefetch={false} href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </Button>
    </header>
  )
}
