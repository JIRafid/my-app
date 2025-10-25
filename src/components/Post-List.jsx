import React from 'react'
import PostCard from './Post_card';
import PostUser from './Post-User';
import PostWithMarkdown from './Post-With_markdown';

export default async function PostList() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();
  return (
    <div className="flex flex-col gap-10">
      

        {posts.map((p) => (
          <PostCard key={p.id} postId={p.id}>
            <PostUser userId={p.userId}/>
          <PostWithMarkdown text = "Some Text Here" />

          </PostCard>
        ))}
      



      </div>
  )
}

