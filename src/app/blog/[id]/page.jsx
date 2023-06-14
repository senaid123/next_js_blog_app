import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  console.log(params.id)
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/13096020/pexels-photo-13096020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={40}
              height={40}
              className={styles.avatar}
              alt=""
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} fill={true} className={styles.image} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost
