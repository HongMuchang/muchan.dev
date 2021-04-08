import { FC } from 'react'
import Image from 'next/image'

export const CSSIcon:FC = () => {
  return (
    <div>
      <Image src="/css.svg" alt="cssのアイコン画像" width={70} height={70} />
    </div>
  )
}
