import { FC } from 'react'
import Image from 'next/image'

export const NEXTIcon:FC = () => {
  return (
    <div>
      <Image
        src="/nextjs.svg"
        alt="Nextjsアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
