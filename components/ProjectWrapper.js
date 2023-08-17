import Link from 'next/link'
import Head from 'next/head'
import { Nav } from './Nav';

export default function ProjectWrapper({ pageTitle, children }) {

  const stripePalettes = [
    // red blue green (homepage)
    ["#EB5353", "#187498", "#36AE7C"],
    // red rellow blue (hat rack)
    ["#F44129", "#F5B925", "#1F4888"],
    // turq red orange (70's)
    ["#3F8A8C", "#E5340B", "#F28A0F"],
    // dark orange to yellow (70's)
    ["#E25837", "#F77E33", "#FAC138"],
    // purp purp pink (unicorny)
    ["#6A67CE", "#947EC3", "#B689C0"],
  ]
  // randomize the palettes, the first in the list gets rendered
  const shuffledPalettes = stripePalettes.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="min-h-screen  bg-mycreambutdarkerlol bg-paper flex flex-col font-['Lexend'] z-0">
      <svg 
        viewBox="0 0 768 600"
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        xmlSpace="preserve" 
        className="fixed top-0 z-10 w-full mt-40 opacity-50 pointer-events-none xs:mt-0"
        style={{filter: "contrast(120%) brightness(120%)"}}
      >
        <g transform="matrix(1,0,0,1,-7,0)">
          <path 
            d="M0,304C0,304 366.583,62.641 782,304" 
            fill="none"
            stroke={shuffledPalettes[0][0]}
            strokeWidth="21.66px"
          />
        </g>
        <g transform="matrix(1,0,0,1,-7,0)">
          <path 
            d="M0,327C0,327 362.48,80.391 782,327" 
            fill="none"
            stroke={shuffledPalettes[0][1]}
            strokeWidth="21.66px"
          />
        </g>
        <g transform="matrix(1,0,0,1,-7,0)">
          <path 
            d="M0,350C0,350 384.48,95.725 780,350" 
            fill="none"
            stroke={shuffledPalettes[0][2]}
            strokeWidth="21.66px"
          />
        </g>
      </svg>

      <Nav/>

      <div className="flex flex-col items-center justify-between pt-10">
        <Head>
          <title>Super Secret {pageTitle}</title>
        </Head>

      </div>
      {/* <div className="z-20 flex flex-col items-center gap-8 pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch"> */}
        {children}
      {/* </div> */}
    </div>
  )
}