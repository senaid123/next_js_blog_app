import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portofolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portofolio/Ilustrations" className={styles.item}>
          <span className={styles.title}>Ilustrations</span>
        </Link>
        <Link href="/portofolio/Websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portofolio/Applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portofolio
