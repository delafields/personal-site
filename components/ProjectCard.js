import { YoutubeFilled, GithubFilled } from '@ant-design/icons'

export default function ProjectCard({ 
  type, title, description, imgSrc, date, youtubeLink, githubLink 
}) {

  return (
    <div className="bg-white w-full shadow-md p-2 flex flex-col rounded-lg">
    {type === 'IRL'?
        (<img 
          className="w-full" 
          src={imgSrc} 
          alt={title} 
        />)
      : null
    }
        <div className="flex flex-col justify-around grow">
        <h5 className="mt-2 text-2xl font-bold uppercase text-center ">
          {title}
        </h5>
        <p className="p-2">
          {description}
        </p>
        <div className="flex justify-between items-center border-t-2 border-slate-700 mt-2">
            <p>
            {date}
            </p>
        <div className="flex justify-center">
          {
            youtubeLink ?
            (<YoutubeFilled 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '24px', color: 'red' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
          {
            githubLink ?
            (<GithubFilled 
              className="cursor-pointer hover:opacity-60 m-2"
              style={{ fontSize: '24px', color: 'black' }}
              onClick={()=> window.open(youtubeLink, "_blank")}
            />) : null
          }
</div>
  </div>
      </div>
    </div>
  )

}