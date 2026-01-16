import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const file = searchParams.get('file')

    if (!file) {
      return new NextResponse('File parameter required', { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'public', 'products', file)

    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 })
    }

    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename=${file}`,
      },
    })
  } catch (error) {
    console.error(error)
    return new NextResponse('An error occurred while downloading the file', { status: 500 })
  }
}
