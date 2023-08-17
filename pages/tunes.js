import Link from 'next/link'
import ProjectWrapper from '../components/ProjectWrapper'
import TopTracks from '../components/TopTracks'
import RecentTracks from '../components/RecentTracks'

export default function tunes() {

    return (
        <ProjectWrapper pageTitle="tunes">
            <div className="z-50 flex flex-col justify-around max-w-screen-md md:w-full md:flex-row">
                <RecentTracks/>
                <TopTracks/>
            </div>
        </ProjectWrapper>
)
}