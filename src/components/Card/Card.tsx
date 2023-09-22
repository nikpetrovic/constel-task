import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import heart from './assets/Heart.svg'
import comment from './assets/Comment.svg'

import styles from './card.module.css'

export default function Card({ post }: any) {
  console.log(post.user)
  return (
    <article className={styles.card} key={post.id}>
      <div className={styles.userDataHolder}>
        <div>
          {/* <Image
            width={100}
            height={100}
            src={post.user ? post.user.picture : ''}
            alt="user-picture"
          /> */}
          <div>
            <div>@{post.user.username}</div>
            <div>{post.user.full_name}</div>
          </div>
        </div>
        <div>
          <div>{moment(post.created_at).format('DD.MM.YYYY')}</div>
        </div>
      </div>
      <br />
      {/* <Image src={post.image} alt="post-image" /> */}
      <p style={{ padding: '5px', width: '95%' }}>{post.text}</p>
      <br />
      <div className={styles.userDataHolder}>
        <div className={styles.hearts}>
          <Image src={heart} alt="heart" />
          {post.likes}
        </div>
        <div className={styles.comments}>
          <Image src={comment} alt="comment" />
          {post.comments}
        </div>
      </div>
    </article>
  )
}
