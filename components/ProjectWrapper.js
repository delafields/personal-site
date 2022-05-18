import Link from 'next/link'

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
    <div className="min-h-screen py-10 bg-mycream bg-paper flex flex-col font-['Lexend'] z-0">
      <svg 
        viewBox="0 0 768 600"
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        xmlSpace="preserve" 
        className="fixed top-0 z-10 w-full opacity-50 pointer-events-none"
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
      <div className="flex flex-col items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold text-myred">{pageTitle}</h1>
        <Link href="/">
          <a className="font-bold hover:opacity-60">home</a>
        </Link>
      </div>
      <div className="z-20 flex flex-col items-center pt-8">
        {children}
      </div>
    </div>
  )
}