import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="/contact.png"
            alt=""
            className={styles.image}
          />
        </div>
        <form className={styles.form} action="">
          <input type="text" placeholder="name" className={styles.name} />
          <input type="text" placeholder="email" className={styles.email} />
          <textarea
            className={styles.textArea}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
