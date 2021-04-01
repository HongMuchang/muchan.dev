import { BlogList } from '../molecules/index'
import styles from '../../../styles/components/organisms/BlogCard.module.scss'

export function BlogCard(props) {
  const { title, tag, day } = props
  return (
    <div className={styles.blog_content}>
      <div className={styles.blog_card}>
        <BlogList title={title} tag={tag} day={day} />
      </div>
    </div>
  )
}
