import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Json () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        if (response.status === 200) {
console.log(response.data);
        }
      })
      .catch(error => {
        if (error.status == 400) {
          alert('qandaydir hatolik chiqdi qaytadan ishga tushuring')
        }
      })
  }, [])

  return (
    <div className='container mx-auto bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold text-center mb-4'>Blog Postlar</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map(post => (
          <div
            key={post.id}
            className='bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-48 object-cover cursor-pointer'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold'>{post.title}</h2>
              <p className='text-gray-700 mt-2'>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Json
