import styles from '../../../../styles/components/atoms/works/Title.module.scss'

export function Title(props) {
  const { title } = props
  return (
    <div className={styles.title_content}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
