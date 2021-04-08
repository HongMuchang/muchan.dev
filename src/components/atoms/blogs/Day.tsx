import { FC } from 'react'
import styles from '../../../../styles/components/atoms/blogs/Day.module.scss'

type Props = {
  day:string
}

export const Day:FC<Props> = (props)=>{
  const { day } = props
  const Day = day.split('T')
  const d = Day[0].split('-')
  return (
    <div>
      <p className={styles.day}>{`${d[0]}年${d[1]}月${d[2]}日`}</p>
    </div>
  )
}
