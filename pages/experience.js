import Link from 'next/link'
import experienceData from "../assets/experience.js"
import ProjectWrapper from "../components/ProjectWrapper"

export default function experience() {
  return (
    <ProjectWrapper pageTitle="work experience">
      <div className="flex flex-col items-center justify-center mx-6 mt-10 sm:mx-0 grow">
        <ul className="p-2 rounded-lg shadow-md bg-noise">
          {experienceData.map(({ title, company, date, description }) =>
            <li 
              className="py-4 border-b-2 border-slate-700 last:border-none"
              key={date}
            >
              <div className=''>
                <p className='flex justify-between mb-2'>
                  <span><strong>{title}</strong> - {company}</span>
                  <span className='ml-2 text-xs'>{date}</span>
                </p>
                <p className=''>{description}</p>
              </div>
            </li>
            )
          }
        </ul>
      </div>
    </ProjectWrapper>
  )
}