import styles from '../../../../styles/components/atoms/about/DtlNameText.module.scss'

export function DtlNameText(props) {
  const { dd, dt } = props
  return (
    <div className={styles.dl_content}>
      <span className={styles.title_disc}>⚫︎</span>
      <dt className={styles.title}>{dt}：</dt>
      <dd className={styles.title_content}>{dd}</dd>
    </div>
  )
}
