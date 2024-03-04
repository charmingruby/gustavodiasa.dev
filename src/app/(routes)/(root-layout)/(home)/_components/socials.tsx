'use client'

import { Copy, CopyCheck } from 'lucide-react'
import Image from 'next/image'

import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { email } from '@/data/profile'

export function Socials() {
  // const [copied, setCopied] = useState<boolean>(false)
  const copied = false

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="flex w-full items-center gap-2 md:w-fit">
        <Button size="lg" className="w-full text-base font-medium md:w-fit">
          Github
          <Image className="h-5 w-5" src={githubIcon} alt="Github Icon" />
        </Button>
        <Button size="lg" className="w-full text-base font-medium md:w-fit">
          Linkedin
          <Image
            className="h-3.5 w-3.5"
            src={linkedinIcon}
            alt="Linkedin Icon"
          />
        </Button>
      </div>

      <div className="flex w-full flex-col items-end">
        <div className="relative w-full">
          <Input value={email} disabled />
          <Button variant="ghost" className="absolute right-0 top-0 h-11">
            {copied ? (
              <CopyCheck className="h-5 w-5 text-emerald-500" />
            ) : (
              <Copy className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
