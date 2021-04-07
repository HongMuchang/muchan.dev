import styles from '../../../../styles/components/atoms/about/Text.module.scss'

type Props = {
  content:string
}

export function Text(props:Props) {
  const { content } = props
  return (
    <div>
      <p className={styles.text}>{content}</p>
    </div>
  )
}
