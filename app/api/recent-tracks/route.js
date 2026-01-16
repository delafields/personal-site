import { NextResponse } from 'next/server'
import { getRecentlyPlaying } from '../../../lib/spotify'

export async function GET() {
  try {
    const response = await getRecentlyPlaying()
    const data = await response.json()

    if (!response.ok) {
      console.error('Spotify API error:', data)
      return NextResponse.json(
        { error: 'Failed to fetch from Spotify', tracks: [] },
        { status: response.status }
      )
    }

    const { items } = data

    if (!items) {
      console.error('No items in Spotify response:', data)
      return NextResponse.json({ tracks: [] })
    }

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.track.external_urls.spotify,
      title: track.track.name,
    }))

    return NextResponse.json(
      { tracks },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching recent tracks:', error)
    return NextResponse.json(
      { error: 'Internal server error', tracks: [] },
      { status: 500 }
    )
  }
}
