import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import drillSfx from '../public/sounds/drill.mp3';
import keyboardSfx from '../public/sounds/keyboard.mp3';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';


export default function Home() {
  const [playDrill] = useSound(drillSfx);
  const [playKeyboard] = useSound(keyboardSfx);
  const { topTracks } = useSWR('/api/top-tracks', fetcher);
  const { recentTracks } = useSWR('/api/recent-tracks', fetcher);

  return (
    <div className="box-border w-screen h-screen min-h-full overflow-hidden border-white border-20">
      <Head>
        <title>Jeremy Fields</title>
        <meta name="jeremy fields" content="personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main 
        className="min-h-full p-2 sm:rounded bg-paper-stripes grid grid-rows-[1fr_1fr_4fr] sm:grid-rows-[1fr_4fr_1fr] font-['Lexend']"
        >
        <div className="pt-2 pl-4">
          jeremy fields<br/>
          currently a {' '}
          <a 
            className="font-bold text-myred-500 hover:opacity-60"
            href="https://delafields.github.io/" 
            target="_blank" 
            rel="noreferrer"
          >
            data scientist
          </a>
          {' '}@bloomberg
          <br/>
          <Link href="/IRLprojects">
            <a className="font-bold text-myred hover:opacity-60 cursor-drill" onMouseEnter={playDrill}>
            IRL projects
            </a>
          </Link>
          {' / '}
          <Link href="/codeProjects">
            <a className="font-bold text-myred hover:opacity-60 cursor-imac" onMouseEnter={playKeyboard}>
            code projects
            </a>
          </Link>
          {' / '}
          <Link href="/tunes">
            <a className="font-bold text-myred hover:opacity-60">
            tunes
            </a>
          </Link>
          <></> {/*This is just a spacer*/}
        </div>
        <div className="flex flex-col items-center mt-6 sm:place-self-end sm:justify-end sm:mt-0 sm:mr-4">
          <Link href="/experience">
            <a className="font-bold text-myred hover:opacity-60">
            experience
            </a>
          </Link>
          <a 
            className="my-1 font-bold text-myred hover:opacity-60"
            href="https://twitter.com/DeLaFields"
            target="_blank" rel="noreferrer"  
          >
            twitter
          </a>
          <a 
            className="font-bold text-myred hover:opacity-60"  
            href="https://github.com/delafields"
            target="_blank" rel="noreferrer"
          >
            github
          </a>
        </div>
      </main>
    </div>
  )
}
