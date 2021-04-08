import { FC } from 'react'
import Image from 'next/image'


export const PHPIcon:FC = () => {
  return (
    <div>
      <Image src="/php.svg" alt="phpのアイコン画像" width={70} height={70} />
    </div>
  )
}
