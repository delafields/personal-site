import Link from 'next/link'
import ProjectWrapper from '../components/ProjectWrapper'
import TopTracks from '../components/TopTracks'
import RecentTracks from '../components/RecentTracks'

export default function tunes() {

    return (
        <ProjectWrapper pageTitle="tunes">
            <div className="flex">
                <RecentTracks/>
                <TopTracks/>
            </div>
        </ProjectWrapper>
)
}