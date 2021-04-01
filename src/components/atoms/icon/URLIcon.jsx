import Image from 'next/image'

export function URLIcon(props) {
  const { width = '40', height = '40' } = props
  return (
    <Image
      src="/url.png"
      alt="URLのアイコン画像"
      width={width}
      height={height}
    />
  )
}
