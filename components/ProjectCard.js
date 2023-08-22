import Image from 'next/image'
import Link from 'next/link'
import { BuyButton } from './BuyButton'

export default function ProjectCard({ type, ...project }) {

  const ProjectCardDetails = () => (
    <>
        {project.coverImgSrc ?
          <Image 
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
            className="w-full"
            src={project.coverImgSrc}
            alt={project.title} 
          />
          : null 
        }
        <div className="flex flex-col justify-around grow">

          <div className="my-2 text-center">

            <h5 className="font-bold underline uppercase lg:text-2xl">
              {project.title}
            </h5>

            <p>{project.caption}</p>

            {project.links.map(({ linkName, linkUrl }) => 
              <Link href={linkUrl} key={linkUrl}>
                <a 
                  className="ml-2 text-sm odd:text-myred even:text-blue-500 hover:opacity-60"
                  target="_blank" rel="noreferrer">
                    {linkName}
                </a>
                </Link>
              )}
            
          </div>

        {project.product && project.product.price ?  <p className='text-center'>{project.product.price}</p> : null}

      </div>
    </>
  )

  return (
    <>
    {
      project.pageLink ? (
        <Link 
          href={`/${type}/${encodeURIComponent(project.pageLink)}`}
          className='cursor-pointer'
        >
          <a className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 max-h-[30rem] hover:shadow-lg">
            <ProjectCardDetails />
          </a>
        </Link>
      ) : (
        <div className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 max-h-[30rem] hover:shadow-lg">
          <ProjectCardDetails />
        </div>
      )
    }
    </>
  )
}