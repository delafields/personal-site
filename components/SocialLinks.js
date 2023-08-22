import { BsYoutube, BsInstagram, BsTwitter, BsTiktok, BsMailbox2 } from "react-icons/bs";

export default function SocialLinks() {

  const links = [
    { "linkTo": "instagram", "url": "https://www.instagram.com/supersecretworkshop/", "icon": BsInstagram },
    { "linkTo": "tiktok", "url": "https://www.tiktok.com/@supersecretworkshop", "icon": BsTiktok },
    { "linkTo": "twitter", "url": "https://twitter.com/SUPERSECRETwork", "icon": BsTwitter },
    { "linkTo": "youtube", "url": "https://www.youtube.com/@supersecretworkshop", "icon": BsYoutube },
    { "linkTo": "email", "url": "mailto:supersecretworkshop@gmail.com", "icon": BsMailbox2 },
  ]

    return (
        <div className='flex justify-between w-64 my-3'>
          {links.map((link) =>
            <a 
              key={link.linkTo}
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href={link.url}
              target="_blank" 
              rel="noreferrer">
                <link.icon/>
            </a>
          )}
          </div>
    )
}