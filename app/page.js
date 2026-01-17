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
        <div className="flex flex-col items-center pt-12 sm:pt-4 sm:pl-6 sm:w-fit">
          <p className="text-4xl font-['Staatliches'] tracking-wide">JEREMY FIELDS</p>
            <Link
              href="/experience"
              className="text-4xl text-myred hover:opacity-60 font-['Staatliches'] tracking-wide"
            >
              WORK
            </Link>
            <a
              className="text-2xl text-myred hover:opacity-60"
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
            href="/builds"
            className="text-4xl text-myred hover:opacity-60 cursor-drill font-['Staatliches'] tracking-wide"
            onMouseEnter={playDrill}
          >
            BUILDS
          </Link>
          <Link
            href="/code"
            className="text-4xl text-myred hover:opacity-60 cursor-imac font-['Staatliches'] tracking-wide"
            onMouseEnter={playKeyboard}
          >
            CODE
          </Link>
          <Link
            href="/tunes"
            className="text-4xl text-myred hover:opacity-60 cursor-music font-['Staatliches'] tracking-wide"
            onMouseEnter={playRecorder}
          >
            TUNES
          </Link>
        </div>
      </main>
    </div>
  )
}
