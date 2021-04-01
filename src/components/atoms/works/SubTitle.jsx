import styles from '../../../../styles/components/atoms/works/SubTitle.module.scss'

export function SubTitle(props) {
  const { title } = props
  return (
    <div>
      <p className={styles.sub_title}>{title}</p>
    </div>
  )
}
