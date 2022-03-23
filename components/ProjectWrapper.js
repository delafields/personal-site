import Link from 'next/link'

export default function ProjectWrapper({ pageTitle, children }) {
  return (
    <div className="min-h-screen py-10 bg-mycream bg-paper flex flex-col">
      <div className="flex flex-col items-center justify-between mb-10">
        <h1 className="text-myred text-2xl font-bold mb-4">{pageTitle}</h1>
        <Link href="/">
          <a className="hover:opacity-60 font-bold">home</a>
        </Link>
      </div>
      <div className="grid mx-12 auto-rows-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-5 p-4">
        {children}
      </div>
    </div>
  )
}