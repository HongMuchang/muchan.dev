import { FC } from 'react'
import styles from '../../../../styles/components/atoms/about/DtlText.module.scss'

type Props = {
  title: string,
  content:string
}
export const DtlText:FC<Props>=(props)=> {
  const { title, content } = props
  return (
    <div className={styles.dl_content}>
      <span className={styles.title_disc}>⚫︎</span>
      <dt className={styles.title}>{title}：</dt>
      <dd className={styles.title_content}>{content}</dd>
    </div>
  )
}
