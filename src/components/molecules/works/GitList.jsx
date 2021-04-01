import { Link, } from '../../atoms/works/index'
import { GithubIcon } from '../../atoms/icon/index'
import styles from '../../../../styles/components/molecules/UrlList.module.scss'

export function GitList(props) {
  const { url, width, height } = props
  return (
    <div className={styles.link}>
      <GithubIcon className={styles.icon} width={width} height={height} />
      <Link className={styles.icon} url={url}/>
    </div>
  )
}
