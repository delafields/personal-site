import ProjectWrapper from "../../components/ProjectWrapper"
import ProjectCard from "../../components/ProjectCard"
import projectsData from "../../assets/codeProjects.js"

export const metadata = {
  title: "Jeremy's code",
}

export default function Code() {
  return (
    <ProjectWrapper pageTitle="code">
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
