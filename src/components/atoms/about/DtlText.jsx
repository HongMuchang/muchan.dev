import styles from '../../../../styles/components/atoms/about/DtlText.module.scss'

export function DtlText(props) {
  const { dd, dt } = props
  return (
    <div className={styles.dl_content}>
      <span className={styles.title_disc}>⚫︎</span>
      <dt className={styles.title}>{dt}：</dt>
      <dd className={styles.title_content}>{dd}</dd>
    </div>
  )
}
