import { getTopTracks } from '../../lib/spotify'


export default async function handler(_, res) {
  const response = await getTopTracks();

  if (!response) {
    return res.status(500).json({ error: 'Spotify not available' });
  }

  const { items } = await response.json();
  
  const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      // if I wanted images...
      // albumCover: track.album.images[0]
    }));

    res.setHeader(
      'Cache-Control', 
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );
  
    return res.status(200).json({ tracks });
}