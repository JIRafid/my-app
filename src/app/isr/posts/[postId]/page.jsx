import getData from '@/lib/getData'
import React from 'react'

export default async function Posts({params}) {
  const {postId} = await params;
  const post = await getData(`http://localhost:8000/posts/${postId}`);

  return (
    
   <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold"> {post.id}</h1>
      <div>{post.title}</div>
    </div>

  )
}
