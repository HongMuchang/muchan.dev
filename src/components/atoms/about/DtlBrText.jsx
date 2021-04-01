import styles from '../../../../styles/components/atoms/about/DtlBrText.module.scss'

export function DtlBrText(props) {
  const { dt, day, contact, lang } = props
  return (
    <div className={styles.dl_content}>
      <div>
        <dt className={styles.title}>
          <span className={styles.title_disc}>⚫︎</span>
          {dt}
        </dt>
      </div>
      <div>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {day}
        </dd>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {contact}
        </dd>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {lang}
        </dd>
      </div>
    </div>
  )
}
