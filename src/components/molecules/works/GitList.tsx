import { FC,ReactNode } from 'react'
import { Link } from '../../atoms/works/index'
import { GithubIcon } from '../../atoms/icon/index'
import styles from '../../../../styles/components/molecules/UrlList.module.scss'

type Props = {
  url: string,
  width: number,
  height: number,
}

export function GitList(props:Props){
  const { url, width, height } = props
  return (
    <div className={styles.link}>
      <GithubIcon className={styles.icon} width={width} height={height} />
      <Link className={styles.icon} url={url} />
    </div>
  )
}
