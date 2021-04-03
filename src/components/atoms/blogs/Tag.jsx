import styles from '../../../../styles/components/atoms/blogs/Tag.module.scss'

export function Tag(props) {
  const { tag } = props
  return (
    <div>
      <span className={styles.tag}>#{tag}</span>
    </div>
  )
}
