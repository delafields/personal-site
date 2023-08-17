import Image from 'next/image'
import Link from 'next/link'
import StripeButton from './StripeButton';

export default function ProjectCard({ 
  title, 
  caption, 
  coverImgSrc, 
  pageLink,
  links,
  product
}) {

  const ProjectCardDetails = () => (
    <>
        {coverImgSrc ?
          <Image 
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
            className="w-full"
            src={coverImgSrc}
            alt={title} 
          />
          : null 
        }
        <div className="flex flex-col justify-around grow">
          <div className="my-2 text-center">
            <h5 className="font-bold underline uppercase lg:text-2xl">
              {title}
            </h5>
            <p>{caption}</p>
            {links.map(({ linkName, linkUrl}) => 
              <Link href={linkUrl} key={linkUrl}>
                <a 
                  className="ml-2 text-sm odd:text-myred even:text-blue-500 hover:opacity-60"
                  target="_blank" rel="noreferrer">
                    {linkName}
                </a>
                </Link>
              )
            }
          </div>
        {product 
              // ? <StripeButton priceId={product.priceId} buttonName={product.buttonName} /> 
              ? <StripeButton product={product} />
              : null
            }
      </div>
    </>
  )

  return (
    <>
    {
      pageLink ? (
        <Link href={`/projects/${encodeURIComponent(pageLink)}`} className='cursor-pointer'>
          <a className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 md:1/4 max-h-[30rem] hover:shadow-lg">
            <ProjectCardDetails/>
          </a>
        </Link>
      ) : (
        <div className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 md:1/4 max-h-[30rem] hover:shadow-lg">
          <ProjectCardDetails />
        </div>
      )
    }
    </>
  )
}