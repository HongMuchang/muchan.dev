import { FC } from 'react'
import Image from 'next/image'

export const LARAVELIcon:FC = () => {
  return (
    <div>
      <Image
        src="/laravel.svg"
        alt="Laravelアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
