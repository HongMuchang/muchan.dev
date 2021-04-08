import { FC } from 'react'
import { TitleContent, SubTitle } from '../../atoms/works/index'
import styles from '../../../../styles/components/molecules/WorksList.module.scss'

type Props = {
  title: string,
  content:string
}

export const WorksList:FC<Props> = (props) => {
  const { title, content } = props
  return (
    <div className={styles.works_list_area}>
      <SubTitle title={title} />
      <TitleContent content={content} />
    </div>
  )
}
