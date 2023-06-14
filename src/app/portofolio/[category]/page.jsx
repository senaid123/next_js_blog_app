import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
          <Button url="#" text="Click" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
          <Button url="#" text="Click" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
