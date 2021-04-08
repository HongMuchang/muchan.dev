import { FC } from 'react'
import styles from '../../../../styles/components/atoms/works/Link.module.scss'

type Props = {
  url:string
}

export const Link:FC<Props> = (props) => {
  const { url } = props
  return (
    <p className={styles.link}>
      <a target="blank" href={url}>
        {url}
      </a>
    </p>
  )
}
