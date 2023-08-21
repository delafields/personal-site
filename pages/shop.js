import ProjectWrapper from "../components/ProjectWrapper"
import ProjectCard from "../components/ProjectCard"
import shopItems from "../assets/shopItems.js"

export default function Shop() {
  
  return (
    
    <ProjectWrapper pageTitle="Shop">

    <div className="flex flex-col grow">
        <div className="z-20 w-full text-center">
            <h1 className="text-2xl font-bold text-myred">
            Shop
            </h1>
        </div>
        <div className="z-20 flex flex-col items-center gap-8 pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
            {shopItems.map((irlProject, irlIndex) =>
            <ProjectCard
                key={irlIndex}
                {...irlProject}
            />
            )
            }
        </div>
      </div>

    </ProjectWrapper>
  )
}