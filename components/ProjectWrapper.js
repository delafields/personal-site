'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import Link from 'next/link'

// Context for sharing palette with children
export const PaletteContext = createContext(null)
export const usePalette = () => useContext(PaletteContext)

const stripePalettes = [
  // red blue green (homepage)
  ["#EB5353", "#187498", "#36AE7C"],
  // red yellow blue (hat rack)
  ["#F44129", "#F5B925", "#1F4888"],
  // turq red orange (70's)
  ["#3F8A8C", "#E5340B", "#F28A0F"],
  // dark orange to yellow (70's)
  ["#E25837", "#F77E33", "#FAC138"],
  // purp purp pink (unicorny)
  ["#6A67CE", "#947EC3", "#B689C0"],
  // earthy - terracotta, golden, teal
  ["#D4A373", "#E9C46A", "#2A9D8F"],
  // earthy - burnt sienna, wheat, olive
  ["#BC6C25", "#DDA15E", "#606C38"],
  // sunset - coral, peach, mauve
  ["#FF6B6B", "#FEC89A", "#B5838D"],
]

export default function ProjectWrapper({ pageTitle, children, hideStripes = false }) {
  // Use state to ensure consistent palette between server and client
  const [selectedPalette, setSelectedPalette] = useState(stripePalettes[0])

  useEffect(() => {
    // Randomize palette only on client side
    const randomIndex = Math.floor(Math.random() * stripePalettes.length)
    setSelectedPalette(stripePalettes[randomIndex])
  }, [])

  return (
    <PaletteContext.Provider value={selectedPalette}>
    <div className="min-h-screen py-10 bg-mycream bg-paper flex flex-col font-['Lexend'] z-0">
      {!hideStripes && <>
        {/* Left vertical stripes */}
        <svg
          className="fixed top-0 opacity-50 pointer-events-none z-10"
          style={{filter: "contrast(120%) brightness(120%)", width: '66px', height: '100vh', left: '0'}}
          viewBox="0 0 66 100"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="22" height="100" fill={selectedPalette[0]} />
          <rect x="22" y="0" width="22" height="100" fill={selectedPalette[1]} />
          <rect x="44" y="0" width="22" height="100" fill={selectedPalette[2]} />
        </svg>
      </>}
      <div className="flex flex-col items-center justify-between">
        <h1 className="mb-4 text-4xl text-myred uppercase font-['Staatliches'] tracking-wide">{pageTitle}</h1>
        <Link href="/" className="font-bold hover:opacity-60 uppercase">
          ← home
        </Link>
      </div>
      <div className="z-20 flex flex-col items-center gap-6 pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
        {children}
      </div>
    </div>
    </PaletteContext.Provider>
  )
}
