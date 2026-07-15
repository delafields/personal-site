import Link from "next/link"
import ProjectWrapper from "../../components/ProjectWrapper"
import ExperienceTimeline from "./ExperienceTimeline"

export const metadata = {
  title: "Jeremy's work experience",
}

export default function Experience() {
  return (
    <ProjectWrapper pageTitle="work experience" hideStripes>
      <Link href="/resume" className="font-bold text-myred hover:opacity-60 uppercase">
        view resume →
      </Link>
      <ExperienceTimeline />
    </ProjectWrapper>
  )
}
