import styles from '../../../../styles/components/atoms/works/TitleContent.module.scss'

export function TitleContent(props) {
  const { content } = props
  return (
    <div>
      <p className={styles.title_content}>{content}</p>
    </div>
  )
}
