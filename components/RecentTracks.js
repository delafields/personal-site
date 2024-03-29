import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export default function RecentTracks() {
    const { data } = useSWR('/api/recent-tracks', fetcher);
    
    if (!data) {
      return null;
    }
    
    return (
      <div className="max-w-4xl p-2 rounded-lg shadow-md bg-noise w-80 sm:w-96">
      <p className="font-black text-center">
        last 10 songs i've listened to
      </p>
      {data.tracks.map((track, index) => (
          <div 
              className="flex flex-row items-center w-full border-b border-gray-200 h-28 last:border-0"
              key={index}
          >
              <div className="flex flex-col pl-3">
              <a
                  className="font-medium text-gray-900 break-words w-60 sm:w-96 md:w-full hover:text-myred"
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {track.title}
              </a>
              <p
                  className="mb-4 text-gray-500 break-words w-60 sm:w-96 md:w-full"
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