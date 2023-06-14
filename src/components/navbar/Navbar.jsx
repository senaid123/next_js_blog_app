'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 5,
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 6,
    title: 'Portofolio',
    url: '/portofolio',
  },
]

const Navbar = () => {
  const session = useSession()

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lamamina
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar