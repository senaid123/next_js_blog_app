import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post.js'

export const GET = async (request) => {
  const url = new URL(request.url)

  const username = url.searchParams.get('username')

  try {
    await connect()

    const posts = await Post.find(username && { username })

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch {
    return new NextResponse('Database error', { status: 500 })
  }
}

export const POST = async (request) => {
  const body = await request.json()

  const newPost = new Post(body)

  try {
    await newPost.save()
    return new NextResponse('Post has been created', { status: 201 })
  } catch (error) {
    return new NextResponse('Database error', { status: 501 })
  }
}
