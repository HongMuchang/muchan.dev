import { FC } from 'react'
import styles from '../../../../styles/components/atoms/works/Title.module.scss'

type Props = {
  title:string
}

export const Title:FC<Props> = (props) => {
  const { title } = props
  return (
    <div className={styles.title_content}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
