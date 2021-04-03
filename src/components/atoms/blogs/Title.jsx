import styles from '../../../../styles/components/atoms/blogs/Title.module.scss'

export function Title(props) {
  const { title } = props
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
