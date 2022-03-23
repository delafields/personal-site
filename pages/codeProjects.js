import Link from 'next/link'
import ProjectWrapper from "../components/ProjectWrapper"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../assets/codeProjects.js"
import styles from '../styles/Home.module.css'

export default function codeprojects() {
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
            youtubeLink={project.youtubeLink}
            githubLink={project.githubLink}
            imgurLink={project.imgurLink}
          />
          )
        }
    </ProjectWrapper>
  )
}