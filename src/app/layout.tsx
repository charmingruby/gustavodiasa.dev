import '@/styles/globals.css'

import type { Metadata } from 'next'
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google'

import { DrawerContextProvider } from '@/context/drawer-context'

import { Footer } from './_components/footer'
import { ScrollToTopButton } from './_components/scroll-to-top-button'

const fontSans = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Gustavo Dias',
  description: 'Gustavo Dias Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <DrawerContextProvider>
        <body
          className={`${fontSans.variable} dark relative min-h-screen scroll-smooth bg-neutral-950 font-sans antialiased`}
        >
          <div className="fixed left-0 top-0 -z-10 h-[134px] w-[134px] rounded-full bg-orange-500 opacity-50 blur-[150px] md:blur-[350px] lg:h-[300px] lg:w-[300px]" />
          <div className="fixed bottom-0 right-0 -z-10 h-[134px] w-[134px] rounded-full bg-violet-500 opacity-50 blur-[150px] md:blur-[350px] lg:h-[300px] lg:w-[300px]" />

          <div className="flex w-full flex-col items-center">
            {children}
            <ScrollToTopButton />
            <Footer />
          </div>
        </body>
      </DrawerContextProvider>
    </html>
  )
}
