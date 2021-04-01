import styles from '../../../styles/components/molecules/SNSIconList.module.scss'
import {
  TwitterIcon,
  QiitaIcon,
  GithubIcon,
  WontedlyIcon,
} from '../atoms/icon/index'

export function SNSIconList() {
  return (
    <div>
      <ul className={styles.icon_list}>
        <li>
          <a href="https://twitter.com/HongMuchan" target="blank">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/HongMuchang" target="blank">
            <GithubIcon />
          </a>
        </li>
        <li className={styles.qiita}>
          <a href="https://qiita.com/HongMuchan" target="blank">
            <QiitaIcon />
          </a>
        </li>
        <li className={styles.wontedly}>
          <a href="https://www.wantedly.com/id/muchan" target="blank">
            <WontedlyIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}
