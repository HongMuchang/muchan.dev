import { FC } from 'react'
import styles from '../../../styles/components/molecules/blogs/BlogList.module.scss'
import { Title, Tag, Day } from '../atoms/blogs/index'

type Props = {
  title: string,
  tag: string,
  day:string
}

export const BlogList:FC<Props> = (props) => {
  const { title, tag, day } = props
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.title}>
          <Title title={title} />
        </div>

        <div className={styles.tag}>
          <Tag tag={tag} />
        </div>

        <div className={styles.day}>
          <Day day={day} />
        </div>
      </div>
    </div>
  )
}
