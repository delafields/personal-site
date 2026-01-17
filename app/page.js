'use client'

import Link from 'next/link'
import { BsGithub } from "react-icons/bs"
import useSound from 'use-sound'

export default function Home() {
  const [playDrill] = useSound('/sounds/drill.mp3')
  const [playKeyboard] = useSound('/sounds/keyboard.mp3')
  const [playRecorder] = useSound('/sounds/recorder.mp3')

  return (
    <div className="box-border overflow-hidden bg-cover bg-blob-png">
      <main
        className="w-screen h-screen text-center sm:text-left py-2 grid grid-rows-[1fr_2fr_1fr] sm:grid-rows-[1fr_4fr_1fr] font-['Lexend']"
      >
        <div className="sm:pt-4 sm:pl-6 flex flex-wrap items-center gap-x-4 gap-y-1 w-fit">
          <p className='font-bold text-lg w-full'>JEREMY FIELDS</p>
          <Link
            href="/experience"
            className="font-bold text-myred hover:opacity-60"
          >
            work
          </Link>
          <a
            className="text-xl text-myred hover:opacity-60"
            href="https://github.com/delafields"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub/>
          </a>
        </div>
        <div></div>
        <div className="flex flex-col items-center sm:items-end sm:mr-12 sm:mb-16 gap-2">
          <Link
            href="/IRL-projects"
            className="text-xl font-bold text-myred hover:opacity-60 cursor-drill"
            onMouseEnter={playDrill}
          >
            builds
          </Link>
          <Link
            href="/code-projects"
            className="text-xl font-bold text-myred hover:opacity-60 cursor-imac"
            onMouseEnter={playKeyboard}
          >
            code
          </Link>
          <Link
            href="/tunes"
            className="text-xl font-bold text-myred hover:opacity-60 cursor-music"
            onMouseEnter={playRecorder}
          >
            tunes
          </Link>
        </div>
      </main>
    </div>
  )
}
