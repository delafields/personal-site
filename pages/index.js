import Head from 'next/head'
import Link from 'next/link'
import SocialLinks from '../components/SocialLinks';

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
             <a className="font-bold text-myred hover:opacity-60">
            projects
            </a>
          </Link>
          {' / '}
          <Link href="/tunes">
            <a className="font-bold text-myred hover:opacity-60">
            tunes
            </a>
          </Link>
         
        </div>
        <div></div>
        <div className="flex flex-col items-center">
          <SocialLinks/>
        </div>
      </main>
    </div>
  )
}
