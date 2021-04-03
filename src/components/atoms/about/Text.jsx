import styles from '../../../../styles/components/atoms/about/Text.module.scss'

export function Text(props) {
  const { content } = props
  return (
    <div>
      <p className={styles.text}>{content}</p>
    </div>
  )
}
