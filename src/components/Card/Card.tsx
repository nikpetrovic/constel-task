import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import heart from './assets/Heart.svg'
import comment from './assets/Comment.svg'
import defaultImg from './assets/Rectangle 7.svg'
import calendar from './assets/calendar.svg'

import styles from './card.module.css'

export default function Card({ post }: any) {
  console.log(post.user)
  return (
    <article className={styles.card} key={post.id}>
      <div className={styles.userDataHolder}>
        <div className={styles.userData}>
          <Image
            width={48}
            height={48}
            className={styles.userImg}
            src={post.user ? post.user.picture : defaultImg}
            alt="user-picture"
          />
          <div>
            <div className={styles.grayText}>@{post.user.username}</div>
            <div className={'font-bold'}>{post.user.full_name}</div>
          </div>
        </div>
        <div className={styles.userData}>
          <Image src={calendar} alt="calendar" width={13} height={14} />
          <div className={styles.grayText}>
            {moment(post.created_at).format('DD.MM.YYYY')}
          </div>
        </div>
      </div>
      <br />
      {post.image ? (
        <Image
          src={post.image}
          alt="post-image"
          className={styles.image}
          width={668}
          height={285}
        />
      ) : null}
      <p className={styles.text}>{post.text}</p>
      <br />
      <div className={styles.hcDataHolder}>
        <div className={styles.hearts}>
          <Image src={heart} alt="heart" />
          <p>{post.likes}</p>
        </div>
        <div className={styles.comments}>
          <Image src={comment} alt="comment" />
          <p>{post.comments}</p>
        </div>
      </div>
    </article>
  )
}
