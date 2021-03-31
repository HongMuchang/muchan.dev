export function Head(props) {
  const { title="muchan.dev" } = props

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
