import Image from 'next/image'

import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { Button } from '@/components/ui/button'

import { CopyEmail } from './copy-email'

export function Socials() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="flex w-full items-center gap-2 md:w-fit">
        <Button size="lg" className="w-full text-base font-bold md:w-fit">
          Github
          <Image className="h-5 w-5" src={githubIcon} alt="Github Icon" />
        </Button>
        <Button size="lg" className="w-full text-base font-bold md:w-fit">
          Linkedin
          <Image
            className="h-3.5 w-3.5"
            src={linkedinIcon}
            alt="Linkedin Icon"
          />
        </Button>
      </div>

      <CopyEmail />
    </div>
  )
}
