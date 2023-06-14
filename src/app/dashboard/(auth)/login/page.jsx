'use client'
import { signIn, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [error, setError] = useState(false)

  const session = useSession()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', {
      email,
      password,
    })
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard')
  }

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
          {error && error}
        </form>
        <button
          onClick={() => {
            signIn('google')
          }}
          className={styles.button + ' ' + styles.google}
        >
          Login with Google
        </button>
        <span className={styles.or}>- OR -</span>
        <Link className={styles.link} href="/dashboard/register">
          Create new account
        </Link>
      </div>
    )
  }
}

export default Login
