import { FC } from 'react'
import Image from 'next/image'

type Props = {
  width: number,
  height:number,
}

export const URLIcon:FC<Props> = (props) => {
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
