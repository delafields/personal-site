import ProjectWrapper from '../../components/ProjectWrapper'
import TopTracks from '../../components/TopTracks'
import RecentTracks from '../../components/RecentTracks'

export const metadata = {
  title: "Jeremy's tunes",
}

export default function Tunes() {
  return (
    <ProjectWrapper pageTitle="tunes">
      <div className="flex flex-col justify-around max-w-screen-md md:w-full md:flex-row">
        <RecentTracks/>
        <TopTracks/>
      </div>
    </ProjectWrapper>
  )
}
