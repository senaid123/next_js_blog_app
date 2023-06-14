'use client'
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Lamamia All Rights Reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          width={15}
          height={15}
          alt=""
        />
        <Image
          src="/2.png"
          className={styles.icon}
          width={15}
          height={15}
          alt=""
        />
        <Image
          src="/3.png"
          className={styles.icon}
          width={15}
          height={15}
          alt=""
        />
        <Image
          src="/4.png"
          className={styles.icon}
          width={15}
          height={15}
          alt=""
        />
      </div>
    </div>
  )
}

export default Footer
