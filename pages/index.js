import Head from 'next/head'
import Link from 'next/link'
import useSound from 'use-sound';
import drillSfx from '../public/sounds/drill.mp3';
import keyboardSfx from '../public/sounds/keyboard.mp3';

export default function Home() {
  const [playDrill] = useSound(drillSfx);
  const [playKeyboard] = useSound(keyboardSfx);

  return (
    <div className="box-border overflow-hidden border-white border-20 bg-paper">
      <Head>
        <title>Jeremy Fields</title>
        <meta name="jeremy fields" content="personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main 
        className="w-wscreenborder h-hscreenborder text-center sm:text-left py-2 sm:rounded grid grid-rows-[1fr_4fr_1fr] font-['Lexend'] bg-blob2 bg-cover"
        >
        
        <div className="sm:pt-2 sm:pl-4">
          <p className='mb-4 font-bold'>jeremy fields</p>
          
          <Link href="/IRL-projects">
            <a className="font-bold text-myred hover:opacity-60 cursor-drill" onMouseEnter={playDrill}>
            IRL projects
            </a>
          </Link>
          {' / '}
          <Link href="/code-projects">
            <a className="font-bold text-myred hover:opacity-60 cursor-imac" onMouseEnter={playKeyboard}>
            code projects
            </a>
          </Link>
          
          {' / '}
          <Link href="/tunes">
            <a className="font-bold text-myred hover:opacity-60 cursor-music">
            tunes
            </a>
          </Link>
         
        </div>
        <div></div>
        <div className="flex flex-col items-center sm:place-self-end sm:mr-12 sm:mb-24">
          <Link href="/experience">
            <a className="font-bold text-myred hover:opacity-60">
            work experience
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
