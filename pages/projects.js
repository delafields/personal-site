import ProjectWrapper from "../components/ProjectWrapper"
import ProjectCard from "../components/ProjectCard"
import IRLprojectsData from "../assets/IRLprojects.js"
import codeProjectsData from "../assets/codeProjects.js"
import useSound from 'use-sound';
import drillSfx from '../public/sounds/drill.mp3';
import keyboardSfx from '../public/sounds/keyboard.mp3';

export default function Projects() {
  const [playDrill] = useSound(drillSfx);
  const [playKeyboard] = useSound(keyboardSfx);
  
  return (
    
    <ProjectWrapper pageTitle="Projects">
      
      <div className="flex flex-col items-center justify-between grow">

        <div className="z-20 w-max">
          <h1 className="text-2xl font-bold text-myred cursor-drill" onMouseEnter={playDrill}>
            IRL projects
          </h1>
        </div>
        <div className="z-20 flex flex-col items-center gap-8 pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
          {IRLprojectsData.map((irlProject, irlIndex) =>
            <ProjectCard
              key={irlIndex}
              {...irlProject}
            />
            )
          }
        </div>

        <div className="z-20 w-max">
          <h1 className="my-10 text-2xl font-bold text-center text-myred cursor-imac" onMouseEnter={playKeyboard}>
            Code projects
          </h1>
        </div>
        <div className="z-20 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
          {codeProjectsData.map((codeProject, codeIndex) =>
            <ProjectCard
              key={codeIndex}
              {...codeProject}
            />
            )
          }
        </div>

      </div>

    </ProjectWrapper>
  )
}