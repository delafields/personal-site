import { CgWebsite } from "react-icons/cg";
import { SiYoutube, SiImgur, SiGithub } from 'react-icons/si';
import Image from 'next/image'

export default function ProjectCard({ 
  type, title, description, imgSrc, date, youtubeLink, githubLink, imgurLink, websiteLink
}) {

  return (
    <div className="bg-white shadow-md w-3/4 sm:w-1/2 md:1/4 max-w-md max-h-96 p-2 flex flex-col my-2 rounded-lg cursor-pointer hover:shadow-lg">
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
      <div className="flex flex-col grow justify-around">
        <div className="flex content-center items-center justify-between mt-2">
          <h5 className="lg:text-2xl font-bold uppercase">
            {title}
          </h5>
          <div className="flex">
          {
            youtubeLink ?
            (<SiYoutube 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'red' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            githubLink ?
            (<SiGithub 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'black' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            imgurLink ?
            (<SiImgur 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: '#89C623' }}
              onClick={()=> window.open(imgurLink, "_blank")}
            />) : null
          }
          {
            websiteLink ?
            (<CgWebsite 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'blue' }}
              onClick={()=> window.open(websiteLink, "_blank")}
            />) : null
          }
          </div>
          </div>
        <p className="">{description}</p>
      <div className="border-t-2 border-slate-700 mt-2 text-center">
        <p className="mt-2">{date}</p>
      </div>
    </div>
  </div>
  )
}