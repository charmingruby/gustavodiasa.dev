import { CalendarDays, Link, Play } from 'lucide-react'

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
              description,
              location,
              site,
              technologies,
              finishedAt,
              startedAt,
            },
            idx,
          ) => (
            <div key={role + idx} className="-z-10 flex items-start">
              <div className="relative pr-4 sm:pr-6">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                  <CalendarDays
                    className="h-5 w-5 text-background"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="mt-1 pb-12">
                {/* Time */}
                <div className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span>{startedAt}</span>
                  <div className="h-0.5 w-2 rounded-full bg-muted-foreground" />
                  <span>{finishedAt}</span>
                </div>

                {/* Role */}
                <strong className="mb-3 block text-xl">{role}</strong>

                {/* Enterprise */}
                <div className="mb-6 flex items-center gap-2">
                  <a
                    href={site}
                    target="_blank"
                    className="flex items-center gap-2 underline underline-offset-4"
                  >
                    <Link className="h-4 w-4" />
                    {enteprise}
                  </a>

                  <div className="h-1 w-1 rounded-full bg-muted-foreground" />

                  <span className="text-muted-foreground">{location}</span>
                </div>

                {/* Description */}
                <span className="mb-4 block text-sm leading-relaxed text-muted-foreground">
                  {description}
                </span>

                {/* Badges */}
                <div className="space-x-1 space-y-1">
                  {technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}

        <div className="flex items-center gap-3">
          <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <Play className="h-4 w-4 text-background" strokeWidth={2.5} />
          </div>
          <span>Starts at Mar 2021</span>
        </div>
      </div>

      <div className="absolute left-4 top-0 -z-10 h-full w-px border-l border-dashed border-gray-700" />
    </div>
  )
}
