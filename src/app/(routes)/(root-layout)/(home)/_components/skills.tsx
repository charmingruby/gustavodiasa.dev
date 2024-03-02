import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {skills.map(({ alt, url }) => (
        <Card key={alt} className="bg-transparent px-1.5 py-1">
          <CardHeader className="px-1.5 py-1" />
          <CardContent className="flex  items-center gap-3 px-1.5 py-1">
            <Image src={url} alt={alt} className="h-8 w-8" />
            <CardDescription className="text-base font-medium text-foreground">
              {alt}
            </CardDescription>
          </CardContent>
          <CardFooter className="px-1.5 py-1" />
        </Card>
      ))}
    </div>
  )
}
