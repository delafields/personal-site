import Link from 'next/link'

export default function ProjectWrapper({ pageTitle, children }) {
  return (
    <div className="min-h-screen py-10 bg-mycream bg-paper flex flex-col font-['Lexend']">
      <div className="flex flex-col items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold text-myred">{pageTitle}</h1>
        <Link href="/">
          <a className="font-bold hover:opacity-60">home</a>
        </Link>
      </div>
      <div className="flex flex-col items-center pt-8">
        {children}
      </div>
    </div>
  )
}