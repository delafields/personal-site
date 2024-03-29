import { getRecentlyPlaying } from '../../lib/spotify'

export default async function handler(_, res) {
    const response = await getRecentlyPlaying();

    const { items } = await response.json();
    // console.log("items", items)
    
    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.track.external_urls.spotify,
        title: track.track.name,
        // if I wanted images...
        // albumCover: track.track.album.images[0]
      })) || [];

      res.setHeader(
        'Cache-Control', 
        'public, s-maxage=86400, stale-while-revalidate=43200'
      );
    
      return res.status(200).json({ tracks });
}