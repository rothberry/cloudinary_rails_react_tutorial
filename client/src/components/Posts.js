import React, { useState, useEffect } from 'react';


function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl">Posts</h1>
      {posts.map(post => (
        <div className="my-4" key={post.id}>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Posts
