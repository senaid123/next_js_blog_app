import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <Link href={props.url}>
      <div className={styles.button}>{props.text}</div>
    </Link>
  )
}

export default Button
