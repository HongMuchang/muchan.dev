import { FC } from 'react'
import Image from 'next/image'

export const JSIcon:FC = () => {
  return (
    <div>
      <Image
        src="/js.svg"
        alt="JavaScriptのアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
