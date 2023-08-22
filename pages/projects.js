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

  const allProjects = { "IRL projects": IRLprojectsData, "Code projects": codeProjectsData }
  
  return (
    
    <ProjectWrapper pageTitle="Projects">
      
      <div className="flex flex-col items-center justify-between grow">

        {Object.keys(allProjects).map((projectType, index) =>
          <div 
            className={`${index >= 1 ? 'mt-20': ''}`}
            key={index}>
              
            <h1 
              className={`z-20 mx-auto text-2xl font-bold w-max text-myred ${projectType ===  'IRL projects' ? 'cursor-drill' : 'cursor-imac'}` }
              onMouseEnter={projectType === 'IRL projects' ? playDrill : playKeyboard}>
              {projectType}
            </h1>

            <div className="z-20 flex flex-col items-center gap-8 pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
              {allProjects[projectType].map((irlProject, irlIndex) =>
                <ProjectCard
                  key={irlIndex}
                  type="projects"
                  {...irlProject}
                />
                )}
            </div>

          </div>
          )}

      </div>

    </ProjectWrapper>
  )
}