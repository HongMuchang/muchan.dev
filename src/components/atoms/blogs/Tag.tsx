import { FC } from 'react'
import styles from '../../../../styles/components/atoms/blogs/Tag.module.scss'

type Props = {
  tag:string
}

export const Tag:FC<Props> =(props)=>{
  const { tag } = props
  return (
    <div>
      <span className={styles.tag}>#{tag}</span>
    </div>
  )
}
