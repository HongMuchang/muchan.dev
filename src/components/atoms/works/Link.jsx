import styles from '../../../../styles/components/atoms/works/Link.module.scss'

export function Link(props) {
  const { url } = props
  return (
    <p className={styles.link}>
      <a target="blank" href={url}>
        {url}
      </a>
    </p>
  )
}
