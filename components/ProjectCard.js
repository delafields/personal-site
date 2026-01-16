import Image from 'next/image'
import Link from 'next/link'
import StripeButton from './StripeButton'

export default function ProjectCard({
  title,
  description,
  imgSrc,
  date,
  links,
  product
}) {
  return (
    <div className="flex flex-col w-3/4 max-w-md p-2 rounded-lg shadow-md bg-noise sm:w-1/2 md:1/4 max-h-[30rem] hover:shadow-lg">
      {imgSrc ? (
        <div className="relative w-full aspect-square">
          <Image
            fill
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            src={imgSrc}
            alt={title}
          />
        </div>
      ) : null}
      <div className="flex flex-col justify-around grow">
        <div className="my-2">
          <h5 className="font-bold uppercase lg:text-2xl">
            {title}
          </h5>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between p-1 text-center border-t-2 border-slate-700">
          <p>{date}</p>
          <div>
            {links.map(({ linkName, linkUrl }) =>
              <Link
                href={linkUrl}
                key={linkUrl}
                className="ml-2 text-sm odd:text-myred even:text-blue-500 hover:opacity-60"
                target="_blank"
                rel="noreferrer"
              >
                {linkName}<span className="text-black">&#8599;</span>
              </Link>
            )}
          </div>
        </div>
        {product ? <StripeButton product={product} /> : null}
      </div>
    </div>
  )
}
