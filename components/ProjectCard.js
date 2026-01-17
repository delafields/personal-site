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
    <div className="flex flex-col w-3/4 max-w-md rounded-lg shadow-md bg-noise sm:w-[45%]" style={{ padding: '24px' }}>
      {imgSrc ? (
        <div className="relative w-full aspect-square overflow-hidden rounded-md" style={{ marginBottom: '16px' }}>
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
        <div style={{ marginBottom: '12px' }}>
          <h5 className="font-bold uppercase lg:text-2xl">
            {title}
          </h5>
          <p className="text-slate-600 mt-3">{description}</p>
        </div>
        <div className="flex items-center justify-between pt-4 mt-3 border-t-2 border-slate-700">
          <p className="text-sm text-slate-500">{date}</p>
          {links && links.length > 0 && (
            <div className="flex gap-2">
              {links.map(({ linkName, linkUrl }) =>
                <Link
                  href={linkUrl}
                  key={linkUrl}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {linkName} ↗
                </Link>
              )}
            </div>
          )}
        </div>
        {product ? <StripeButton product={product} /> : null}
      </div>
    </div>
  )
}
