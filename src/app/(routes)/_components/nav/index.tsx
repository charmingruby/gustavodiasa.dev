import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import Link from 'next/link'
import { name } from '@/data/profile'

export function Nav() {
  return (
    <MaxWidthWrapper className="border rounded-md fixed py-2 pl-4 pr-2 bg-gradient-to-tr from-zinc-900/50  via-zinc-900/10 to-zinc-900/20 backdrop-blur-md flex items-center justify-between shadow-xl top-2 z-10">
      <div>
        <strong className="">{name}</strong>
      </div>

      <nav className="flex items-center gap-2">
        <div>
          <Button size="sm" variant="ghost" asChild>
            <Link prefetch={false} href="/">
              Skills
            </Link>
          </Button>

          <Button size="sm" variant="ghost" asChild>
            <Link prefetch={false} href="/">
              Projects
            </Link>
          </Button>

          <Button size="sm" variant="ghost" asChild>
            <Link prefetch={false} href="/">
              Career
            </Link>
          </Button>
        </div>

        <Button>Get in touch</Button>
      </nav>
    </MaxWidthWrapper>
  )
}
