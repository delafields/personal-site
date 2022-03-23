import Link from 'next/link'
import experienceData from "../assets/experience.js"

export default function experience() {
  return (
    <div 
      className="min-h-screen py-10 bg-mycream bg-paper flex flex-col p-4"
      style={{border: '20px solid white'}}    
    >
    <div className="text-center">
      <Link href="/">
        <a className="hover:opacity-60 font-bold">home</a>
      </Link>
    </div>
    <div className="grow flex justify-center items-center">
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