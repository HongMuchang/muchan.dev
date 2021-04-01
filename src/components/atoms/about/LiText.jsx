import styles from '../../../../styles/components/atoms/about/LiText.module.scss'

export function LiText(props) {
  const { li } = props
  return (
    <div className={styles.ul_content}>
      <div className={styles.li_content}>
        <span className={styles.title_disc}>⚫︎</span>
        <li className={styles.content}>{li}</li>
      </div>
    </div>
  )
}
