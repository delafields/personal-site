import ProjectWrapper from "../components/ProjectWrapper"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../assets/IRLprojects.js"

export default function IRLprojects() {
  return (
    <ProjectWrapper pageTitle="IRL projects">
        {projectsData.map((project) =>
          <ProjectCard
            type="IRL"
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            date={project.date}
            links={project.links}
            product={project.product}
          />
          )
        }
    </ProjectWrapper>
  )
}