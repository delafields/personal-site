import Link from 'next/link'
import ProjectWrapper from "../components/ProjectWrapper"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../assets/IRLprojects.js"
import styles from '../styles/Home.module.css'

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
            youtubeLink={project.youtubeLink}
            githubLink={project.githubLink}
          />
          )
        }
    </ProjectWrapper>
  )
}