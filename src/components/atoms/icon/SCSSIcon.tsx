import { FC } from 'react'
import Image from 'next/image'

export const SCSSIcon:FC = () => {
  return (
    <div>
      <Image src="/sass.svg" alt="sassのアイコン画像" width={70} height={70} />
    </div>
  )
}
