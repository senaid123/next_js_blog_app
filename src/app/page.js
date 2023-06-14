'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import Button from '../components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turing your Idea into Reality. We bring together the teams from the
          global industry.
        </p>
        <Button text="See Our Work" url="" />
      </div>
      <div className={styles.item}>
        <Image alt="hero" src={Hero} className={styles.img} />
      </div>
    </div>
  )
}
