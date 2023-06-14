import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post.js'

export const GET = async (request, { params }) => {
  const { id } = params
  console.log(id)
  try {
    await connect()

    const post = Post.findById(id)

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new NextResponse('There is no post with that id', { status: 500 })
  }
}
