import { YoutubeFilled, GithubFilled, CameraFilled } from '@ant-design/icons'
import Image from 'next/image'

export default function ProjectCard({ 
  type, title, description, imgSrc, date, youtubeLink, githubLink, imgurLink
}) {

  return (
    <div className="bg-white shadow-md sm:max-w-l p-2 flex flex-col rounded-lg cursor-pointer hover:shadow-lg">
      <Image 
        // className="h-full object-contain" 
        className="w-full h-4/6"
        src={imgSrc}
        alt={title} 
      />
      <div className="flex flex-col grow justify-around">
        <div className="flex content-center items-center mt-2">
          <h5 className="lg:text-2xl font-bold uppercase">
            {title}
          </h5>
          {
            youtubeLink ?
            (<YoutubeFilled 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'red' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            githubLink ?
            (<GithubFilled 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'black' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            imgurLink ?
            (<CameraFilled 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '18px', color: 'black' }}
              onClick={()=> window.open(imgurLink, "_blank")}
            />) : null
          }
          </div>
        <p className="">{description}</p>
      <div className="border-t-2 border-slate-700 mt-2 text-center">
        <p className="mt-2">{date}</p>
      </div>
    </div>
  </div>
  )
}

{/* <div className="bg-white h-full max-w-md shadow-md p-2 flex flex-col rounded-lg cursor-pointer hover:shadow-lg">
<img 
  className="h-3/6" 
  src={imgSrc}
  alt={title} 
/>
<div className="flex flex-col">
  <div className="flex content-center items-center mt-2">
    <h5 className="text-2xl font-bold uppercase">
      {title}
    </h5>
    {
      youtubeLink ?
      (<YoutubeFilled 
        className="cursor-pointer hover:opacity-60 m-2"
        style={{ fontSize: '18px', color: 'red' }}
        onClick={()=> window.open(youtubeLink, "_blank")}
      />) : null
    }
    {
      githubLink ?
      (<GithubFilled 
        className="cursor-pointer hover:opacity-60 m-2"
        style={{ fontSize: '18px', color: 'black' }}
        onClick={()=> window.open(youtubeLink, "_blank")}
      />) : null
    }
    {
      imgurLink ?
      (<CameraFilled 
        className="cursor-pointer hover:opacity-60 m-2"
        style={{ fontSize: '18px', color: 'black' }}
        onClick={()=> window.open(imgurLink, "_blank")}
      />) : null
    }
    </div>
  <p className="">{description}</p>
<div className="border-t-2 border-slate-700 mt-2 text-center">
  <p className="mt-2">{date}</p>
</div>
</div>
</div> */}