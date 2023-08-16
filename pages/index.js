import Head from 'next/head'
import Link from 'next/link'
import { BsYoutube, BsInstagram, BsTwitter, BsTiktok, BsMailbox2 } from "react-icons/bs";


export default function Home() {

  return (
    <div className="box-border overflow-hidden bg-cover border-white border-20 bg-blob-png">
      <Head>
        <title>Super Secret Workshop</title>
        <meta name="Super Secret Workshop" content="personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main 
        className="w-wscreenborder h-hscreenborder text-center sm:text-left py-2 sm:rounded grid grid-rows-[1fr_2fr_1fr] sm:grid-rows-[1fr_4fr_1fr] font-['Lexend']"
        >
        
        <div className="sm:pt-2 sm:pl-4">
          <p className='mb-4 font-bold'>super secret workshop</p>
          
          <Link href="/projects">
             <a className="font-bold text-myred hover:opacity-60"> { /* cursor-drill /*onMouseEnter={playDrill}> */}
            projects
            </a>
          </Link>
          {/* {' / '}
          <Link href="/code-projects">
            <a className="font-bold text-myred hover:opacity-60" >  cursor-imac onMouseEnter={playKeyboard}> 
            code projects
            </a>
          </Link>
          */}
          {' / '}
          <Link href="/tunes">
            <a className="font-bold text-myred hover:opacity-60"> {/* cursor-music */}
            tunes
            </a>
          </Link>
         
        </div>
        <div></div>
        {/* <div className="flex flex-col items-center sm:place-self-end sm:mr-20 sm:mb-24"> */}
        <div className="flex flex-col items-center">
          <div className='flex justify-between w-64 my-3 '>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="https://www.instagram.com/supersecretworkshop/"
              target="_blank" rel="noreferrer"
            >
              <BsInstagram/>
            </a>
            <a 
            className="text-3xl font-bold text-myred hover:opacity-60"
            href="https://www.tiktok.com/@supersecretworkshop"
            target="_blank" rel="noreferrer"  
            >
              <BsTiktok />
            </a>
            <a 
            className="text-3xl font-bold text-myred hover:opacity-60"
            href="https://twitter.com/SUPERSECRETwork"
            target="_blank" rel="noreferrer"  
            >
              <BsTwitter />
            </a>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="https://www.youtube.com/@supersecretworkshop"
              target="_blank" rel="noreferrer"
            >
              <BsYoutube/>
            </a>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="mailto:supersecretworkshop@gmail.com"
              target="_blank" rel="noreferrer"
            >
              <BsMailbox2/>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
