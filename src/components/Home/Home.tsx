import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
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

  return <div>mare</div>
}
