import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    const url = 'https://api.hr.constel.co/api/v1/posts'

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log('API response:', response.data)
        setPosts(response.data.posts)
        // do something with the response data
      })
      .catch((error) => {
        console.error('API error:', error)
        // handle the error
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}
    >
      {posts.map((post: any, inx: number) => {
        return <Card post={post} />
      })}
    </div>
  )
}
