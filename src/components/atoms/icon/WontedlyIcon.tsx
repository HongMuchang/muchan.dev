import { FC } from 'react'
import Image from 'next/image'

export const WontedlyIcon:FC = () => {
  return (
    <div>
      <Image
        src="/wontedly.png"
        alt="wontedlyのアイコン画像"
        width={55}
        height={40}
      />
    </div>
  )
}
