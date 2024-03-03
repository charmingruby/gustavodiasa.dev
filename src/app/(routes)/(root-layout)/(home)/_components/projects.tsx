import { LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/socials/github.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map(({ name, description, githubUrl, links, technologies }) => (
        <Card key={name} className="bg-transparent">
          <CardHeader className="space-y-3 p-4">
            <div className="flex items-center">
              <CardTitle className="flex-1 leading-tight">{name}</CardTitle>

              <Button size="icon" className="h-8 w-8">
                <a href={githubUrl} target="_blank">
                  <Image
                    src={githubIcon}
                    alt="Github Icon"
                    className="h-6 w-6"
                  />
                </a>
              </Button>
            </div>

            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardContent className="p-4">
            {links.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                prefetch={false}
                className="flex items-center gap-2 underline underline-offset-4"
              >
                <LinkIcon className="h-4 w-4" />
                Website
              </Link>
            ))}
          </CardContent>

          <CardFooter className="space-x-2 space-y-1 p-4">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
