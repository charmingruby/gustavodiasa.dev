'use client'

import { Clipboard, ClipboardCheck, Copy, CopyCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { email } from '@/data/profile'

export function Socials() {
  const [copied, setCopied] = useState<boolean>(false)

  return (
    <div className="flex items-start gap-4">
      <Button size="lg" className="text-base font-medium">
        Github
        <Image className="h-5 w-5" src={githubIcon} alt="Github Icon" />
      </Button>
      <Button size="lg" className="text-base font-medium">
        Linkedin
        <Image className="h-3.5 w-3.5" src={linkedinIcon} alt="Linkedin Icon" />
      </Button>

      <div className="flex w-full flex-col items-end">
        <div className="relative w-full flex-1">
          <Input value={email} disabled />
          <Button variant="ghost" className="absolute right-0 top-0">
            {copied ? (
              <CopyCheck className="h-5 w-5 text-emerald-500" />
            ) : (
              <Copy className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>

        <small className="mt-1 block text-right text-xs text-muted-foreground">
          Copy email
        </small>
      </div>
    </div>
  )
}
