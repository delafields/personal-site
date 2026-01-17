import ProjectWrapper from "../../components/ProjectWrapper"
import ProjectCard from "../../components/ProjectCard"
import projectsData from "../../assets/IRLprojects.js"

export const metadata = {
  title: "Jeremy's builds",
}

export default function Builds() {
  return (
    <ProjectWrapper pageTitle="builds">
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
      )}
    </ProjectWrapper>
  )
}
