import { FC } from 'react'
import styles from '../../../../styles/components/atoms/works/SubTitle.module.scss'

type Props = {
  title:string
}

export const SubTitle:FC<Props> = (props) => {
  const { title } = props
  return (
    <div>
      <p className={styles.sub_title}>{title}</p>
    </div>
  )
}
