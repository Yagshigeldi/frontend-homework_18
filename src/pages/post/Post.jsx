import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotFound from '../not-found/NotFound'

const Post = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setData(res.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
}, [])

  return (
    <div className='container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mt-[80px]'>
      {error && (
        <NotFound/>
      )}
      {
        data?.map((post) => (
          <div className='shadow-lg rounded-lg overflow-hidden'>    
            <div className='p-4'>
              <h2 className='font-bold' title={post.title}>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Post