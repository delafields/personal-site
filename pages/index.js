import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-screen h-screen min-h-full box-border overflow-hidden">
      <Head>
        <title>Jeremy Fields</title>
        <meta name="jeremy fields" content="personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main 
        className="min-h-full p-2 bg-paper-stripes grid grid-rows-[1fr_1fr_4fr] sm:grid-rows-[1fr_4fr_1fr]"
        >
        <div className="pl-4 pt-2">
          jeremy fields<br/>
          currently a data scientist at{' '}
          <a 
            className="text-myred-500 hover:opacity-60 font-bold"
            href="https://delafields.github.io/" target="_blank">@bloomberg</a>
          <br/>
          <Link href="/IRLprojects">
            <a className="text-myred hover:opacity-60 font-bold">
            IRL projects
            </a>
          </Link>
          {' / '}
          <Link href="/codeProjects">
            <a className="text-myred hover:opacity-60 font-bold">
            code projects
            </a>
          </Link>
        {/*This is just a spacer*/}
        <div></div>
        </div>
        <div className="sm:place-self-end flex flex-col sm:justify-end items-center sm:mr-4">
          <Link href="/experience">
            <a className="text-myred hover:opacity-60 font-bold">
            experience
            </a>
          </Link>
          <a 
            className="text-myred hover:opacity-60 font-bold my-1"
            href="https://twitter.com/DeLaFields">
            twitter
          </a>
          <a 
            className="text-myred hover:opacity-60 font-bold"  
            href="/https://github.com/delafields">
            github
          </a>
        </div>
      </main>
    </div>
  )
}
