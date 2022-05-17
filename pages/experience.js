import Link from 'next/link'
import experienceData from "../assets/experience.js"

export default function experience() {
  return (
    <div 
      className="flex flex-col min-h-screen p-4 py-10 bg-mycream bg-paper"
      style={{border: '20px solid white'}}    
    >
    <div className="text-center">
      <Link href="/">
        <a className="font-bold hover:opacity-60">home</a>
      </Link>
    </div>
    <div className="flex items-center justify-center grow">
      <ul>
        {experienceData.map(({ date, text }) =>
          <li 
            className="py-2"
            key={date}
          >
            <strong>{date}</strong> { text }
          </li>
          )
        }
      </ul>
    </div>
  </div>
)
}