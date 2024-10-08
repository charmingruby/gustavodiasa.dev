import { ArrowRight, Mails } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import avatar from '@/assets/avatar.png'
import githubIcon from '@/assets/socials/github.png'
import linkedinIcon from '@/assets/socials/linkedin.png'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { githubUrl, linkedinUrl, name, role } from '@/data/profile'

import { AboutMeText } from './_components/about-me-text'
import { CareerPath } from './_components/career-path'
import { ContactForm } from './_components/contact-form/form'
import { DeveloperStack } from './_components/developer-stack'
import { DownloadCVButton } from './_components/download-cv-button'
import { Projects } from './_components/projects'
import { Skills } from './_components/skills'
import { Socials } from './_components/socials'

export default function Page() {
  return (
    <main className="space-y-24 ">
      {/* Hero */}
      <section className="flex flex-col-reverse items-start gap-8 md:flex-row">
        {/* Informations */}
        <div className="flex flex-1 flex-col">
          <div className="">
            <h1 className="my-0 mb-4 text-4xl font-bold md:text-5xl">{name}</h1>
            <span className="text-lg text-muted-foreground">{role}</span>
          </div>

          <div className="my-8">
            <p className="leading-relaxed ">
              Software engineer with a strong passion for problem-solving and
              creating efficient, user-friendly software solutions.
            </p>
          </div>

          <DeveloperStack />

          <div className="mt-12 flex items-center gap-2">
            <Button size="icon">
              <a href={githubUrl} target="_blank">
                <Image src={githubIcon} alt="Github icon" className="h-7 w-7" />
              </a>
            </Button>

            <Button size="icon">
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
      <section id="about" className="scroll-mt-24">
        <Heading>About</Heading>

        <AboutMeText />
      </section>

      {/* Career */}
      <section id="career" className="scroll-mt-24">
        <Heading>Career</Heading>
        <CareerPath />
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24">
        <Heading>Skills</Heading>

        <div>
          <Skills />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <div className="mb-8 flex items-center justify-between">
          <Heading className="mb-0">Projects</Heading>

          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div>
          <Projects />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="scroll-mt-24">
        <Heading>Get in touch</Heading>

        <div className="mb-8">
          <p className="leading-relaxed text-muted-foreground">
            Feel free to contact me anywhere, at anytime. I{"'"}ll answer as
            soon as possible.
          </p>
        </div>

        <div className="mb-12">
          <Socials />
        </div>

        <Separator orientation="horizontal" className="my-12" />

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Mails />
            <h2>Send an e-mail</h2>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
