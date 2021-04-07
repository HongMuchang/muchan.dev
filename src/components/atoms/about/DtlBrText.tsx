import { FC } from 'react'
import styles from '../../../../styles/components/atoms/about/DtlBrText.module.scss'

type Props = {
  office: string,
  day: string,
  content: string,
  lang:string,
}
export const DtlBrText:FC<Props> = (props)=> {
  const { office, day, content, lang } = props
  return (
    <div className={styles.dl_content}>
      <div>
        <dt className={styles.title}>
          <span className={styles.title_disc}>⚫︎</span>
          {office}
        </dt>
      </div>
      <div>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {day}
        </dd>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {content}
        </dd>
        <dd className={styles.title_content}>
          <span className={styles.title_disc}>○</span>
          {lang}
        </dd>
      </div>
    </div>
  )
}
