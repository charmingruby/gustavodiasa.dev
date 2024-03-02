import { CalendarDays, Play } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { career } from '@/data/career'

export function CareerPath() {
  return (
    <div className="relative ">
      <div>
        {career.map(
          (
            {
              role,
              enteprise,
              location,
              description,
              site,
              technologies,
              finishedAt,
              startedAt,
            },
            idx,
          ) => (
            <div key={role + idx} className="-z-10 flex items-start">
              <div className="relative pr-3">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                  <CalendarDays
                    className="h-5 w-5 text-background"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <div className="mt-1.5 pb-6">
                <div className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span>{startedAt}</span>
                  <div className="h-0.5 w-2 rounded-full bg-zinc-500" />
                  <span>{finishedAt}</span>
                </div>

                <strong>{role}</strong>

                <div className="flex items-center">
                  <a href={site} target="_blank">
                    {enteprise}
                  </a>

                  <div className="h-1.5 w-1.5 bg-zinc-500" />

                  <span>{location}</span>
                </div>

                <p className="mb-4">{description}</p>

                <div className="space-x-1 space-y-1">
                  {technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}

        <div className="mt-8 flex items-center gap-3">
          <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <Play className="h-4 w-4 text-background" strokeWidth={2.5} />
          </div>
          <span>Started at Mar 2021</span>
        </div>
      </div>

      <div className="absolute left-4 top-0 -z-10 h-full w-px border-l border-dashed border-gray-700" />
    </div>
  )
}
