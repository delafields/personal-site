import ProjectWrapper from '../components/ProjectWrapper'
import TopTracks from '../components/TopTracks'
import RecentTracks from '../components/RecentTracks'

export default function tunes() {

    return (
        <ProjectWrapper pageTitle="Tunes">

            <div className="z-30 flex flex-col justify-around max-w-screen-md w-max md:w-full md:flex-row">

                <RecentTracks/>
                
                <TopTracks/>

            </div>

        </ProjectWrapper>
)
}