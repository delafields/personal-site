import Image from 'next/image'
import Link from 'next/link'
import StripeButton from './StripeButton';

export default function ProjectCard({ 
  title, 
  caption, 
  coverImgSrc, 
  links,
  product
}) {

  return (
    <div className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 md:1/4 max-h-[30rem] hover:shadow-lg">
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
      {/*
      <div className="flex items-center justify-between p-1 text-center border-t-2 border-slate-700">
        <p>{date}</p>
        <div>
          {links.map(({ linkName, linkUrl}) => 
            <Link href={linkUrl} key={linkUrl}>
              <a 
                className="ml-2 text-sm odd:text-myred even:text-blue-500 hover:opacity-60"
                target="_blank" rel="noreferrer">
                  {linkName}<span className="text-black">↗</span>
              </a>
              </Link>
            )
          }
        </div>
      </div>*/}
                {/* {product 
            // ? <StripeButton priceId={product.priceId} buttonName={product.buttonName} /> 
            ? <StripeButton product={product} />
            : null
          } */}
      {product 
            // ? <StripeButton priceId={product.priceId} buttonName={product.buttonName} /> 
            ? <StripeButton product={product} />
            : null
          }
    </div>
  </div>
  )
}