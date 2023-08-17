import { BsYoutube, BsInstagram, BsTwitter, BsTiktok, BsMailbox2 } from "react-icons/bs";

export default function SocialLinks() {
    return (
        <div className='flex justify-between w-64 my-3'>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="https://www.instagram.com/supersecretworkshop/"
              target="_blank" rel="noreferrer"
            >
              <BsInstagram/>
            </a>
            <a 
            className="text-3xl font-bold text-myred hover:opacity-60"
            href="https://www.tiktok.com/@supersecretworkshop"
            target="_blank" rel="noreferrer"  
            >
              <BsTiktok />
            </a>
            <a 
            className="text-3xl font-bold text-myred hover:opacity-60"
            href="https://twitter.com/SUPERSECRETwork"
            target="_blank" rel="noreferrer"  
            >
              <BsTwitter />
            </a>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="https://www.youtube.com/@supersecretworkshop"
              target="_blank" rel="noreferrer"
            >
              <BsYoutube/>
            </a>
            <a 
              className="text-3xl font-bold text-myred hover:opacity-60"  
              href="mailto:supersecretworkshop@gmail.com"
              target="_blank" rel="noreferrer"
            >
              <BsMailbox2/>
            </a>
          </div>
    )
}