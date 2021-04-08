import { FC } from 'react'
import Image from 'next/image'

export const REACTIcon:FC = () => {
  return (
    <div>
      <Image
        src="/react.svg"
        alt="reactのアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
