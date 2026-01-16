'use client'

import Link from 'next/link'
import { BsYoutube, BsInstagram, BsGithub } from "react-icons/bs"
import useSound from 'use-sound'

export default function Home() {
  const [playDrill] = useSound('/sounds/drill.mp3')
  const [playKeyboard] = useSound('/sounds/keyboard.mp3')

  return (
    <div className="box-border overflow-hidden bg-cover bg-blob-png">
      <main
        className="w-screen h-screen text-center sm:text-left py-2 grid grid-rows-[1fr_2fr_1fr] sm:grid-rows-[1fr_4fr_1fr] font-['Lexend']"
      >
        <div className="sm:pt-2 sm:pl-4">
          <p className='mb-4 font-bold'>jeremy fields</p>

          <Link
            href="/IRL-projects"
            className="font-bold text-myred hover:opacity-60 cursor-drill"
            onMouseEnter={playDrill}
          >
            IRL projects
          </Link>
          {' / '}
          <Link
            href="/code-projects"
            className="font-bold text-myred hover:opacity-60 cursor-imac"
            onMouseEnter={playKeyboard}
          >
            code projects
          </Link>
          {' / '}
          <Link
            href="/tunes"
            className="font-bold text-myred hover:opacity-60 cursor-music"
          >
            tunes
          </Link>
        </div>
        <div></div>
        <div className="flex flex-col items-center sm:place-self-end sm:mr-12 sm:mb-24">
          <div className='flex justify-between w-32 my-3'>
            <a
              className="text-2xl font-bold text-myred hover:opacity-60"
              href="https://www.youtube.com/@supersecretworkshop"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube/>
            </a>
            <a
              className="text-2xl font-bold text-myred hover:opacity-60"
              href="https://www.instagram.com/supersecretworkshop/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram/>
            </a>
            <a
              className="text-2xl font-bold text-myred hover:opacity-60"
              href="https://github.com/delafields"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub/>
            </a>
          </div>
          <Link
            href="/experience"
            className="font-bold text-myred hover:opacity-60"
          >
            work experience
          </Link>
        </div>
      </main>
    </div>
  )
}
