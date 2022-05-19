import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export default function TopTracks() {
    const { data } = useSWR('/api/top-tracks', fetcher);
    
    if (!data) {
        return null;
    }
    
    return (
        <div className="p-2 rounded-lg bg-noise">
            <p>what's been hitting the last 6 months</p>
            {data.tracks.map((track, index) => (
                <div 
                    className="flex flex-row items-baseline w-full max-w-3xl mt-8 border-b border-gray-200 last:border-0"
                    key={index}
                >
                    <p className="text-sm font-bold text-gray-400">
                        {index+1}
                    </p>
                    <div className="flex flex-col pl-3">
                    <a
                        className="font-medium text-gray-900 truncate w-60 sm:w-96 md:w-full"
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {track.title}
                    </a>
                    <p
                        className="mb-4 text-gray-500 truncate w-60 sm:w-96 md:w-full"
                        color="gray.500"
                    >
                        {track.artist}
                    </p>
                    </div>
                </div>
            ))}
        </div>
    )
}