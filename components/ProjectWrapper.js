import Link from 'next/link'

export default function ProjectWrapper({ pageTitle, children }) {
  return (
    <div className="min-h-screen py-10 bg-mycream bg-paper flex flex-col font-['Lexend']">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-myred text-2xl font-bold mb-4">{pageTitle}</h1>
        <Link href="/">
          <a className="hover:opacity-60 font-bold">home</a>
        </Link>
      </div>
      <div className="flex flex-col items-center pt-8">
        {children}
      </div>
    </div>
  )
}