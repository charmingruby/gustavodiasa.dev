import Image from 'next/image'

import avatar from '@/assets/avatar.png'
import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { githubUrl, linkedinUrl, name, role } from '@/data/profile'

import { CareerPath } from './_components/career-path'
import { ContactForm } from './_components/contact-form/form'
import { DeveloperStack } from './_components/developer-stack'
import { DownloadCVButton } from './_components/download-cv-button'

export default function Page() {
  return (
    <main className="space-y-24 scroll-smooth">
      {/* Hero */}
      <section className="flex items-start gap-8">
        {/* Informations */}
        <div className="flex flex-1 flex-col">
          <div className="">
            <h1 className="my-0 mb-2 text-5xl font-bold">{name}</h1>
            <strong className="text-lg text-muted-foreground">{role}</strong>
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
            <Button size="icon" asChild>
              <a href={githubUrl} target="_blank">
                <Image src={githubIcon} alt="Github icon" className="h-7 w-7" />
              </a>
            </Button>

            <Button size="icon" asChild>
              <a href={linkedinUrl} target="_blank">
                <Image
                  src={linkedinIcon}
                  alt="Linkedin icon"
                  className="h-5 w-5"
                />
              </a>
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
            className="h-32 w-32 rounded-full"
          />
        </div>
      </section>

      {/* About */}
      <section>
        <Heading>About</Heading>

        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            I{"'"}m a{' '}
            <span className="font-semibold text-foreground">
              Full Stack Developer
            </span>
            . I{"'"}m living in Juiz de Fora, MG - Brazil, and undergraduating
            in{' '}
            <span className="font-semibold text-foreground">
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
              className="font-semibold text-foreground underline underline-offset-4"
            >
              Apperize
            </a>
            , specializing in custom software development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <Heading>Skills</Heading>
      </section>

      {/* Projects */}
      <section>
        <Heading>Projects</Heading>
      </section>

      {/* Career */}
      <section>
        <Heading>Career</Heading>
        <CareerPath />
      </section>

      {/* Contact Form */}
      <section>
        <Heading>Connect</Heading>

        <ContactForm />
      </section>
    </main>
  )
}