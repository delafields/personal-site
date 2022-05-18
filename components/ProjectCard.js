import { CgWebsite } from "react-icons/cg";
import { SiYoutube, SiImgur, SiGithub } from 'react-icons/si';
import Image from 'next/image'

export default function ProjectCard({ 
  type, 
  title, 
  description, 
  imgSrc, 
  date, 
  youtubeLink, 
  githubLink, 
  imgurLink, 
  websiteLink
}) {

  return (
    <div className="flex flex-col w-3/4 max-w-md p-2 my-2 bg-white rounded-lg shadow-md sm:w-1/2 md:1/4 max-h-96 hover:shadow-lg">
      {imgSrc ?
        <Image 
          width="100%" 
          height="100%" 
          layout="responsive" 
          objectFit="contain"
          className="w-full h-4/6"
          src={imgSrc}
          alt={title} 
        />
        : null 
      }
      <div className="flex flex-col justify-around grow">
        <div className="flex items-center content-center justify-between mt-2">
          <h5 className="font-bold uppercase lg:text-2xl">
            {title}
          </h5>
          <div className="flex">
          {
            youtubeLink ?
            (<SiYoutube 
              className="m-2 cursor-pointer hover:opacity-60"
              style={{ fontSize: '18px', color: 'red' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            githubLink ?
            (<SiGithub 
              className="m-2 cursor-pointer hover:opacity-60"
              style={{ fontSize: '18px', color: 'black' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            imgurLink ?
            (<SiImgur 
              className="m-2 cursor-pointer hover:opacity-60"
              style={{ fontSize: '18px', color: '#89C623' }}
              onClick={()=> window.open(imgurLink, "_blank")}
            />) : null
          }
          {
            websiteLink ?
            (<CgWebsite 
              className="m-2 cursor-pointer hover:opacity-60"
              style={{ fontSize: '18px', color: 'blue' }}
              onClick={()=> window.open(websiteLink, "_blank")}
            />) : null
          }
          </div>
          </div>
        <p className="">{description}</p>
      <div className="mt-2 text-center border-t-2 border-slate-700">
        <p className="mt-2">{date}</p>
      </div>
    </div>
  </div>
  )
}