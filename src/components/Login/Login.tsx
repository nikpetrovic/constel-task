import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import axios from 'axios'

import styles from './login.module.css'

interface inputData {
  email: string
  password: string
}

interface errorData {
  email: boolean
  password: boolean
}

export default function Login() {
  const [inputData, setInputData] = useState<inputData>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<errorData>({
    email: false,
    password: false,
  })

  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const handleChange = (data: React.ChangeEvent<HTMLInputElement>) => {
    if (data.target.name === 'email') {
      setError({ ...error, email: false })
      setInputData({ ...inputData, email: data.target.value })
    } else {
      setError({ ...error, password: false })
      setInputData({ ...inputData, password: data.target.value })
    }
  }

  const handleSubmit = async () => {
    let newError = {
      email: false,
      password: false,
    }
    if (!validateEmail(inputData.email)) {
      newError = { ...newError, email: true }
    }
    if (inputData.password.length < 6) {
      newError = { ...newError, password: true }
    }
    setError(newError)

    // if (newError.email || newError.password) {
    //   return
    // }

    try {
      const response = await axios.post(
        'https://api.hr.constel.co/api/v1/',
        inputData
      )
      console.log('API response:', response.data)
    } catch (error) {
      console.error('API error:', error)
    }
  }

  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" />
      <form>
        <div className={styles.inputHolder}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Enter email here"
            onChange={handleChange}
          />
          {error.email ? (
            <p className={styles.errorMessage}>
              The email needs to contain the '@' symbol
            </p>
          ) : null}
        </div>
        <div className={styles.inputHolder}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Enter password here"
            onChange={handleChange}
          />
          {error.password ? (
            <p className={styles.errorMessage}>
              The password needs to be at least 6 characters long
            </p>
          ) : null}
        </div>
        <div className={styles.buttonHolder}>
          <button
            className={styles.confirmButton}
            type="button"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <button type="button" onClick={() => console.log(error)}>
            error
          </button>
        </div>
      </form>
    </div>
  )
}
