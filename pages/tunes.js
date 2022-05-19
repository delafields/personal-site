import Link from 'next/link'
import TopTracks from '../components/TopTracks'
import RecentTracks from '../components/RecentTracks'

export default function tunes() {

    return (
        <div className="">
            <h1 className="mb-4 text-2xl font-bold text-myred">tunes</h1>
            <Link href="/">
                <a className="font-bold hover:opacity-60">home</a>
            </Link>
            {/* <TopTracks/> */}
            <RecentTracks/>
        </div>
)
}