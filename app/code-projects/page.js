import ProjectWrapper from "../../components/ProjectWrapper"
import ProjectCard from "../../components/ProjectCard"
import projectsData from "../../assets/codeProjects.js"

export const metadata = {
  title: "Jeremy's code projects",
}

export default function CodeProjects() {
  return (
    <ProjectWrapper pageTitle="code projects">
      {projectsData.map((project) =>
        <ProjectCard
          type="code"
          key={project.title}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          date={project.date}
          links={project.links}
        />
      )}
    </ProjectWrapper>
  )
}
