import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { name } from '@/data/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full pt-24">
      <MaxWidthWrapper className="flex items-center justify-center gap-2 border-t py-6 text-xs text-muted-foreground md:text-base">
        <span>©{currentYear}</span>
        <div className="h-0.5 w-2 rounded-full bg-zinc-500" />
        <span>{`${name}. All rights deserved.`}</span>
      </MaxWidthWrapper>
    </footer>
  )
}
