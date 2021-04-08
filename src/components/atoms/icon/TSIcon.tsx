import { FC } from 'react'
import Image from 'next/image'

export const TSIcon:FC = () => {
  return (
    <div>
      <Image
        src="/ts.svg"
        alt="TypeScriptのアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
