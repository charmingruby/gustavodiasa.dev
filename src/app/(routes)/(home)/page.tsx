import { name, role } from '@/data/profile'
import avatar from '@/assets/avatar.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DownloadCVButton } from './_components/download-cv-button'
import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { DeveloperStack } from './_components/developer-stack'
import { career } from '@/data/career'
import { Badge } from '@/components/ui/badge'

export default function Page() {
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section className="flex items-start gap-8">
        {/* Informations */}
        <div className="flex flex-col flex-1">
          <div className="">
            <h1 className="font-bold my-0 mb-2 text-5xl">{name}</h1>
            <strong className="text-muted-foreground text-lg">{role}</strong>
          </div>

          <div className="my-8">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              eveniet eos quibusdam iusto error vitae aperiam. Magni quia ipsa,
              eveniet laborum ut eos dicta, tenetur assumenda, adipisci incidunt
              consectetur quaerat.
            </p>
          </div>

          <DeveloperStack />

          <div className="mt-12 flex items-center gap-2">
            <Button size="icon">
              <Image src={githubIcon} alt="Github icon" className="h-7 w-7" />
            </Button>
            <Button size="icon">
              <Image
                src={linkedinIcon}
                alt="Linkedin icon"
                className="h-5 w-5"
              />
            </Button>
            <DownloadCVButton />
          </div>
        </div>

        {/* Avatar */}
        <div>
          <Image
            src={avatar}
            alt="Gustavo's avatar image"
            priority
            quality={100}
            className="rounded-full h-32 w-32"
          />
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="font-semibold text-2xl mb-8">About</h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I{"'"}m a{' '}
            <span className="text-foreground font-semibold">
              Full Stack Developer
            </span>
            . I{"'"}m living in Juiz de Fora, MG - Brazil, and undergraduating
            in{' '}
            <span className="text-foreground font-semibold">
              Computer Science at UFJF
            </span>
            .
          </p>

          <p>
            I started my journey in 2021, acting as a Freelancer and Projects
            Assistant, gaining valuable experience along the way. With this
            extensive experience, I took the bold step of founding my own
            software house,{' '}
            <a
              target="_blank"
              href="https://www.apperize.com.br/"
              className="underline underline-offset-4 text-foreground font-semibold"
            >
              Apperize
            </a>
            , specializing in custom software development.
          </p>
        </div>
      </section>

      {/* Career */}
      <section>
        <h2 className="font-semibold text-2xl mb-8">Career</h2>

        <div>
          {career.map(
            ({
              role,
              enteprise,
              location,
              description,
              site,
              technologies,
              finishedAt,
              startedAt,
            }) => (
              <div key={role}>
                <strong>{role}</strong>

                <div className="flex items-center">
                  <a href={site} target="_blank">
                    {enteprise}
                  </a>

                  <div className="h-1.5 w-1.5 bg-zinc-500" />

                  <span>{location}</span>
                </div>

                <p>{description}</p>

                <div className="flex items-center">
                  <span>{startedAt}</span>
                  <div className="h-0.5 w-2 bg-zinc-500 rounded-full" />
                  <span>{finishedAt}</span>
                </div>

                <div>
                  {technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  )
}
