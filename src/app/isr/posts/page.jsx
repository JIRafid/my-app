import getData from '@/lib/getData'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
  const posts = await getData('http://localhost:8000/posts', { });
  return (
   <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold"> Static Site Generation</h1>
      <ul className='flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5>'>
       {posts.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id} >
        <li className='pl-2'>{post.title}</li>
        </Link>
))}
        
      </ul>
    </div>

  )
}
