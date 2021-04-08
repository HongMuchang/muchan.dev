import { FC } from 'react'
import styles from '../../../../styles/components/atoms/works/TitleContent.module.scss'

type Props = {
  content:string
}

export const TitleContent:FC<Props> = (props) => {
  const { content } = props
  return (
    <div>
      <p className={styles.title_content}>{content}</p>
    </div>
  )
}
