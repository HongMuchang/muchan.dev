import { FC } from 'react'
import Image from 'next/image'

export const VUEIcon:FC = () => {
  return (
    <div>
      <Image src="/vue.svg" alt="Vueアイコン画像" width={70} height={70} />
    </div>
  )
}
