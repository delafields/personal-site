import ProjectWrapper from "../../components/ProjectWrapper"
import ExperienceTimeline from "./ExperienceTimeline"

export const metadata = {
  title: "Jeremy's work experience",
}

export default function Experience() {
  return (
    <ProjectWrapper pageTitle="work experience" hideStripes>
      <ExperienceTimeline />
    </ProjectWrapper>
  )
}
