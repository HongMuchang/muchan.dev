import { FC } from 'react'
import styles from '../../../../styles/components/atoms/blogs/Title.module.scss'

type Props = {
  title:string
}

export const Title:FC<Props> = (props) => {
  const { title } = props
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
