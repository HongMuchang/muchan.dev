import styles from '../../../styles/components/molecules/blogs/BlogList.module.scss'
import { Title, Tag, Day } from '../atoms/blogs/index'

export function BlogList(props) {
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
