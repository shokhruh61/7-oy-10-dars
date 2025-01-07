import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Json = () => {
  // 1. State yaratish (Postlarni saqlash uchun)
  const [posts, setPosts] = useState([])

  // 2. JSON Server-dan ma'lumotlarni olish
  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.error('Xatolik yuz berdi:', error)
      })
  }, []) // useEffect faqat bir marta ishlashi uchun

  // 3. Postlarni ekranga chiqarish
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Postlari</h1>
    </div>
  )
}

export default Json
